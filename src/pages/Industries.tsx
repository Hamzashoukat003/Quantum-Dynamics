import React, { useState } from 'react';
import { PageId } from '../types';
import { FOOTPRINT, INDUSTRIES, INTRO } from '../data/companyData';
import { CheckCircle2, ArrowRight, MapPin } from 'lucide-react';

interface IndustriesProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenRfq }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES[0].id);
  const activeIndustry = INDUSTRIES.find((ind) => ind.id === selectedIndustryId) || INDUSTRIES[0];

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-qdblue-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold text-qdred-300 uppercase tracking-widest bg-qdred-600/10 px-3 py-1 rounded border border-qdred-500/30">
              Business Sectors
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Sectors We Serve
            </h1>
            <p className="text-base text-qdblue-100 leading-relaxed">{INTRO.timely}</p>
          </div>
        </div>
      </section>

      {/* Sector Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {INDUSTRIES.map((ind) => {
            const isActive = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-3.5 rounded-lg border text-center transition-all ${
                  isActive
                    ? 'bg-qdblue-900 text-white border-qdblue-900 shadow-md ring-2 ring-qdred-600'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-qdblue-50'
                }`}
              >
                <span className="text-xs font-bold font-heading">{ind.title}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Sector Profile</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-qdblue-900 font-heading">{activeIndustry.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{activeIndustry.description}</p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 relative">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-qdblue-950/60 to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-qdblue-900">Typical Scope</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {activeIndustry.applications.map((app) => (
                  <li key={app} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-qdred-600 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-qdblue-900">Project References</h4>
              <div className="p-4 bg-qdblue-50 rounded-lg border border-qdblue-100 space-y-2 text-xs">
                {activeIndustry.references.length > 0 ? (
                  <>
                    <div className="text-slate-600">From the experience of QD's key personnel:</div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {activeIndustry.references.map((ref) => (
                        <span key={ref} className="bg-white px-3 py-1.5 rounded border border-slate-200 text-qdblue-900 font-semibold text-xs">
                          {ref}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-slate-600">Food industries are listed among QD's business sectors. Contact us to discuss your requirements.</div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <span className="text-xs text-slate-500">Have a project in this sector?</span>
            <button
              onClick={onOpenRfq}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-qdblue-900 hover:bg-qdred-600 rounded-md transition-colors flex items-center gap-1.5"
            >
              <span>Request a Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footprint */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-qdblue-50 rounded-xl p-8 border border-qdblue-100 space-y-6">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold font-heading text-qdblue-900">Footprint Across Pakistan</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Locations where QD's key personnel have worked.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {FOOTPRINT.map((f) => (
              <div key={f.region} className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                <div className="font-bold text-qdblue-900 font-heading flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-qdred-600" />
                  {f.region}
                </div>
                <div className="text-[11px] text-slate-600 leading-relaxed">{f.places.join(' · ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
