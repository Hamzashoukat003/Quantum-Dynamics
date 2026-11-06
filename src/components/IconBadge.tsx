import React from 'react';
import type { LucideIcon } from 'lucide-react';

// Icon in a glowing round red badge (styles in index.css). The delay staggers the glow so it travels along a row of
// badges; "lg" is the larger footer size.
export const IconBadge: React.FC<{ icon: LucideIcon; delay?: number; size?: 'sm' | 'lg' }> = ({
  icon: Icon,
  delay = 0,
  size = 'sm',
}) => (
  <span className={`qd-icon-badge ${size === 'lg' ? 'qd-icon-badge--lg' : ''}`} style={{ animationDelay: `${delay}s` }}>
    <Icon />
  </span>
);
