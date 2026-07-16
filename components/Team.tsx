"use client";
export default function Team() {
  return (
    <section className="py-24 px-6" style={{ background: "#030712" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-divider mx-auto"></div>
          <p className="text-sm font-medium uppercase tracking-widest mb-2" style={{ color: "#00FFC6" }}>The People</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Built by passionate technologists who believe Africa deserves world-class software.</p>
        </div>

        <div className="flex justify-center">
          <div data-aos="fade-up" className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-400/30 transition duration-300 text-center max-w-sm w-full">
            <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-6 transition duration-300 hover:ring-4 hover:ring-offset-2 hover:ring-offset-gray-800" style={{ boxShadow: "0 0 0 0 rgba(0,255,198,0)" }} onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow="0 0 15px 2px rgba(0,255,198,0.15)"} onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 rgba(0,255,198,0)"}>
              <img src="/images/avatar.png" alt="Adetunji Samuel Adedeji" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Adetunji Samuel Adedeji</h3>
            <p className="text-sm font-medium mb-4" style={{ color: "#00FFC6" }}>Founder & Lead Engineer</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Full stack developer, creative technologist and the visionary behind Sammey Engitech. Building the future of technology in Nigeria, one product at a time.</p>
            <div className="flex items-center justify-center gap-3">
              <a href="https://github.com/adetunjisam9-collab" target="_blank" className="text-xs px-4 py-2 rounded-lg border border-white/20 text-gray-300 hover:border-teal-400 hover:text-teal-400 transition duration-200">GitHub</a>
              <a href="https://twitter.com/BIGSAMMEY9" target="_blank" className="text-xs px-4 py-2 rounded-lg border border-white/20 text-gray-300 hover:border-teal-400 hover:text-teal-400 transition duration-200">Twitter</a>
              <a href="mailto:adetunjisam9@gmail.com" className="text-xs px-4 py-2 rounded-lg border border-white/20 text-gray-300 hover:border-teal-400 hover:text-teal-400 transition duration-200">Email</a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-12 p-6 rounded-2xl border border-white/10 text-center">
          <p className="text-gray-400 text-sm">We are growing. Interested in joining Sammey Engitech? <a href="mailto:sammeyengitech@gmail.com" className="hover:underline" style={{ color: "#00FFC6" }}>Get in touch.</a></p>
        </div>
      </div>
    </section>
  );
}
