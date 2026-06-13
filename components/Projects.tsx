export default function Projects() {
  const projects = [
    {
      name: "ProHealth Nexus",
      tagline: "A full-stack HIPAA-compliant healthcare management platform",
      description: "ProHealth Nexus unifies the entire care workflow into one secure platform. Patients book appointments, doctors track patient progress in real time, and admins oversee everything from one dashboard — with full HIPAA compliance built in from day one.",
      techStack: ["React", "Node.js", "PostgreSQL", "Vercel", "Render", "Brevo"],
      liveUrl: "https://pro-health-nexus.vercel.app/login",
      githubUrl: "https://github.com/adetunjisam9-collab/ProHealthNexus-",
      category: "Healthcare Platform",
      status: "Live",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14" data-aos="fade-up">
          <div className="section-divider"></div>
          <p className="text-sm font-medium uppercase tracking-widest mb-2" style={{ color: "#00FFC6" }}>What We Have Built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-gray-400 text-lg max-w-2xl">Real products built and deployed — solving real problems for real people.</p>
        </div>
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-400/30 transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full border border-white/20 text-gray-300">{project.category}</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full text-gray-950 font-semibold" style={{ background: "#00FFC6" }}>{project.status}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
              <p className="font-medium mb-4" style={{ color: "#00FFC6" }}>{project.tagline}</p>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, j) => (
                  <span key={j} className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-gray-400 hover:border-teal-400/50 hover:text-teal-400 transition duration-200 cursor-default">{tech}</span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a href={project.liveUrl} target="_blank" className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-950 hover:opacity-90 active:scale-95 transition duration-200" style={{ background: "#00FFC6" }}>Live Demo</a>
                <a href={project.githubUrl} target="_blank" className="px-6 py-2.5 rounded-lg text-sm font-medium text-white border border-white/20 hover:border-white/40 transition duration-200">View Code</a>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" className="mt-12 p-6 rounded-2xl border border-white/10 text-center">
          <p className="text-gray-400 text-sm">More projects coming soon as Sammey Engitech grows.</p>
        </div>
      </div>
    </section>
  );
}
