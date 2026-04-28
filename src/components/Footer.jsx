import { Code2 } from "lucide-react";
import { portfolio } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="mx-auto mt-6 max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="glass-card flex flex-col gap-4 rounded-[24px] px-5 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-slate-200">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
            <Code2 size={18} />
          </span>
          <div>
            <p className="font-display text-base font-semibold text-white">{portfolio.brand}</p>
            <p className="text-xs text-slate-400">Cybersecurity, AI/ML, secure web apps, Linux, networking, and automation with recruiter-ready presentation.</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-xs sm:text-right">
          <p>&copy; {new Date().getFullYear()} Mokshith H S. All rights reserved.</p>
          <p>Built with React, Vite, Tailwind CSS, and motion-driven UI.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
