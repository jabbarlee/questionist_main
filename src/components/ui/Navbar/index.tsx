
import Link from "next/link";
import styles from './index.module.css';
import { inter } from "@/data/constants/fonts";

const Navbar = ({
  text,
  href
} : {
  text: string,
  href: string
}) => (
  <div className={inter.className}>
    <nav className={styles.navbar}>
      <Link href={href} className={styles.link}>
        <p style={{ margin: 0 }}>{text}</p>
      </Link>
    </nav>
  </div>
);

export default Navbar;
