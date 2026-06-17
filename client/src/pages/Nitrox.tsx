import React from 'react';
import Layout from '@/components/Layout';
import { Shield, CheckCircle2, Award, Waves, Heart, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Nitrox() {
  const nitroxFaqs = [
    { q: 'What is Enriched Air Nitrox?', a: 'Nitrox is a breathing gas mixture containing a higher percentage of oxygen (usually 32% or 36%) than normal atmospheric air (21%). This reduces the nitrogen absorption in your bloodstream during a dive.' },
    { q: 'What are the primary benefits?', a: 'By absorbing less nitrogen, you can safely extend your no-decompression limits (more bottom time), reduce your required surface intervals, and many divers report feeling significantly less fatigued after diving.' },
    { q: 'Is a certification required?', a: 'Yes. Diving with Nitrox requires specialized training to learn how to analyze your gas cylinder, set your dive computer, and understand oxygen exposure limits. We offer the 1-day TDI Nitrox course.' },
    { q: 'Is there an extra charge for Nitrox?', a: 'For all divers holding our 5-Dive or 10-Dive packages, custom Nitrox fills (up to 32% oxygen) are completely free of charge. For standard single/double dives, Nitrox fills are $10 per cylinder.' }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Enriched Air Station</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Nitrox Diving</h1>
          <p className="text-muted-foreground">
            Extend your bottom times, shorten your surface intervals, and feel less fatigued. Discover the safety benefits of diving with Enriched Air Nitrox from our state-of-the-art filling station.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">The Nitrox Advantage</span>
              <h2 className="text-3xl font-serif font-bold text-white">Why Dive with Enriched Air?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By breathing a gas mixture with more oxygen and less nitrogen, your body absorbs nitrogen at a slower rate. This allows you to stay longer at depth on repetitive dives, making it the perfect choice for multi-day liveaboards or dive packages.
              </p>
              
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Extend No-Decompression limits by up to 50%</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Shorter required surface intervals between dives</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Significantly reduced post-dive fatigue</span>
                </li>
              </ul>

              <div className="pt-4 flex gap-4">
                <Link href="/reservations?course=tdi-nitrox" className="btn-premium-primary text-sm">
                  Enroll in Nitrox Course
                </Link>
              </div>
            </div>

            {/* Visual Specs / Hardware */}
            <div className="glass-panel p-8 space-y-6 text-left border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">State-of-the-Art Membrane</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our facility houses a high-volume, continuous-flow Nitrox membrane blending system. This system filters nitrogen from atmospheric air, producing ultra-pure Enriched Air Nitrox on-demand.
              </p>
              
              <div className="border-t border-white/10 pt-4 space-y-3 text-xs text-white/80 font-semibold">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>O2 Analyzer workshop provided for every cylinder</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Continuous purity monitoring of gas mix</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-secondary/10">
        <div className="container max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Knowledge Base</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-2 mb-12">Nitrox Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {nitroxFaqs.map((faq, idx) => (
              <div key={idx} className="glass-panel p-6 space-y-3">
                <h3 className="text-base font-serif font-bold text-white flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /> {faq.q}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
