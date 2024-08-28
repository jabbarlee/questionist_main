
import Link from "next/link";
import styles from './index.module.css';
import { inter } from "@/data/constants/fonts";

const Navbar = () => {
  

  return (
    <div className={inter.className}>
      <nav className={styles.navbar}>
        <Link href="/signup" className={styles.link}>
          <p style={{ margin: 0 }}>Sign up / Sign in</p>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
