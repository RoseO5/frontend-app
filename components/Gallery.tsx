import Image from "next/image";

export default function Gallery() {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Image
        src="/Screenshot_20250917-163001.png"
        alt="Project Screenshot"
        width={400}
        height={300}
        className="rounded-lg shadow"
      />
    </section>
  );
}
