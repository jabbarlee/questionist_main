
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/config/firebaseClient'; // Import your Firebase config file
import styles from './index.module.css';
import { inter } from '@/data/constants/fonts';
import { cookies } from 'next/headers';

const Signout = () => {
  const router = useRouter();

  const handleSignout = async () => {
    try {
      await signOut(auth);
      router.push('/'); 
    } catch (error) {
      console.error("Error during signout:", error);
    }
  };

  return (
    <div className={`${styles.signoutContainer} ${inter.className}`}>
      <h1 className={styles.title}>You've been signed out</h1>
      <button className={styles.button} onClick={handleSignout}>
        Return to Home
      </button>
    </div>
  );
};

export default Signout;
