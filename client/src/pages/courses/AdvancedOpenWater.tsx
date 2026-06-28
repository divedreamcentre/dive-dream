import Layout from '@/components/Layout';
import { CheckCircle2, Award, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function AdvancedOpenWater() {
  const learningPoints = [
    'Advanced buoyancy control',
    'Underwater navigation techniques',
    'Deep diving procedures',
    'Improved dive planning and awareness',
    'Specialty diving skills based on your interests',
  ];

  const requiredDives = [
    'Deep Dive',
    'Underwater Navigation Dive',
  ];

  const optionalDives = [
    'Night Diving',
    'Drift Diving',
    'Wreck Diving',
    'Peak Performance Buoyancy',
    'Fish Identification',
    'Search and Recovery',
    'Underwater Photography',
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Advanced Certification</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Advanced Open Water Diver Course</h1>
          <p className="text-muted-foreground">
            Build your confidence, expand your diving skills, and explore new underwater adventures.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Level Up</span>
              <h2 className="text-3xl font-serif font-bold text-white">Take Your Diving to the Next Level</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Advanced Open Water Diver Course is designed to build your confidence, expand your diving skills, and introduce you to new underwater adventures. Through a series of specialty dives, you'll gain valuable experience while exploring different aspects of scuba diving.
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="/reservations?course=advanced-open-water" className="btn-premium-primary text-sm">
                  Enroll Now
                </Link>
                <Link href="/contact" className="btn-premium-secondary text-sm flex items-center gap-2">
                  Ask a Question <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="glass-panel p-8 space-y-6 text-left border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Compass className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Five Adventure Dives</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The course includes five adventure dives that let you explore different specialties. Two required dives build essential skills, while three elective dives let you pursue your interests.
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

      {/* Course Structure */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Course Structure</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">Five Adventure Dives</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Required Dives */}
            <div className="glass-panel p-8 space-y-6 border-primary/20">
              <h3 className="text-lg font-serif font-bold text-white">Required Dives</h3>
              <ul className="space-y-3">
                {requiredDives.map((dive) => (
                  <li key={dive} className="flex items-center gap-3 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {dive}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">Plus three additional adventure dives of your choice</p>
            </div>

            {/* Popular Options */}
            <div className="glass-panel p-8 space-y-6">
              <h3 className="text-lg font-serif font-bold text-white">Popular Elective Options</h3>
              <ul className="space-y-3">
                {optionalDives.map((dive) => (
                  <li key={dive} className="flex items-center gap-3 text-sm text-white/90">
                    <Award className="w-4 h-4 text-primary/60 shrink-0" />
                    {dive}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border/40">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Advance Your Skills?</h2>
          <p className="text-muted-foreground mb-8">
            Take the next step in your diving journey with five exciting adventure dives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations?course=advanced-open-water" className="btn-premium-primary px-8 py-3 text-base">
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
