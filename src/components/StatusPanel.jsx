import { motion } from "framer-motion";
import { Bot, BrainCircuit, Radar, ShieldCheck } from "lucide-react";

const icons = {
  bot: Bot,
  brain: BrainCircuit,
  radar: Radar,
  shield: ShieldCheck,
};

function StatusPanel({ items }) {
  return (
    <div className="glass-card rounded-[28px] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.3em] text-cyan-300/80">Focus Areas</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-white">Current Strength Signals</h3>
        </div>
        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
          Live
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => {
          const Icon = icons[item.icon] ?? BrainCircuit;

          return (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-medium text-slate-200">{item.label}</span>
                </div>
                <span className="mono text-xs text-slate-400">{item.value}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/6">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.8, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatusPanel;
