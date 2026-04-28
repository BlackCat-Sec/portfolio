import { ArrowUpRight, Lock, Rocket, Waves, Wifi } from "lucide-react";
import { featuredProjects } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const toneClasses = {
  cyan: "from-cyan-400/18 via-cyan-400/6 to-transparent border-cyan-300/20",
  violet: "from-violet-400/18 via-violet-400/6 to-transparent border-violet-300/20",
  blue: "from-blue-400/18 via-blue-400/6 to-transparent border-blue-300/20",
  emerald: "from-emerald-400/18 via-emerald-400/6 to-transparent border-emerald-300/20",
};

const statusIcons = {
  Private: Lock,
  "In Progress": Waves,
  Public: Rocket,
};

function ProjectsSection() {
  return (
    <section id="projects" data-section className="section-shell px-5 py-10 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected public builds with direct code access, clear use cases, and stronger portfolio proof."
          description="Each featured card is designed like a compact case study: what the project is, why it matters, and how a recruiter can jump directly into the repository or README for validation."
        />
      </Reveal>

      <div className="mt-8 grid gap-5 xl:grid-cols-2">
        {featuredProjects.map((project, index) => {
          const Icon = statusIcons[project.status] ?? Wifi;
          const toneClass = toneClasses[project.tone] ?? toneClasses.cyan;

          return (
            <Reveal key={project.title} delay={0.06 * index}>
              <article
                className={`group project-card relative overflow-hidden rounded-[30px] border bg-gradient-to-br ${toneClass} p-[1px]`}
              >
                <div className="glass-card relative flex h-full flex-col rounded-[29px] p-6">
                  <div className="absolute right-5 top-5">
                    <span className="status-pill">
                      <Icon size={14} />
                      {project.status}
                    </span>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                          <Icon size={20} />
                        </span>
                        <div>
                          <p className="mono text-xs uppercase tracking-[0.28em] text-slate-400">{project.category}</p>
                          <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h3>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="glow-pill text-xs">{project.role}</span>
                        {project.stack.slice(0, 2).map((item) => (
                          <span key={`${project.title}-${item}`} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                            {item}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm leading-7 text-slate-300 sm:text-base">{project.summary}</p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[24px] border border-white/8 bg-slate-950/40 p-4">
                          <p className="mono text-[11px] uppercase tracking-[0.24em] text-slate-400">Challenge</p>
                          <p className="mt-3 text-sm leading-7 text-slate-300">{project.challenge}</p>
                        </div>
                        <div className="rounded-[24px] border border-white/8 bg-slate-950/40 p-4">
                          <p className="mono text-[11px] uppercase tracking-[0.24em] text-slate-400">Outcome</p>
                          <p className="mt-3 text-sm leading-7 text-slate-300">{project.outcome}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="project-signal-panel rounded-[26px] p-5">
                        <div className="project-signal-grid" />
                        <div className="project-signal-core" />
                        <div className="relative flex items-center justify-between gap-4">
                          <div>
                            <p className="mono text-[11px] uppercase tracking-[0.28em] text-cyan-300/80">Portfolio proof</p>
                            <h4 className="mt-2 font-display text-xl font-semibold text-white">{project.category}</h4>
                          </div>
                          <div className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-1 text-xs text-slate-300">
                            {project.status}
                          </div>
                        </div>

                        <div className="relative mt-5 grid gap-3">
                          {project.proofPoints.map((point) => (
                            <div
                              key={`${project.title}-${point.label}`}
                              className="rounded-2xl border border-white/8 bg-slate-950/55 px-4 py-3"
                            >
                              <p className="mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{point.label}</p>
                              <p className="mt-2 text-sm text-slate-200">{point.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-3 text-sm leading-6 text-slate-300"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="glow-pill text-xs">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.actions.map((action) =>
                      action.href ? (
                        <a
                          key={`${project.title}-${action.label}`}
                          href={action.href}
                          target="_blank"
                          rel="noreferrer"
                          className="button-secondary"
                        >
                          {action.label}
                          <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <span
                          key={`${project.title}-${action.label}`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400"
                        >
                          {action.label}
                        </span>
                      ),
                    )}
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-400">{project.footer}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
