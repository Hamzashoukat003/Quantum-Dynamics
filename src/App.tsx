/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { RfqModal } from './components/RfqModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { Projects } from './pages/Projects';
import { HseQuality } from './pages/HseQuality';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isRfqOpen, setIsRfqOpen] = useState<boolean>(false);
  const [rfqDefaultService, setRfqDefaultService] = useState<string | undefined>(undefined);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  // Sync hash routing if user pastes or clicks browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'services', 'industries', 'projects', 'hse', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfq = (serviceId?: string) => {
    setRfqDefaultService(serviceId);
    setIsRfqOpen(true);
  };

  const handleOpenProfile = () => {
    setIsProfileOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-qdred-600 selection:text-white">
      {/* Primary Top Bar & Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenRfq={() => handleOpenRfq()}
        onOpenProfile={handleOpenProfile}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onOpenRfq={() => handleOpenRfq()}
            onOpenProfile={handleOpenProfile}
          />
        )}
        {currentPage === 'about' && (
          <About
            onNavigate={handleNavigate}
            onOpenRfq={() => handleOpenRfq()}
            onOpenProfile={handleOpenProfile}
          />
        )}
        {currentPage === 'services' && (
          <Services
            onNavigate={handleNavigate}
            onOpenRfq={handleOpenRfq}
            onOpenProfile={handleOpenProfile}
          />
        )}
        {currentPage === 'industries' && (
          <Industries
            onNavigate={handleNavigate}
            onOpenRfq={() => handleOpenRfq()}
            onOpenProfile={handleOpenProfile}
          />
        )}
        {currentPage === 'projects' && (
          <Projects
            onNavigate={handleNavigate}
            onOpenRfq={() => handleOpenRfq()}
            onOpenProfile={handleOpenProfile}
          />
        )}
        {currentPage === 'hse' && (
          <HseQuality
            onNavigate={handleNavigate}
            onOpenRfq={() => handleOpenRfq()}
            onOpenProfile={handleOpenProfile}
          />
        )}
        {currentPage === 'contact' && (
          <Contact
            onNavigate={handleNavigate}
            onOpenRfq={() => handleOpenRfq()}
            onOpenProfile={handleOpenProfile}
          />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenRfq={() => handleOpenRfq()}
        onOpenProfile={handleOpenProfile}
      />

      {/* Global Interactive Modals */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultService={rfqDefaultService}
      />

      <CompanyProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onOpenRfq={() => handleOpenRfq()}
      />
    </div>
  );
}
