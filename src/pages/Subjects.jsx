import { Link } from "react-router-dom"
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si"

const SUBJECTS = [
  { name: "HTML", slug: "html", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", slug: "css", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", slug: "javascript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", slug: "react", icon: SiReact, color: "#61DAFB" },
  { name: "Node", slug: "node", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", slug: "express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", slug: "mongodb", icon: SiMongodb, color: "#47A248" },
]

export default function Subjects() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Banner */}
      <div
        className="flex items-center justify-center px-6 py-10"
        style={{
          background: "linear-gradient(90deg, #0a0a0a 0%, #2a1410 50%, #e8533a 100%)",
        }}
      >
        <h1
          className="text-center text-3xl font-bold text-white sm:text-4xl"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          Master the basics, and the Web is yours to build!
        </h1>
      </div>

      {/* Subject cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-16 md:grid-cols-4">
        {SUBJECTS.map(({ name, slug, icon: Icon, color }) => (
          <div
            key={slug}
            className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20"
          >
            <Icon size={64} color={color} />
            <h3
              className="text-lg font-semibold text-white"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              {name}
            </h3>
           <Link
              to={`/${slug}`}
              className="rounded-md bg-[#e8533a] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Explore
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}