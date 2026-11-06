import React, { useEffect, useState } from 'react';
import { COMPANY_INFO, INDUSTRIES, SERVICES, openEnquiryEmail, telHref } from '../data/companyData';
import { X, CheckCircle2, Send } from 'lucide-react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const emptyForm = (serviceId?: string) => ({
  fullName: '',
  company: '',
  email: '',
  phone: '',
  serviceId: serviceId || SERVICES[0].id,
  industry: INDUSTRIES[0].id,
  scopeDetails: '',
  scale: '',
  targetDate: '',
});

export const RfqModal: React.FC<RfqModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState(emptyForm(defaultService));
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) setFormData((prev) => ({ ...prev, serviceId: defaultService || prev.serviceId }));
  }, [isOpen, defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openEnquiryEmail(`Request for Quotation — ${formData.company}`, [
      ['Name', formData.fullName],
      ['Company', formData.company],
      ['Email', formData.email],
      ['Phone', formData.phone],
      ['Service', SERVICES.find((s) => s.id === formData.serviceId)?.title ?? ''],
      ['Sector', INDUSTRIES.find((i) => i.id === formData.industry)?.title ?? ''],
      ['Scope / Scale', formData.scale],
      ['Target Start', formData.targetDate],
      ['Scope Summary', formData.scopeDetails],
    ]);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData(emptyForm(defaultService));
    onClose();
  };

  const inputClass =
    'w-full text-base sm:text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-qdred-600 focus:border-qdred-600';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-qdblue-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-300">
        <div className="bg-qdblue-900 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-qdred-300 text-xs font-bold uppercase tracking-wider">Quantum Dynamics Limited</span>
            <h3 className="text-base sm:text-lg font-bold font-heading">Request for Quotation (RFQ)</h3>
          </div>
          <button onClick={handleClose} className="p-1.5 text-qdblue-200 hover:text-white hover:bg-qdblue-800 rounded-md transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="h-1 qd-brand-rule" />

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-qdred-50 text-qdred-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-extrabold text-qdblue-900 font-heading">Your RFQ Email Is Ready</h4>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Your email app has opened with this request addressed to <strong className="text-qdblue-900">{COMPANY_INFO.emailGeneral}</strong>. Attach any drawings or BOQs and press send.
              </p>
            </div>
            <div className="pt-2 flex justify-center">
              <button onClick={handleClose} className="px-5 py-2.5 text-xs font-semibold text-white bg-qdblue-900 hover:bg-qdblue-800 rounded-md transition-colors">
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="text-xs text-slate-500 pb-1">
              Tell us about your project. For urgent requirements, call{' '}
              <a href={telHref(COMPANY_INFO.phonePrimary)} className="text-qdred-600 font-semibold">
                {COMPANY_INFO.phonePrimary}
              </a>
              .
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / Mobile *</label>
                <input
                  type="tel"
                  required
                  placeholder="0300-0000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Service *</label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Business Sector *</label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className={`${inputClass} bg-white`}
                >
                  {INDUSTRIES.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Approximate Scope / Scale</label>
                <input
                  type="text"
                  placeholder="e.g. 2 storage tanks / 500 m piping"
                  value={formData.scale}
                  onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Target Start</label>
                <input
                  type="text"
                  placeholder="e.g. Next quarter / shutdown date"
                  value={formData.targetDate}
                  onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Project Scope Summary *</label>
              <textarea
                required
                rows={3}
                placeholder="Site location, materials and expected contractor scope..."
                value={formData.scopeDetails}
                onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                className={inputClass}
              />
            </div>

            <div className="pt-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 border-t border-slate-100">
              <span className="text-[11px] text-slate-500">Opens your email app addressed to {COMPANY_INFO.emailGeneral}</span>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold text-white bg-qdred-600 hover:bg-qdred-700 rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Send RFQ</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
