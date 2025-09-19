export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">About</a></li>
          <li><a href="#" className="hover:text-gray-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
