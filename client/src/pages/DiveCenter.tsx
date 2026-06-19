import React from 'react';
import Layout from '@/components/Layout';
import { IMAGES } from '@/const';
import { MapPin, CheckCircle2, Waves, Award, Compass, Shield } from 'lucide-react';


export default function DiveCenter() {
  const facilityAreas = [
    { title: 'Elegant Reception', desc: 'A spacious, air-conditioned check-in area with comfortable lounge seating, complimentary organic refreshments, and retail display of premium dive accessories.', img: IMAGES.diveCenterReception },
    { title: 'Interactive Classroom', desc: 'Equipped with ultra-high-definition smart screens, whiteboards, and comfortable seating to ensure a premium, focused learning environment for SDI/TDI theory.', img: IMAGES.diveCenterClass },
    { title: 'Hot Showers & Lockers', desc: 'Secure digital key lockers to store your valuables safely, and private hot-water showers with complimentary organic, reef-safe shampoo and body wash.', img: IMAGES.coralReef },
    { title: 'Nitrox Blending Station', desc: 'Our state-of-the-art continuous-flow membrane blending station, capable of custom mixing Enriched Air Nitrox up to 40% oxygen on-demand.', img: IMAGES.heroUnderwater }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Headquarters</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">The Dive Center</h1>
          <p className="text-muted-foreground">
            Explore our physical facility. Custom-built to offer a luxurious, comfortable, and highly functional space for divers to prepare, learn, and relax.
          </p>
        </div>
      </section>

      {/* Facility Showcase - Virtual Tour style */}
      <section className="py-24">
        <div className="container max-w-5xl space-y-16">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Virtual Tour</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">World-Class Infrastructure</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl">
              Every square meter of our facility is optimized for safety, flow, and comfort. Take a look inside.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {facilityAreas.map((area, idx) => (
              <div key={idx} className="glass-panel overflow-hidden group flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={area.img} 
                    alt={area.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest mt-6 block flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Premium Standard Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-24 bg-secondary/10">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Location Details */}
            <div className="text-left space-y-6 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">How to Find Us</span>
              <h2 className="text-3xl font-serif font-bold text-white">Location & Access</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Located right on the beach at Siren Bay, our center offers direct shore access to our private house reef, and is only a 5-minute walk from the main resort district.
              </p>

              <div className="space-y-4 text-xs text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Physical Address</strong>
                    <span>100 Marine Drive, Siren Bay, MB 1204</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Parking & Valet</strong>
                    <span>Complimentary private parking and valet services are available for all diving guests.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="glass-panel overflow-hidden min-h-[350px] relative bg-slate-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.34925453057!2d57.54324857616065!3d-20.035808741613913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217dacaed25f4d75%3A0x1814f7c7bab412c1!2sDive%20Dream%20Divers!5e0!3m2!1sen!2smu!4v1781795341840!5m2!1sen!2smu"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dive Dream Divers Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
