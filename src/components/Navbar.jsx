import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { name: "Home", slug: "home" },
  { name: "About", slug: "about" },
  { name: "Questions", slug: "questions" },
  { name: "Contact", slug: "contact" },
]

  const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("home")

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl text-white font-extrabold">
            Q<span className="text-[#e8533a] text-2xl">.</span>STUDY
          </span>
        </div>

        <nav className="hidden gap-1 md:flex">
          {navLinks.map((i) => (
            <button key={i.slug} onClick={() => setActive(i.slug)}
              className={`rounded-md px-3 py-2 text-[16px] cursor-pointer transition-colors ${
                active === i.slug ? "text-[#e8533a]" : "text-white/80 hover:text-white"
              }`}
            >
              {i.name}
            </button>
          ))}
        </nav>


        <button className="text-white md:hidden cursor-pointer" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: "auto", opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{duration: 0.2}}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-3">
              {navLinks.map((i) => (
                <button key={i.slug} onClick={() => {setActive(i.slug); setOpen(false)}}
                  className={`rounded-md px-3 py-2 text-left text-[16px] ${
                    active === i.slug ? "text-[#e8533a]" : "text-white/90"
                  }`}
                >
                  {i.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar