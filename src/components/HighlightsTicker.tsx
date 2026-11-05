import React, { useEffect, useState } from 'react';
import { Award, HardHat, Hammer, Users, Wrench } from 'lucide-react';
import { COMPANY_INFO, SAFETY, SERVICES } from '../data/companyData';

// One-line highlights for the top bar, all drawn from existing site content.
const ITEMS = [
  { icon: Wrench, text: SERVICES[0].title },
  { icon: Hammer, text: SERVICES[1].title },
  { icon: HardHat, text: SAFETY.zeros.join(' · ') },
  { icon: Users, text: `${COMPANY_INFO.stats[1].value} ${COMPANY_INFO.stats[1].label}` },
  { icon: Award, text: `${COMPANY_INFO.stats[0].value} — ${COMPANY_INFO.stats[0].label}` },
];

const INTERVAL_MS = 3500;

// Shows one highlight at a time: the current line slides up and out while the next slides in (a fade for reduced motion).
export const HighlightsTicker: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % ITEMS.length), INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [paused]);

  const prev = (index - 1 + ITEMS.length) % ITEMS.length;

  return (
    <div
      className={`relative h-5 overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {ITEMS.map(({ icon: Icon, text }, i) => (
        <span
          key={text}
          aria-hidden={i !== index}
          className={`qd-ticker-item absolute inset-0 flex items-center justify-center gap-1.5 whitespace-nowrap ${
            i === index ? 'is-active' : i === prev ? 'is-prev' : ''
          }`}
        >
          <Icon className="w-3.5 h-3.5 text-qdred-400 shrink-0" />
          <span className="text-white font-medium">{text}</span>
        </span>
      ))}
    </div>
  );
};
