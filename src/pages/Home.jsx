import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si"

const ORBIT_ICONS = [
  { icon: SiReact, top: "4%", left: "50%", size: 68, bg: "bg-white", color: "#61DAFB" },
  { icon: SiHtml5, top: "14%", left: "82%", size: 52, bg: "bg-white", color: "#E34F26" },
  { icon: SiCss, top: "14%", left: "18%", size: 52, bg: "bg-white", color: "#1572B6" },
  { icon: SiJavascript, top: "50%", left: "90%", size: 52, bg: "bg-white", color: "#F7DF1E" },
  { icon: SiNodedotjs, top: "50%", left: "10%", size: 52, bg: "bg-white", color: "#339933" },
  { icon: SiExpress, top: "86%", left: "82%", size: 52, bg: "bg-white", color: "#000000" },
  { icon: SiMongodb, top: "86%", left: "18%", size: 52, bg: "bg-white", color: "#47A248" },
]

const SLIDES = [
  { title: "HTML", subtitle: "Concepts and interview questions on page structure", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=80" },
  { title: "CSS", subtitle: "Concepts and interview questions on style, layout, and animation", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80" },
  { title: "JavaScript", subtitle: "Concepts and interview questions on the language of the web", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80" },
  { title: "React", subtitle: "Concepts and interview questions on building user interfaces", image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?auto=format&fit=crop&w=1600&q=80" },
  { title: "Node", subtitle: "Concepts and interview questions on the JS runtime", image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1600&q=80" },
  { title: "Express", subtitle: "Concepts and interview questions on building APIs", image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=1600&q=80" },
  { title: "MongoDB", subtitle: "Concepts and interview questions on NoSQL databases", image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80" },
]

export default function Home() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  const next = () => setSlide((s) => (s + 1) % SLIDES.length)
  const prev = () => setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length)

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero carousel */}
      <section className="relative h-[520px] overflow-hidden border-b border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(10,10,10,0.75), rgba(10,10,10,0.75)), url(${SLIDES[slide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2
              className="text-6xl font-bold text-white"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              {SLIDES[slide].title}
            </h2>
            <p
              className="mt-2 max-w-md text-center text-white/60"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {SLIDES[slide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Orbiting icons */}
        <div className="pointer-events-none absolute inset-0">
          {ORBIT_ICONS.map(({ icon: Icon, top, left, size, bg, color }, i) => (
            <motion.div
              key={i}
              className={`absolute flex items-center justify-center rounded-full ${bg} shadow-lg`}
              style={{
                top,
                left,
                width: size,
                height: size,
                transform: "translate(-50%, -50%)",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={size * 0.5} color={color} />
            </motion.div>
          ))}
        </div>

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/50 transition-colors hover:text-white"
        >
          <CaretLeft size={28} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/50 transition-colors hover:text-white"
        >
          <CaretRight size={28} />
        </button>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === slide ? "w-6 bg-[#e8533a]" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p
              className="mb-3 text-sm font-medium uppercase tracking-wide text-[#e8533a]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Welcome to QStudy
            </p>
            <h1
              className="mb-6 text-4xl leading-tight text-white sm:text-5xl"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Master MERN concepts and ace your interview questions
            </h1>
            <p
              className="mb-8 text-white/60"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Explore clear concept breakdowns and a curated collection of
              interview questions across HTML, CSS, JavaScript, React, Node,
              Express, and MongoDB to prepare for your next technical interview.
            </p>
            <div className="flex gap-4">
              <button
                className="rounded-md cursor-pointer bg-[#e8533a] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Learn More
              </button>
              <button
                className="cursor-pointer rounded-md border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Our Team
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-4">
              {[
                { Icon: SiHtml5, color: "#E34F26" },
                { Icon: SiCss, color: "#1572B6" },
                { Icon: SiJavascript, color: "#F7DF1E" },
                { Icon: SiReact, color: "#61DAFB" },
                { Icon: SiNodedotjs, color: "#339933" },
                { Icon: SiExpress, color: "#000000" },
                { Icon: SiMongodb, color: "#47A248" },
              ].map(({ Icon, color }, i) => (
                <div
                  key={i}
                  className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                >
                  <Icon size={40} color={color} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Question bank section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8 font-mono text-sm text-white/70">
            <p className="mb-3 text-white/40">QStudy/</p>
            <div className="ml-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <SiHtml5 size={18} color="#E34F26" /> index.html
              </div>
              <div className="flex items-center gap-2">
                <SiCss size={18} color="#1572B6" /> styles.css
              </div>
              <div className="flex items-center gap-2">
                <SiJavascript size={18} color="#F7DF1E" /> scripts.js
              </div>
            </div>
          </div>

          <div>
            <h2
              className="mb-6 text-3xl leading-tight text-white"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Dive into our comprehensive concepts and question bank
            </h2>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3
                className="mb-2 text-lg font-semibold text-white"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Enhance your skills
              </h3>
              <p
                className="mb-4 text-sm text-white/60"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                From fundamental concepts to advanced topics, everything you
                need is here.
              </p>
              <button
                className="rounded-md bg-[#e8533a] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}