import React from 'react';
import Layout from '@/components/Layout';
import { IMAGES } from '@/const';
import { Shield, CheckCircle2, Award, Heart, Compass, Globe } from 'lucide-react';
import { Link } from 'wouter';

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">About Dive Dream</h1>
          <p className="text-muted-foreground">
            Established in 2004 in Mauritius, Dive Dream offers professional SDI and TDI training with over 40 pristine dive sites. We combine elite instruction with safety-first operations and a passion for marine conservation.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24">
        <div className="container max-w-5xl space-y-24">
          {/* Grid: Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Mission</span>
              <h2 className="text-3xl font-serif font-bold text-white">Our Mission: Excellence in Diving</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                At Dive Dream, we offer a high level of service to divers of all levels, whether beginners or experts, with a smile. Our goal is to provide unforgettable underwater experiences while maintaining the highest safety standards and respecting marine ecosystems.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>100% Safety Record</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Elite SDI/TDI Facility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Eco-Friendly Reef-Safe Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Multilingual Elite Crew</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={IMAGES.scubaTraining} 
                  alt="Scuba Training Session" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Grid: Marine Conservation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-last">
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={IMAGES.coralReef} 
                  alt="Coral Reef Restoration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Eco-Responsibility</span>
              <h2 className="text-3xl font-serif font-bold text-white">Marine Conservation Efforts</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not just dive on reefs; we active steward and restore them. In partnership with marine biologists, AquaDepth runs weekly reef-cleanup dives, monitors coral nursery restoration zones, and enforces a strict zero-touch reef policy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 text-sm text-muted-foreground">
                  <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Green Fins Certified</strong>
                    <span>We strictly adhere to internationally recognized Green Fins environmental standards to minimize dive tourism impact.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 text-sm text-muted-foreground">
                  <Globe className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Coral Nursery Sponsorship</strong>
                    <span>10% of all technical training course proceeds are directly funneled into local coral grafting and restoration nurseries.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
