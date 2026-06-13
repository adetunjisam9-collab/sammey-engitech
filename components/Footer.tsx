import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 bg-gray-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-xl text-white">Sammey<span style={{ color: "#00FFC6" }}>.</span></p>
          <p className="text-gray-500 text-xs mt-1">Building the future, one technology at a time.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/adetunjisam9-collab" target="_blank" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition duration-200">
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
          </a>
          <a href="https://twitter.com/BIGSAMMEY9" target="_blank" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition duration-200">
            <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
          </a>
          <a href="https://wa.me/2348112791510" target="_blank" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 transition duration-200">
            <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
          </a>
          <a href="mailto:sammeyengitech@gmail.com" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition duration-200">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <FontAwesomeIcon icon={faCode} className="w-3 h-3" />
          <p>Built by Sammey Engitech</p>
        </div>
      </div>
    </footer>
  );
}
