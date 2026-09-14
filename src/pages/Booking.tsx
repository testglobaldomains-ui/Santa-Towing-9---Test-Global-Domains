import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Clock, Calendar, Car, Phone, Mail, MapPin, 
  Truck, Wrench, ShieldCheck, ChevronRight, ChevronLeft, 
  CalendarPlus, Settings, CarTaxiFront, MessageCircle, Info, ChevronDown
} from 'lucide-react';
import ScrollToFooterArrow from '@/components/ui/ScrollToFooterArrow';
import { cn } from '@/lib/utils';
import SEO from '@/components/seo/SEO';

type ServiceType = 'Emergency Towing' | 'Auto Repairs' | 'Car Rental' | 'Vehicle Sales' | 'Fleet Services';

const SERVICES = [
  { id: 'Emergency Towing', icon: Truck, title: 'Emergency Towing', desc: 'Fast, 24/7 roadside recovery' },
  { id: 'Auto Repairs', icon: Wrench, title: 'Auto Repairs', desc: 'Routine & complex mechanical fixes' },
  { id: 'Car Rental', icon: CarTaxiFront, title: 'Car Rental', desc: 'Premium vehicles for any occasion' },
  { id: 'Vehicle Sales', icon: Car, title: 'Vehicle Sales', desc: 'Book a test drive or consultation' },
  { id: 'Fleet Services', icon: ShieldCheck, title: 'Fleet Services', desc: 'B2B maintenance & management' },
];

