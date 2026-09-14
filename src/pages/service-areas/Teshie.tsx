import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import SEO from '../../components/seo/SEO';

export default function Teshie() {
  return (
    <>
      <SEO 
        title="Towing & Recovery Service in Teshie"
        description="Stranded in Teshie? Santa Towing & Garage Services provides emergency towing, breakdown recovery, and roadside assistance right here, day or night. Our team, dispatched through our Accra hub, is equipped to handle cars, SUVs, and light commercial vehicles. Licensed, insured, and trusted across Ghana. Contact us today for prompt service in Teshie."
        canonical="/service-areas/teshie"
        keywords={["towing Teshie", "tow truck Teshie", "roadside assistance Teshie", "car recovery Teshie", "emergency towing Teshie", "breakdown service Teshie"]}
      />
      <div className="pt-24 pb-16 md:pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-12">
            <Breadcrumbs items={[
              { label: 'Towing Services', path: '/towing' },
              { label: 'Service Areas', path: '/service-areas' },
              { label: 'Teshie' }
            ]} />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
                Towing & Recovery Service in Teshie
              </h1>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl border border-dark/10 shadow-sm mb-12">
            <p className="text-dark/80 mb-6 leading-relaxed text-lg">
              Stranded in Teshie? Santa Towing & Garage Services provides emergency towing, breakdown recovery, and roadside assistance right here, day or night. Our team, dispatched through our Accra hub, is equipped to handle cars, SUVs, and light commercial vehicles. Licensed, insured, and trusted across Ghana. Contact us today for prompt service in Teshie.
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
