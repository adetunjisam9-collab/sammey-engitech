import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMobileScreen, faLink, faServer, faBrain, faMicrochip } from "@fortawesome/free-solid-svg-icons";

const services = [
  { icon: faGlobe, title: "Web Applications", description: "Scalable, secure and beautiful web apps built from scratch — designed for performance and real-world impact." },
  { icon: faMobileScreen, title: "Mobile Applications", description: "Cross-platform mobile apps that deliver seamless experiences on iOS and Android." },
  { icon: faLink, title: "Software Integration", description: "We connect your existing tools and systems into one unified, efficient workflow." },
  { icon: faServer, title: "Cloud & Hosting", description: "Soon launching our own hosting infrastructure — reliable, fast and built for developers." },
  { icon: faBrain, title: "Artificial Intelligence", description: "AI-powered solutions that automate, predict and transform how your business operates." },
  { icon: faMicrochip, title: "Robotics & Embedded Systems", description: "From embedded chips to full robotics — we are building the hardware of tomorrow." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="section-divider"></div>
          <p className="text-sm font-medium uppercase tracking-widest mb-2" style={{ color: "#00FFC6" }}>What We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl">From idea to deployment — we build technology that solves real problems and scales with your ambition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-teal-400/50 hover:bg-white/10 transition duration-300">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,255,198,0.1)" }}>
                <FontAwesomeIcon icon={service.icon} style={{ color: "#00FFC6", width: "18px", height: "18px" }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
