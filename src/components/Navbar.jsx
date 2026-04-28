import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, FileDown, Menu, X } from "lucide-react";

function Navbar({ links, activeSection, brand, resume }) {
  const [isOpen, setIsOpen] = useState(false);
  const resumeHref = `${import.meta.env.BASE_URL}${resume.file}`;

  const scrollToSection = (event, id) => {
    if (event) {
      event.preventDefault();
    }

    if (window.history?.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }

    handleClose();

    window.requestAnimationFrame(() => {
      const target = document.getElementById(id);

      if (!target) {
        return;
      }

      const navOffset = window.innerWidth >= 1024 ? 122 : 108;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset;
      const shouldJumpImmediately = window.innerWidth < 768;
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;

      if (shouldJumpImmediately) {
        document.documentElement.style.scrollBehavior = "auto";
      }

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: shouldJumpImmediately ? "auto" : "smooth",
      });

      if (shouldJumpImmediately) {
        window.requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = previousScrollBehavior;
        });
      }
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pb-4 pt-4 sm:px-6 lg:px-8">
          <div className="glass-card flex items-center justify-between rounded-[24px] px-4 py-3.5">
            <a
              href="#home"
              onClick={(event) => scrollToSection(event, "home")}
              className="flex items-center gap-3 text-sm font-semibold text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-white/5 text-cyan-300 shadow-[0_0_28px_rgba(56,189,248,0.16)]">
                <Code2 size={20} />
              </span>
              <span className="font-display text-base tracking-wide">{brand}</span>
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => scrollToSection(event, link.id)}
                  className={`nav-link ${activeSection === link.id ? "text-cyan-300" : "text-slate-300"}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={resumeHref}
                download={resume.downloadName}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                Resume
                <FileDown size={16} />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-white transition hover:border-cyan-300/50 hover:text-cyan-200 lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-[5.8rem] z-40 rounded-[24px] border border-white/12 bg-slate-950/95 p-5 shadow-[0_24px_100px_rgba(2,8,24,0.8)] backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => scrollToSection(null, link.id)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    activeSection === link.id
                      ? "bg-cyan-400/10 text-cyan-200"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <a
              href={resumeHref}
              download={resume.downloadName}
              onClick={handleClose}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
            >
              Resume Download Slot
              <FileDown size={16} />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
