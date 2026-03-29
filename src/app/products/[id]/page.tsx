import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldAlert, Heart, Activity, ShoppingCart, Pill } from "lucide-react";
import styles from "./page.module.css";

// MOCK DATA
const getMockProduct = (id: string) => {
  const products: Record<string, any> = {
    "p1": {
      name: "Complete Multivitamin Pro",
      category: "Vitamins & Supplements",
      price: 24.99,
      imageUrl: "https://images.unsplash.com/photo-1550572017-edb73eb2eb4c?w=600&h=600&fit=crop",
      description: "A comprehensive daily multivitamin formula designed to support overall health with 22 essential vitamins and minerals.",
      dosageInfo: "Take one tablet daily with food, preferably in the morning.",
      sideEffects: "May cause upset stomach initially. Iron may cause stool darkening.",
      alternatives: "Basic Daily Vits, Organic Gummy Multi",
      requiresPrescription: false
    },
    "p2": {
      name: "Advanced Allergy Relief",
      category: "OTC Medicine",
      price: 18.50,
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5e4499026?w=600&h=600&fit=crop",
      description: "Non-drowsy 24-hour relief from indoor and outdoor allergy symptoms, including sneezing, runny nose, and itchy eyes.",
      dosageInfo: "Adults and children 12 years and over: Take one 10mg tablet once daily.",
      sideEffects: "Headache, dry mouth. Avoid taking with fruit juices like grapefruit.",
      alternatives: "Generic Aller-Relief, Nasal Spray Pro",
      requiresPrescription: false
    },
    // Mock prescription for testing presentation
    "rx1": {
      name: "Amoxi-Cillin 500mg",
      category: "Prescriptions",
      price: 12.00,
      imageUrl: "https://images.unsplash.com/photo-1585830812416-a6ce8bbdfa25?w=600&h=600&fit=crop",
      description: "Penicillin antibiotic used to treat various types of bacterial infections.",
      dosageInfo: "As directed by physician. Usually one capsule every 8 hours.",
      sideEffects: "Nausea, vomiting, diarrhea, rash.",
      alternatives: "Requires doctor consultation for alternatives.",
      requiresPrescription: true
    }
  };
  
  return products[id] || products["p1"];
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getMockProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <ChevronRight size={14} />
        <Link href="/products">Products</Link>
        <ChevronRight size={14} />
        <span>{product.name}</span>
      </div>

      <div className={styles.productWrapper}>
        <div className={styles.imageSection}>
          {product.requiresPrescription ? (
            <div className={`${styles.badge} ${styles.rxBadge}`}>
              <Pill size={12} /> Rx Required
            </div>
          ) : (
            <div className={styles.badge}>In Stock</div>
          )}
          <Image 
            src={product.imageUrl} 
            alt={product.name}
            width={500}
            height={500}
            className={styles.productImage}
            unoptimized
          />
        </div>

        <div className={styles.infoSection}>
          <div className={styles.header}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.price}>${product.price.toFixed(2)}</div>
          </div>
          
          <p className={styles.description}>{product.description}</p>
          
          <div className={styles.actions}>
            <div className={styles.quantityCtrl}>
              <button className={styles.qtyBtn}>-</button>
              <span className={styles.qtyValue}>1</span>
              <button className={styles.qtyBtn}>+</button>
            </div>
            <button className={styles.addToCart}>
              <ShoppingCart size={20} />
              {product.requiresPrescription ? "Add Rx to Cart" : "Add to Cart"}
            </button>
          </div>

          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <Activity className={styles.detailIcon} />
              <div>
                <h3 className={styles.detailTitle}>Dosage Instructions</h3>
                <p className={styles.detailText}>{product.dosageInfo}</p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <ShieldAlert className={styles.detailIcon} />
              <div>
                <h3 className={styles.detailTitle}>Side Effects & Warnings</h3>
                <p className={styles.detailText}>{product.sideEffects}</p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <Heart className={styles.detailIcon} />
              <div>
                <h3 className={styles.detailTitle}>Alternatives</h3>
                <p className={styles.detailText}>{product.alternatives}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
