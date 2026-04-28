import { FileDown, GraduationCap, MapPin, ShieldHalf, Sparkles } from "lucide-react";
import { portfolio } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = {
  graduation: GraduationCap,
  location: MapPin,
  shield: ShieldHalf,
  spark: Sparkles,
};

function AboutSection() {
  const resumeHref = `${import.meta.env.BASE_URL}${portfolio.resume.file}`;

  return (
    <section id="about" data-section className="section-shell px-5 py-10 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Security-minded, curious, and focused on building with real-world value."
            description={portfolio.about}
          />

          <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300 sm:text-base">
            <p>{portfolio.mission}</p>
            <p>
              My work sits at the intersection of cybersecurity, AI/ML, secure development, Linux,
              networking, and automation. I enjoy translating technical curiosity into projects that
              feel practical, polished, and ready for real users.
            </p>
          </div>

          <a
            href={resumeHref}
            download={portfolio.resume.downloadName}
            className="button-secondary mt-8 inline-flex"
          >
            <FileDown size={18} />
            Resume Download Slot
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2">
            {portfolio.profileHighlights.map((item) => {
              const Icon = icons[item.icon] ?? Sparkles;

              return (
                <article key={item.title} className="glass-card rounded-[26px] p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                      <Icon size={20} />
                    </span>
                    <div className="space-y-2">
                      <p className="mono text-xs uppercase tracking-[0.26em] text-slate-400">{item.title}</p>
                      <h3 className="font-display text-xl font-semibold text-white">{item.value}</h3>
                      <p className="text-sm leading-7 text-slate-300">{item.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutSection;
