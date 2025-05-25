'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // Type-casting here for convenience
  // In practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error?message=' + encodeURIComponent(error.message))
  }

  // Check if user is onboarded
  const { data: { user } } = await supabase.auth.getUser()
  
  if (user) {
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('onboarded')
      .eq('id', user.id)
      .single()

    // If not onboarded, redirect to onboarding
    if (!profile?.onboarded) {
      revalidatePath('/', 'layout')
      redirect('/onboarding')
      return
    }

    // If onboarded, find their organization
    const { data: userOrg } = await supabase
      .from('user_organizations')
      .select('organization_id, role')
      .eq('user_id', user.id)
      .order('joined_at', { ascending: false })
      .limit(1)
      .single()

    if (userOrg) {
      revalidatePath('/', 'layout')
      redirect(`/org/${userOrg.organization_id}`)
      return
    }
  }

  revalidatePath('/', 'layout')
  redirect('/onboarding')
} 