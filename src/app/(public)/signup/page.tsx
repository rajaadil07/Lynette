import { SignupForm } from '@/components';
import { signup } from './actions';

export default function SignUpPage() {
  return <SignupForm onSubmit={signup} />;
}
