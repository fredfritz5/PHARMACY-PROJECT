import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldAlert, Heart, Activity, Pill, Info, AlertTriangle } from "lucide-react";
import { PRODUCTS, Product } from "@/lib/mockData";
import AddToCartSection from "@/components/AddToCartSection";
import styles from "./page.module.css";

// In Next.js 15, we await params
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Find product from centralized mock DB
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  
  // Resolve alternatives
  const alternatives = product.alternatives
    .map((altId) => PRODUCTS.find((p) => p.id === altId))
    .filter(Boolean) as Product[];

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
            <p className={styles.brand}>by {product.brand}</p>
            <div className={styles.price}>${product.price.toFixed(2)}</div>
          </div>
          
          <p className={styles.description}>{product.description}</p>
          
          <AddToCartSection product={product} />
          
          <div className={styles.disclaimer}>
            <Info size={20} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--warning)' }} />
            <div>
              <strong>Disclaimer:</strong> The information provided is NOT intended as medical advice. 
              Always consult your healthcare provider before starting any new medication or supplement, 
              especially if you have underlying conditions.
            </div>
          </div>

          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <Activity className={styles.detailIcon} />
              <div>
                <h3 className={styles.detailTitle}>Dosage Instructions</h3>
                <p className={styles.detailText}>{product.dosageInstructions}</p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <ShieldAlert className={styles.detailIcon} />
              <div>
                <h3 className={styles.detailTitle}>Side Effects</h3>
                <p className={styles.detailText}>{product.sideEffects}</p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <AlertTriangle className={styles.detailIcon} style={{color: 'var(--error)'}} />
              <div>
                <h3 className={styles.detailTitle}>Contraindications</h3>
                <p className={styles.detailText}>{product.contraindications}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {alternatives.length > 0 && (
        <div className={styles.recommendations}>
          <h2 className={styles.recTitle}>Recommended Alternatives</h2>
          <div className={styles.recGrid}>
            {alternatives.map(alt => (
              <Link href={`/products/${alt.id}`} key={alt.id} className={styles.recCard}>
                <div className={styles.recImageContainer}>
                  <Image 
                    src={alt.imageUrl} 
                    alt={alt.name}
                    width={140} height={140}
                    className={styles.recImage}
                    unoptimized
                  />
                </div>
                <div className={styles.recInfo}>
                  <div className={styles.recName}>{alt.name}</div>
                  <div className={styles.recPrice}>${alt.price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
