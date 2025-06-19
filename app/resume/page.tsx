'use client'

import { Download } from 'lucide-react'

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center font-poppins text-gray-800">
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>
      <p className="text-lg mb-8 max-w-md">
        You can download or view my resume below.
      </p>

      <a
        href="/Ryder Lane Resume (4).pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
      >
        <Download className="w-5 h-5" />
        Download Resume
      </a>
    </div>
  )
}
