'use client'


import { Bot, Image, Database, Github as GithubIcon } from 'lucide-react'
import Link from 'next/link'


export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-poppins text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>


      {/* ───────────────────────── Discord Sneaker Bot ───────────────────────── */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Bot className="w-5 h-5 text-blue-600" />
          Discord Sneaker Resell Bot
        </h2>


        <p className="text-lg mb-6">
          A full-stack Discord bot that lets sneakerheads snap a photo and
          instantly see retail and resale pricing. It combines Google Vision,
          web scraping, and asynchronous Discord interactions to deliver results
          in seconds.
        </p>


        {/* Features */}
        <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
          <Image className="w-5 h-5 text-blue-600" /> Core&nbsp;Features
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong>Image Recognition&nbsp;</strong>— Google&nbsp;Cloud&nbsp;Vision
            identifies the sneaker model from a user-uploaded photo.
          </li>
          <li>
            <strong>Data Scraping&nbsp;</strong>— Scrapfly + RapidAPI pull retail
            &amp; StockX resale prices, size charts, and release info.
          </li>
          <li>
            <strong>Interactive Commands&nbsp;</strong>— Users run
            <code className="px-1 py-0.5 bg-gray-100 rounded text-sm ml-1">
              /check
            </code>
            in Discord to view prices, availability, and a purchase link.
          </li>
        </ul>


        {/* Components */}
        <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          Tech&nbsp;Stack&nbsp;&amp;&nbsp;Files
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <code>bot.py</code> — Discord&nbsp;py client, command routing, async
            event loop.
          </li>
          
          
          <li>
            <code>.env</code> — API keys &amp; tokens (git-ignored for security).
          </li>
        </ul>


        {/* GitHub CTA */}
        <div className="text-center">
          <Link
            href="https://github.com/ryderlane/sneaker-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
            View Code&nbsp;on&nbsp;GitHub
          </Link>
        </div>
      </section>
    </div>
  )
}



