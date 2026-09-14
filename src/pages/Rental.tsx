import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Car, Search, Users, Settings, Fuel, CheckCircle2, ShieldCheck, Clock, CreditCard, FileText, Map, Baby, UserPlus, Shield, Briefcase, ChevronDown, Star, ArrowRight } from 'lucide-react';
import ScrollToFooterArrow from '@/components/ui/ScrollToFooterArrow';
import { cn } from '@/lib/utils';
import { RENTAL_CATEGORIES } from '@/data/mockData';
import SEO from '@/components/seo/SEO';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const RENTAL_VEHICLES = [
  { id: 1, name: 'Toyota Corolla 2023', category: 'Sedan', daily: 'GH₵ 600', weekly: 'GH₵ 3,800', monthly: 'GH₵ 14,000', seats: 5, trans: 'Automatic', fuel: 'Petrol', image: 'https://i.ibb.co/KcZkH37Y/Image-3-Sedan-Toyotta-Corolla.jpg' },
  { id: 2, name: 'Kia Sportage 2024', category: 'SUV', daily: 'GH₵ 900', weekly: 'GH₵ 5,800', monthly: 'GH₵ 21,000', seats: 5, trans: 'Automatic', fuel: 'Petrol', image: 'https://i.ibb.co/zVkLKHdN/Image-2-A-SUV-KIA-Sportage-2024-Ratio.png' },
  { id: 3, name: 'Toyota Hilux 2023', category: 'Pickup', daily: 'GH₵ 800', weekly: 'GH₵ 5,000', monthly: 'GH₵ 18,000', seats: 5, trans: 'Automatic', fuel: 'Diesel', image: 'https://i.ibb.co/vC6nfrK8/Image-7-Pickup-Toyota-Hilux-2023.jpg' },
  { id: 4, name: 'Mercedes-Benz E-Class', category: 'Luxury', daily: 'GH₵ 1,500', weekly: 'GH₵ 9,500', monthly: 'GH₵ 35,000', seats: 5, trans: 'Automatic', fuel: 'Premium', image: 'https://i.ibb.co/DH19ffJd/Image-6-Luxury-Mercedes-Benz.jpg' },
  { id: 5, name: 'Hyundai H1 2022', category: 'Van', daily: 'GH₵ 1,100', weekly: 'GH₵ 7,000', monthly: 'GH₵ 25,000', seats: 12, trans: 'Manual', fuel: 'Diesel', image: 'https://i.ibb.co/WpNkptMZ/Image-4-Van-Hyundai-H1-2022.jpg' },
  { id: 6, name: 'Nissan Almera 2021', category: 'Economy', daily: 'GH₵ 400', weekly: 'GH₵ 2,500', monthly: 'GH₵ 9,000', seats: 4, trans: 'Automatic', fuel: 'Petrol', image: 'https://i.ibb.co/Mx8G6vHw/Image-5-Economy-Nissan-Almera-2021.jpg' },
];

const RENTAL_FEATURES = [
  { title: 'Well-Maintained Fleet', icon: Car },
  { title: 'Flexible Rental Periods', icon: Calendar },
  { title: 'Transparent Pricing', icon: CreditCard },
  { title: '24/7 Support', icon: Clock },
  { title: 'Insurance Included', icon: ShieldCheck },
  { title: 'Easy Online Booking', icon: CheckCircle2 },
];

const RENTAL_PROCESS = [
  'Choose a Vehicle', 'Select Dates', 'Confirm Booking', 'Pick Up Your Car', 'Enjoy the Drive'
];

const ADD_ONS = [
  { title: 'GPS Navigation', desc: 'Never get lost with our updated navigation systems.', icon: Map },
  { title: 'Child Seat', desc: 'Safety first for your little ones. Various sizes available.', icon: Baby },
  { title: 'Additional Driver', desc: 'Share the driving responsibilities during your trip.', icon: UserPlus },
  { title: 'Full Insurance Cover', desc: 'Zero excess insurance for complete peace of mind.', icon: Shield },
  { title: 'Chauffeur Service', desc: 'Professional drivers for a relaxed journey.', icon: Briefcase },
];

const RENTAL_FAQS = [
  { q: 'What is the minimum age to rent a car?', a: 'The minimum age is typically 21 years old. Drivers between 21 and 24 may incur a young driver surcharge.' },
  { q: 'What documents do I need?', a: 'You need a valid driver\'s license (held for at least 1 year), a valid ID or passport, and a credit card in the main driver\'s name.' },
  { q: 'How does the deposit work?', a: 'A pre-authorization is placed on your credit card at pick-up to cover the excess and fuel deposit. This is released upon safe return of the vehicle.' },
  { q: 'What is your fuel policy?', a: 'We operate on a full-to-full policy. You receive the car with a full tank and must return it full to avoid refueling charges.' },
  { q: 'Is there a mileage limit?', a: 'Most of our rentals include unlimited mileage, but some specialty vehicles may have a daily limit. This will be clearly stated during booking.' },
];

