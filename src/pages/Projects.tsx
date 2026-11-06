import React, { useState } from 'react';
import { ExperienceSector, PageId } from '../types';
import { CLIENTS, EXPERIENCE, PROJECT_MANAGEMENT, SECTOR_LABELS } from '../data/companyData';
import { Search, MapPin, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenRfq, onOpenProfile }) => {
  const [activeCategory, setActiveCategory] = useState<ExperienceSector | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { id: ExperienceSector | 'all'; label: string }[] = [
    { id: 'all', label: 'All References' },
    ...(Object.keys(SECTOR_LABELS) as ExperienceSector[]).map((id) => ({ id, label: SECTOR_LABELS[id] })),
  ];

  const query = searchQuery.toLowerCase();
  const filteredProjects = EXPERIENCE.filter((proj) => {
    const matchesCat = activeCategory === 'all' || proj.sector === activeCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(query) ||
      (proj.client ?? '').toLowerCase().includes(query) ||
      proj.location.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-qdblue-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold text-qdred-300 uppercase tracking-widest bg-qdred-600/10 px-3 py-1 rounded border border-qdred-500/30">
              Experience of Key Personnel
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Project Experience
            </h1>
            <p className="text-base text-qdblue-100 leading-relaxed">{PROJECT_MANAGEMENT}</p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                    activeCategory === cat.id ? 'bg-qdblue-900 text-white shadow-xs' : 'text-slate-600 bg-slate-100 hover:bg-qdblue-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by client, project or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-base sm:text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-qdred-600"
              />
            </div>
          </div>

          <div className="text-xs text-slate-500 pt-1 border-t border-slate-100 flex items-center justify-between">
            <span>
              Showing <strong className="text-qdblue-900">{filteredProjects.length}</strong> of {EXPERIENCE.length} project references
            </span>
            <button onClick={onOpenProfile} className="text-qdred-600 hover:text-qdred-700 font-semibold">
              Company Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filteredProjects.map((project) => (
            <div
              key={`${project.client ?? ''}-${project.title}`}
              className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs hover:shadow-md hover:border-qdred-200 transition-all flex flex-col justify-between gap-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-bold text-qdred-600 tracking-wider">{SECTOR_LABELS[project.sector]}</span>
                  {project.client && (
                    <span className="text-[10px] font-mono font-bold text-white bg-qdblue-900 px-2 py-0.5 rounded">{project.client}</span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-qdblue-900 font-heading leading-snug">{project.title}</h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-qdred-600 shrink-0" />
                <span className="truncate">{project.location}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-sm text-slate-500 py-12">No references match your search.</div>
        )}
      </section>

      {/* Organisations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-qdblue-900 text-white rounded-xl p-8 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-qdred-300 uppercase tracking-widest">Organisations</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">Where Our People Have Worked</h2>
            </div>
            <button
              onClick={onOpenRfq}
              className="px-4 py-2 text-xs font-semibold text-white bg-qdred-600 hover:bg-qdred-500 rounded transition-colors flex items-center gap-1.5 self-start"
            >
              <span>Discuss a Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="qd-slider overflow-hidden rounded-lg bg-white py-5">
            <div className="qd-slider-track">
              {[0, 1].map((copy) => (
                <ul key={copy} className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14" aria-hidden={copy === 1}>
                  {CLIENTS.map((c) => (
                    <li key={c.name} className="flex h-10 shrink-0 items-center sm:h-14">
                      {c.logo ? (
                        <img src={c.logo} alt={copy === 0 ? c.name : ''} title={c.name} className="h-full w-auto max-w-[180px] object-contain sm:max-w-[220px]" />
                      ) : (
                        <span className="whitespace-nowrap text-sm font-bold text-qdblue-900 sm:text-base">{c.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
