const particles = [
  { top: "9%", left: "8%", size: 6, delay: "0s", duration: "12s" },
  { top: "16%", left: "76%", size: 8, delay: "1.2s", duration: "16s" },
  { top: "28%", left: "58%", size: 4, delay: "0.8s", duration: "11s" },
  { top: "34%", left: "24%", size: 5, delay: "2.4s", duration: "14s" },
  { top: "48%", left: "82%", size: 7, delay: "1.6s", duration: "15s" },
  { top: "58%", left: "14%", size: 6, delay: "0.4s", duration: "13s" },
  { top: "68%", left: "68%", size: 5, delay: "2.2s", duration: "18s" },
  { top: "77%", left: "32%", size: 7, delay: "1s", duration: "15s" },
  { top: "86%", left: "90%", size: 5, delay: "2.8s", duration: "12s" },
  { top: "70%", left: "49%", size: 4, delay: "1.4s", duration: "17s" },
];

function CyberBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(60,122,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(118,63,255,0.16),_transparent_22%),linear-gradient(180deg,_rgba(6,8,22,0.96),_rgba(4,7,18,1))]" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(58,82,128,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(58,82,128,0.14) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage: "radial-gradient(circle at center, black 45%, transparent 95%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[48rem] bg-[radial-gradient(circle_at_70%_18%,rgba(55,143,255,0.22),transparent_24%),radial-gradient(circle_at_30%_20%,rgba(129,78,255,0.16),transparent_18%)] blur-3xl" />
      <div className="scan-line absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-400/10 via-transparent to-transparent" />

      {particles.map((particle) => (
        <span
          key={`${particle.top}-${particle.left}`}
          className="particle-float absolute rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(56,189,248,0.55)]"
          style={{
            top: particle.top,
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}

export default CyberBackground;
