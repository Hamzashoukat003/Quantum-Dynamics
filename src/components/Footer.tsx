import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, INDUSTRIES, REGISTRATION, SERVICES, telHref } from '../data/companyData';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, FileDown, ArrowUpRight, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRfq, onOpenProfile }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-qdblue-950 text-qdblue-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top CTA Band */}
        <div className="bg-gradient-to-r from-qdblue-900 via-qdblue-800 to-qdblue-900 border border-qdblue-700 rounded-xl p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-qdred-300 text-xs font-bold uppercase tracking-wider">
              Engineering the Future
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1 mb-2">
              Have an Upcoming Project or Tender?
            </h3>
            <p className="text-sm text-qdblue-200">
              Send us your scope, drawings or bill of quantities and the QD team will get back to you.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenRfq}
              className="px-5 py-3 text-sm font-semibold text-white bg-qdred-600 rounded-md hover:bg-qdred-500 transition-colors shadow-md flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenProfile}
              className="px-4 py-3 text-sm font-medium text-white bg-qdblue-800 border border-qdblue-700 rounded-md hover:bg-qdblue-700 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 text-qdred-300" />
              <span>Company Profile</span>
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-qdblue-800">
          {/* Col 1: Corporate Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md p-1.5">
                <Logo className="h-8 w-auto" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white font-heading tracking-tight">
                  QUANTUM DYNAMICS
                </h4>
                <p className="text-[11px] text-qdblue-300 uppercase tracking-wider font-semibold">
                  Limited
                </p>
              </div>
            </div>
            <p className="text-xs text-qdblue-200 leading-relaxed">
              General contractor for mechanical and civil works, and equipment manufacturing — serving oil & gas, chemical, power, cement, fertilizer, infrastructure and food industries.
            </p>
            <div className="pt-2 text-xs text-qdblue-200 space-y-1">
              {REGISTRATION.slice(1, 4).map((r) => (
                <div key={r.label}>
                  <span className="text-white font-semibold">{r.label}</span> {r.value}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-qdred-300 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Business Sectors */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Business Sectors
            </h4>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES.map((ind) => (
                <li key={ind.id}>
                  <button
                    onClick={() => handleNav('industries')}
                    className="hover:text-qdred-300 transition-colors text-left"
                  >
                    {ind.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Main Office
            </h4>
            <div className="space-y-3 text-xs text-qdblue-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-qdred-400 shrink-0 mt-0.5" />
                <p>{COMPANY_INFO.address}</p>
              </div>
              {COMPANY_INFO.phones.map((p) => (
                <div key={p.label} className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-qdred-400 shrink-0" />
                  <span>
                    <span className="text-qdblue-300">{p.label}: </span>
                    <a href={telHref(p.tel)} className="text-white hover:text-qdred-300 font-mono">
                      {p.tel}
                    </a>
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-qdred-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emailGeneral}`} className="text-white hover:text-qdred-300">
                  {COMPANY_INFO.emailGeneral}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-qdred-400 shrink-0" />
                <span className="text-white">{COMPANY_INFO.domain}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-qdblue-300">
          <p>
            © {new Date().getFullYear()} Quantum Dynamics Limited. All rights reserved. · Powered by{' '}
            <span className="text-white font-semibold">Hamza Shoukat</span>
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">About QD</button>
            <span>·</span>
            <button onClick={() => handleNav('hse')} className="hover:text-white transition-colors">QHSE</button>
            <span>·</span>
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
