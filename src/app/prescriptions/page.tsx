import Link from "next/link";
export default function PrescriptionsPage() {
  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Prescriptions</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        Manage and refill your medications easily.
      </p>
      <Link href="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
