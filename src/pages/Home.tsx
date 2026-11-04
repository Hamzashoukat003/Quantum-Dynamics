import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, EXPERIENCE, IMAGES, INDUSTRIES, INTRO, SAFETY, SECTOR_LABELS, SERVICES, TECHNICAL_SPECS } from '../data/companyData';
import {
  ArrowRight,
  ShieldCheck,
  FileDown,
  Flame,
  Zap,
  FlaskConical,
  Wheat,
  Building,
  CheckCircle2,
  ChevronRight,
  Users,
  Factory,
  MapPin,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

const SECTOR_ICONS: Record<string, React.ElementType> = {
  'oil-gas': Flame,
  'chemical-petrochemical': FlaskConical,
  'power-cement': Zap,
  'fertilizer-infrastructure': Building,
  food: Wheat,
};

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenRfq, onOpenProfile }) => {
  const go = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featured = [EXPERIENCE[0], EXPERIENCE[15], EXPERIENCE[20], EXPERIENCE[29], EXPERIENCE[22], EXPERIENCE[16]];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative bg-qdblue-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-qdred-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-qdred-300 uppercase tracking-widest bg-qdred-600/10 px-3 py-1 rounded border border-qdred-500/30">
                <Factory className="w-3.5 h-3.5" />
                <span>Quantum Dynamics Limited</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white text-balance">
                Engineering the Future
              </h1>

              <p className="text-base sm:text-lg text-qdblue-100 leading-relaxed max-w-2xl">
                General contractor for mechanical and civil works and equipment manufacturing — delivering equipment installation, fabrication, erection of piping networks, tanks and steel structures across Pakistan.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenRfq}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-qdred-600 hover:bg-qdred-500 rounded-md transition-all shadow-lg shadow-qdred-950/40 flex items-center gap-2"
                >
                  <span>Request a Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenProfile}
                  className="px-5 py-3.5 text-sm font-semibold text-white bg-qdblue-900 hover:bg-qdblue-800 border border-qdblue-700 rounded-md transition-all flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4 text-qdred-300" />
                  <span>Company Profile</span>
                </button>
              </div>

              <div className="pt-4 border-t border-qdblue-800 flex flex-wrap items-center gap-6 text-xs text-qdblue-200">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-qdred-400" />
                  <span>PEC Reg. Mech/53430</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-qdred-400" />
                  <span>400+ trained workers & technicians</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-qdred-400" />
                  <span>Sadiqabad, Rahimyarkhan</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-qdblue-700 shadow-2xl bg-qdblue-900 aspect-16/10 sm:aspect-4/3">
                <img
                  src={IMAGES.hero}
                  alt="Industrial plant with piping and steel structures"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-qdblue-950 via-qdblue-950/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-qdblue-900/90 backdrop-blur-md rounded-lg border border-qdblue-700 text-xs">
                  <div className="text-qdred-300 font-semibold mb-1">Three Zeros Safety Concept</div>
                  <p className="text-qdblue-100 text-[11px]">{SAFETY.zeros.join(' · ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div className="bg-qdblue-900 border-t border-qdblue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left border-l-0 sm:border-l sm:first:border-l-0 border-qdblue-700 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-qdblue-200 uppercase tracking-wider font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-1 qd-brand-rule" />
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Brief Introduction</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-qdblue-900 font-heading tracking-tight">
              A Construction Company with a Distinct Position in the Market
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">{INTRO.ambition}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{INTRO.founders}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{INTRO.blessing}</p>
            <button
              onClick={() => go('about')}
              className="text-xs font-semibold text-qdblue-900 hover:text-qdred-600 transition-colors flex items-center gap-1.5"
            >
              <span>More about QD</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg aspect-4/3">
              <img src={IMAGES.siteTeam} alt="Construction team on site" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">What We Do</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-qdblue-900 font-heading tracking-tight mt-1">
              Our Capabilities
            </h2>
          </div>
          <button
            onClick={() => go('services')}
            className="text-xs font-semibold text-qdblue-900 hover:text-qdred-600 transition-colors flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-qdred-600 text-white text-[10px] font-mono px-2 py-0.5 rounded font-semibold">
                  0{index + 1}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-qdblue-900 font-heading group-hover:text-qdred-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{service.tagline}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-end text-xs">
                  <button
                    onClick={() => go('services')}
                    className="text-xs font-semibold text-qdblue-800 hover:text-qdred-600 transition-colors flex items-center gap-1"
                  >
                    <span>Capabilities</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Sectors */}
      <section className="bg-qdblue-900 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-qdred-300 uppercase tracking-widest">Business Sectors</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Sectors We Serve
            </h2>
            <p className="text-xs sm:text-sm text-qdblue-200 mt-2">{INTRO.established}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((ind) => {
              const Icon = SECTOR_ICONS[ind.id] ?? Factory;
              return (
                <button
                  key={ind.id}
                  onClick={() => go('industries')}
                  className="text-left p-5 bg-qdblue-950/70 border border-qdblue-800 rounded-lg space-y-3 hover:border-qdred-500/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-qdred-600/15 text-qdred-300 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-white">{ind.title}</h3>
                  <p className="text-[11px] text-qdblue-300 leading-relaxed">
                    {ind.references.length > 0 ? ind.references.slice(0, 3).join(' · ') : 'Listed among QD’s business sectors'}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 pb-4 border-b border-slate-200">
          <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Technical Expertise</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-qdblue-900 font-heading tracking-tight mt-1">
            Work Our Engineers Have Delivered
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {TECHNICAL_SPECS.map((spec) => (
            <div key={spec.item} className="bg-white border border-slate-200 rounded-lg p-4 border-t-4 border-t-qdred-600">
              <div className="text-2xl font-extrabold font-heading text-qdblue-900">
                {spec.figure} <span className="text-xs font-semibold text-qdred-600">{spec.unit}</span>
              </div>
              <div className="text-xs font-bold text-slate-800 mt-1">{spec.item}</div>
              <div className="text-[11px] text-slate-500">{spec.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Experience of Key Personnel</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-qdblue-900 font-heading tracking-tight mt-1">
              Selected Project References
            </h2>
          </div>
          <button
            onClick={() => go('projects')}
            className="text-xs font-semibold text-qdblue-900 hover:text-qdred-600 transition-colors flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View All {EXPERIENCE.length} References</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((p) => (
            <div key={p.title} className="bg-white border border-slate-200 rounded-lg p-5 flex gap-4 items-start">
              <div className="w-1 self-stretch rounded bg-qdred-600" />
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-qdred-600 tracking-wider">
                  {SECTOR_LABELS[p.sector]}
                </span>
                <h3 className="text-sm font-bold text-qdblue-900 font-heading leading-snug">
                  {p.client && p.client !== p.title ? `${p.client} — ` : ''}
                  {p.title}
                </h3>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {p.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-qdblue-50 border border-qdblue-100 rounded-xl p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Health & Safety</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-qdblue-900 font-heading">
                The Three “Zeros” Concept
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">{SAFETY.ppe}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {SAFETY.zeros.map((z) => (
                  <div key={z} className="flex items-center gap-2 text-xs font-semibold text-qdblue-900">
                    <CheckCircle2 className="w-4 h-4 text-qdred-600 shrink-0" />
                    <span>{z}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-lg border border-slate-200 shadow-xs text-center space-y-3">
              <div className="text-4xl font-extrabold font-heading text-qdblue-900">0 · 0 · 0</div>
              <div className="text-xs font-bold uppercase text-qdred-600 tracking-wider">Injury · Accident · Life Loss</div>
              <button
                onClick={() => go('hse')}
                className="w-full py-2 text-xs font-semibold text-qdblue-900 bg-qdblue-50 hover:bg-qdblue-100 rounded transition-colors"
              >
                View QHSE Commitment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-qdblue-900 text-white rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border-l-8 border-qdred-600">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold font-heading text-white">Planning Your Next Project?</h3>
            <p className="text-xs sm:text-sm text-qdblue-200 max-w-xl">
              Timely completion of every project receives our highest priority. Contact QD to discuss your requirements.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRfq}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-qdred-600 hover:bg-qdred-500 rounded-md transition-colors shadow-md"
            >
              Request a Quotation
            </button>
            <button
              onClick={() => go('contact')}
              className="px-4 py-3 text-xs sm:text-sm font-medium text-white bg-qdblue-800 hover:bg-qdblue-700 rounded-md transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
