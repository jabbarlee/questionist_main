
import Link from "next/link";
import styles from './index.module.css';
import { inter } from "@/data/constants/fonts";

const Navbar = () => (
  <div className={inter.className}>
    <nav className={styles.navbar}>
      <Link href="/signup" className={styles.link}>
        <p style={{ margin: 0 }}>Sign Up</p>
      </Link>
      <Link href="/signin" className={styles.link}>
        <p style={{ margin: 0 }}>Sign In</p>
      </Link>
    </nav>
  </div>
);

export default Navbar;
