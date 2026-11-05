import React from 'react';
import { PageId } from '../types';
import {
  CORE_VALUES,
  IMAGES,
  INTRO,
  LEADERSHIP_TEAM,
  ORG_CHART,
  REGISTRATION,
  STATEMENTS,
  VALUES,
  telHref,
} from '../data/companyData';
import { Compass, Target, Heart, FileDown, Phone, Mail, BadgeCheck } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

const STATEMENT_ICONS = [Compass, Target, Heart];

// Organization chart: outlined boxes joined by connector lines.
const ORG_BOX = 'rounded-lg border-2 border-qdred-500 bg-white shadow-sm';
const ORG_LINE = 'bg-qdred-500';

export const About: React.FC<AboutProps> = ({ onOpenRfq, onOpenProfile }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-qdblue-950 text-white py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-qdred-300 uppercase tracking-widest bg-qdred-600/10 px-3 py-1 rounded border border-qdred-500/30">
              Executive Information
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              About Quantum Dynamics Limited
            </h1>
            <p className="text-base text-qdblue-100 leading-relaxed">{INTRO.position}</p>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Brief Introduction</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-qdblue-900 font-heading">Who We Are</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{INTRO.ambition}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{INTRO.established}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{INTRO.founders}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{INTRO.blessing}</p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenProfile}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-qdblue-900 hover:bg-qdred-600 rounded-md transition-colors flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                <span>View Company Profile</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-lg aspect-4/3">
              <img
                src={IMAGES.steelFabrication}
                alt="Steel fabrication and welding"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-qdblue-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-bold text-qdred-300 font-heading">400+ Workers & Technicians</span>
                <p className="text-[11px] text-qdblue-100">
                  Specialised training in design, planning, fabrication, erection, insulation, sandblasting and painting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team, Timeliness & Quality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Our Team', body: INTRO.team },
            { title: 'Timely Completion', body: INTRO.timely },
            { title: 'Quality Standards', body: INTRO.quality },
          ].map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-xl border border-slate-200 border-t-4 border-t-qdblue-900 shadow-xs space-y-2">
              <h3 className="text-base font-bold text-qdblue-900 font-heading">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision, Mission, Purpose & Values */}
      <section className="bg-qdblue-50 py-16 border-y border-qdblue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Our Values, Purpose, Vision & Mission</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATEMENTS.map((s, i) => {
              const Icon = STATEMENT_ICONS[i];
              return (
                <div key={s.label} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-3">
                  <div className="w-10 h-10 rounded bg-qdred-50 text-qdred-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-qdblue-900 font-heading">Our {s.label}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.text}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
                <h4 className="text-sm font-bold text-qdblue-900 font-heading">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-qdblue-900 font-heading text-center mb-8">Core Values</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {CORE_VALUES.map((value, i) => (
                <div key={value} className="bg-white p-5 rounded-lg border border-slate-200 text-center space-y-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto text-xs font-bold text-white ${
                      i % 2 === 0 ? 'bg-qdred-600' : 'bg-qdblue-900'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <h4 className="text-sm font-bold text-qdblue-900 font-heading">{value}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Company Organization Structure</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-qdblue-900 font-heading tracking-tight mt-1">
            How QD Is Organised
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl px-4 py-8 sm:p-10 flex flex-col items-center text-center">
          <div className={`${ORG_BOX} px-6 py-3 font-extrabold font-heading text-qdred-600`}>{ORG_CHART.top}</div>
          <div className={`${ORG_LINE} w-0.5 h-7`} />
          <div className={`${ORG_BOX} px-6 py-3 font-extrabold font-heading text-qdblue-900`}>{ORG_CHART.second}</div>
          <div className={`${ORG_LINE} w-0.5 h-7`} />

          {/* Managers reporting to the Vice President */}
          <div className="relative grid w-full max-w-3xl grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
            {/* From the first column's centre to the last's: each column is (100% − 2 × gap) / 3 wide */}
            <div
              className={`${ORG_LINE} hidden sm:block absolute top-0 h-0.5`}
              style={{ left: 'calc((100% - 3rem) / 6)', right: 'calc((100% - 3rem) / 6)' }}
            />
            {ORG_CHART.managers.map((m) => (
              <div key={m} className="flex flex-col items-center">
                <div className={`${ORG_LINE} hidden sm:block w-0.5 h-7`} />
                <div className={`${ORG_BOX} w-full max-w-[220px] min-h-[76px] px-4 py-3 flex items-center justify-center font-extrabold font-heading text-qdred-600`}>
                  {m}
                </div>
              </div>
            ))}
          </div>

          {/* Departments under the Operations Manager (the middle column) */}
          <div className={`${ORG_LINE} hidden sm:block w-0.5 h-8`} />
          <div className={`${ORG_LINE} hidden sm:block w-full max-w-4xl h-0.5`} />
          {/* Stacked on phones, so name the parent instead of drawing a line from the last box */}
          <p className="sm:hidden mt-8 text-xs font-bold uppercase tracking-wider text-qdred-600">
            {ORG_CHART.departmentsUnder} — Departments
          </p>
          <div className="mt-4 sm:mt-8 flex flex-wrap justify-center gap-x-5 gap-y-5 max-w-6xl">
            {ORG_CHART.departments.map((d, i) => (
              <div key={d} className={`${ORG_BOX} px-5 py-3 text-sm font-bold ${i % 2 === 0 ? 'text-qdred-600' : 'text-qdblue-900'}`}>
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Credentials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-qdred-600 uppercase tracking-wider">Leadership</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-qdblue-900 font-heading tracking-tight mt-1">
                Management
              </h2>
            </div>
            {LEADERSHIP_TEAM.map((leader) => (
              <div key={leader.name} className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-qdblue-900 text-white font-heading font-bold flex items-center justify-center shrink-0">
                  {leader.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-qdblue-900 font-heading">{leader.name}</h3>
                  <p className="text-xs font-semibold text-qdred-600">{leader.role}</p>
                  <div className="text-xs text-slate-600 flex flex-wrap gap-x-4 gap-y-1 pt-1">
                    <a href={telHref(leader.phone)} className="flex items-center gap-1 hover:text-qdred-600">
                      <Phone className="w-3.5 h-3.5" /> {leader.phone}
                    </a>
                    <a href={`mailto:${leader.email}`} className="flex items-center gap-1 hover:text-qdred-600">
                      <Mail className="w-3.5 h-3.5" /> {leader.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-qdblue-900 text-white rounded-xl p-8 space-y-5">
            <div>
              <span className="text-xs font-bold text-qdred-300 uppercase tracking-widest">General Information</span>
              <h2 className="text-2xl font-extrabold font-heading text-white mt-1">Company Credentials</h2>
            </div>
            <dl className="divide-y divide-qdblue-700 text-sm">
              {REGISTRATION.map((r) => (
                <div key={r.label} className="py-2.5 flex items-center justify-between gap-4">
                  <dt className="text-qdblue-200 flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-qdred-400" />
                    {r.label}
                  </dt>
                  <dd className="font-mono font-semibold text-white text-right">{r.value}</dd>
                </div>
              ))}
            </dl>
            <button
              onClick={onOpenRfq}
              className="px-4 py-2 text-xs font-semibold text-white bg-qdred-600 hover:bg-qdred-500 rounded transition-colors"
            >
              Request a Quotation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
