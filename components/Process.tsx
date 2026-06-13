export default function Process() {
  const steps = [
    { number: "01", title: "Discover", description: "We listen to your idea, understand your goals and define the scope of what we are building together." },
    { number: "02", title: "Design", description: "We map out the architecture, UI and user experience — making sure every detail is intentional before we write a line of code." },
    { number: "03", title: "Build", description: "We develop your product with clean, scalable code — keeping you updated with regular progress check-ins." },
    { number: "04", title: "Deploy", description: "We launch your product to the world — with proper testing, monitoring and post-launch support." },
  ];

  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-divider mx-auto"></div>
          <p className="text-sm font-medium uppercase tracking-widest mb-2" style={{ color: "#00FFC6" }}>How We Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A simple, transparent process that keeps you in control from idea to launch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 150} className="relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-400/30 transition duration-300">
              <p className="text-5xl font-bold mb-4 opacity-20" style={{ color: "#00FFC6" }}>{step.number}</p>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px" style={{ background: "#00FFC6", opacity: 0.3 }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
