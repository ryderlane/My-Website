'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function AboutMe() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [showArrow, setShowArrow] = useState(true)

  const photoSections = {
    'Family & Friends': [
      { src: '/images/IMG_3967_Original.JPEG', alt: 'Family Gathering', caption: 'My family has always wanted me to be the best version of myself. Pictured here is my brother, my mom, and my dad.' },
      { src: '/images/IMG_8449.JPG', alt: 'Friends at College', caption: 'My friends and family have always been my biggest supporters in life, especially during the tough times.' },
      { src: '/images/IMG_4696.jpeg', alt: 'Brother + GPA', caption: 'Here is my brother and my Grandfather, who are two of my biggest inspirations in life.' },
      { src: '/images/A&J-Wedding-363.jpg', alt: 'Wedding', caption: 'A special day celebrating family and love.' },
      { src: '/images/9CCD05C5-F9C6-47E7-8049-5253B2F6D693.JPEG', alt: 'Franklin', caption: 'My lovely girlfriend' },
      { src: '/images/momfrank.jpg', alt: 'Franklin', caption: '...And my best buddy, Franklin!' },
    ],
    'College Life': [
      { src: '/images/graduation.JPEG', alt: 'Graduation', caption: 'I graduated from Littlestown Senior High School, involved in many extracurriculars, top 10 in my class.' },
      { src: '/images/IMG_8609.jpeg', alt: 'Starting College', caption: 'This was the start of my journey at West Virginia University, where I’ve built lifelong friendships.' },
      { src: '/images/momdadtail.jpeg', alt: 'mom and dad tailgate', caption: 'I&apos;ve also enjoyed my fair share of tailgates at WVU' },
      { src: '/images/dad.jpeg', alt: 'dad tailgate', caption: '<--' },
      { src: '/images/field.jpeg', alt: 'field', caption: '<--' },
      { src: '/images/boys.jpeg', alt: 'ethan + nate', caption: '...and made some lifelong friends' },
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

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="font-poppins text-gray-800 w-full">
      {/* Hero Section */}
      <motion.section
        className="min-h-[90vh] w-full flex flex-col items-center justify-center text-center px-6 relative bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/133937565.jpg"
          alt="Ryder Lane Headshot"
          width={180}
          height={180}
          className="rounded-full object-cover mb-6 border-4 border-black shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Ryder Lane👋</h1>
        <p className="text-lg max-w-xl leading-relaxed mb-10 text-gray-700">
          <Typewriter
            words={['I’m a Computer Science student @ WVU who is passionate about building software, and staying active in and out of the gym.']}
            typeSpeed={40}
            deleteSpeed={0}
            delaySpeed={2500}
          />
        </p>

        {showArrow && (
          <div className="absolute bottom-6 flex flex-col items-center animate-bounce">
            <p className="text-sm text-gray-600 mb-1">Scroll to see more about me!</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </motion.section>

      {/* About Me Section */}
      <motion.section
        className="max-w-3xl mx-auto px-6 py-20 text-center bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 border-b-2 border-gray-300 pb-2">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am currently going into my 3rd year pursuing a Bachelor&apos;s of Science in Computer Science. I would consider myself a very analytical thinker, who loves dissecting problems, and eventually solving them. Beyond the CS world I enjoy spending time with my family (including my dog), playing video games, spending time with my friends and girlfriend, and traveling.</p>
      </motion.section>

      {/* Timeline Gallery */}
      <section ref={timelineRef} className="max-w-4xl mx-auto px-8 py-20 space-y-32 bg-gradient-to-b from-gray-50 to-white">
        {Object.entries(photoSections).map(([sectionTitle, photos]) => {
          const index = sectionIndexes[sectionTitle]
          const current = photos[index]

          return (
            <motion.div
              key={sectionTitle}
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-3xl font-bold border-b-2 border-gray-200 inline-block pb-1">{sectionTitle}</h2>

              <div className="flex flex-col items-center">
                <div className="relative w-[720px] h-[480px] rounded-lg overflow-hidden shadow-xl bg-white border border-gray-200 flex items-center justify-center">
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
                        sizes="(max-width: 768px) 100vw, 720px"
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

              {current.caption && (
                <div className="flex justify-center">
                  <p className="mt-4 text-center italic text-gray-600 max-w-md">{current.caption}</p>
                </div>
              )}

              <div className="flex gap-2 justify-center mt-3">
                {photos.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    className={`h-2 w-2 rounded-full ${dotIdx === index ? 'bg-black' : 'bg-gray-300'} transition-all duration-300`}
                  />
                ))}
              </div>
            </motion.div>
          )
        })}
      </section>
    </main>
  )
}
