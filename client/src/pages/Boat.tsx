import React from 'react';
import Layout from '@/components/Layout';
import { IMAGES } from '@/const';
import { Anchor, Shield, CheckCircle2, Waves, Award, Compass, Users, MapPin } from 'lucide-react';
import { Link } from 'wouter';

export default function Boat() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Luxury Fleet</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">The MV Ocean Explorer</h1>
          <p className="text-muted-foreground">
            Explore our state-of-the-art custom 15-meter dive catamaran. Purpose-built to balance elite technical diving logistics with high-end luxury, comfort, and stability.
          </p>
        </div>
      </section>

      {/* Main Boat Details */}
      <section className="py-20">
        <div className="container max-w-5xl space-y-24">
          {/* Section 1: Visual Showcase & Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={IMAGES.diveBoat} 
                  alt="MV Ocean Explorer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Technical Specs</span>
              <h2 className="text-3xl font-serif font-bold text-white">Vessel Specifications</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The MV Ocean Explorer is custom engineered to offer maximum deck space and stability in open ocean swells. With twin 350HP Volvo Penta engines, she gets you to outer atolls quickly and safely.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground bg-white/5 border border-white/10 p-5 rounded-xl">
                <div>
                  <span className="block text-muted-foreground">Length Overall</span>
                  <span className="block text-sm font-bold text-white mt-0.5">15 Meters (50 feet)</span>
                </div>
                <div>
                  <span className="block text-muted-foreground">Beam (Width)</span>
                  <span className="block text-sm font-bold text-white mt-0.5">6 Meters (20 feet)</span>
                </div>
                <div>
                  <span className="block text-muted-foreground">Max Capacity</span>
                  <span className="block text-sm font-bold text-white mt-0.5">20 Divers + 4 Crew</span>
                </div>
                <div>
                  <span className="block text-muted-foreground">Cruising Speed</span>
                  <span className="block text-sm font-bold text-white mt-0.5">18 Knots</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Safety & Emergency */}
            <div className="glass-panel p-8 space-y-4 border-emerald-500/10 bg-emerald-500/5">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Emergency Systems</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your safety is our absolute priority. The vessel is fitted with state-of-the-art life-saving systems and advanced navigation.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Dual 100% Medical Oxygen Kits</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> SOLAS Life Rafts & Jackets</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Marine VHF Radio & Radar</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> AED Automated Defibrillator</li>
              </ul>
            </div>

            {/* Comfort Features */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Anchor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Onboard Comfort</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Enjoy premium travel comfort between dive sessions. Relax, dine, and prepare in style.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Two Fresh Water Showers</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Air-Conditioned Main Salon</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Spacious Sun Deck & Lounge</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Marine Toilet (Head)</li>
              </ul>
            </div>

            {/* Diving Infrastructure */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Waves className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Dive Infrastructure</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Engineered specifically for elite dive logistics, featuring spacious individual gearing stations.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Custom Individual Tank Racks</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Dual Sturdy Diving Ladders</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Large Dedicated Camera Table</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Fresh Water Rinse Bins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
