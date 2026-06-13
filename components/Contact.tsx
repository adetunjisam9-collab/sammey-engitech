export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden" style={{ background: "#030712" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-10 blur-3xl" style={{ background: "#00FFC6" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-divider mx-auto"></div>
          <p className="text-sm font-medium uppercase tracking-widest mb-2" style={{ color: "#00FFC6" }}>Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Start a Project With Us</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Have an idea? We would love to hear it. Tell us what you want to build and we will make it happen.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Email</p>
              <a href="mailto:sammeyengitech@gmail.com" className="hover:underline text-sm" style={{ color: "#00FFC6" }}>sammeyengitech@gmail.com</a>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">WhatsApp</p>
              <a href="https://wa.me/2348112791510" target="_blank" className="hover:underline text-sm" style={{ color: "#00FFC6" }}>+234 811 279 1510</a>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00FFC6" }}></span>
                <span className="text-sm text-gray-300">Open for new projects</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <input type="text" placeholder="Your Name" className="bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 w-full transition duration-200" />
            <input type="email" placeholder="Your Email" className="bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 w-full transition duration-200" />
            <input type="text" placeholder="Project Type (Web App, Mobile, AI...)" className="bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 w-full transition duration-200" />
            <textarea placeholder="Tell us about your project..." rows={4} className="bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 w-full resize-none transition duration-200"></textarea>
            <a href="mailto:sammeyengitech@gmail.com" className="px-6 py-3 rounded-lg text-sm font-medium text-gray-950 hover:opacity-90 active:scale-95 transition duration-200 text-center" style={{ background: "#00FFC6" }}>Send Message</a>
          </div>
        </div>
      </div>
    </section>
  );
}
