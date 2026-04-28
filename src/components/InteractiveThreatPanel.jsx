import { useEffect, useState } from "react";
import { Activity, Cpu, Radar, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const toneMap = {
  blue: { color: "#60a5fa", soft: "rgba(96,165,250,0.28)" },
  cyan: { color: "#67e8f9", soft: "rgba(103,232,249,0.28)" },
  emerald: { color: "#6ee7b7", soft: "rgba(110,231,183,0.24)" },
  violet: { color: "#a78bfa", soft: "rgba(167,139,250,0.26)" },
};

const signalNodes = [
  {
    label: "Threat Detection",
    detail: "Real-time anomaly scanning across network-facing workflows and monitoring paths.",
    metric: "82%",
    top: "22%",
    left: "68%",
    tone: "cyan",
  },
  {
    label: "Secure Development",
    detail: "Security-first engineering decisions across modern web builds and defensive tooling.",
    metric: "85%",
    top: "38%",
    left: "28%",
    tone: "blue",
  },
  {
    label: "AI/ML Security",
    detail: "Applied exploration of intelligent systems, safety thinking, and automation-assisted workflows.",
    metric: "88%",
    top: "66%",
    left: "57%",
    tone: "violet",
  },
  {
    label: "Automation",
    detail: "CLI and workflow automation that reduces repeated manual effort in practical security tasks.",
    metric: "80%",
    top: "73%",
    left: "79%",
    tone: "emerald",
  },
];

function InteractiveThreatPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [glow, setGlow] = useState({ x: 50, y: 42 });

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 130, damping: 18, mass: 0.6 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 130, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (hoveredIndex !== null) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % signalNodes.length);
    }, 2400);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [hoveredIndex]);

  const activeNode = signalNodes[hoveredIndex ?? activeIndex];

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    rotateYRaw.set((relativeX - 0.5) * 16);
    rotateXRaw.set((0.5 - relativeY) * 16);
    setGlow({ x: relativeX * 100, y: relativeY * 100 });
  };

  const handlePointerLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    setGlow({ x: 50, y: 42 });
    setHoveredIndex(null);
  };

  return (
    <motion.div
      className="interactive-threat-panel glass-card relative overflow-hidden rounded-[32px] p-5 sm:p-6"
      style={{ rotateX, rotateY, transformPerspective: 1400 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        aria-hidden="true"
        className="interactive-threat-glow"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(103,232,249,0.18), transparent 28%), radial-gradient(circle at 60% 48%, rgba(99,102,241,0.18), transparent 36%)`,
        }}
      />

      <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
        Secure Systems
      </div>
      <div className="pointer-events-none absolute right-5 top-5 flex items-center gap-2 rounded-full border border-cyan-400/18 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-200">
        <Activity size={13} />
        Live Map
      </div>

      <div className="interactive-threat-stage">
        <div className="interactive-threat-sphere">
          <motion.div
            aria-hidden="true"
            className="interactive-threat-sweep"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden="true"
            className="interactive-threat-grid"
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />

          <div aria-hidden="true" className="interactive-threat-ring ring-outer" />
          <div aria-hidden="true" className="interactive-threat-ring ring-middle" />
          <div aria-hidden="true" className="interactive-threat-ring ring-inner" />
          <div aria-hidden="true" className="interactive-threat-axis axis-horizontal" />
          <div aria-hidden="true" className="interactive-threat-axis axis-vertical" />

          <div aria-hidden="true" className="interactive-threat-satellite satellite-one">
            <span />
          </div>
          <div aria-hidden="true" className="interactive-threat-satellite satellite-two">
            <span />
          </div>

          <motion.div
            className="interactive-threat-core"
            animate={{ scale: [1, 1.08, 1], opacity: [0.72, 0.96, 0.72] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cpu size={22} />
          </motion.div>

          {signalNodes.map((node, index) => {
            const tone = toneMap[node.tone] ?? toneMap.cyan;
            const isActive = index === (hoveredIndex ?? activeIndex);

            return (
              <button
                key={node.label}
                type="button"
                aria-label={`${node.label}: ${node.detail}`}
                className={`interactive-threat-node ${isActive ? "is-active" : ""}`}
                style={{
                  top: node.top,
                  left: node.left,
                  "--threat-node-color": tone.color,
                  "--threat-node-soft": tone.soft,
                }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setActiveIndex(index);
                }}
                onFocus={() => {
                  setHoveredIndex(index);
                  setActiveIndex(index);
                }}
                onBlur={() => setHoveredIndex(null)}
              >
                <span className="interactive-threat-node-ring" />
                <span className="interactive-threat-node-dot" />
              </button>
            );
          })}
        </div>
      </div>

      <div className="interactive-threat-console">
        <div className="interactive-threat-focus">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.24em] text-cyan-300/80">Live focus</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{activeNode.label}</h3>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-cyan-200">
              {activeNode.metric}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-300">{activeNode.detail}</p>
        </div>

        <div className="interactive-threat-metrics">
          <div className="flex items-center gap-2 text-slate-200">
            <Radar size={15} className="text-cyan-300" />
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-slate-400">Signal strength</p>
          </div>

          <div className="mt-4 grid gap-3">
            {signalNodes.map((node, index) => {
              const isActive = index === (hoveredIndex ?? activeIndex);

              return (
                <div key={`${node.label}-metric`} className="space-y-2">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className={isActive ? "text-white" : "text-slate-400"}>{node.label}</span>
                    <span className={isActive ? "text-cyan-200" : "text-slate-500"}>{node.metric}</span>
                  </div>
                  <div className="interactive-threat-bar">
                    <motion.span
                      className="interactive-threat-bar-fill"
                      animate={{ width: node.metric }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        opacity: isActive ? 1 : 0.55,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
        <Sparkles size={14} />
        Intelligent Builds
      </div>
      <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
        <ShieldCheck size={13} className="text-cyan-300" />
        Hover Nodes
      </div>
    </motion.div>
  );
}

export default InteractiveThreatPanel;
