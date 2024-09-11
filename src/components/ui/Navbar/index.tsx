import Link from "next/link";
import styles from './index.module.css';
import { inter } from "@/data/constants/fonts";
import { auth } from "@/config/firebaseAdmin";
import { cookies } from "next/headers";

// Define user type, can be more specific based on your app's requirements
interface User {
  name: string; // Example fields, adjust based on your user model
  email: string;
}

interface NavbarProps {
  user?: User | null;
}

export default async function Navbar() {

  const cookieStore = cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  let user = null;

  if (sessionCookie) {
    try {
      // Verify the session cookie
      const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
      user = decodedClaims;
    } catch (error) {
      console.error('Session verification failed:', error);
    }
  }

  return (
    <div className={inter.className}>
      <nav className={styles.navbar}>
        {user ? (
          // When user is logged in, show "Sign Out"
          <>
            <Link href="/signout" className={styles.link}>
              Sign Out
            </Link>
          </>
        ) : (
          // When user is not logged in, show "Sign Up" and "Sign In"
          <>
            <Link href="/signup" className={styles.link}>
              Sign Up
            </Link>
            <Link href="/signin" className={styles.link}>
              Sign In
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}
