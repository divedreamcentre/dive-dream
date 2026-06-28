import Layout from '@/components/Layout';
import { CheckCircle2, Gauge, Waves, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function ExtendedRange() {
  const learningPoints = [
    'Advanced dive planning',
    'Decompression theory and procedures',
    'Gas management and gas switching',
    'Twinset or sidemount equipment configuration',
    'Emergency procedures and problem-solving',
    'Team diving techniques',
    'Oxygen and decompression gas use up to 100% O₂',
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Technical Diving</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">SDI/TDI Extended Range Diver Course</h1>
          <p className="text-muted-foreground">
            The gateway into technical diving. Train for planned decompression dives beyond recreational limits.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Beyond Recreational</span>
              <h2 className="text-3xl font-serif font-bold text-white">Enter the World of Technical Diving</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Extended Range (XR) Diver Course is the gateway into technical diving. It trains divers to safely conduct planned decompression dives beyond recreational limits using advanced equipment, gas management, and decompression procedures. Depending on the agency and configuration, divers are typically trained for decompression dives to depths of approximately 45-65 metres.
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="/reservations?course=extended-range" className="btn-premium-primary text-sm">
                  Enroll Now
                </Link>
                <Link href="/contact" className="btn-premium-secondary text-sm flex items-center gap-2">
                  Ask a Question <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="glass-panel p-8 space-y-6 text-left border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Gauge className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Depths of 45-65 Metres</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This course prepares you for planned decompression dives using advanced equipment configurations including twinset or sidemount systems, with decompression gases up to 100% oxygen.
              </p>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Go Beyond Recreational Limits?</h2>
          <p className="text-muted-foreground mb-8">
            Take the leap into technical diving with expert instruction and advanced training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations?course=extended-range" className="btn-premium-primary px-8 py-3 text-base">
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
