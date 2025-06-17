'use client'

import { Mail, Linkedin, Github, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-20 font-poppins text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center">Get in Touch</h1>

      <p className="text-lg text-center mb-12">
        Whether you’d like to connect professionally, collaborate on a project, or just say hello — I’d love to hear from you.📞✉️
      </p>

      <div className="flex flex-col items-center space-y-8">
        {/* Email */}
        <Link
           href="https://mail.google.com/mail/?view=cm&fs=1&to=laneryder17@gmail.com"
          className="group flex items-center gap-3 text-lg text-black hover:text-blue-600 transition relative"
        >
          <Mail className="w-6 h-6" />
          <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
            laneryder17@gmail.com
          </span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/ryder-lane"
          target="_blank"
          className="group flex items-center gap-3 text-lg text-black hover:text-blue-600 transition relative"
        >
          <Linkedin className="w-6 h-6" />
          <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
            linkedin.com/in/ryder-lane
          </span>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/ryderlane"
          target="_blank"
          className="group flex items-center gap-3 text-lg text-black hover:text-blue-600 transition relative"
        >
          <Github className="w-6 h-6" />
          <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
            github.com/ryderlane
          </span>
        </Link>

        {/* Instagram */}
        <Link
          href="https://instagram.com/rryderlane"
          target="_blank"
          className="group flex items-center gap-3 text-lg text-black hover:text-blue-600 transition relative"
        >
          <Instagram className="w-6 h-6" />
          <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
            @rryderlane
          </span>
        </Link>
      </div>
    </div>
  )
}
