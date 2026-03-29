"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/mockData";
import styles from "@/app/products/[id]/page.module.css";

export default function AddToCartSection({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className={styles.actions}>
      <div className={styles.quantityCtrl}>
        <button className={styles.qtyBtn} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
        <span className={styles.qtyValue}>{quantity}</span>
        <button className={styles.qtyBtn} onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button 
        className={styles.addToCart} 
        onClick={handleAdd}
        style={{ background: added ? 'var(--success)' : 'var(--brand-primary)' }}
      >
        <ShoppingCart size={20} />
        {added ? "Added!" : (product.requiresPrescription ? "Add Rx to Cart" : "Add to Cart")}
      </button>
    </div>
  );
}
