import React, { useEffect, useRef, useState } from 'react';
import { COMPANY_INFO, PROFILE_BOOK, PROFILE_PDF } from '../data/companyData';
import { Logo } from './Logo';
import { X, FileDown, ExternalLink, Loader2 } from 'lucide-react';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: () => void;
}

// Shows the interactive flipbook company profile (page turns, zoom, thumbnails, search) in a near full-screen window.
export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({ isOpen, onClose, onOpenRfq }) => {
  const [loaded, setLoaded] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);

  // Hand keyboard focus to the flipbook so arrow keys turn its pages, and keep Esc closing the window from inside it.
  const handleLoad = () => {
    setLoaded(true);
    const win = frame.current?.contentWindow;
    if (!win) return;
    win.focus();
    try {
      win.addEventListener('keydown', (e) => e.key === 'Escape' && onClose());
    } catch {
      /* cross-origin frame: Esc works once focus returns to the page */
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setLoaded(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-qdblue-950/85 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 animate-in fade-in duration-150">
      <div className="bg-white sm:rounded-xl shadow-2xl w-full max-w-[1600px] h-full sm:h-[96vh] flex flex-col overflow-hidden border border-qdblue-800">
        {/* Header Bar */}
        <div className="bg-qdblue-900 text-white px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="bg-white rounded p-1 shrink-0">
              <Logo className="h-7 w-auto" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold font-heading truncate">{COMPANY_INFO.name} — Company Profile</h3>
              <p className="text-[11px] text-qdblue-200 hidden sm:block">{COMPANY_INFO.tagline} · {COMPANY_INFO.domain}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PROFILE_BOOK}
              target="_blank"
              rel="noopener"
              title="Open in a new tab"
              className="p-2 text-qdblue-200 hover:text-white hover:bg-qdblue-800 rounded transition-colors hidden sm:inline-flex"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_PDF}
              download="QD-Company-Profile.pdf"
              className="px-3 py-1.5 text-xs font-semibold bg-qdred-600 hover:bg-qdred-500 text-white rounded flex items-center gap-1.5 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenRfq();
              }}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-qdblue-700 hover:bg-qdblue-600 rounded transition-colors hidden md:inline-flex"
            >
              Request a Quote
            </button>
            <button
              onClick={onClose}
              title="Close (Esc)"
              className="p-1.5 text-qdblue-200 hover:text-white hover:bg-qdblue-800 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="h-1 qd-brand-rule" />

        {/* Flipbook Viewer */}
        <div className="flex-1 bg-slate-200 relative">
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-qdblue-900">
              <Loader2 className="w-8 h-8 animate-spin text-qdred-600" />
              <span className="text-sm font-semibold">Opening company profile…</span>
            </div>
          )}
          <iframe
            src={PROFILE_BOOK}
            title="QD Company Profile"
            ref={frame}
            onLoad={handleLoad}
            allow="fullscreen"
            allowFullScreen
            className={`w-full h-full border-0 transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  );
};
