import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-96 bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to My App</h2>
      <Image
        src="/Screenshot_20250917-163001.png"
        alt="Screenshot Preview"
        width={300}
        height={600}
        className="rounded-lg shadow-lg"
      />
    </section>
  );
}
