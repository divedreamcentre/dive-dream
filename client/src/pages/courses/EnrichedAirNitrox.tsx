import Layout from '@/components/Layout';
import { CheckCircle2, Wind, AlertTriangle, Award, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function EnrichedAirNitrox() {
  const benefits = [
    'Longer no-decompression limits',
    'Reduced nitrogen absorption',
    'Shorter surface intervals',
    'Increased safety margin on repetitive dives',
    'Often less post-dive fatigue reported by divers',
  ];

  const prerequisites = [
    'Minimum age: typically 15 years (may vary by dive center)',
    'Certified Open Water Diver or equivalent (or enrolled in an Open Water course with some SDI programs)',
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Specialty Certification</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">SDI Enriched Air Nitrox (EANx) Diver Course</h1>
          <p className="text-muted-foreground">
            One of the most valuable specialty certifications for recreational divers. Learn to safely use Enriched Air Nitrox with oxygen concentrations up to 40%.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Dive Smarter</span>
              <h2 className="text-3xl font-serif font-bold text-white">Extend Your Bottom Time</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The SDI Nitrox Course is one of the most valuable specialty certifications for recreational divers. It teaches you how to safely use Enriched Air Nitrox (EANx) with oxygen concentrations up to 40%, giving you longer bottom times, shorter surface intervals, and greater safety margins.
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="/reservations?course=nitrox" className="btn-premium-primary text-sm">
                  Enroll Now
                </Link>
                <Link href="/contact" className="btn-premium-secondary text-sm flex items-center gap-2">
                  Ask a Question <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="glass-panel p-8 space-y-6 text-left border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Wind className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Up to 40% Oxygen</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Learn to analyze gas mixes, set your dive computer for Nitrox, and understand oxygen exposure limits. A must-have certification for any serious recreational diver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary/10">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Advantages</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">Benefits of Diving Nitrox</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="glass-panel p-6 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-white/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Requirements</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">Course Prerequisites</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {prerequisites.map((req) => (
              <div key={req} className="glass-panel p-6 flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-white/90">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border/40">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Dive with Nitrox?</h2>
          <p className="text-muted-foreground mb-8">
            Get certified and enjoy longer, safer dives with Enriched Air Nitrox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations?course=nitrox" className="btn-premium-primary px-8 py-3 text-base">
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
