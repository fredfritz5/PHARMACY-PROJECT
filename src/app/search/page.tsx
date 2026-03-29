import Image from "next/image";
import Link from "next/link";
import { SearchX, ShoppingCart, Filter } from "lucide-react";
import { PRODUCTS, fuzzySearchHelper } from "@/lib/mockData";
import styles from "./page.module.css";

// In Next.js 15, searchParams is a Promise
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  
  // Basic filtering mechanism (Server side simulation)
  let results = fuzzySearchHelper(q, PRODUCTS);
  
  // In a real app we'd also read category, maxPrice, sorting from searchParams here
  // and apply filters to `results`.

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>
            Search Results for <span>"{q}"</span>
          </h1>
          <p className={styles.stats}>Found {results.length} products</p>
        </div>
      </header>

      <div className={styles.layout}>
        {/* Sidebar Filters */}
        <aside className={styles.sidebar}>
          <div className={styles.filterTitle}><Filter size={16} style={{display:'inline', marginRight:'8px'}}/> Filters</div>
          
          <div className={styles.filterGroup}>
            <div className={styles.filterTitle}>Category</div>
            <label className={styles.filterLabel}><input type="checkbox" defaultChecked /> All Categories</label>
            <label className={styles.filterLabel}><input type="checkbox" /> Prescriptions</label>
            <label className={styles.filterLabel}><input type="checkbox" /> OTC Medicine</label>
            <label className={styles.filterLabel}><input type="checkbox" /> Vitamins</label>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterTitle}>Requirements</div>
            <label className={styles.filterLabel}><input type="checkbox" /> Rx Required</label>
            <label className={styles.filterLabel}><input type="checkbox" /> No Rx Needed</label>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterTitle}>Availability</div>
            <label className={styles.filterLabel}><input type="checkbox" /> In Stock Only</label>
          </div>
        </aside>

        {/* Results Grid */}
        <main className={styles.results}>
          <div className={styles.toolbar}>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Showing 1 - {results.length} of {results.length}
            </span>
            <select className={styles.sortSelect} defaultValue="relevance">
              <option value="relevance">Sort by: Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Popularity</option>
            </select>
          </div>

          {results.length > 0 ? (
            <div className={styles.grid}>
              {results.map(product => (
                <Link href={`/products/${product.id}`} key={product.id} className={styles.productCard}>
                  <div className={styles.imageContainer}>
                    {product.requiresPrescription && <div className={styles.rxBadge}>Rx</div>}
                    <Image 
                      src={product.imageUrl} 
                      alt={product.name}
                      width={180} height={180}
                      className={styles.productImage}
                      unoptimized
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.category}>{product.category}</div>
                    <div className={styles.name}>{product.name}</div>
                    <div className={styles.priceRow}>
                      ${product.price.toFixed(2)}
                      {product.stock === 0 ? (
                        <span className={styles.outOfStock}>Out of Stock</span>
                      ) : (
                        <ShoppingCart size={16} color="var(--brand-primary)"/>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.zeroResults}>
              <SearchX size={48} className={styles.zeroIcon} />
              <h2 className={styles.zeroTitle}>No exact matches found</h2>
              <p className={styles.zeroDesc}>We couldn't find anything matching "{q}". Check your spelling or explore our categories.</p>
              <Link href="/categories" className="btn btn-primary">Browse Categories</Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
