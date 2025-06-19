import { Code, Database, Server, FileCode } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-poppins text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">About This Site</h1>

      {/* Frontend */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-600" /> Frontend
        </h2>
        <p className="mb-2">
          This website is built using Next.js 14 with the App Router. Tailwind CSS is used for utility-first responsive styling, with smooth transitions and motion powered by Framer Motion.
        </p>
      </section>

      {/* Backend */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Server className="w-5 h-5 text-blue-600" /> Backend
        </h2>
        <p className="mb-2">
          Although the current version of this site is frontend-only, it&apos;s structured for backend integration using Node.js or serverless APIs via Next.js&apos; server components.
        </p>
      </section>

      {/* Hosting */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" /> Hosting
        </h2>
        <p className="mb-2">
          The site is deployed on Vercel, which provides seamless integration with GitHub and supports Next.js features like edge functions and automatic CI/CD deployments.
        </p>
      </section>

      {/* Source Code */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <FileCode className="w-5 h-5 text-blue-600" /> Source Code
        </h2>
        <p>
          You can find the source code on{' '}
          <a
            href="https://github.com/ryderlane/My-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  )
}
