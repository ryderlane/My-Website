import '../styles/globals.css'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import PageTransitionWrapper from '../components/PageTransitionWrapper'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Ryder Lane - Personal Website',
  description: 'Professional portfolio of Ryder Lane',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { path: '/', label: 'About Me' },
    { path: '/resume', label: 'Resume' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About This Website' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 p-0 flex flex-col">
        <nav className="bg-blue-600 text-white px-10 py-6 shadow-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-wide">Ryder Lane</h1>
            <div className="flex space-x-8 text-lg font-medium">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className="transform transition-transform duration-200 hover:scale-110 hover:text-blue-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Animate children using client wrapper */}
        <main className="flex-grow w-full">
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
        </main>

        <footer className="bg-black text-white text-center p-6">
          <div className="flex justify-center space-x-6 mb-3">
            <a
              href="https://github.com/ryderlane"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/ryder-lane"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=laneryder17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Ryder Lane</p>
        </footer>

        <Analytics />
      </body>
    </html>
  )
}
