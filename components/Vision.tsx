export default function Vision() {
  const visions = [
    { emoji: "🧠", title: "Artificial Intelligence", description: "Building intelligent systems that learn, adapt and solve complex problems autonomously. Our AI will power businesses, governments and individuals across Africa and beyond." },
    { emoji: "🔌", title: "Neurolink Technology", description: "Pioneering brain-computer interfaces that connect human intelligence with artificial intelligence. making humans smarter, faster and more capable than ever before." },
    { emoji: "🤖", title: "Robotics", description: "Designing and building robots that work alongside humans to solve real-world problems, from agriculture to healthcare, construction to space exploration." },
    { emoji: "💾", title: "Embedded Systems & Chips", description: "Creating the chips and hardware that power the next generation of smart devices, from IoT sensors to custom silicon for AI acceleration." },
  ];

  return (
    <section id="vision" className="py-24 px-6 relative overflow-hidden" style={{ background: "#030712" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl" style={{ background: "#00FFC6" }}></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-divider mx-auto"></div>
          <p className="text-sm font-medium uppercase tracking-widest mb-2" style={{ color: "#00FFC6" }}>Where We Are Going</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We are not just building software. We are building the infrastructure of the future, one breakthrough at a time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visions.map((v, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-400/50 hover:bg-white/10 transition duration-300">
              <div className="text-4xl mb-4">{v.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" className="mt-16 p-8 rounded-2xl border border-teal-400/20 text-center" style={{ background: "rgba(0,255,198,0.03)" }}>
          <p className="text-2xl font-bold text-white mb-2">Our mission is simple.</p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Use technology to advance Nigeria and Africa, closing the gap with the rest of the world, one product at a time.</p>
        </div>
      </div>
    </section>
  );
}
