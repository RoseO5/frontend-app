import Card from "./Card";

export default function Hero() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Featured UI Patterns</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="WAN 2.2" description="Mobile dashboard concept" image="/sample.png" />
        <Card title="Flux Design" description="Creative landing page" image="/sample.png" />
        <Card title="Next App" description="Clean modern UI" image="/sample.png" />
      </div>
    </section>
  );
}
