export default function Gallery() {
  return (
    <section style={{ padding: "2rem" }}>
      <h3>Gallery</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ width: "100px", height: "100px", background: "#ccc" }}></div>
        <div style={{ width: "100px", height: "100px", background: "#aaa" }}></div>
        <div style={{ width: "100px", height: "100px", background: "#888" }}></div>
      </div>
    </section>
  );
}
