import { useState } from "react";
import {
  AtSign,
  BriefcaseBusiness,
  Camera,
  FileDown,
  FolderGit2,
  Mail,
  MapPin,
  MessageSquare,
  SendHorizonal,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { portfolio } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const resumeHref = `${import.meta.env.BASE_URL}${portfolio.resume.file}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <section id="contact" data-section className="section-shell px-5 py-10 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Open to internships, collaborations, and security-focused opportunities."
            description="Email, LinkedIn, GitHub, and the live resume PDF are the strongest recruiter-facing routes today. The form remains UI-only for GitHub Pages, but the layout is ready for Formspree, Netlify Forms, or a custom backend whenever you decide to connect it."
          />

          <div className="mt-8 space-y-4">
            <div className="glass-card rounded-[24px] p-5">
              <p className="mono text-xs uppercase tracking-[0.28em] text-cyan-300/80">Professional snapshot</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <MapPin size={16} />
                    <span className="mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Location</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{portfolio.location}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <ShieldCheck size={16} />
                    <span className="mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Focus</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-200">Cybersecurity, AIML, Linux, networking, and secure apps.</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Sparkles size={16} />
                    <span className="mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Status</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-200">Open to internships and collaboration-focused conversations.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={portfolio.socialLinks.email} className="button-primary">
                <Mail size={18} />
                Email Me
              </a>
              <a href={resumeHref} download={portfolio.resume.downloadName} className="button-secondary">
                <FileDown size={18} />
                Download Resume
              </a>
              <a
                href={portfolio.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <BriefcaseBusiness size={18} />
                Start on LinkedIn
              </a>
              <a
                href={portfolio.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <FolderGit2 size={18} />
                Review GitHub Work
              </a>
              <a
                href={portfolio.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <Camera size={18} />
                Instagram
              </a>
              <a
                href={portfolio.socialLinks.threads}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <AtSign size={18} />
                Threads
              </a>
              <a
                href={portfolio.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <MessageSquare size={18} />
                X
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="glass-card rounded-[30px] p-6 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input className="input-shell" type="text" name="name" placeholder="Your name" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input className="input-shell" type="email" name="email" placeholder="you@example.com" />
              </label>
            </div>

            <label className="mt-4 block space-y-2 text-sm text-slate-300">
              <span>Subject</span>
              <input className="input-shell" type="text" name="subject" placeholder="Project, internship, or collaboration" />
            </label>

            <label className="mt-4 block space-y-2 text-sm text-slate-300">
              <span>Message</span>
              <textarea
                className="input-shell min-h-40 resize-none"
                name="message"
                placeholder="Tell me about the opportunity or the project you want to discuss."
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button type="submit" className="button-primary">
                <SendHorizonal size={18} />
                Send Inquiry
              </button>
              <span className="text-sm text-slate-400">Demo form on static hosting.</span>
            </div>

            {submitted ? (
              <p className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                Demo submission received. Connect this form to a service whenever you are ready to make it live.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
