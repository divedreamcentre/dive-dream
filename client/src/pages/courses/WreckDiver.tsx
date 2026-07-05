import Layout from '@/components/Layout';
import { CheckCircle2, Anchor, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function WreckDiver() {
  const overview = [
    'Safe wreck exploration techniques and procedures',
    'Hazard identification and risk management around submerged structures',
    'Line-laying and navigation inside and around wrecks',
    'Buoyancy and finning techniques to minimize silt disturbance',
    'Environmental awareness and wreck preservation',
    'Emergency procedures specific to wreck diving',
  ];

  const prerequisites = [
    'Minimum age: 18 years (or 10 years with parental consent, depending on local standards)',
    'Certified as an Open Water Scuba Diver or equivalent',
    'Good health and comfortable buoyancy skills',
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Specialty Certification</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">SDI Wreck Diver Specialty Course</h1>
          <p className="text-muted-foreground">
            Learn to safely explore sunken ships, aircraft, and other submerged structures while protecting these unique underwater environments.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Explore History</span>
              <h2 className="text-3xl font-serif font-bold text-white">Discover Sunken Worlds</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The SDI Wreck Diver Specialty Course teaches divers how to safely explore sunken ships, aircraft, and other submerged structures while minimizing risks and protecting these unique underwater environments. The course combines classroom/theory sessions with open water dives to develop the skills needed for safe wreck exploration.
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="/reservations?course=wreck-diving" className="btn-premium-primary text-sm">
                  Enroll Now
                </Link>
                <Link href="/contact" className="btn-premium-secondary text-sm flex items-center gap-2">
                  Ask a Question <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="glass-panel p-8 space-y-6 text-left border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Anchor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Theory + Open Water</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The course combines classroom and theory sessions with open water dives, giving you hands-on experience navigating real wreck sites under expert supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-24 bg-secondary/10">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Requirements</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">Prerequisites</h2>
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

      {/* Course Overview */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Curriculum</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">Course Overview</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {overview.map((point) => (
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Explore Wrecks?</h2>
          <p className="text-muted-foreground mb-8">
            Discover the thrill of exploring sunken history with proper training and safety skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations?course=wreck-diving" className="btn-premium-primary px-8 py-3 text-base">
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
