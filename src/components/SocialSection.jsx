import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  FileDown,
  FolderGit2,
  Mail,
  MessageSquare,
} from "lucide-react";
import { portfolio, socialCards } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = {
  github: FolderGit2,
  instagram: Camera,
  linkedin: BriefcaseBusiness,
  mail: Mail,
  resume: FileDown,
  twitter: MessageSquare,
};

function SocialSection() {
  const resumeHref = `${import.meta.env.BASE_URL}${portfolio.resume.file}`;

  return (
    <section id="social" data-section className="section-shell px-5 py-10 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          eyebrow="GitHub & Social"
          title="Professional links that help recruiters validate work, profile fit, and future contact routes."
          description="GitHub and LinkedIn are the active channels today. The remaining cards are intentionally structured as reserved spaces so you can add more public contact points later without redesigning the section."
        />
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {socialCards.map((card, index) => {
          const Icon = icons[card.icon] ?? FolderGit2;
          const isResumeCard = card.href === "resume";
          const href = isResumeCard ? resumeHref : card.href;

          return (
            <Reveal key={card.label} delay={0.05 * index}>
              {href ? (
                <a
                  href={href}
                  download={isResumeCard ? portfolio.resume.downloadName : undefined}
                  target={isResumeCard ? undefined : "_blank"}
                  rel={isResumeCard ? undefined : "noreferrer"}
                  className="glass-card block rounded-[26px] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                      <Icon size={20} />
                    </span>
                    <span className="status-pill">
                      {card.stateLabel}
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-white">{card.label}</h3>
                  <p className="mt-2 text-sm text-cyan-200">{card.value}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{card.detail}</p>
                </a>
              ) : (
                <div className="glass-card rounded-[26px] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300">
                      <Icon size={20} />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400">
                      {card.stateLabel}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-white">{card.label}</h3>
                  <p className="mt-2 text-sm text-slate-400">{card.value}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{card.detail}</p>
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default SocialSection;
