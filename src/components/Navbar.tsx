"use client";

import Link from "next/link";
import { Stethoscope, ShoppingCart, User, Search, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { totalItems } = useCart();

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
        <Link href="/admin" className={styles.link} style={{ color: 'var(--warning)', fontWeight: 'bold' }}>Admin</Link>
      </div>

      {/* Action Icons */}
      <div className={styles.actions}>
        <button className={styles.iconBtn} aria-label="Search">
          <Search size={20} />
        </button>
        <Link href="/cart" className={styles.iconBtn} aria-label="Cart" style={{ position: 'relative' }}>
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span style={{
              position: 'absolute', top: 0, right: 0, 
              background: 'var(--brand-primary)', color: 'white', 
              fontSize: '0.65rem', padding: '0.1rem 0.35rem', 
              borderRadius: '50%', fontWeight: 'bold',
              transform: 'translate(25%, -25%)'
            }}>
              {totalItems}
            </span>
          )}
        </Link>
        <Link href="/dashboard" className={styles.iconBtn} aria-label="Account">
          <User size={20} />
        </Link>
        {/* Mobile menu icon (visible only on small screens via CSS/JS logic typically) */}
        <button className={`${styles.iconBtn} md:hidden`} aria-label="Menu" style={{ display: 'none' }}>
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}
