import Image from "next/image";
import Link from "next/link";
import { Search, Pill, ShieldAlert, Heart, Activity, ArrowRight, Upload, ShoppingCart, Stethoscope } from "lucide-react";
import styles from "./page.module.css";

const CATEGORIES = [
  { id: 1, name: "Prescriptions", desc: "Refill & Manage", icon: Pill },
  { id: 2, name: "Vitamins & Supplements", desc: "Daily Wellness", icon: Heart },
  { id: 3, name: "First Aid", desc: "Emergency Care", icon: ShieldAlert },
  { id: 4, name: "Medical Devices", desc: "Monitors & More", icon: Activity },
];

const POPULAR_PRODUCTS = [
  {
    id: "p1",
    name: "Complete Multivitamin Pro",
    category: "Vitamins",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1550572017-edb73eb2eb4c?w=400&h=400&fit=crop",
  },
  {
    id: "p2",
    name: "Advanced Allergy Relief",
    category: "OTC Medicine",
    price: 18.50,
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5e4499026?w=400&h=400&fit=crop",
  },
  {
    id: "p3",
    name: "Digital Blood Pressure Monitor",
    category: "Medical Devices",
    price: 45.00,
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop",
  },
  {
    id: "p4",
    name: "Organic Omega-3 Fish Oil",
    category: "Supplements",
    price: 32.99,
    imageUrl: "https://images.unsplash.com/photo-1616671285408-591223bc7502?w=400&h=400&fit=crop",
  },
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
            Access thousands of wellness products and manage your prescriptions with just a few clicks. Verified by pharmacists.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <Link href="/categories" className={styles.viewAll}>
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className={styles.categoriesGrid}>
          {CATEGORIES.map((cat) => (
            <Link href={`/category/${cat.id}`} key={cat.id} className={styles.categoryCard}>
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

      {/* Upload Prescription Banner */}
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

      {/* Popular Products */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Trending Wellness Products</h2>
          <Link href="/products" className={styles.viewAll}>
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className={styles.productsGrid}>
          {POPULAR_PRODUCTS.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <Image 
                  src={product.imageUrl} 
                  alt={product.name} 
                  width={200} 
                  height={200}
                  className={styles.productImage}
                  unoptimized // For unsplash mock
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>{product.category}</span>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.productPrice}>
                  ${product.price.toFixed(2)}
                  <button className={styles.addToCartBtn} aria-label="Add to cart">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
