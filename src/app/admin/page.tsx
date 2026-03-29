import Link from "next/link";
export default function AdminPage() {
  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Pharmacy Admin Console</h1>
      <p style={{ color: "var(--warning)", marginBottom: "2rem", fontWeight: "bold" }}>
        Restricted Access. Pharmacists and System Admins only.
      </p>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        Approve prescriptions, manage inventory, and view analytics here.
      </p>
      <Link href="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
