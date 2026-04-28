import { useState } from "react";
import { BriefcaseBusiness, FolderGit2, MapPin, SendHorizonal } from "lucide-react";
import { portfolio } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

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
            description="This form is intentionally UI-only for GitHub Pages. It gives you a professional contact surface now, and you can later connect it to Formspree, Netlify Forms, or your own backend."
          />

          <div className="mt-8 space-y-4">
            <div className="glass-card rounded-[24px] p-5">
              <p className="mono text-xs uppercase tracking-[0.28em] text-cyan-300/80">Base location</p>
              <div className="mt-3 flex items-center gap-3 text-slate-300">
                <MapPin size={18} className="text-cyan-300" />
                <span>{portfolio.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={portfolio.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                <BriefcaseBusiness size={18} />
                Contact on LinkedIn
              </a>
              <a
                href={portfolio.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <FolderGit2 size={18} />
                View GitHub
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
                Submit UI Preview
              </button>
              <span className="text-sm text-slate-400">No backend connected yet.</span>
            </div>

            {submitted ? (
              <p className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                Form preview submitted. Connect this UI to a form service whenever you are ready.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
