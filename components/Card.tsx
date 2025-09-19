import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition">
      <Image src={image} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
