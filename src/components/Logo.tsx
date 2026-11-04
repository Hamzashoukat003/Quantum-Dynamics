import React from 'react';
import qdMark from '../assets/qd-mark.svg';

interface LogoProps {
  className?: string;
}

// The QD mark (red Q, blue D, grey swoosh). On dark backgrounds, place it on a white tile so the blue D stays visible.
export const Logo: React.FC<LogoProps> = ({ className = 'h-9 w-auto' }) => (
  <img src={qdMark} alt="QD — Quantum Dynamics Limited" className={className} />
);
