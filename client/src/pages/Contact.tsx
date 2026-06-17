import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { MapPin, Phone, Mail, Clock, Send, Shield, CheckCircle2 } from 'lucide-react';
import { MapView } from '@/components/Map';
import { toast } from 'sonner';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      toast.success('Message Dispatched Successfully!', {
        description: 'Our customer care desk will reply within 4 business hours.',
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Contact Dive Dream</h1>
          <p className="text-muted-foreground">
            Have questions about our dive sites, training courses, or private charters? Contact us directly and our team will assist you promptly.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column: Direct Contact Info */}
            <div className="space-y-6 text-left">
              <div className="glass-panel p-6 space-y-6">
                <h3 className="text-xl font-serif font-bold text-white mb-4">Direct Channels</h3>
                
                <div className="space-y-4 text-xs text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm mb-0.5">Dive Center Location</strong>
                      <span>Royal Road, Trou aux Biches, Mauritius</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm mb-0.5">Telephone</strong>
                      <span>+230 5753352</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm mb-0.5">Email</strong>
                      <span>info@divedreamdivers.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm mb-0.5">Operations Hours</strong>
                      <span>Daily: 07:00 AM - 06:00 PM GMT+8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Shield */}
              <div className="glass-panel p-6 space-y-3 border-primary/20 bg-primary/5">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-4.5 h-4.5 text-primary" /> Encrypted Submissions
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All messages sent through our online portal are encrypted using secure socket layers. Your personal information is protected under our strict privacy standards.
                </p>
              </div>
            </div>

            {/* Middle/Right Column: Interactive Message Form */}
            <div className="lg:col-span-2 text-left">
              <div className="glass-panel p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Send Us A Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-xs text-muted-foreground font-semibold">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs text-muted-foreground font-semibold">Subject</label>
                    <input 
                      type="text" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="E.g., Private Charter Inquiry, Course Booking, Custom Package..."
                      className="bg-white/5 border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs text-muted-foreground font-semibold">Your Message *</label>
                    <textarea 
                      rows={5} 
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="bg-white/5 border border-border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-premium-primary w-full py-3.5 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Secure Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="h-[400px] relative bg-slate-900 border-t border-white/10">
        <MapView 
          onMapReady={(map: google.maps.Map) => {
            const center = { lat: -8.6500, lng: 115.2167 }; // Bali coordinates
            map.setCenter(center);
            map.setZoom(14);
            
            new google.maps.Marker({
              position: center,
              map: map,
              title: "AquaDepth Headquarters",
              animation: google.maps.Animation.DROP,
            });
          }}
        />
      </section>
    </Layout>
  );
}
