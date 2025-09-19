import Card from "./Card";

export default function Gallery() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">More UI Collections</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card title="UI Block" description="Compact widget" image="/sample.png" />
        <Card title="Finance App" description="Wallet design" image="/sample.png" />
        <Card title="Profile UI" description="User dashboard" image="/sample.png" />
        <Card title="Analytics" description="Data visualization" image="/sample.png" />
      </div>
    </section>
  );
}
