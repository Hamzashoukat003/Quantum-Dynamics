import React from 'react';
import { PageId } from '../types';
import { IMAGES, INTRO, LIFECYCLE, ORG_CHART, PROJECT_MANAGEMENT, SAFETY } from '../data/companyData';
import { ShieldCheck, HardHat, ClipboardCheck, Gauge, FileDown, ArrowRight } from 'lucide-react';

interface HseQualityProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const HseQuality: React.FC<HseQualityProps> = ({ onOpenRfq, onOpenProfile }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-qdblue-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold text-qdred-300 uppercase tracking-widest bg-qdred-600/10 px-3 py-1 rounded border border-qdred-500/30">
              Quality, Health, Safety & Environment
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">QHSE Commitment</h1>
            <p className="text-base text-qdblue-100 leading-relaxed">
              Every QD project is managed within its defined scope, budget, quality and safety parameters — with a dedicated {ORG_CHART.departments[1]} department reporting directly to management.
            </p>
          </div>
        </div>
      </section>

      {/* Three Zeros */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Health & Safety</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-qdblue-900 font-heading">QD Follows the Three “Zeros” Concept</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {SAFETY.zeros.map((z) => (
                  <div key={z} className="p-4 bg-qdred-50 rounded-lg border border-qdred-100 text-center">
                    <div className="text-3xl font-extrabold font-heading text-qdred-600">0</div>
                    <div className="text-xs text-qdblue-900 uppercase mt-1 font-bold">{z}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex items-start gap-2 pt-2">
                <HardHat className="w-5 h-5 text-qdred-600 shrink-0" />
                <span>{SAFETY.ppe}</span>
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 aspect-4/3">
                <img src={IMAGES.hseSite} alt="QD team in red safety coveralls and white helmets at an industrial plant" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Project Management */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl border border-slate-200 border-t-4 border-t-qdred-600 space-y-3">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 text-qdred-600" />
              <h3 className="text-lg font-bold text-qdblue-900 font-heading">Quality Control</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{INTRO.quality}</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200 border-t-4 border-t-qdblue-900 space-y-3">
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-qdblue-900" />
              <h3 className="text-lg font-bold text-qdblue-900 font-heading">Project Management</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{PROJECT_MANAGEMENT}</p>
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="bg-qdblue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-qdred-300 uppercase tracking-widest">Quality at Every Stage</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">From Design to Commissioning</h2>
            <p className="text-xs sm:text-sm text-qdblue-200 mt-2">
              Emphasis on quality at every stage of design, planning and installation is the hallmark of our organisation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {LIFECYCLE.map((step, idx) => (
              <div key={step} className="p-5 bg-qdblue-950/80 rounded-lg border border-qdblue-800 space-y-2">
                <span className="font-mono text-xs font-bold text-qdred-300 bg-qdred-600/15 px-2 py-0.5 rounded">0{idx + 1}</span>
                <h4 className="text-sm font-bold font-heading text-white">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-qdblue-50 border border-qdblue-100 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-qdred-600 shrink-0" />
            <p className="text-sm text-qdblue-900 font-semibold">{INTRO.owners}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenProfile}
              className="px-4 py-2 text-xs font-semibold text-qdblue-900 bg-white border border-qdblue-200 hover:bg-qdblue-100 rounded-md flex items-center gap-1.5"
            >
              <FileDown className="w-4 h-4 text-qdred-600" />
              <span>Company Profile</span>
            </button>
            <button
              onClick={onOpenRfq}
              className="px-4 py-2 text-xs font-semibold text-white bg-qdred-600 hover:bg-qdred-700 rounded-md flex items-center gap-1.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
