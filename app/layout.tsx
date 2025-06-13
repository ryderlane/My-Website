import '../styles/globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ryder Lane - Personal Website',
  description: 'Professional portfolio of Ryder Lane',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 p-0 flex flex-col">
        {/* ✅ Clean, centered, styled header */}
        <nav className="bg-blue-700 text-white px-8 py-5 shadow-md transition-all duration-500">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ryder Lane</h1>
            <div className="flex gap-6 text-base sm:text-lg">
              <Link href="/" className="hover:underline transition">About Me</Link>
              <Link href="/resume" className="hover:underline transition">Resume</Link>
              <Link href="/about" className="hover:underline transition">About This Site</Link>
              <Link href="/contact" className="hover:underline transition">Contact</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow w-full">
          {children}
        </main>

        <footer className="bg-black text-white text-center p-4">
          © {new Date().getFullYear()} Ryder Lane
        </footer>
      </body>
    </html>
  )
}
