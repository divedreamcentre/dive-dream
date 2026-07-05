import Layout from '@/components/Layout';
import { Shield, CheckCircle2, Award, HelpCircle, Repeat, Camera, Anchor, Users, FlaskConical, Waves } from 'lucide-react';
import { Link } from 'wouter';

export default function Diving() {
  const nitroxFaqs = [
    { q: 'What is Enriched Air Nitrox?', a: 'Nitrox is a breathing gas mixture containing a higher percentage of oxygen (usually 32% or 36%) than normal atmospheric air (21%). This reduces the nitrogen absorption in your bloodstream during a dive.' },
    { q: 'What are the primary benefits?', a: 'By absorbing less nitrogen, you can safely extend your no-decompression limits (more bottom time), reduce your required surface intervals, and many divers report feeling significantly less fatigued after diving.' },
    { q: 'Is a certification required?', a: 'Yes. Diving with Nitrox requires specialized training to learn how to analyze your gas cylinder, set your dive computer, and understand oxygen exposure limits. We offer the 1-day TDI Nitrox course.' },
    { q: 'Is there an extra charge for Nitrox?', a: 'For all divers holding our 5-Dive or 10-Dive packages, custom Nitrox fills (up to 32% oxygen) are completely free of charge. For standard single/double dives, Nitrox fills are $10 per cylinder.' }
  ];

  const rebreatherBenefits = [
    { icon: <Waves className="w-4.5 h-4.5 text-primary shrink-0" />, text: 'Extended bottom times' },
    { icon: <FlaskConical className="w-4.5 h-4.5 text-primary shrink-0" />, text: 'Significantly reduced gas consumption' },
    { icon: <Shield className="w-4.5 h-4.5 text-primary shrink-0" />, text: 'Minimal bubbles for a quieter dive experience' },
    { icon: <Anchor className="w-4.5 h-4.5 text-primary shrink-0" />, text: 'Closer interactions with marine life' },
    { icon: <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />, text: 'Optimized breathing gas throughout the dive' },
    { icon: <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />, text: 'Increased comfort on deep and extended dives' },
  ];

  const rebreatherIdealFor = [
    { icon: <Users className="w-4 h-4 text-primary" />, label: 'Experienced recreational divers' },
    { icon: <Anchor className="w-4 h-4 text-primary" />, label: 'Technical divers' },
    { icon: <Camera className="w-4 h-4 text-primary" />, label: 'Underwater photographers and videographers' },
    { icon: <Waves className="w-4 h-4 text-primary" />, label: 'Wreck and deep-diving enthusiasts' },
    { icon: <FlaskConical className="w-4 h-4 text-primary" />, label: 'Marine researchers and conservationists' },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Advanced Dive Technologies</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Diving at Dive Dream</h1>
          <p className="text-muted-foreground">
            From Enriched Air Nitrox to cutting-edge rebreather technology, we offer advanced diving experiences that let you go deeper, stay longer, and explore the underwater world like never before.
          </p>
        </div>
      </section>

      {/* Nitrox Section */}
      <section id="nitrox" className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Enriched Air Station</span>
              <h2 className="text-3xl font-serif font-bold text-white">Nitrox Diving</h2>
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

      {/* Rebreather Diving Section */}
      <section id="rebreather" className="py-24 bg-secondary/10">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Next-Level Technology</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2 mb-4">Rebreather Diving</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of diving with rebreather technology. Unlike traditional scuba equipment, rebreathers recycle exhaled gas, allowing for longer dive times, quieter underwater exploration, and closer encounters with marine life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* What is a Rebreather */}
            <div className="glass-panel p-8 space-y-6 text-left border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Repeat className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">What is a Rebreather?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A rebreather is an advanced diving system that removes carbon dioxide from exhaled breath and replenishes oxygen, enabling divers to reuse breathing gas efficiently. This closed-loop system dramatically extends dive times while producing virtually no bubbles.
              </p>

              <div className="border-t border-white/10 pt-4">
                <h4 className="text-sm font-semibold text-white mb-3">Benefits of Rebreather Diving</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {rebreatherBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      {benefit.icon}
                      <span>{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ideal For */}
            <div className="space-y-6">
              <div className="glass-panel p-8 space-y-6 text-left">
                <h3 className="text-xl font-serif font-bold text-white">Ideal For</h3>
                <ul className="space-y-4">
                  {rebreatherIdealFor.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel p-6 text-left border-gold/20 bg-gold/5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interested in rebreather diving? Contact us to learn about our rebreather experiences and training options tailored to your certification level.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="btn-premium-primary text-sm">
                    Enquire About Rebreathers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nitrox FAQ */}
      <section className="py-24">
        <div className="container max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Knowledge Base</span>
          <h2 className="text-3xl font-serif font-bold text-white mt-2 mb-12">Frequently Asked Questions</h2>

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
