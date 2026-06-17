import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { DIVE_PACKAGES, COURSES, DIVE_SITES } from '@/const';
import { Shield, CheckCircle2, AlertTriangle, Calendar, Users, FileText, CheckCircle, Mail, HelpCircle } from 'lucide-react';
import { useLocation } from 'wouter';
import { toast } from 'sonner';

export default function Reservations() {
  const [location] = useLocation();
  
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [certLevel, setCertLevel] = useState('Beginner');
  const [preferredDate, setPreferredDate] = useState('');
  const [diversCount, setDiversCount] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [specialRequests, setSpecialRequests] = useState('');
  
  // Booking flow state
  const [isSubmitted, setIsExpanded] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Auto-populate from URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkgId = params.get('package');
    const courseId = params.get('course');
    
    if (pkgId) setSelectedPackage(pkgId);
    if (courseId) setSelectedCourse(courseId);
  }, [location]);

  const handleServiceToggle = (service: string) => {
    if (additionalServices.includes(service)) {
      setAdditionalServices(additionalServices.filter(s => s !== service));
    } else {
      setAdditionalServices([...additionalServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !preferredDate) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Generate simulated booking reference
    const ref = 'AD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setBookingRef(ref);
    setIsExpanded(true);

    toast.success('Reservation Request Received!', {
      description: `A secure confirmation email has been dispatched to ${email}.`,
    });
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setCountry('');
    setPreferredDate('');
    setDiversCount(1);
    setSelectedPackage('');
    setSelectedCourse('');
    setAdditionalServices([]);
    setSpecialRequests('');
    setIsExpanded(false);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-20 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Expedition Planning</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Secure Online Booking</h1>
          <p className="text-muted-foreground">
            Plan your next underwater adventure. Complete our secure reservation form below, and our dive operations coordinator will verify and confirm your itinerary.
          </p>
        </div>
      </section>

      {/* Main Reservation Layout */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left/Middle Column: Form or Confirmation */}
            <div className="lg:col-span-2 text-left">
              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="glass-panel p-8 md:p-10 space-y-8 animate-fadeIn">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4 animate-glow">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-white">Reservation Initiated!</h2>
                    <p className="text-muted-foreground max-w-md mx-auto text-sm">
                      Your reservation request has been registered in our secure system. A confirmation and invoice details have been dispatched to your email.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 text-sm">
                    <div className="flex justify-between pb-3 border-b border-white/5">
                      <span className="text-muted-foreground">Booking Reference:</span>
                      <span className="text-white font-mono font-bold tracking-wider">{bookingRef}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-muted-foreground block text-xs">Primary Diver</span>
                        <span className="text-white font-semibold mt-0.5 block">{fullName}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-xs">Email Address</span>
                        <span className="text-white font-semibold mt-0.5 block">{email}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-xs">Preferred Date</span>
                        <span className="text-white font-semibold mt-0.5 block flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" /> {preferredDate}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-xs">Total Divers</span>
                        <span className="text-white font-semibold mt-0.5 block flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-primary" /> {diversCount}
                        </span>
                      </div>
                    </div>
                    
                    {/* Selected packages / courses summary */}
                    <div className="border-t border-white/5 pt-3 mt-3">
                      <span className="text-muted-foreground block text-xs mb-1">Itinerary Selection</span>
                      {selectedPackage && (
                        <span className="text-primary font-semibold">
                          Package: {DIVE_PACKAGES.find(p => p.id === selectedPackage)?.name}
                        </span>
                      )}
                      {selectedCourse && (
                        <span className="text-primary font-semibold">
                          Course: {COURSES.find(c => c.id === selectedCourse)?.name}
                        </span>
                      )}
                      {!selectedPackage && !selectedCourse && (
                        <span className="text-white font-semibold">Custom Guided Dive Expedition</span>
                      )}
                    </div>
                  </div>

                  {/* Action links */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <button 
                      onClick={handleReset}
                      className="btn-premium-secondary py-3 px-6 text-sm"
                    >
                      Make Another Booking
                    </button>
                    <a 
                      href="mailto:expeditions@aquadepth.com" 
                      className="btn-premium-primary py-3 px-6 text-sm flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" /> Email Operations Desk
                    </a>
                  </div>
                </div>
              ) : (
                /* Interactive Booking Form */
                <div className="glass-panel p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Reservation Details</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Section 1: Contact Details */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary pb-2 border-b border-white/5">1. Personal & Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">Full Name *</label>
                          <input 
                            type="text" 
                            required 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="John Doe"
                            className="bg-white/5 border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">Email Address *</label>
                          <input 
                            type="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@example.com"
                            className="bg-white/5 border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">Phone Number</label>
                          <input 
                            type="tel" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+1 (555) 000-0000"
                            className="bg-white/5 border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">Country of Residence</label>
                          <input 
                            type="text" 
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="United States"
                            className="bg-white/5 border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Diving Profile */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary pb-2 border-b border-white/5">2. Diver Experience & Schedule</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">Certification Level</label>
                          <select 
                            value={certLevel}
                            onChange={(e) => setCertLevel(e.target.value)}
                            className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="None">None (Discover Scuba)</option>
                            <option value="Beginner">Beginner (Open Water)</option>
                            <option value="Intermediate">Intermediate (Advanced)</option>
                            <option value="Advanced">Advanced (Rescue / Master)</option>
                            <option value="Technical">Technical / Trimix</option>
                          </select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">Preferred Date *</label>
                          <input 
                            type="date" 
                            required 
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                            className="bg-white/5 border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">Number of Divers</label>
                          <input 
                            type="number" 
                            min={1} 
                            max={10}
                            value={diversCount}
                            onChange={(e) => setDiversCount(parseInt(e.target.value) || 1)}
                            className="bg-white/5 border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Package & Course Selection */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary pb-2 border-b border-white/5">3. Itinerary Selection</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">Select Dive Package</label>
                          <select 
                            value={selectedPackage}
                            onChange={(e) => {
                              setSelectedPackage(e.target.value);
                              if (e.target.value) setSelectedCourse('');
                            }}
                            className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="">-- None Selected --</option>
                            {DIVE_PACKAGES.map(p => (
                              <option key={p.id} value={p.id}>{p.name} (${p.price})</option>
                            ))}
                          </select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <label className="text-xs text-muted-foreground font-semibold">Select Training Course</label>
                          <select 
                            value={selectedCourse}
                            onChange={(e) => {
                              setSelectedCourse(e.target.value);
                              if (e.target.value) setSelectedPackage('');
                            }}
                            className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="">-- None Selected --</option>
                            {COURSES.map(c => (
                              <option key={c.id} value={c.id}>{c.name} (${c.price})</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Premium Add-ons */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary pb-2 border-b border-white/5">4. Luxury Services & Add-ons</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                        {[
                          { id: 'transfer', label: 'VIP Airport Transfer' },
                          { id: 'photo', label: 'Underwater Photographer' },
                          { id: 'nitrox', label: 'Nitrox Gas Mix Upgrade' }
                        ].map((srv) => (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => handleServiceToggle(srv.id)}
                            className={`p-3 rounded-lg border text-left transition-colors cursor-pointer flex justify-between items-center ${
                              additionalServices.includes(srv.id)
                                ? 'bg-primary/10 border-primary text-white'
                                : 'bg-white/5 border-border text-muted-foreground hover:text-white'
                            }`}
                          >
                            <span>{srv.label}</span>
                            {additionalServices.includes(srv.id) && <CheckCircle2 className="w-4 h-4 text-primary" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Section 5: Special Requests */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs text-muted-foreground font-semibold">Special Requests or Medical Disclosures</label>
                      <textarea 
                        rows={3} 
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        placeholder="E.g., Dietary requirements for onboard buffet, medical history, preferred gear sizes..."
                        className="bg-white/5 border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn-premium-primary w-full py-3.5 text-sm font-semibold uppercase tracking-widest">
                      Initiate Secure Booking
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column: Policies & Trust Information */}
            <div className="space-y-6 text-left">
              {/* Trust Badge */}
              <div className="glass-panel p-6 space-y-4">
                <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> Safety & Trust Standards
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  As an elite SDI/TDI 5-Star Dive Facility, we operate under the absolute highest safety protocols. All equipment undergoes daily inspection, and our custom vessel is fitted with medical oxygen, radar, and full VHF marine telemetry.
                </p>
                <div className="flex flex-col gap-2.5 text-xs text-white/80 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Secure 256-bit SSL Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Free Booking Modifications via Email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>No Hidden Environmental Taxes</span>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="glass-panel p-6 space-y-3 border-amber-500/20 bg-amber-500/5">
                <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4.5 h-4.5" /> Cancellation Policy
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We understand travel plans can shift. Our cancellation guidelines are:
                </p>
                <ul className="space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
                  <li><strong className="text-white">48+ Hours Notice:</strong> 100% full refund or rescheduling.</li>
                  <li><strong className="text-white">24-48 Hours Notice:</strong> 50% refund.</li>
                  <li><strong className="text-white">Less than 24 Hours:</strong> Non-refundable (subject to medical exceptions).</li>
                </ul>
              </div>

              {/* FAQs accordion teaser */}
              <div className="glass-panel p-6 space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Need Booking Help?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Have questions about medical clearances, certification mapping, or accommodation recommendations?
                </p>
                <a href="/faq" className="text-xs text-primary font-bold uppercase tracking-wider flex items-center gap-1 hover:underline">
                  Read Reservation FAQs <HelpCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
