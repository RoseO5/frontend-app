import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        My Screenshot UI
      </h1>
      <Image
        src="/my-image.png"
        alt="Screenshot UI"
        width={800}
        height={600}
        className="rounded-xl shadow-lg"
      />
    </main>
  );
}
