'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

export default function AboutMe() {
  const timelineRef = useRef<HTMLDivElement>(null)

  const photoSections = {
    'Family & Friends': [
      {
        src: '/images/IMG_3967_Original.JPEG',
        alt: 'Family Gathering',
        caption:
          'My family has always wanted me to be the best version of myself. Pictured here is my brother, my mom, and my dad.',
      },
      {
        src: '/images/IMG_8449.JPG',
        alt: 'Friends at College',
        caption:
          'My friends and family have always been my biggest supporters in life, especially during the tough times.',
      },
      {
        src: '/images/IMG_4696.JPeG',
        alt: 'Brother + GPA',
        caption:
          'Here is my brother and my Grandfather, who are two of my biggest inspirations in life.',
      },
      {
        src: '/images/A&J-Wedding-363.jpg',
        alt: 'Wedding',
        caption: 'A special day celebrating family and love.',
      },
    ],
    'College Life': [
      {
        src: '/images/graduation.jpeg',
        alt: 'Graduation',
        caption:
          'I graduated from Littlestown Senior High School, involved in many extracurriculars, top 10 in my class.',
      },
      {
        src: '/images/IMG_8609.jpeg',
        alt: 'Starting College',
        caption:
          'This was the start of my journey at West Virginia University, where I’ve built lifelong friendships.',
      },
    ],
  }

  const [sectionIndexes, setSectionIndexes] = useState(
    Object.fromEntries(Object.keys(photoSections).map((key) => [key, 0]))
  )

  const handleNext = (section: string, total: number) => {
    setSectionIndexes((prev) => ({
      ...prev,
      [section]: (prev[section] + 1) % total,
    }))
  }

  const handlePrev = (section: string, total: number) => {
    setSectionIndexes((prev) => ({
      ...prev,
      [section]: (prev[section] - 1 + total) % total,
    }))
  }

  return (
    <main className="font-poppins text-gray-800 w-full">
      

      {/* Hero Section */}
      <motion.section
        className="h-screen w-full flex flex-col items-center justify-center text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/133937565.jpg"
          alt="Ryder Lane Headshot"
          width={180}
          height={180}
          className="rounded-full object-cover mb-6 border-4 border-black shadow-md"
        />
        <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Ryder Lane</h1>
        <p className="text-lg max-w-xl leading-relaxed">
          I’m a Computer Science student @ WVU who is passionate about building software,
          and staying active in and out of the gym.
        </p>
      </motion.section>

      {/* Gallery Timeline Section */}
      <section ref={timelineRef} className="max-w-4xl mx-auto px-8 py-20 space-y-32">
        {Object.entries(photoSections).map(([sectionTitle, photos]) => {
          const index = sectionIndexes[sectionTitle]
          const current = photos[index]

          return (
            <div key={sectionTitle} className="text-center space-y-6">
              <h2 className="text-3xl font-bold">{sectionTitle}</h2>

              <div className="flex flex-col items-center">
                <div className="relative w-[720px] h-[480px] rounded-lg overflow-hidden shadow-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.src}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute w-full h-full"
                    >
                      <Image
                        src={current.src}
                        alt={current.alt}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex justify-center gap-4">
                  <button
                    onClick={() => handlePrev(sectionTitle, photos.length)}
                    className="px-5 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => handleNext(sectionTitle, photos.length)}
                    className="px-5 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
                  >
                    Next →
                  </button>
                </div>
              </div>

              {/* Caption */}
              {current.caption && (
                <p className="mt-4 text-center italic text-gray-600 max-w-md">{current.caption}</p>
              )}

              {/* Progress Dots */}
              <div className="flex gap-2 justify-center mt-3">
                {photos.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    className={`h-2 w-2 rounded-full ${
                      dotIdx === index ? 'bg-black' : 'bg-gray-300'
                    } transition-all duration-300`}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
