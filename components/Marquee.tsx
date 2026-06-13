export default function Marquee() {
  const items = ["Web Applications", "Mobile Apps", "AI Systems", "Robotics", "Embedded Chips", "Cloud Hosting", "Software Integration", "Neurolink Technology", "The Future"];

  return (
    <div className="py-4 border-y border-white/10 overflow-hidden" style={{ background: "rgba(0,255,198,0.03)" }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-6 text-sm font-medium tracking-widest uppercase text-gray-400">
            {item}
            <span style={{ color: "#00FFC6" }}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
