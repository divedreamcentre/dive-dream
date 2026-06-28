import Layout from '@/components/Layout';
import { CheckCircle2, ArrowDown, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function DeepDiver() {
  const learningPoints = [
    'Deep dive physics and physiology',
    'Nitrogen narcosis recognition and management',
    'Gas consumption and air management',
    'Deep dive planning and dive computer use',
    'Emergency procedures for deep diving',
    'Equipment considerations for deeper dives',
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Specialty Certification</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">SDI Deep Diver Course</h1>
          <p className="text-muted-foreground">
            Go beyond recreational Open Water limits and learn to safely dive to depths of 40 metres / 130 feet.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Go Deeper</span>
              <h2 className="text-3xl font-serif font-bold text-white">Explore Greater Depths Safely</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Take your diving beyond recreational Open Water limits and learn to safely plan and conduct dives to depths of 40 metres / 130 feet. The SDI Deep Diver specialty focuses on deep dive planning, gas management, narcosis awareness, and emergency procedures.
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="/reservations?course=deep-diver" className="btn-premium-primary text-sm">
                  Enroll Now
                </Link>
                <Link href="/contact" className="btn-premium-secondary text-sm flex items-center gap-2">
                  Ask a Question <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="glass-panel p-8 space-y-6 text-left border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ArrowDown className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">40 Metres / 130 Feet</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Learn the skills and knowledge needed to safely plan and execute dives at greater depths, including managing nitrogen narcosis and gas consumption at depth.
              </p>
              <div className="border-t border-white/10 pt-4 space-y-3 text-xs text-white/80 font-semibold">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Advanced gas management techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Narcosis recognition and response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-24 bg-secondary/10">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Curriculum</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">What You'll Learn</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPoints.map((point) => (
              <div key={point} className="glass-panel p-6 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-white/90">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border/40">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Dive Deeper?</h2>
          <p className="text-muted-foreground mb-8">
            Extend your depth capabilities with proper training and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations?course=deep-diver" className="btn-premium-primary px-8 py-3 text-base">
              Book This Course
            </Link>
            <Link href="/courses" className="btn-premium-secondary px-8 py-3 text-base flex items-center justify-center gap-2">
              View All Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
