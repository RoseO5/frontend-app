"use client";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
