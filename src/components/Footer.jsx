import { InstagramLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react"

const USEFUL_LINKS = ["Home", "About", "Questions", "Contact"]
const QUICK_LINKS = ["Support", "Terms"]
const SOCIALS = [
  { name: "Instagram", icon: InstagramLogo, href: "#" },
  { name: "Twitter", icon: TwitterLogo, href: "#" },
  { name: "LinkedIn", icon: LinkedinLogo, href: "#" },
]

  const Footer = () => {
  return (
    <footer className="border-t-4 border-[#e8533a] bg-[#161616]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-start gap-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black">
            <span className="text-center text-sm font-extrabold leading-tight text-white">Q<br />Study</span>
          </div>
          <p className="text-sm text-white/60">© 2026 QStudy<br />All rights reserved<br />Bhubaneswar
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Useful Links</h4>
          <ul className="flex flex-col gap-3">
            {USEFUL_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-[#e8533a] font-medium">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white font-bold">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-[#e8533a] font-medium">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Contact With Us</h4>
          <ul className="flex flex-col gap-3">
            {SOCIALS.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a href={href} className="font-medium flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#e8533a]">
                  <Icon size={16} weight="regular" />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer