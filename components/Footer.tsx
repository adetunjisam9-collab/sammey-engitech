import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="lg:col-span-1">
            <p className="font-bold text-2xl text-white mb-3">Sammey<span style={{ color: "#00FFC6" }}>.</span></p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Building the future, one technology at a time. From web apps to AI, robotics and beyond.</p>
            <div className="mt-4 p-4 rounded-xl border border-teal-400/20 bg-teal-400/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00FFC6" }}></span>
                <p className="text-xs font-medium" style={{ color: "#00FFC6" }}>Open for projects</p>
              </div>
              <p className="text-gray-400 text-xs">We are currently accepting new clients. Let us build something great together.</p>
            </div>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Company</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About", href: "#" },
                { label: "Our Vision", href: "#vision" },
                { label: "Our Process", href: "#" },
                { label: "Team", href: "#" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-gray-400 text-sm hover:text-white transition duration-200">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Services</p>
            <ul className="flex flex-col gap-3">
              {[
                "Web Applications",
                "Mobile Apps",
                "AI Systems",
                "Cloud & Hosting",
                "Robotics & Embedded",
                "Software Integration",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#services" className="text-gray-400 text-sm hover:text-white transition duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Connect with Sammey Engitech</p>
            <ul className="flex flex-col gap-4">
              {[
                { label: "GitHub", href: "https://github.com/adetunjisam9-collab", icon: faGithub },
                { label: "Twitter / X", href: "https://twitter.com/BIGSAMMEY9", icon: faXTwitter },
                { label: "WhatsApp", href: "https://wa.me/2348112791510", icon: faWhatsapp },
                { label: "Email Us", href: "mailto:sammeyengitech@gmail.com", icon: faEnvelope },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} target="_blank" className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition duration-200 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition duration-200">
                      <FontAwesomeIcon icon={item.icon} className="w-3.5 h-3.5" />
                    </div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© {currentYear} Sammey Engitech. All Rights Reserved.</p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Built in Lagos, Nigeria 🇳🇬 with
            <span style={{ color: "#00FFC6" }}>♥</span>
            by Sammey Engitech
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <FontAwesomeIcon icon={faCode} className="w-3 h-3" />
            <p>Powered by Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
