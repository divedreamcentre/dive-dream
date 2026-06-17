import React from 'react';
import Layout from '@/components/Layout';
import { SERVICES } from '@/const';
import { Anchor, Camera, Plane, Compass, Coffee, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">VIP Logistics</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Premium Services</h1>
          <p className="text-muted-foreground">
            Beyond elite diving. We provide comprehensive, high-end logistics and luxury add-ons to ensure your marine expedition is perfectly seamless, comfortable, and unforgettable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch">
            {SERVICES.map((srv) => (
              <div key={srv.id} className="glass-panel overflow-hidden group flex flex-col h-full justify-between">
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-white/10 flex items-center justify-center z-20">
                      {srv.id === 'airport-transfer' ? (
                        <Plane className="w-5 h-5 text-primary" />
                      ) : srv.id === 'private-charter' ? (
                        <Anchor className="w-5 h-5 text-primary" />
                      ) : srv.id === 'snorkeling-trips' ? (
                        <Compass className="w-5 h-5 text-primary" />
                      ) : srv.id === 'underwater-photography' ? (
                        <Camera className="w-5 h-5 text-primary" />
                      ) : (
                        <Coffee className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground block">Pricing Standard</span>
                      <span className="text-sm font-bold text-white mt-0.5 block">{srv.price}</span>
                    </div>
                    <Link href={`/reservations?service=${srv.id}`} className="btn-premium-primary !px-4 !py-2 text-xs uppercase tracking-wider font-bold">
                      Book Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
