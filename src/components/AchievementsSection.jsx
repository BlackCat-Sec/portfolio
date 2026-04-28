import { BriefcaseBusiness, Sparkles, Trophy } from "lucide-react";
import { achievements } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = {
  briefcase: BriefcaseBusiness,
  spark: Sparkles,
  trophy: Trophy,
};

function AchievementsSection() {
  return (
    <section id="achievements" data-section className="section-shell px-5 py-10 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Signals of momentum, consistency, and practical problem solving."
          description="This section keeps the focus on growth and readiness: hackathon exposure, professional opportunity, and ongoing technical learning across cybersecurity, Linux, networking, and AI."
        />
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = icons[achievement.icon] ?? Sparkles;

          return (
            <Reveal key={achievement.title} delay={0.06 * index}>
              <article className="glass-card rounded-[28px] p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                    <Icon size={22} />
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                    {achievement.signal}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">{achievement.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{achievement.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default AchievementsSection;
