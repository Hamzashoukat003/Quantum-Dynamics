import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, telHref } from '../data/companyData';
import { Logo } from './Logo';
import { HighlightsTicker } from './HighlightsTicker';
import { Phone, Mail, BookOpen, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenRfq,
  onOpenProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About QD' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Business Sectors' },
    { id: 'projects', label: 'Experience' },
    { id: 'hse', label: 'QHSE' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-qdblue-900 text-qdblue-100 text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="text-qdred-300 font-semibold uppercase tracking-wider text-[11px]">Web:</span>
              <span className="text-white font-mono">{COMPANY_INFO.domain}</span>
            </span>
            <span aria-hidden="true" className="text-qdblue-600">|</span>
            <a
              href={telHref(COMPANY_INFO.phonePrimary)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-qdred-400" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>
            <span aria-hidden="true" className="text-qdblue-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.emailGeneral}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-qdred-400" />
              <span>{COMPANY_INFO.emailGeneral}</span>
            </a>
          </div>
          <HighlightsTicker className="hidden xl:block flex-1 mx-6" />
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-qdblue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-qdred-400" />
              <span>PEC Registration No. Mech/53430</span>
            </span>
            <button
              onClick={onOpenProfile}
              className="qd-profile-cta flex items-center gap-1.5 rounded-full bg-qdred-600 px-3 py-1 font-semibold text-white hover:bg-qdred-500 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-0.5 qd-brand-rule" />

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-8">
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-qdred-600 rounded"
        >
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto" />
            <div>
              <div className="text-lg font-extrabold tracking-tight text-qdblue-900 font-heading leading-tight whitespace-nowrap shrink-0 group-hover:text-qdred-600 transition-colors">
                QUANTUM DYNAMICS LIMITED
              </div>
              <div className="text-right text-[10px] uppercase font-semibold text-slate-500 tracking-wider whitespace-nowrap">
                Engineering the Future
              </div>
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 font-medium ${
                  isActive
                    ? 'text-qdblue-900 border-qdred-600 font-semibold'
                    : 'text-slate-600 border-transparent hover:text-qdblue-900 hover:border-qdblue-200'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenRfq}
            className="px-4 py-2 text-xs font-semibold text-white bg-qdred-600 rounded-md hover:bg-qdred-700 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-qdblue-900 hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-qdred-50 text-qdred-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-qdred-600 rounded-md hover:bg-qdred-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Request a Quote / Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProfile();
              }}
              className="w-full py-2 px-4 text-xs font-medium text-qdblue-900 bg-qdblue-50 rounded-md hover:bg-qdblue-100 transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-qdred-600" />
              <span>Profile</span>
            </button>

            <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-qdred-600" />
                <a href={telHref(COMPANY_INFO.phonePrimary)} className="font-mono">{COMPANY_INFO.phonePrimary}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-qdred-600" />
                <a href={`mailto:${COMPANY_INFO.emailGeneral}`}>{COMPANY_INFO.emailGeneral}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
