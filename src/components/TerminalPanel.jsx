import { useEffect, useState } from "react";

const typedLine = "Mokshith H S - Cybersecurity & AI Learner";
const terminalPrompt = "mokshith@mokshith-hs:~$";

const terminalLines = [
  { prompt: terminalPrompt, command: "whoami", accent: "text-emerald-300" },
  { output: typedLine },
  {
    prompt: terminalPrompt,
    command: "cat mission.txt",
    accent: "text-cyan-300",
  },
  { output: "Building secure, intelligent, and real-world technology solutions." },
  { prompt: terminalPrompt, command: "ls focus", accent: "text-violet-300" },
  { output: "cybersecurity  ai-automation  secure-web  linux  networking" },
];

function TerminalPanel() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let timeoutId;
    let cancelled = false;

    const loopTyping = () => {
      let index = 0;
      setTypedText(typedLine);

      const step = () => {
        if (cancelled) {
          return;
        }

        setTypedText(typedLine.slice(0, index));

        if (index <= typedLine.length) {
          index += 1;
          timeoutId = window.setTimeout(step, 28);
          return;
        }

        timeoutId = window.setTimeout(() => {
          setTypedText("");
          loopTyping();
        }, 3200);
      };

      timeoutId = window.setTimeout(step, 1400);
    };

    loopTyping();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="glass-card relative overflow-hidden rounded-[28px] p-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="mono text-[11px] uppercase tracking-[0.28em] text-slate-400">
          Mokshith H S Terminal
        </div>
      </div>

      <div className="space-y-3 rounded-[22px] border border-white/8 bg-slate-950/70 p-4">
        {terminalLines.map((line, index) =>
          line.output ? (
            <p key={`${line.output}-${index}`} className="mono text-sm leading-7 text-slate-300">
              {line.output === typedLine ? (
                <>
                  {typedText}
                  <span className="terminal-cursor">_</span>
                </>
              ) : (
                line.output
              )}
            </p>
          ) : (
            <div key={`${line.command}-${index}`} className="mono flex flex-wrap items-center gap-2 text-sm">
              <span className="text-slate-500">{line.prompt}</span>
              <span className={line.accent}>{line.command}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default TerminalPanel;
