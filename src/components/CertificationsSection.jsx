import { BadgeCheck, ShieldCheck } from "lucide-react";
import { certifications } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function CertificationsSection() {
  return (
    <section id="certifications" data-section className="section-shell px-5 py-10 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          eyebrow="Certifications"
          title="Industry-backed learning milestones that reinforce the security foundation."
          description="The certification section is designed to look polished in applications while staying easy to expand with certificate links, dates, or credential IDs later."
        />
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {certifications.map((certificate, index) => (
          <Reveal key={certificate.title} delay={0.05 * index}>
            <article className="glass-card rounded-[26px] p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <p className="mono text-xs uppercase tracking-[0.28em] text-slate-400">{certificate.issuer}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">{certificate.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{certificate.detail}</p>
                  </div>
                </div>

                <span className="status-pill">
                  <BadgeCheck size={14} />
                  Completed
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;
