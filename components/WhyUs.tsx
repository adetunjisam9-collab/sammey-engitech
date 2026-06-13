export default function WhyUs() {
  const stats = [
    { number: "2+", label: "Projects Delivered", description: "Real products built and deployed for real users." },
    { number: "100%", label: "Client Satisfaction", description: "Every client we have worked with has been blown away." },
    { number: "6+", label: "Technologies", description: "Web, mobile, AI, cloud, robotics and embedded systems." },
    { number: "∞", label: "Ambition", description: "We are just getting started. The best is yet to come." },
  ];

  return (
    <section className="py-24 px-6" style={{ background: "#030712" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-divider mx-auto"></div>
          <p className="text-sm font-medium uppercase tracking-widest mb-2" style={{ color: "#00FFC6" }}>Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Sammey Engitech</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We are not just developers. We are builders, thinkers and visionaries committed to delivering excellence on every project.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center hover:border-teal-400/30 transition duration-300">
              <p className="text-4xl font-bold mb-2" style={{ color: "#00FFC6" }}>{stat.number}</p>
              <p className="text-white font-semibold mb-2 text-sm">{stat.label}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "We think big", description: "From healthcare platforms to neurolink technology — we dream at scale and execute with precision." },
            { title: "We deliver fast", description: "No endless meetings. We scope, build and ship — keeping you informed every step of the way." },
            { title: "We build to last", description: "Every product we build is scalable, secure and maintainable — ready to grow with your business." },
          ].map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-400/30 transition duration-300">
              <div className="w-2 h-2 rounded-full mb-4" style={{ background: "#00FFC6" }}></div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
