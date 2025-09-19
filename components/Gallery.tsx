export default function Gallery() {
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-blue-200 h-32 flex items-center justify-center">Image 1</div>
      <div className="bg-green-200 h-32 flex items-center justify-center">Image 2</div>
      <div className="bg-yellow-200 h-32 flex items-center justify-center">Image 3</div>
      <div className="bg-red-200 h-32 flex items-center justify-center">Image 4</div>
    </section>
  );
}
