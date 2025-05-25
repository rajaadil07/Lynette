import { LoginForm } from '@/components';
import { login } from './actions';

export default function LoginPage() {
  return <LoginForm onSubmit={login} />;
}
