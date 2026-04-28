import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, Globe, ShieldCheck, TerminalSquare } from "lucide-react";
import { skillCategories } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = {
  aiml: BrainCircuit,
  brain: BrainCircuit,
  globe: Globe,
  shield: ShieldCheck,
  terminal: TerminalSquare,
};

function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((item) => item.id === activeTab) ?? skillCategories[0];
  const ActiveIcon = icons[activeCategory.icon] ?? ShieldCheck;
  const holoBadges = activeCategory.highlights.slice(0, 3);

  return (
    <section id="skills" data-section className="section-shell px-5 py-10 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="A practical toolkit across cybersecurity, AI/ML, modern web development, and developer systems."
          description="The stack below reflects what I am actively learning, applying, and strengthening through projects that blend secure engineering with modern product thinking."
          align="center"
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-8">
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveTab(category.id)}
              className={`inline-flex w-full items-center justify-center rounded-[18px] border px-4 py-3 text-sm font-medium transition ${
                activeTab === category.id
                  ? "border-cyan-300/60 bg-cyan-400/10 text-cyan-200 shadow-[0_0_25px_rgba(56,189,248,0.18)]"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-300/30 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:items-stretch lg:grid-cols-[0.84fr_1.16fr]">
        <Reveal delay={0.12}>
          <div className="glass-card flex h-full flex-col rounded-[28px] p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                <ActiveIcon size={24} />
              </span>
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-slate-400">Active category</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">{activeCategory.label}</h3>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-300">{activeCategory.summary}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{activeCategory.detail}</p>

            <div className="mt-6 grid gap-3">
              {activeCategory.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                >
                  {highlight}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-1 items-end">
              <div className="skill-holo-panel relative min-h-[17rem] w-full overflow-hidden rounded-[26px] border border-cyan-300/12">
                <div className="skill-holo-grid" />
                <div className="scan-line absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-300/0 via-cyan-300/8 to-cyan-300/0" />

                <motion.div
                  className="skill-holo-globe"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                >
                  <span className="skill-holo-ring skill-holo-ring-wide" />
                  <span className="skill-holo-ring skill-holo-ring-tight" />
                  <span className="skill-holo-latitude skill-holo-latitude-top" />
                  <span className="skill-holo-latitude skill-holo-latitude-bottom" />
                  <span className="skill-holo-meridian" />
                  <span className="skill-holo-meridian skill-holo-meridian-tilt" />
                  <span className="skill-holo-node skill-holo-node-a" />
                  <span className="skill-holo-node skill-holo-node-b" />
                  <span className="skill-holo-node skill-holo-node-c" />
                </motion.div>

                <motion.div
                  className="skill-holo-core"
                  animate={{ scale: [1, 1.06, 1], opacity: [0.82, 1, 0.82] }}
                  transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ActiveIcon size={26} />
                </motion.div>

                <div className="skill-holo-badge skill-holo-badge-left">{holoBadges[0]}</div>
                <div className="skill-holo-badge skill-holo-badge-top">{holoBadges[1]}</div>
                <div className="skill-holo-badge skill-holo-badge-right">{holoBadges[2]}</div>

                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  <span>Live skill map</span>
                  <span>{activeCategory.label}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="glass-card h-full rounded-[28px] p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mono text-xs uppercase tracking-[0.28em] text-cyan-300/80">Core items</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {activeCategory.items.map((item) => (
                    <span key={item} className="glow-pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {activeCategory.items.map((item) => (
                    <div
                      key={`${activeCategory.id}-${item}`}
                      className="rounded-[22px] border border-white/8 bg-slate-950/45 px-4 py-4"
                    >
                      <p className="font-medium text-white">{item}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Portfolio-ready capability with room to expand through deeper builds and case studies.
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default SkillsSection;
