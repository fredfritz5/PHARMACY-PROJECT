import Image from "next/image";
import Link from "next/link";
import { Search, Pill, ShieldAlert, Heart, Activity, ArrowRight, Upload, ShoppingCart, Stethoscope } from "lucide-react";
import styles from "./page.module.css";

const MEDICINE_CATEGORIES = [
  { id: "rx", name: "Prescription Medicines", desc: "Upload Rx to get antibiotics, heart meds, etc.", icon: Pill, q: "Prescriptions" },
  { id: "otc", name: "OTC Medications", desc: "Pain relief, allergy, cold & flu treatments.", icon: ShieldAlert, q: "OTC Medicine" },
  { id: "vits", name: "Vitamins & Supplements", desc: "Daily multivitamins, omega-3, and joint support.", icon: Heart, q: "Vitamins" },
  { id: "devices", name: "Medical Devices", desc: "Blood pressure monitors, thermometers, and physical aids.", icon: Activity, q: "Devices" },
];

import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroBlob1} />
          <div className={styles.heroBlob2} />
        </div>
        
        <div className={styles.heroContent}>
          <div className={`${styles.heroBadge} animate-fade-in`}>
            <Stethoscope size={16} style={{ display: 'inline', marginRight: '8px' }}/>
            Your Trusted Digital Health Partner
          </div>
          
          <h1 className={`${styles.heroTitle} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
            Care Delivered to Your Door<br/>
            <span className={styles.gradientText}>Fast, Secure, & Smart</span>
          </h1>
          
          <p className={`${styles.heroSubtitle} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
            Search for medications, explore our catalog, and manage your health with real-time support.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Unified Services and Categories Navigation */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore Our Pharmacy Services</h2>
          <Link href="/search" className={styles.viewAll}>
            View All Catalog <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className={styles.categoriesGrid}>
          {MEDICINE_CATEGORIES.map((cat) => (
            <Link href={`/search?q=${encodeURIComponent(cat.q)}`} key={cat.id} className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <cat.icon size={32} />
              </div>
              <div>
                <h3 className={styles.categoryTitle}>{cat.name}</h3>
                <p className={styles.categoryDesc}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upload Prescription Banner highlighting a Core Service */}
      <section className={styles.uploadSection}>
        <div className={styles.uploadContent}>
          <h2 className={styles.uploadTitle}>Have a new prescription?</h2>
          <p className={styles.uploadDesc}>
            Upload a photo of your prescription and we'll verify it with your doctor and prepare it for delivery or pickup.
          </p>
          <button className={styles.uploadBtn}>
            <Upload className={styles.uploadIcon} />
            Upload Prescription
          </button>
        </div>
        <div style={{ position: 'relative', width: '200px', height: '200px', opacity: 0.8 }} className="animate-fade-in">
           {/* Abstract decorative element */}
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
             <path fill="#ffffff" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.5,-3.1C94.2,11.8,85.6,26,75.4,37.3C65.2,48.6,53.4,57,40.6,63.9C27.8,70.8,13.9,76.2,-0.2,76.5C-14.3,76.8,-28.6,72,-41.8,65.1C-55,58.2,-67.2,49.2,-75.4,37.2C-83.6,25.2,-87.8,10.2,-86.2,-4.2C-84.6,-18.6,-77.2,-32.4,-67.5,-43.3C-57.8,-54.2,-45.8,-62.2,-33.2,-70.2C-20.6,-78.2,-7.4,-86.2,6.5,-85.8C20.4,-85.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100) scale(0.9)" />
           </svg>
        </div>
      </section>
    </div>
  );
}