const FAQS = [
  { q: 'Can I reschedule my booking?', a: 'Yes, you can reschedule your booking up to 24 hours in advance without any penalty. Just contact our support team.' },
  { q: 'What is your cancellation policy?', a: 'Cancellations made 48 hours prior to the appointment are fully refunded. Cancellations within 48 hours may incur a small fee depending on the service.' },
  { q: 'Do I pay at booking or on arrival?', a: 'For most services like repairs and test drives, you pay on arrival or after the diagnostic. Rentals may require a deposit upfront.' },
  { q: 'How will I receive confirmation?', a: 'You will receive an immediate email confirmation with your booking reference, and an SMS reminder 24 hours before your appointment.' },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [selectedService, setSelectedService] = useState<ServiceType | ''>('');
  const [details, setDetails] = useState({ make: '', model: '', year: '', description: '' });
  const [contact, setContact] = useState({ name: '', phone: '', email: '', address: '' });
  const [dateTime, setDateTime] = useState({ date: '', time: '' });

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const canProceed = () => {
    if (step === 1) return selectedService !== '';
    if (step === 2) return true; // Optional fields depending on service
    if (step === 3) return contact.name !== '' && contact.phone !== '' && contact.email !== '';
    if (step === 4) return dateTime.date !== '' && dateTime.time !== '';
    return true;
  };

  if (isConfirmed) {
    return (
      <main className="pt-24 lg:pt-[104px] min-h-screen bg-white">
      <SEO title="Book an Auto Service Online | Santa Towing" description="Easily schedule an appointment for auto repairs, servicing, or vehicle consultation with our certified mechanics." canonical="/booking" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Booking Confirmed!</h1>
          <p className="text-xl text-dark/70 mb-8">
            Thank you, {contact.name}. Your booking for <strong>{selectedService}</strong> has been received.
          </p>
          
          <div className="bg-white rounded-xl p-6 border border-dark/10 shadow-sm mb-8 text-left max-w-xl mx-auto">
            <div className="flex justify-between items-center border-b border-dark/10 pb-4 mb-4">
              <span className="text-dark/70">Booking Reference</span>
              <span className="font-bold text-dark text-lg">#MAC-8492-XT</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <div className="text-sm text-dark/70">Date</div>
                  <div className="font-bold text-dark">{dateTime.date || 'TBD'}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <div className="text-sm text-dark/70">Time</div>
                  <div className="font-bold text-dark">{dateTime.time || 'TBD'}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <div className="text-sm text-dark/70">Location</div>
                  <div className="font-bold text-dark">Main Workshop, Accra</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary hover:bg-black text-white px-4 sm:px-8 py-4 font-bold transition-all shadow-md flex items-center justify-center gap-2 rounded-full">
              <CalendarPlus className="w-5 h-5" /> Add to Calendar
            </button>
            <Link to="/" className="bg-white hover:bg-dark/5 text-dark border border-dark/20 px-4 sm:px-8 py-4 font-bold transition-all shadow-sm rounded-full">
              Return Home
            </Link>
          </div>
          
          <p className="text-sm text-dark/70 mt-8">
            We've sent a confirmation email to <strong>{contact.email}</strong> with these details.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 lg:pt-[104px] min-h-screen bg-white">
      <SEO title="Book an Auto Service Online | Santa Towing" description="Easily schedule an appointment for auto repairs, servicing, or vehicle consultation with our certified mechanics." canonical="/booking" />
      {/* 1. Hero Banner */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Book Your Service <span className="text-accent">in Minutes</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Fast, simple booking for towing, repairs, rentals, and more. Let us know what you need.
          </motion.p>
        </div>
      
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 ">
          <ScrollToFooterArrow />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex justify-between relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-white -translate-y-1/2 z-0" />
              <div 
                className="absolute left-0 top-1/2 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-500" 
                style={{ width: `${((step - 1) / 4) * 100}%` }}
              />
              
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors duration-500",
                    step > i ? "bg-primary text-white" : step === i ? "bg-primary text-white ring-4 ring-primary/20" : "bg-white text-dark/70"
                  )}>
                    {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                  </div>
                  <span className={cn(
                    "text-xs md:text-sm font-bold absolute -bottom-6 whitespace-nowrap hidden sm:block transition-colors duration-500",
                    step >= i ? "text-dark" : "text-dark/70"
                  )}>
                    {i === 1 ? 'Service' : i === 2 ? 'Details' : i === 3 ? 'Contact' : i === 4 ? 'Time' : 'Confirm'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-16 sm:mt-8">
            
            {/* Form Area */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-xl p-6 md:p-6 sm:p-8 md:p-10 border border-dark/10 shadow-sm min-h-[500px] flex flex-col">
                
                <AnimatePresence mode="wait">
                  {/* Step 1: Select Service */}
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1"
                    >
                      <h2 className="text-2xl font-bold text-dark mb-6">Select a Service</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {SERVICES.map((service) => {
                          const Icon = service.icon;
                          const isSelected = selectedService === service.id;
                          return (
                            <button
                              key={service.id}
                              onClick={() => setSelectedService(service.id as ServiceType)}
                              className={cn(
                                "flex items-start gap-4 p-4 rounded-lg border-2 text-left transition-all",
                                isSelected 
                                  ? "border-primary bg-primary/5" 
                                  : "border-dark/10 bg-white hover:border-dark/30"
                              )}
                            >
                              <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                                isSelected ? "bg-primary text-white" : "bg-white text-dark/70"
                              )}>
                                <Icon className="w-6 h-6" />
                              </div>
                              <div>
                                <h3 className="font-bold text-dark mb-1">{service.title}</h3>
                                <p className="text-sm text-dark/70">{service.desc}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Service Details */}
                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1"
                    >
                      <h2 className="text-2xl font-bold text-dark mb-6">Service Details</h2>
                      <p className="text-dark/70 mb-6">Help us understand exactly what you need for your {selectedService}.</p>
                      
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-dark">Make</label>
                            <input 
                              type="text" 
                              placeholder="e.g. Toyota"
                              value={details.make}
                              onChange={e => setDetails({...details, make: e.target.value})}
                              className="w-full bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-dark">Model</label>
                            <input 
                              type="text" 
                              placeholder="e.g. Corolla"
                              value={details.model}
                              onChange={e => setDetails({...details, model: e.target.value})}
                              className="w-full bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-dark">Year</label>
                            <input 
                              type="text" 
                              placeholder="e.g. 2019"
                              value={details.year}
                              onChange={e => setDetails({...details, year: e.target.value})}
                              className="w-full bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-dark">Additional Details or Requirements</label>
                          <textarea 
                            rows={4}
                            placeholder="Describe the issue, requested service, or any specific needs..."
                            value={details.description}
                            onChange={e => setDetails({...details, description: e.target.value})}
                            className="w-full bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                          ></textarea>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact Info */}
                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1"
                    >
                      <h2 className="text-2xl font-bold text-dark mb-6">Your Information</h2>
                      
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-dark">Full Name *</label>
                            <input 
                              type="text" 
                              required
                              placeholder="John Doe"
                              value={contact.name}
                              onChange={e => setContact({...contact, name: e.target.value})}
                              className="w-full bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-dark">Phone Number *</label>
                            <input 
                              type="tel" 
                              required
                              placeholder="0244753849"
                              value={contact.phone}
                              onChange={e => setContact({...contact, phone: e.target.value})}
                              className="w-full bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-dark">Email Address *</label>
                          <input 
                            type="email" 
                            required
                            placeholder="john@example.com"
                            value={contact.email}
                            onChange={e => setContact({...contact, email: e.target.value})}
                            className="w-full bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-dark">Location / Address (Optional)</label>
                          <input 
                            type="text" 
                            placeholder="Street address or neighborhood"
                            value={contact.address}
                            onChange={e => setContact({...contact, address: e.target.value})}
                            className="w-full bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Date & Time */}
                  {step === 4 && (
                    <motion.div 
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1"
                    >
                      <h2 className="text-2xl font-bold text-dark mb-6">Preferred Schedule</h2>
                      <p className="text-dark/70 mb-6">When would you like to schedule this service?</p>
                      
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-dark">Select Date *</label>
                            <input 
                              type="date" 
                              required
                              value={dateTime.date}
                              onChange={e => setDateTime({...dateTime, date: e.target.value})}
                              className="w-full bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-dark">Select Time *</label>
                            <input 
                              type="time" 
                              required
                              value={dateTime.time}
                              onChange={e => setDateTime({...dateTime, time: e.target.value})}
                              className="w-full bg-white border border-dark/20 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                          </div>
                        </div>

                        <div className="bg-primary/10 rounded-xl p-4 flex items-start gap-3 border border-primary/20">
                          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm text-dark leading-relaxed">
                            <strong>Note:</strong> The requested time is subject to availability. Our team will contact you to confirm the exact appointment slot. If this is an emergency (towing), please call our 24/7 hotline instead.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Review & Confirm */}
                  {step === 5 && (
                    <motion.div 
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1"
                    >
                      <h2 className="text-2xl font-bold text-dark mb-6">Review Your Booking</h2>
                      
                      <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 border border-dark/20">
                          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                            <div>
                              <div className="text-sm text-dark/70 mb-1">Service Type</div>
                              <div className="font-bold text-dark">{selectedService}</div>
                            </div>
                            <div>
                              <div className="text-sm text-dark/70 mb-1">Vehicle Details</div>
                              <div className="font-bold text-dark">
                                {details.make || details.model ? `${details.year} ${details.make} ${details.model}` : 'Not provided'}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-dark/70 mb-1">Contact Name</div>
                              <div className="font-bold text-dark">{contact.name}</div>
                            </div>
                            <div>
                              <div className="text-sm text-dark/70 mb-1">Phone / Email</div>
                              <div className="font-bold text-dark">{contact.phone}</div>
                              <div className="text-dark text-sm">{contact.email}</div>
                            </div>
                            <div>
                              <div className="text-sm text-dark/70 mb-1">Requested Schedule</div>
                              <div className="font-bold text-dark">{dateTime.date} at {dateTime.time}</div>
                            </div>
                          </div>
                          
                          {details.description && (
                            <div className="mt-6 pt-6 border-t border-dark/20">
                              <div className="text-sm text-dark/70 mb-1">Additional Notes</div>
                              <div className="text-dark text-sm">{details.description}</div>
                            </div>
                          )}
                        </div>
                        
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input type="checkbox" className="mt-1 w-4 h-4 text-primary focus:ring-accent rounded-full border-dark/30" required />
                          <span className="text-sm text-dark/70">I agree to the <Link to="/terms-conditions" className="text-accent hover:underline">Terms & Conditions</Link> and <Link to="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>.</span>
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Navigation Controls */}
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-dark/10">
                  <button 
                    onClick={handleBack}
                    className={cn(
                      "font-bold px-6 py-3 rounded-full transition-all flex items-center gap-2",
                      step === 1 ? "opacity-0 pointer-events-none" : "text-dark/70 hover:text-dark hover:bg-white"
                    )}
                  >
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  
                  {step < 5 ? (
                    <button 
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="bg-primary hover:bg-black text-white font-bold px-4 sm:px-8 py-3 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md rounded-full"
                    >
                      Next <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-accent hover:bg-accent/90 text-white font-bold px-4 sm:px-8 py-3 transition-all flex items-center gap-2 shadow-md shadow-accent/20 rounded-full"
                    >
                      {isSubmitting ? 'Confirming...' : 'Confirm Booking'} <CheckCircle2 className="w-5 h-5" />
                    </button>
                  )}
                </div>

              </div>
            </div>

            {/* Sidebar (Desktop) */}
            <div className="w-full lg:w-1/3 space-y-6">
              
              {/* 4. Booking Summary Panel */}
              <div className="bg-primary text-white rounded-xl p-6 shadow-xl sticky top-32">
                <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-4">Booking Summary</h3>
                
                <div className="space-y-4 text-sm mb-6">
                  <div className="flex justify-between items-start">
                    <span className="text-white/80">Service:</span>
                    <span className="font-bold text-right">{selectedService || '--'}</span>
                  </div>
                  {details.make && (
                    <div className="flex justify-between items-start">
                      <span className="text-white/80">Vehicle:</span>
                      <span className="font-bold text-right">{details.make} {details.model}</span>
                    </div>
                  )}
                  {dateTime.date && (
                    <div className="flex justify-between items-start">
                      <span className="text-white/80">Date/Time:</span>
                      <span className="font-bold text-right">{dateTime.date} {dateTime.time}</span>
                    </div>
                  )}
                </div>

                <div className="bg-dark rounded-xl p-4 border border-white/20">
                  <p className="text-xs text-white/70 mb-1">Estimated Cost</p>
                  <p className="font-bold text-xl text-white">Quote on Arrival</p>
                  <p className="text-xs text-white/70 mt-2 leading-tight">
                    Final pricing depends on physical inspection and parts required. No payment is collected during this booking step.
                  </p>
                </div>
              </div>

              {/* 5. Why Book With Us */}
              <div className="bg-white rounded-xl p-6 border border-dark/10 shadow-sm">
                <h3 className="font-bold text-dark mb-4">Why Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm text-dark">Instant Confirmation</h4>
                      <p className="text-xs text-dark/70">Secure your spot immediately</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm text-dark">Flexible Rescheduling</h4>
                      <p className="text-xs text-dark/70">Change dates with no penalty</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm text-dark">Transparent Pricing</h4>
                      <p className="text-xs text-dark/70">No hidden fees or surprises</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQs & 7. Need Help */}
      <section className="py-12 md:py-20 bg-white border-t border-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">Booking FAQs</h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-dark/20 rounded-xl overflow-hidden bg-white">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white transition-colors rounded-full"
                  >
                    <span className="font-bold text-dark pr-4">{faq.q}</span>
                    <ChevronDown className={cn("w-5 h-5 text-primary transition-transform shrink-0", openFaq === idx && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="px-6 py-5 text-dark/70 border-t border-dark/10 text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-primary text-white rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-[20px]" />
              <h3 className="text-2xl font-bold mb-4">Need Help Booking?</h3>
              <p className="text-white/90 mb-8 text-sm">
                If you have a special request or prefer to book over the phone, our support team is available 24/7.
              </p>
              
              <div className="space-y-4 relative z-10">
                <a href="tel:0244753849" className="flex items-center gap-4 bg-primary hover:bg-black p-4 rounded-xl transition-colors border border-white/20 rounded-full">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/80">Call Us 24/7</div>
                    <div className="font-bold text-white">0244753849</div>
                  </div>
                </a>
                <a href="https://wa.me/233244753849" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white text-dark hover:bg-white p-4 rounded-xl transition-colors rounded-full">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-dark/70">Chat with us</div>
                    <div className="font-bold">WhatsApp Support</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
