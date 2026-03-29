import Link from "next/link";
export default function CategoriesPage() {
  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>All Categories</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        Browse our full directory of health and wellness categories.
      </p>
      <Link href="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
