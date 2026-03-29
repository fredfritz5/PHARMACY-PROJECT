import Link from "next/link";
import { Stethoscope, ShoppingCart, User, Search, Menu } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link href="/" className={styles.logo}>
        <Stethoscope size={24} />
        HealthPlus
      </Link>

      {/* Main Navigation Links (hidden on mobile, shown on desktop) */}
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/prescriptions" className={styles.link}>Prescriptions</Link>
        <Link href="/vitamins" className={styles.link}>Vitamins & Supplements</Link>
        <Link href="/devices" className={styles.link}>Medical Devices</Link>
      </div>

      {/* Action Icons */}
      <div className={styles.actions}>
        <button className={styles.iconBtn} aria-label="Search">
          <Search size={20} />
        </button>
        <button className={styles.iconBtn} aria-label="Cart">
          <ShoppingCart size={20} />
        </button>
        <button className={styles.iconBtn} aria-label="Account">
          <User size={20} />
        </button>
        {/* Mobile menu icon (visible only on small screens via CSS/JS logic typically) */}
        <button className={`${styles.iconBtn} md:hidden`} aria-label="Menu" style={{ display: 'none' /* Implement mobile toggle logic later */}}>
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}
