import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { VEHICLES, RENTAL_CATEGORIES } from '@/data/mockData';
import { Settings, Fuel, Calendar, MapPin, Users, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FeaturedVehicles() {
  const [activeTab, setActiveTab] = useState('New');
  const tabs = ['New', 'Foreign Used', 'Ghana Used'];
  
  const filteredVehicles = VEHICLES.filter(v => v.type === activeTab).slice(0, 8);

  return (
    <section className="py-12 md:py-20 lg:py-16 md:py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-[1.15]">
              Featured Vehicles for Sale
            </h2>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed">
              Explore our vetted inventory of premium brand-new and certified pre-owned vehicles with complete mechanical inspection reports.
            </p>
          </div>
          
          {/* Tab Filter Pills */}
          <div className="flex bg-white/10 p-1.5 rounded-xl backdrop-blur-md self-start md:self-end border border-white/15 overflow-x-auto no-scrollbar max-w-full">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-5 py-2 rounded-full font-bold text-sm transition-all duration-200 whitespace-nowrap",
                  activeTab === tab 
                    ? "bg-accent text-white shadow-md shadow-accent/30" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map(vehicle => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={vehicle.id}
                className="bg-[#FFFFFF] text-dark rounded-xl overflow-hidden border border-gray-200 hover:border-accent/50 transition-all duration-300 group flex flex-col hover:-translate-y-1.5 hover:shadow-2xl"
              >
                {/* Image & Ribbon Badges */}
                <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Ribbon Status Badge */}
                  <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    <span>For Sale</span>
                  </div>
                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 bg-dark/80 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-bold text-white border border-white/20">
                    {vehicle.year}
                  </div>
                </div>
                
                {/* Vehicle Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-1.5 group-hover:text-accent transition-colors">
                    {vehicle.name}
                  </h3>
                  <div className="text-2xl font-extrabold text-dark mb-5 tracking-tight">
                    {vehicle.price}
                  </div>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6 flex-1 text-xs text-dark/80 border-t border-b border-gray-100 py-3.5">
                    <div className="flex items-center gap-2">
                      <Fuel className="w-4 h-4 text-accent" />
                      <span>{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-accent" />
                      <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{vehicle.mileage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span>Inspected</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <Link 
                      to="/sales" 
                      className="bg-slate-100 hover:bg-slate-200 text-dark py-2.5 font-bold transition-colors text-xs sm:text-sm text-center flex items-center justify-center border border-gray-200 rounded-full"
                    >
                      Quick View
                    </Link>
                    <Link 
                      to="/contact" 
                      className="bg-accent hover:bg-accent/90 text-white py-2.5 font-bold transition-all text-xs sm:text-sm text-center flex items-center justify-center shadow-md shadow-accent/20 rounded-full"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Bottom Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/sales" 
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 sm:px-8 py-3.5 font-bold transition-all border border-white/20 hover:border-white/40 group rounded-full"
          >
            <span>View Full Vehicle Inventory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export function RentalFleet() {
  return (
    <section className="py-12 md:py-20 lg:py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 tracking-tight">
            Premium Car Rental Fleet
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Clean, fully insured vehicles available for daily, weekly, or corporate monthly rentals with airport pickup options.
          </p>
        </div>

        {/* Rental Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RENTAL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.08, duration: 0.45 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/80 hover:border-accent/30 transition-all duration-300 group flex flex-col hover:-translate-y-1.5"
            >
              {/* Category Image */}
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm">
                  Rental
                </div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-extrabold text-white tracking-wide">
                  {category.name}
                </h3>
              </div>
              
              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Pricing Breakdown */}
                <div className="flex justify-between items-end mb-6 pb-5 border-b border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Daily Rate</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-dark">{category.daily}</span>
                      <span className="text-gray-500 font-medium text-sm">/day</span>
                    </div>
                  </div>
                  <div className="text-right text-xs font-semibold text-slate-600 space-y-0.5">
                    <div>Weekly: <span className="text-dark font-bold">{category.weekly}</span></div>
                    <div>Monthly: <span className="text-dark font-bold">{category.monthly}</span></div>
                  </div>
                </div>
                
                {/* Specs Row */}
                <div className="grid grid-cols-3 gap-2 mb-6 py-2 bg-slate-50 rounded-xl p-3 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-dark">{category.seats} Seats</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 border-x border-gray-200">
                    <Settings className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-dark">{category.trans}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Fuel className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-dark">{category.fuel}</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Link 
                  to="/rental" 
                  className="w-full bg-primary hover:bg-secondary text-white py-3.5 font-bold transition-all text-center flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 mt-auto rounded-full"
                >
                  <span>Reserve This Category</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
