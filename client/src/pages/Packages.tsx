import React from 'react';
import Layout from '@/components/Layout';
import { DIVE_PACKAGES } from '@/const';
import { Star, Shield, Award, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Packages() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Dive Expeditions</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Dive Packages</h1>
          <p className="text-muted-foreground">
            Explore our curated, high-value dive packages. Whether you are seeking a single dive to test the waters or a comprehensive multi-day odyssey, our packages offer professional guiding and premium gear.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left items-stretch">
            {DIVE_PACKAGES.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`glass-panel p-8 flex flex-col justify-between h-full relative transition-all duration-300 ${
                  pkg.isBestValue 
                    ? 'border-primary/60 shadow-xl shadow-primary/5 scale-102 z-10' 
                    : 'hover:border-white/20'
                }`}
              >
                {pkg.isBestValue && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/40 shadow-lg">
                    Best Value Package
                  </span>
                )}
                
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-1">{pkg.duration}</span>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{pkg.name}</h3>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-serif font-bold text-white">${pkg.price}</span>
                    <span className="text-xs text-muted-foreground">/ package</span>
                  </div>

                  {/* Included benefits */}
                  <ul className="space-y-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-white/10">
                    <li className="flex items-center gap-2.5 text-white font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{pkg.divesCount} Guided Ocean Dives</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{pkg.equipmentIncluded ? 'Full Premium Gear Included' : 'Gear Rental Available'}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Free Nitrox Fills (Up to 32%)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Elite Marine Biologist Guide</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Refreshments & Fruits Onboard</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <Link 
                    href={`/reservations?package=${pkg.id}`} 
                    className={`w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 block ${
                      pkg.isBestValue 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30' 
                        : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                    }`}
                  >
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-xl p-6 text-left flex gap-4 items-start max-w-3xl mx-auto">
            <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white">Pre-requisites & Rental Standards</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All divers must present a valid physical or digital certification card from a recognized agency (SDI, TDI, PADI, SSI, etc.) and logbook before boarding. For packages without equipment included, premium Scubapro rental gear is available at the dive center reception for $20/day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
