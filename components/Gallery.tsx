export default function Gallery() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-gray-300 h-40 rounded-lg"></div>
        <div className="bg-gray-400 h-40 rounded-lg"></div>
        <div className="bg-gray-500 h-40 rounded-lg"></div>
      </div>
    </section>
  );
}
