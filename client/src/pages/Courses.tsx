import Layout from '@/components/Layout';
import { Globe, BookOpen, Waves, Award, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Courses() {
  const languages = ['English', 'German', 'French'];

  const coreCourses = [
    {
      id: 'open-water',
      name: 'Open Water Diver Course',
      description: 'The foundation of recreational diving. Learn essential skills and knowledge to dive safely to 40 meters.',
      detailPath: '/courses/open-water',
    },
    {
      id: 'advanced-open-water',
      name: 'Advanced Open Water Diver Course',
      description: 'Build on your Open Water skills with advanced techniques and deeper diving capabilities up to 30 meters.',
      detailPath: '/courses/advanced-open-water',
    },
    {
      id: 'rescue-diver',
      name: 'Rescue Diver Course',
      description: 'Develop rescue techniques and emergency response skills to assist other divers in distress.',
      detailPath: '/courses/rescue-diver',
    },
    {
      id: 'dive-master',
      name: 'Dive Master Course',
      description: 'Professional-level training to lead dives and assist with instruction. The gateway to diving careers.',
    },
  ];

  const specialtyCourses = [
    {
      id: 'wreck-diving',
      name: 'Wreck Diving Specialty',
      description: 'Learn specialized techniques for exploring shipwrecks and artificial structures safely.',
    },
    {
      id: 'underwater-photography',
      name: 'Underwater Photography Specialty',
      description: 'Capture stunning underwater images with professional photography techniques and equipment.',
    },
    {
      id: 'night-dive',
      name: 'Night Dive Specialty',
      description: 'Master the unique challenges and wonders of diving in low-light conditions.',
    },
    {
      id: 'deep-diver',
      name: 'Deep Diver Specialty',
      description: 'Extend your depth limits and learn advanced decompression and safety procedures.',
      detailPath: '/courses/deep-diver',
    },
    {
      id: 'drift-diving',
      name: 'Drift Diving Specialty',
      description: 'Navigate currents and drift dives with confidence and efficiency.',
    },
    {
      id: 'nitrox',
      name: 'Enriched Air Specialty (Nitrox)',
      description: 'Learn to use enriched air mixes for extended bottom times and safer diving profiles.',
      detailPath: '/courses/nitrox',
    },
    {
      id: 'extended-range',
      name: 'Extended Range Diver (XR)',
      description: 'The gateway into technical diving. Train for planned decompression dives to depths of 45-65 metres.',
      detailPath: '/courses/extended-range',
    },
  ];

  const additionalCourses = [
    {
      id: 'bubble-maker',
      name: 'Bubble Maker License',
      description: 'For children starting at age 8. Introduction to scuba diving in controlled environments.',
    },
    {
      id: 'discover-scuba',
      name: 'Discover Scuba Diving',
      description: 'Try scuba diving without certification. Perfect for beginners wanting to experience the underwater world.',
    },
    {
      id: 'skin-diving',
      name: 'Skin Diving',
      description: 'Learn freediving and snorkeling techniques for exploring shallow waters.',
    },
    {
      id: 'efr',
      name: 'Emergency First Response (EFR) Training',
      description: 'Essential first aid and CPR certification for divers and non-divers alike.',
    },
    {
      id: 'multi-level',
      name: 'Multi-Level Diving',
      description: 'Optimize your dive profiles and extend bottom times with multi-level diving techniques.',
    },
    {
      id: 'peak-performance',
      name: 'Peak Performance Buoyancy',
      description: 'Master buoyancy control for safer, more efficient, and more enjoyable diving.',
    },
    {
      id: 'scuba-review',
      name: 'Scuba Review Course',
      description: 'Refresh your skills if you haven\'t dived in a while. Get back in the water with confidence.',
    },
  ];

  const specialtyDives = [
    { name: 'Night Dives', icon: '🌙' },
    { name: 'Deep Dives', icon: '⬇️' },
    { name: 'Underwater Photography', icon: '📸' },
    { name: 'Wreck Dives', icon: '⚓' },
    { name: 'Drift Dives', icon: '🌊' },
    { name: 'Nitrox (Enriched Air)', icon: '💨' },
  ];

  const CourseCard = ({ course }: { course: { id: string; name: string; description: string; detailPath?: string } }) => (
    <div className="glass-panel p-6 hover:border-primary/40 transition-all duration-300">
      <h3 className="text-lg font-serif font-bold text-white mb-3">{course.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{course.description}</p>
      <Link href={course.detailPath ?? `/reservations?course=${course.id}`} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold">
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Professional Training</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Diving Courses</h1>
          <p className="text-muted-foreground">
            Comprehensive training programs from beginner to professional levels. All courses taught by certified instructors with extensive experience.
          </p>
        </div>
      </section>

      {/* Languages Offered */}
      <section className="py-20 border-b border-border/40">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-white">Languages Offered</h2>
          </div>
          <p className="text-muted-foreground mb-8">Courses and instruction available in:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div key={lang} className="glass-panel p-6 text-center">
                <p className="text-xl font-semibold text-white">{lang}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Courses */}
      <section className="py-20 border-b border-border/40">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-white">Core Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Courses */}
      <section className="py-20 border-b border-border/40">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-white">Specialty Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialtyCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Courses */}
      <section className="py-20 border-b border-border/40">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <Waves className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-white">Additional Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Training Dives */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <Waves className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-white">Specialty Training Dives Offered</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyDives.map((dive) => (
              <div key={dive.name} className="glass-panel p-8 text-center hover:border-primary/40 transition-all duration-300">
                <div className="text-4xl mb-4">{dive.icon}</div>
                <p className="text-lg font-semibold text-white">{dive.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border/40">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Start Your Diving Journey?</h2>
          <p className="text-muted-foreground mb-8">
            Contact us today to book your course or get more information about our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations" className="btn-premium-primary px-8 py-3 text-base">
              Book a Course
            </Link>
            <Link href="/contact" className="btn-premium-secondary px-8 py-3 text-base flex items-center justify-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