export default function Rental() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = ['All', 'Economy', 'Sedan', 'SUV', 'Pickup', 'Luxury', 'Van'];
  const filteredVehicles = activeCategory === 'All' 
    ? RENTAL_VEHICLES 
    : RENTAL_VEHICLES.filter(v => v.category === activeCategory);

  return (
    <main className="pt-24 lg:pt-[104px]">
      <SEO title="Premium Car Rentals | Affordable Daily & Weekly Hire | Santa Towing" description="Rent top-quality SUVs, sedans, and economy cars for daily, weekly, or monthly use. Affordable rates and well-maintained vehicles." canonical="/rental" />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-dark/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Vehicle Rentals' }]} />
        </div>
      </div>
      
      {/* 1. Hero Banner */}
      <section className="relative bg-primary overflow-hidden pt-12 pb-32 md:pt-20 md:pb-40">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(https://i.ibb.co/WpyLYZQk/Image-15-Car-Lightening-maintenance.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Drive Your Way - Premium Car Rentals for Every Journey
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/70 mb-8"
            >
              Flexible daily, weekly, and monthly rentals with a modern, well-maintained fleet.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-accent hover:bg-accent/90 text-white px-4 sm:px-8 py-4 font-bold transition-all shadow-lg shadow-accent/30 rounded-full">
                Browse Fleet
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-4 sm:px-8 py-4 font-bold transition-all border border-white/20 rounded-full">
                Book Now
              </button>
            </motion.div>
          </div>

          {/* Quick Search Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 md:p-6 sm:p-8 shadow-2xl relative translate-y-16 md:translate-y-24 max-w-5xl"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end" onSubmit={e => e.preventDefault()}>
               <div className="md:col-span-1">
                <label className="block text-sm font-bold text-dark mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/70" />
                  <input type="text" placeholder="Pickup location" className="w-full pl-10 pr-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                </div>
              </div>
               <div className="md:col-span-1">
                <label className="block text-sm font-bold text-dark mb-2">Pickup Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/70" />
                  <input type="date" className="w-full pl-10 pr-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-dark/70" />
                </div>
              </div>
               <div className="md:col-span-1">
                <label className="block text-sm font-bold text-dark mb-2">Return Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/70" />
                  <input type="date" className="w-full pl-10 pr-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-dark/70" />
                </div>
              </div>
               <div className="md:col-span-1">
                <label className="block text-sm font-bold text-dark mb-2">Vehicle Type</label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/70" />
                  <select className="w-full pl-10 pr-4 py-3 bg-white border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none text-dark/70">
                    <option value="">Any Type</option>
                    <option value="economy">Economy</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>
              </div>
               <div className="md:col-span-2 lg:col-span-1">
                <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 transition-all shadow-md flex items-center justify-center gap-2 rounded-full">
                  <Search className="w-5 h-5" /> Search
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 ">
          <ScrollToFooterArrow />
        </div>
      </section>

      {/* Spacer for overlapping widget */}
      <div className="h-24 md:h-32 bg-white"></div>

      {/* 2. Rental Categories */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">Browse by Category</h2>
            <p className="text-dark/70 text-lg">Find the perfect vehicle size and style for your needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RENTAL_CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-dark/10 transition-all group flex flex-col"
              >
                <div className="aspect-video relative overflow-hidden bg-white">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white tracking-wide">
                    {category.name}
                  </h3>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-end mb-6 pb-6 border-b border-dark/10">
                    <div>
                      <span className="text-sm text-dark/70 font-medium">Starting from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-dark">{category.daily}</span>
                        <span className="text-dark/70 font-medium">/day</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mb-8 flex-1">
                    <div className="flex flex-col items-center gap-1">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-xs font-semibold text-dark/70">{category.seats} Seats</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Settings className="w-5 h-5 text-primary" />
                      <span className="text-xs font-semibold text-dark/70">{category.trans}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-white hover:bg-accent hover:text-white text-dark py-4 font-bold transition-colors rounded-full">
                    View Vehicles
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Rental Vehicles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
                Featured Fleet
              </h2>
              <p className="text-dark/70 text-lg">
                Explore our most popular vehicles available for immediate booking.
              </p>
            </div>
            
            <div className="flex bg-white p-1 rounded-xl border border-dark/20 overflow-x-auto no-scrollbar max-w-full">
              {categories.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={cn(
                    "px-6 py-2.5 rounded-md font-medium transition-all whitespace-nowrap",
                    activeCategory === tab 
                      ? "bg-primary text-white shadow-md" 
                      : "text-dark/70 hover:text-dark hover:bg-white"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredVehicles.map((vehicle) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={vehicle.id}
                  className="bg-white rounded-xl overflow-hidden border border-dark/20 hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-white">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-xl text-xs font-bold shadow-sm">
                      {vehicle.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-4 text-dark">{vehicle.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-y-2 mb-6 pb-6 border-b border-dark/20">
                      <div>
                        <div className="text-sm text-dark/70">Daily</div>
                        <div className="font-bold text-dark">{vehicle.daily}</div>
                      </div>
                      <div>
                        <div className="text-sm text-dark/70">Weekly</div>
                        <div className="font-bold text-dark">{vehicle.weekly}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-8 flex-1">
                      <div className="flex flex-col items-center justify-center p-2 bg-white rounded-xl border border-dark/10">
                        <Users className="w-4 h-4 text-primary mb-1" />
                        <span className="text-xs font-semibold text-dark/70">{vehicle.seats}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 bg-white rounded-xl border border-dark/10">
                        <Settings className="w-4 h-4 text-primary mb-1" />
                        <span className="text-xs font-semibold text-dark/70 truncate w-full text-center">{vehicle.trans}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 bg-white rounded-xl border border-dark/10">
                        <Fuel className="w-4 h-4 text-primary mb-1" />
                        <span className="text-xs font-semibold text-dark/70">{vehicle.fuel}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      <button className="flex-1 bg-white hover:bg-dark/5 text-dark border border-dark/20 py-3 font-bold transition-colors text-sm rounded-full">
                        Quick View
                      </button>
                      <button className="flex-1 bg-accent hover:bg-accent/90 text-white py-3 font-bold transition-colors text-sm shadow-md rounded-full">
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. Why Rent With Us */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Rent With Santa Towing</h2>
            <p className="text-dark/70 text-lg">A hassle-free rental experience designed around you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {RENTAL_FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-accent transition-all group"
                >
                  <Icon className="w-10 h-10 mx-auto text-primary group-hover:text-white mb-4 transition-colors" />
                  <h3 className="font-bold">{feature.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. How Renting Works */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">How Renting Works</h2>
            <p className="text-dark/70 text-lg">Simple steps to get you behind the wheel.</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {RENTAL_PROCESS.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-white rounded-xl border-4 border-dark/10 shadow-xl flex items-center justify-center text-xl font-bold text-dark group-hover:border-accent group-hover:text-accent transition-colors relative z-10">
                    {idx + 1}
                  </div>
                  <h4 className="mt-4 font-bold text-dark">{step}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Rental Requirements & Policies */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8">Rental Requirements</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <UserPlus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg">Age Eligibility</h4>
                    <p className="text-dark/70">Drivers must be at least 21 years old. A young driver surcharge applies to drivers under 25.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg">Required Documents</h4>
                    <p className="text-dark/70">Valid driver's license, passport or national ID, and a credit card in the main driver's name.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8">Rental Policies</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                    <CreditCard className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg">Security Deposit</h4>
                    <p className="text-dark/70">A pre-authorization is required at pick-up. Amount varies by vehicle category.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                    <Fuel className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg">Fuel & Mileage</h4>
                    <p className="text-dark/70">Full-to-full fuel policy. Unlimited mileage on standard vehicles; limits apply to luxury classes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Add-Ons & Extras */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Add-Ons & Extras</h2>
            <p className="text-dark/70">Customize your rental for the perfect trip.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-5 gap-6">
            {ADD_ONS.map((addon, idx) => {
              const Icon = addon.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-dark/10 text-center hover:border-accent hover:shadow-md transition-all group"
                >
                  <Icon className="w-10 h-10 mx-auto text-dark mb-4 group-hover:text-accent transition-colors" />
                  <h4 className="font-bold text-dark mb-2">{addon.title}</h4>
                  <p className="text-sm text-dark/70">{addon.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 9. FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Rental FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {RENTAL_FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-dark/20 rounded-xl overflow-hidden shadow-sm bg-white"
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-dark/5 transition-colors rounded-full"
                >
                  <span className="font-bold text-dark pr-4">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-primary transition-transform shrink-0", openIdx === idx && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-dark/70">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Call-to-Action Banner */}
      <section className="py-16 md:py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[100px] -z-10 rounded-xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Hit the Road?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/70">
            Secure your vehicle today and enjoy a premium driving experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-accent hover:bg-accent/90 text-white px-4 sm:px-8 py-4 font-bold transition-all shadow-xl rounded-full">
              Browse Fleet
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-4 sm:px-8 py-4 font-bold transition-all border border-white/20 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
