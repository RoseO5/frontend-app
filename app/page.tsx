export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <h1 className="text-lg font-bold">My App Navbar</h1>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold mb-2">Welcome to My App</h2>
        <p className="text-gray-600">This is the hero section.</p>

        {/* Gallery */}
        <section className="mt-8 w-full max-w-4xl">
          <h3 className="text-xl font-semibold mb-4">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="https://placekitten.com/300/200"
              alt="Kitten 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://placekitten.com/301/200"
              alt="Kitten 2"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://placekitten.com/302/200"
              alt="Kitten 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2025 My App. All rights reserved.
      </footer>
    </div>
  );
}

