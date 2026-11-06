import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, LEADERSHIP_TEAM, SERVICES, openEnquiryEmail, telHref } from '../data/companyData';
import { Phone, Mail, MapPin, Send, CheckCircle2, FileDown, Globe, User } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
  onOpenProfile: () => void;
}

const EMPTY_FORM = { name: '', company: '', email: '', phone: '', service: SERVICES[0].id, message: '' };

export const Contact: React.FC<ContactProps> = ({ onOpenProfile }) => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const service = SERVICES.find((s) => s.id === formData.service)?.title ?? '';
    openEnquiryEmail(`Enquiry from ${formData.company || formData.name}`, [
      ['Name', formData.name],
      ['Company', formData.company],
      ['Email', formData.email],
      ['Phone', formData.phone],
      ['Service', service],
      ['Message', formData.message],
    ]);
    setSubmitted(true);
  };

  const inputClass =
    'w-full text-base sm:text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-qdred-600 focus:border-qdred-600';

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-qdblue-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold text-qdred-300 uppercase tracking-widest bg-qdred-600/10 px-3 py-1 rounded border border-qdred-500/30">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">Contact Quantum Dynamics Limited</h1>
            <p className="text-base text-qdblue-100 leading-relaxed">
              Speak directly with our management team or send us your project requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">
              <h3 className="text-lg font-bold font-heading text-qdblue-900 border-b pb-3">Main Office</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-qdred-50 text-qdred-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-qdblue-900 block">Address</strong>
                    <span className="text-slate-600">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-qdred-50 text-qdred-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <strong className="text-qdblue-900 block">Telephone</strong>
                    {COMPANY_INFO.phones.map((p) => (
                      <div key={p.label}>
                        <span className="text-slate-500">{p.label}: </span>
                        <a href={telHref(p.tel)} className="text-qdred-600 hover:text-qdred-700 font-mono font-semibold">
                          {p.tel}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-qdred-50 text-qdred-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-qdblue-900 block">Email</strong>
                    <a href={`mailto:${COMPANY_INFO.emailGeneral}`} className="text-qdred-600 hover:text-qdred-700 font-medium">
                      {COMPANY_INFO.emailGeneral}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-qdred-50 text-qdred-600 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-qdblue-900 block">Website</strong>
                    <span className="text-slate-600 font-mono">{COMPANY_INFO.domain}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={onOpenProfile}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-qdblue-900 bg-qdblue-50 hover:bg-qdblue-100 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4 text-qdred-600" />
                  <span>Company Profile</span>
                </button>
              </div>
            </div>

            {/* Management Contacts */}
            <div className="bg-qdblue-900 text-white rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-qdred-300">Management</h3>
              {LEADERSHIP_TEAM.map((leader) => (
                <div key={leader.name} className="flex items-start gap-3 text-xs">
                  <User className="w-4 h-4 text-qdred-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div className="font-bold text-white text-sm">{leader.name}</div>
                    <div className="text-qdblue-200">{leader.role}</div>
                    <a href={`mailto:${leader.email}`} className="block text-white hover:text-qdred-300">
                      {leader.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-qdred-50 text-qdred-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-qdblue-900">Your Email Is Ready to Send</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Your email app has opened with this enquiry addressed to <strong>{COMPANY_INFO.emailGeneral}</strong>. Press send there to deliver it. If nothing opened, email us directly or call {COMPANY_INFO.phonePrimary}.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(EMPTY_FORM);
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-qdblue-900 hover:bg-qdblue-800 rounded-md"
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b pb-3">
                  <h3 className="text-lg font-bold font-heading text-qdblue-900">Send an Enquiry</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Fields marked with an asterisk (*) are required.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="Organization name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0300-0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Service of Interest *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`${inputClass} bg-white`}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Project location, scope and required timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="pt-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="text-[11px] text-slate-500">
                    Opens your email app addressed to {COMPANY_INFO.emailGeneral}. You can attach drawings or BOQs there.
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-qdred-600 hover:bg-qdred-700 rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-xs shrink-0"
                  >
                    Send Enquiry
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
