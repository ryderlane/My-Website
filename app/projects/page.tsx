'use client'

import { Bot, Image as ImageIcon, Database, Github as GithubIcon, Map, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-poppins text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>

      {/* ───────────────────────── Safe to Surf ───────────────────────── */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Map className="w-5 h-5 text-blue-600" />
          Safe&nbsp;to&nbsp;Surf (Group Project)
        </h2>

        <p className="text-lg mb-6">
          A social map app for surfers that pulls ocean &amp; weather data from NOAA and lets users
          save favorite surf spots, check wave heights, and quickly scan conditions before paddling out.
        </p>

        {/* Features */}
        <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-blue-600" />
 Core&nbsp;Features
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong>Live Conditions</strong> — Integrates NOAA feeds for wave height, swell period, wind, and tides.
          </li>
          <li>
            <strong>Saved Spots</strong> — Users can bookmark surf breaks and view quick condition snapshots.
          </li>
          <li>
            <strong>Interactive Map</strong> — Pan/zoom map with spot pins and tooltips for current readings.
          </li>
          <li>
            <strong>Mobile-first UX</strong> — Quick scan cards and large tap targets for beach-side use.
          </li>
        </ul>

        {/* Tech */}
        <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          Tech&nbsp;Stack&nbsp;&amp;&nbsp;Files
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <code>Next.js&nbsp;14</code>, <code>React</code>, <code>Tailwind</code>, <code>Leaflet</code> (map), NOAA APIs.
          </li>
          <li>
            <code>/lib/noaa.ts</code> — Fetch + transform NOAA station/point forecasts.
          </li>
          <li>
            <code>/components/SpotCard.tsx</code> — Saved spot preview with condition badges.
          </li>
          <li>
            <code>/app/map/page.tsx</code> — Interactive map with pins &amp; popovers.
          </li>
        </ul>

    </section>

      {/* ───────────────────────── OS Rewrite in C ───────────────────────── */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-600" />
          Operating&nbsp;Systems — Kernel Rewrite in C
        </h2>

        <p className="text-lg mb-6">
          An ongoing course project reconstructing a teaching OS in C (with a bit of assembly).
          I worked on low-level subsystems like serial I/O, RTC, interrupts, and process management.
          The goal is to internalize how an OS boots, manages hardware, schedules work, and handles memory.
        </p>

        {/* Features */}
        <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-blue-600" />
 Core&nbsp;Features
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong>Boot &amp; Interrupts</strong> — GDT/IDT setup, ISR stubs, interrupt controller config.
          </li>
          <li>
            <strong>Device Drivers</strong> — COM1 serial driver (polling), basic RTC read/write utilities.
          </li>
          <li>
            <strong>Process &amp; Scheduling</strong> — PCB layout, ready queues, context-switch scaffolding.
          </li>
          <li>
            <strong>Memory Primitives</strong> — Page-aligned alloc routines and safe string/memory helpers.
          </li>
        </ul>

        {/* Tech */}
        <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          Tech&nbsp;Stack&nbsp;&amp;&nbsp;Files
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <code>C</code>, <code>NASM</code>, <code>Clang</code>, <code>Make</code>.
          </li>
          <li>
            <code>kernel/core-asm.s</code> — low-level entry points and ISR trampolines.
          </li>
          <li>
            <code>kernel/core-c.c</code>, <code>kernel/serial.c</code> — init, serial I/O, helpers.
          </li>
          <li>
            <code>include/mpx/*</code> — headers for interrupts, IO ports, serial, and VM.
          </li>
        </ul>

        {/* Optional CTA — adjust link if you want to share a public mirror */}
        <div className="text-center">
          <Link
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium cursor-not-allowed"
            aria-disabled
          >
            Private Course Repo
          </Link>
        </div>
      </section>

      {/* ───────────────────────── Discord Sneaker Bot ───────────────────────── */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Bot className="w-5 h-5 text-blue-600" />
          Discord Sneaker Resell Bot
        </h2>

        <p className="text-lg mb-6">
          A full-stack Discord bot that lets sneakerheads snap a photo and instantly see retail and
          resale pricing. It combines Google Vision, web scraping, and asynchronous Discord interactions
          to deliver results in seconds.
        </p>

        {/* Features */}
        <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-blue-600" />
 Core&nbsp;Features
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong>Image Recognition&nbsp;</strong>— Google&nbsp;Cloud&nbsp;Vision identifies the sneaker model from a user-uploaded photo.
          </li>
          <li>
            <strong>Data Scraping&nbsp;</strong>— Scrapfly + RapidAPI pull retail &amp; StockX resale prices, size charts, and release info.
          </li>
          <li>
            <strong>Interactive Commands&nbsp;</strong>— Users run
            <code className="px-1 py-0.5 bg-gray-100 rounded text-sm ml-1">/check</code>
            in Discord to view prices, availability, and a purchase link.
          </li>
        </ul>

        {/* Tech */}
        <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          Tech&nbsp;Stack&nbsp;&amp;&nbsp;Files
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <code>bot.py</code> — Discord.py client, command routing, async event loop.
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
