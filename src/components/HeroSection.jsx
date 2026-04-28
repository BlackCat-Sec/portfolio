import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  FolderGit2,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { portfolio } from "../data/portfolioData";
import Reveal from "./Reveal";
import StatusPanel from "./StatusPanel";
import TerminalPanel from "./TerminalPanel";

function HeroSection() {
  return (
    <section id="home" data-section className="section-shell px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="grid gap-8 xl:grid-cols-[1.28fr_0.9fr_0.92fr]">
        <Reveal className="flex flex-col justify-between gap-8">
          <div className="space-y-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">Cybersecurity-focused AIML student</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                <MapPin size={14} className="text-cyan-300" />
                {portfolio.location}
              </span>
            </div>

            <div className="space-y-5">
              <p className="mono text-sm uppercase tracking-[0.24em] text-cyan-300/80 sm:tracking-[0.3em]">
                {portfolio.brand}
              </p>
              <h1 className="font-display whitespace-nowrap text-[clamp(3rem,8vw,5.05rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-white 2xl:text-[5.95rem]">
                {portfolio.name}
              </h1>
              <p className="gradient-text font-display text-xl font-medium sm:text-2xl">{portfolio.title}</p>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{portfolio.tagline}</p>
            </div>

            <div className="glass-card max-w-xl rounded-[24px] p-4">
              <div className="mono text-xs uppercase tracking-[0.32em] text-slate-400">&gt; whoami</div>
              <div className="mt-3 flex items-center gap-3 text-sm text-slate-300 sm:text-base">
                <ShieldCheck size={18} className="text-cyan-300" />
                <span>Mokshith H S - Cybersecurity &amp; AI Learner</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="button-primary">
                View Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="button-secondary">
                Contact Me
              </a>
              <a
                href={portfolio.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <BriefcaseBusiness size={18} />
                LinkedIn
              </a>
              <a
                href={portfolio.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <FolderGit2 size={18} />
                GitHub
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {portfolio.heroMetrics.map((metric) => (
              <div key={metric.label} className="glass-card rounded-[22px] px-4 py-4">
                <div className="font-display text-3xl font-semibold text-white">{metric.value}</div>
                <div className="mt-1 text-sm text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="self-stretch">
          <TerminalPanel />
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col gap-5">
          <div className="glass-card relative flex min-h-[20rem] items-center justify-center overflow-hidden rounded-[32px] p-6">
            <motion.div
              className="absolute inset-6 rounded-full bg-cyan-500/10 blur-3xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="cyber-orb">
              <div className="orb-grid" />
              <div className="orb-ring" />
              <div className="orb-ring orb-ring-delay" />
              <span className="orb-node top-[16%] left-[62%]" />
              <span className="orb-node top-[42%] left-[18%]" />
              <span className="orb-node top-[68%] left-[74%]" />
              <span className="orb-node top-[28%] left-[32%]" />
            </div>

            <div className="absolute left-5 top-5 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
              Secure Systems
            </div>
            <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
              <Sparkles size={14} />
              Intelligent Builds
            </div>
          </div>

          <StatusPanel items={portfolio.focusAreas} />
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
