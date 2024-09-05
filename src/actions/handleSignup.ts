import { signUpWithEmailPassword } from '@/actions/firebase/signUpWithEmailPassword';
import { useRouter } from 'next/navigation';

export const handleSignUp = async ({
  email,
  password,
  router
} : {
  email: string,
  password: string,
  router: ReturnType<typeof useRouter>
}) => {
    try {
      await signUpWithEmailPassword(email, password);
      alert('User registered successfully!');
      router.push('/dashboard');
      window.location.reload();
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed!');
    }
  };