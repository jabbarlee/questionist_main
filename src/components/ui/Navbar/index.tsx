import Link from "next/link";
import styles from './index.module.css';
import { inter } from "@/data/constants/fonts";
import { verifySessionCookie } from "@/actions/firebase/verifySessionCookie";

export default async function Navbar() {

  let user = await verifySessionCookie()

  return (
    <div className={inter.className}>
      <nav className={styles.navbar}>
        {user ? (
          <>
            <span className={styles.username}>Welcome back {user.name}</span>
            <Link href="/signout" className={styles.link}>
              Sign Out
            </Link>
          </>
        ) : (
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
