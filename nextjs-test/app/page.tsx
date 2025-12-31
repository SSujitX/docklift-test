export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🐳 Docklift</h1>
      <h2 style={{ fontSize: "1.5rem", opacity: 0.9 }}>
        Next.js Test App Coolll
      </h2>
      <p style={{ marginTop: "2rem", opacity: 0.7 }}>Deployed successfully!</p>
    </div>
  );
}
