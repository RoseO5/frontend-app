import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <div className="flex justify-center mt-8">
        <Image 
          src="/my-image.png" 
          alt="Project Screenshot" 
          width={600} 
          height={400} 
        />
      </div>
    </main>
  )
}
