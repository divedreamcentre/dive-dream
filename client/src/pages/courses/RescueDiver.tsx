import Layout from '@/components/Layout';
import { CheckCircle2, Shield, Heart, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function RescueDiver() {
  const learningPoints = [
    'Self-rescue techniques',
    'Recognizing diver stress and panic',
    'Assisting tired or distressed divers',
    'Surface and underwater rescue procedures',
    'Search and recovery techniques for missing divers',
    'Emergency management and accident scene control',
    'Oxygen administration and diver first aid',
    'Hyperbaric injury awareness and emergency response procedures',
  ];

  const prerequisites = [
    'Minimum age 15 years (with parental consent) or 18 years depending on local standards',
    'Current CPR, First Aid, and Oxygen Provider certification',
    'SDI Advanced Adventure Diver certification (or equivalent), or Open Water certification with the required logged dives',
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Safety & Rescue</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">SDI Rescue Diver Course</h1>
          <p className="text-muted-foreground">
            One of the most valuable recreational diving certifications. Learn to prevent accidents, recognize stress, and manage diving emergencies.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Bridge to Professional</span>
              <h2 className="text-3xl font-serif font-bold text-white">Become a Confident Rescue Diver</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The SDI Rescue Diver course is one of the most valuable recreational diving certifications because it focuses on preventing accidents, recognizing stress, and managing diving emergencies. It is often considered the bridge between recreational diving and professional-level training.
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="/reservations?course=rescue-diver" className="btn-premium-primary text-sm">
                  Enroll Now
                </Link>
                <Link href="/contact" className="btn-premium-secondary text-sm flex items-center gap-2">
                  Ask a Question <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="glass-panel p-8 space-y-6 text-left border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Professional-Level Skills</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This course is often considered the bridge between recreational diving and professional-level training. The skills you develop here will make you a safer, more confident diver and a valuable dive buddy.
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

      {/* What You'll Learn */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Curriculum</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">What You Will Learn</h2>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Save Lives Underwater?</h2>
          <p className="text-muted-foreground mb-8">
            Develop the skills to handle emergencies and become the diver everyone wants as a buddy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations?course=rescue-diver" className="btn-premium-primary px-8 py-3 text-base">
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
