import React, { useState } from 'react';
import { PageId } from '../types';
import { INTRO, LIFECYCLE, SERVICES, TECHNICAL_SPECS, TRADES } from '../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: (serviceId?: string) => void;
  onOpenProfile: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenRfq }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-qdblue-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold text-qdred-300 uppercase tracking-widest bg-qdred-600/10 px-3 py-1 rounded border border-qdred-500/30">
              Our Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Mechanical & Civil Contracting, Manufacturing and Erection
            </h1>
            <p className="text-base text-qdblue-100 leading-relaxed">
              QD's main business is general contracting for mechanical and civil works, and equipment manufacturing — with successful experience in building construction, equipment installation and erection, fabrication and welding.
            </p>
          </div>
        </div>
      </section>

      {/* Service Disciplines Browser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/3 bg-white border border-slate-200 rounded-xl p-3 shadow-xs space-y-1">
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">Select Discipline</div>
            {SERVICES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setSelectedServiceId(s.id)}
                className={`w-full text-left px-3.5 py-3 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                  selectedServiceId === s.id ? 'bg-qdblue-900 text-white shadow-xs font-semibold' : 'text-slate-700 hover:bg-qdblue-50'
                }`}
              >
                <span>
                  0{idx + 1}. {s.title}
                </span>
                <ArrowRight className={`w-3.5 h-3.5 ${selectedServiceId === s.id ? 'text-qdred-300' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>

          <div className="w-full lg:w-2/3 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs space-y-6 p-6 sm:p-8">
            <div className="relative rounded-lg overflow-hidden h-64 sm:h-72 bg-slate-100">
              <img
                src={activeService.image}
                alt={activeService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-qdblue-950/80 via-qdblue-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-qdred-300 text-xs font-semibold uppercase tracking-wider">{activeService.tagline}</span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">{activeService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">{activeService.description}</p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-qdblue-900">Scope of Work</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {activeService.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-qdred-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <span className="text-xs text-slate-500">Available as a single discipline or as part of a complete package.</span>
              <button
                onClick={() => onOpenRfq(activeService.id)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-qdred-600 hover:bg-qdred-700 rounded-md transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-qdblue-900 text-white rounded-xl p-8 sm:p-10 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-qdred-300 uppercase tracking-widest">Technical Expertise</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">Notable Scope Delivered</h2>
            <p className="text-xs sm:text-sm text-qdblue-200 mt-1">
              QD engineers have extensive experience in equipment installation, fabrication, erection, sandblasting and painting across many projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECHNICAL_SPECS.map((spec) => (
              <div key={spec.item} className="p-5 bg-qdblue-950 rounded-lg border border-qdblue-800 flex items-center gap-4">
                <div className="text-3xl font-extrabold font-heading text-qdred-400 whitespace-nowrap">
                  {spec.figure}
                  <span className="text-xs font-semibold text-qdblue-200 ml-1">{spec.unit}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{spec.item}</div>
                  <div className="text-[11px] text-qdblue-300">{spec.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trades & Project Lifecycle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-4">
            <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Specialised Training</span>
            <h3 className="text-xl font-bold text-qdblue-900 font-heading">Trades Our Workforce Covers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{INTRO.team}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {TRADES.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-qdblue-50 border border-qdblue-100 text-xs font-semibold text-qdblue-900">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-4">
            <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">From Design to Commissioning</span>
            <h3 className="text-xl font-bold text-qdblue-900 font-heading">Project Lifecycle</h3>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {LIFECYCLE.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-xs font-semibold text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-qdred-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};
