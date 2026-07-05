import React from 'react';
import Layout from '@/components/Layout';
import { CREW } from '@/const';
import { Award, Compass, Globe, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Crew() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Elite Explorers</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Our Professional Crew</h1>
          <p className="text-muted-foreground">
            Meet our elite, multi-lingual team of SDI and TDI instructors, marine biologists, and technical guides. With thousands of combined logged dives, safety and education are in expert hands.
          </p>
        </div>
      </section>

      {/* Crew Profiles */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {CREW.map((member) => (
              <div key={member.id} className="glass-panel overflow-hidden group flex flex-col h-full justify-between">
                <div>
                  <div className="h-72 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-xs text-primary font-bold uppercase tracking-widest block">{member.position}</span>
                      <h3 className="text-2xl font-serif font-bold text-white mt-1">{member.name}</h3>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                      "{member.biography}"
                    </p>

                    <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary shrink-0" />
                        <span><strong>Experience:</strong> {member.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary shrink-0" />
                        <span><strong>Languages:</strong> {member.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="border-t border-white/5 pt-4">
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Specializations</span>
                    <div className="flex flex-wrap gap-1">
                      {member.specializations.map((spec, idx) => (
                        <span key={idx} className="bg-white/5 border border-white/10 text-white px-2 py-0.5 rounded text-[10px]">
                          {spec}
                        </span>
                      ))}
                    </div>
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
