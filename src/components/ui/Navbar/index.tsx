
import Link from "next/link";
import styles from './index.module.css';
import { inter } from "@/data/constants/fonts";

const Navbar = ({ session } : { session: any }) => (
  <div className={inter.className}>
    <nav className={styles.navbar}>
      {session ? (
        <>
          <Link href="/signout" className={styles.link}>
            <p style={{ margin: 0 }}>Sign Out</p>
          </Link>
        </>
      ) : (
        <>
        <Link href="/signup" className={styles.link}>
          <p style={{ margin: 0 }}>Sign Up</p>
        </Link>
        <Link href="/signin" className={styles.link}>
          <p style={{ margin: 0 }}>Sign In</p>
        </Link>
      </>
      )}
    </nav>
  </div>
);

export default Navbar;
