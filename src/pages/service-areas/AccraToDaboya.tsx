import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import SEO from '../../components/seo/SEO';

export default function AccraToDaboya() {
  return (
    <>
      <SEO 
        title="Accra to Daboya Towing & Vehicle Recovery Service"
        description="Need a tow from Accra to Daboya? Santa Towing & Garage Services provides dependable long-distance towing and vehicle recovery on this route, any time of day or night. Our fully licensed and insured team ensures your vehicle is transported safely and efficiently. Contact us now for fast, professional service between Accra and Daboya."
        canonical="/service-areas/accra-to-daboya"
        keywords={["towing Accra to Daboya", "Accra Daboya towing service", "tow truck Accra", "vehicle recovery Accra Daboya", "long distance towing Ghana"]}
      />
      <div className="pt-24 pb-16 md:pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-12">
            <Breadcrumbs items={[
              { label: 'Towing Services', path: '/towing' },
              { label: 'Service Areas', path: '/service-areas' },
              { label: 'Accra to Daboya' }
            ]} />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
                Accra to Daboya Towing & Vehicle Recovery Service
              </h1>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl border border-dark/10 shadow-sm mb-12">
            <p className="text-dark/80 mb-6 leading-relaxed text-lg">
              Need a tow from Accra to Daboya? Santa Towing & Garage Services provides dependable long-distance towing and vehicle recovery on this route, any time of day or night. Our fully licensed and insured team ensures your vehicle is transported safely and efficiently. Contact us now for fast, professional service between Accra and Daboya.
            </p>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-dark/5">
              <h3 className="text-xl font-bold text-dark mb-4">Need Immediate Assistance?</h3>
              <p className="text-dark/70 mb-6">Call or WhatsApp us now to book your tow.</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="tel:0244753849" className="flex items-center justify-center gap-3 bg-primary hover:bg-dark text-white px-6 py-4 font-bold transition-colors w-full rounded-full">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a href="https://wa.me/233244753849" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-dark text-white px-6 py-4 font-bold transition-colors w-full rounded-full">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
