"use client";

import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.css";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal, totalItems, hasPrescriptionItems } = useCart();

  const handleCheckout = () => {
    // Phase 3 will handle checkout logic, but for now just navigate
    // to a placeholder. Let's assume we'll build /checkout next phase.
    alert("Checkout flow will be implemented in Phase 3.");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Your Cart</h1>
        {totalItems > 0 && <p style={{ color: "var(--text-secondary)" }}>{totalItems} items in your cart</p>}
      </header>

      {items.length === 0 ? (
        <div className={styles.emptyState}>
          <ShoppingBag size={48} color="var(--text-secondary)" style={{ margin: "0 auto", marginBottom: "1rem" }} />
          <h2>Your cart is empty</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Looks like you haven't added any medications or wellness products yet.
          </p>
          <Link href="/" className="btn btn-primary">Start Shopping</Link>
        </div>
      ) : (
        <div className={styles.layout}>
          <div className={styles.cartItems}>
            {items.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <Image 
                  src={item.imageUrl} 
                  alt={item.name} 
                  width={100} height={100} 
                  className={styles.itemImage} 
                  unoptimized 
                />
                
                <div className={styles.itemInfo}>
                  <div>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    {item.requiresPrescription && <span className={styles.rxTag}>Rx Required</span>}
                  </div>

                  <div className={styles.itemActions}>
                    <div className={styles.quantityCtrl}>
                      <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span className={styles.qtyValue}>{item.quantity}</span>
                      <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} style={{display:'inline', marginRight:'4px'}}/>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className={styles.summary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Tax (Estimated)</span>
              <span>${(subtotal * 0.08).toFixed(2)}</span>
            </div>
            
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>${(subtotal * 1.08).toFixed(2)}</span>
            </div>

            {hasPrescriptionItems && (
              <div className={styles.rxWarningBox}>
                <AlertCircle size={20} style={{ color: "var(--warning)", flexShrink: 0 }} />
                <p>
                  <strong>Prescription Required:</strong> Your cart contains items that require a valid 
                  prescription. You will be prompted to upload it during checkout.
                </p>
              </div>
            )}

            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
