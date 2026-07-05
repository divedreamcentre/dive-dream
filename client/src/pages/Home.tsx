import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { GALLERY_IMAGES, DIVE_SITES, DIVE_PACKAGES, PROMOTIONS, SERVICES } from '@/const';
import { home } from '@/images';
import { ArrowRight, Anchor, Shield, Star, Award, Compass, MapPin, Waves, Flame, Clock, BookOpen, Tag, ChevronLeft, ChevronRight, Globe } from 'lucide-react';


import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const heroSlides = [
  { image: home.heroSlides[0], title: 'Explore Crystal Waters', subtitle: 'Dive into 40+ pristine sites across Mauritius' },
  { image: home.heroSlides[1], title: 'Historic Wreck Diving', subtitle: 'Discover fascinating underwater relics and marine ecosystems' },
  { image: home.heroSlides[2], title: 'Vibrant Coral Gardens', subtitle: 'Swim through some of the Indian Ocean\'s richest reefs' },
  { image: home.heroSlides[3], title: 'Professional Training', subtitle: 'SDI & TDI certified courses from beginner to instructor' },
  { image: home.heroSlides[4], title: 'Luxury Dive Vessel', subtitle: 'Set sail on our custom-built catamaran for every expedition' },
];

export default function Home() {
  const featuredSites = DIVE_SITES.slice(0, 3);

  const [heroBgIndex, setHeroBgIndex] = useState(0);

  useEffect(() => {
    home.heroBackgrounds.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;

    const id = setInterval(() => {
      setHeroBgIndex((prev) => (prev + 1) % home.heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [autoplayPlugin.current],
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideTweens, setSlideTweens] = useState<number[]>([]);


  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const updateTweens = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const styles = emblaApi.scrollSnapList().map((snap, idx) => {
      let diff = snap - scrollProgress;
      engine.slideLooper.loopPoints.forEach((lp) => {
        const target = lp.target();
        if (idx === lp.index && target !== 0) {
          const sign = Math.sign(target);
          if (sign === -1) diff = snap - (1 + scrollProgress);
          if (sign === 1) diff = snap + (1 - scrollProgress);
        }
      });
      return Math.min(Math.abs(diff * 3.5), 1);
    });
    setSlideTweens(styles);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveSlide(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', updateTweens);
    emblaApi.on('reInit', updateTweens);
    onSelect();
    updateTweens();
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('scroll', updateTweens);
      emblaApi.off('reInit', updateTweens);
    };
  }, [emblaApi, updateTweens]);


  const galleryAutoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));
  const [galleryRef, galleryApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [galleryAutoplay.current],
  );
  const [galleryActiveSlide, setGalleryActiveSlide] = useState(0);
  const [galleryTweens, setGalleryTweens] = useState<number[]>([]);

  const scrollToGallery = useCallback((index: number) => galleryApi?.scrollTo(index), [galleryApi]);

  const updateGalleryTweens = useCallback(() => {
    if (!galleryApi) return;
    const engine = galleryApi.internalEngine();
    const scrollProgress = galleryApi.scrollProgress();
    const styles = galleryApi.scrollSnapList().map((snap, idx) => {
      let diff = snap - scrollProgress;
      engine.slideLooper.loopPoints.forEach((lp) => {
        const target = lp.target();
        if (idx === lp.index && target !== 0) {
          const sign = Math.sign(target);
          if (sign === -1) diff = snap - (1 + scrollProgress);
          if (sign === 1) diff = snap + (1 - scrollProgress);
        }
      });
      return Math.min(Math.abs(diff * 3.5), 1);
    });
    setGalleryTweens(styles);
  }, [galleryApi]);

  useEffect(() => {
    if (!galleryApi) return;
    const onSelect = () => setGalleryActiveSlide(galleryApi.selectedScrollSnap());
    galleryApi.on('select', onSelect);
    galleryApi.on('scroll', updateGalleryTweens);
    galleryApi.on('reInit', updateGalleryTweens);
    onSelect();
    updateGalleryTweens();
    return () => {
      galleryApi.off('select', onSelect);
      galleryApi.off('scroll', updateGalleryTweens);
      galleryApi.off('reInit', updateGalleryTweens);
    };
  }, [galleryApi, updateGalleryTweens]);

  const coreCourses = [
    { id: 'open-water', name: 'Open Water Diver Course', description: 'The foundation of recreational diving. Learn essential skills to dive safely to 18 metres independently with a buddy.' },
    { id: 'advanced-open-water', name: 'Advanced Open Water Diver Course', description: 'Build on your Open Water skills with advanced techniques and deeper diving capabilities up to 30 metres.' },
    { id: 'rescue-diver', name: 'Rescue Diver Course', description: 'Develop rescue techniques and emergency response skills to assist other divers in distress.' },
    { id: 'dive-master', name: 'Dive Master Course', description: 'Professional-level training to lead dives and assist with instruction — the gateway to a diving career.' },
  ];

  const specialtyCourseNames = [
    'Wreck Diving', 'Underwater Photography', 'Night Dive',
    'Deep Diver', 'Drift Diving', 'Enriched Air (Nitrox)',
  ];
  const mainPromotion = PROMOTIONS.find(p => p.id === 'summer-campaign') || PROMOTIONS[0];

  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Advanced Diver',
      text: 'Dive Dream exceeded all my expectations! Seven and his team are incredibly professional and knowledgeable. The dive sites in Mauritius are absolutely stunning, and I felt completely safe throughout.',
      rating: 5,
    },
    {
      name: 'Sarah Mitchell',
      role: 'Open Water Graduate',
      text: 'I was nervous about learning to dive, but the instructors at Dive Dream were patient and encouraging. My first dive was unforgettable. The coral reefs are so vibrant and full of life!',
      rating: 5,
    },
    {
      name: 'David Laurent',
      role: 'Technical Diving Enthusiast',
      text: 'Dive Dream offers world-class technical training. Seven\'s expertise and the professional crew made my advanced courses incredibly rewarding. Highly recommended for serious divers!',
      rating: 5,
    }
  ];


  return (
    <Layout>
      {/* 1. HERO SECTION - Cinematic Immersive Depth */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fullscreen Background Slideshow with Deep Sea Overlay */}
        <div className="absolute inset-0 z-0">
          {home.heroBackgrounds.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-105 animate-float"
              style={{
                animationDuration: '20s',
                opacity: idx === heroBgIndex ? 1 : 0,
                transition: 'opacity 1.2s ease-in-out',
              }}
            />
          ))}
          {/* Deep oceanic gradient overlays for luxury feel & text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30 z-10" />
          {/* Subtle sun-ray animation overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,oklch(0.65_0.18_200_/_0.15),transparent_60%)] z-10 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="container relative z-20 pt-20 pb-12 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md mb-6 animate-glow">
            <Waves className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Discover Mauritius Diving</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 font-serif leading-tight">
            Discover the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-pulse" style={{ animationDuration: '8s' }}>Underwater World</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional SDI & TDI Training, 40+ Pristine Dive Sites, and Unforgettable Marine Adventures in Mauritius since 2004.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reservations" className="btn-premium-primary w-full sm:w-auto text-base">
              Book Your Dive
            </Link>
            <Link href="/dive-sites" className="btn-premium-secondary w-full sm:w-auto text-base flex items-center justify-center gap-2">
              Discover Dive Sites
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>

          {/* Quick trust highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10 text-left">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary shrink-0" />
              <div>
                <span className="block text-white font-semibold text-sm">Safety Certified</span>
                <span className="block text-xs text-muted-foreground">100% Safety Record</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-primary shrink-0" />
              <div>
                <span className="block text-white font-semibold text-sm">5-Star SDI / TDI</span>
                <span className="block text-xs text-muted-foreground">Elite Training Center</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Anchor className="w-8 h-8 text-primary shrink-0" />
              <div>
                <span className="block text-white font-semibold text-sm">Safety Standards</span>
                <span className="block text-xs text-muted-foreground">PADI, CMAS, EU PPE</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Compass className="w-8 h-8 text-primary shrink-0" />
              <div>
                <span className="block text-white font-semibold text-sm">Elite Sites</span>
                <span className="block text-xs text-muted-foreground">Exclusive Expeditions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-background fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35C121.81,35.01,236.91,64.58,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. EARLY BOOKING DISCOUNT BANNER */}
      <section className="py-12 bg-gold/5 border-y border-gold/20 relative">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-gold animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Limited Time Campaign
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white mt-1">{mainPromotion.title} — {mainPromotion.discount}</h3>
              <p className="text-sm text-muted-foreground max-w-xl mt-1">{mainPromotion.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0 w-full lg:w-auto">
            <div className="bg-background/80 border border-gold/20 px-4 py-2 rounded-lg text-center shrink-0">
              <span className="block font-serif text-lg font-bold text-gold">05</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Days</span>
            </div>
            <div className="bg-background/80 border border-gold/20 px-4 py-2 rounded-lg text-center shrink-0">
              <span className="block font-serif text-lg font-bold text-gold">14</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Hrs</span>
            </div>
            <div className="bg-background/80 border border-gold/20 px-4 py-2 rounded-lg text-center shrink-0">
              <span className="block font-serif text-lg font-bold text-gold">32</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Mins</span>
            </div>
            <Link href="/promotions" className="btn-premium-gold px-6 py-3 text-sm shrink-0 w-full sm:w-auto text-center">
              Claim Offer
            </Link>
          </div>
        </div>
      </section>

      {/* 1b. FEATURED IMAGE CAROUSEL */}
      <section className="py-16 relative overflow-hidden">
        <div className="container max-w-6xl relative">
          {/* Carousel viewport */}
          <div
            ref={emblaRef}
            className="overflow-hidden"
            onMouseEnter={() => autoplayPlugin.current.stop()}
            onMouseLeave={() => autoplayPlugin.current.play()}
          >
            <div className="flex -ml-4">
              {heroSlides.map((slide, idx) => {
                const tweenVal = slideTweens[idx] ?? 1;
                const scale = 1 - tweenVal * 0.15;
                const opacity = 1 - tweenVal * 0.5;
                return (
                  <div
                    key={idx}
                    className="min-w-0 shrink-0 grow-0 pl-4"
                    style={{ flex: '0 0 70%' }}
                  >
                    <div
                      className="rounded-xl overflow-hidden border border-border/40 shadow-2xl shadow-black/30 transition-shadow duration-500"
                      style={{
                        transform: `scale(${scale})`,
                        opacity,
                        transition: 'transform 0.35s ease-out, opacity 0.35s ease-out',
                        boxShadow: tweenVal < 0.15
                          ? '0 25px 60px -12px rgba(0,0,0,0.5), 0 0 40px -8px oklch(0.65 0.18 200 / 0.15)'
                          : undefined,
                      }}
                    >
                      <div className="aspect-[16/9] relative">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                        <div
                          className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 transition-opacity duration-300"
                          style={{ opacity: tweenVal < 0.3 ? 1 : 0 }}
                        >
                          <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-2">{slide.title}</h3>
                          <p className="text-sm sm:text-base text-muted-foreground max-w-lg">{slide.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-background/90 hover:border-primary/40 transition-all duration-200 z-10 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-background/90 hover:border-primary/40 transition-all duration-200 z-10 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeSlide ? 'w-8 bg-gold' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED DIVE SITES */}
      <section className="py-24 relative">
        <div className="container text-center max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Marine Sanctuaries</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-4 text-white">Explore Our Featured Dive Sites</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Dive into some of the most prestigious underwater ecosystems. From deep abyssal walls to historic shipwrecks, adventure awaits at every depth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {featuredSites.map((site) => (
              <div key={site.id} className="glass-panel overflow-hidden group flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={site.image} 
                    alt={site.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md border border-border/60 px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {site.certificationLevel}
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-1.5">
                    {site.type.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="bg-primary/20 border border-primary/30 text-white backdrop-blur-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider flex items-center gap-1 mb-2">
                    <MapPin className="w-3.5 h-3.5" /> {site.location.split(',')[0]}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {site.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {site.description.slice(0, 120)}...
                  </p>
                  <div className="border-t border-white/10 pt-4 flex justify-between text-xs text-muted-foreground">
                    <div>
                      <span className="block">Max Depth</span>
                      <span className="block text-white font-semibold mt-0.5">{site.maxDepth}</span>
                    </div>
                    <div className="text-right">
                      <span className="block">Visibility</span>
                      <span className="block text-white font-semibold mt-0.5">{site.visibility}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/dive-sites" className="btn-premium-secondary text-sm inline-flex items-center gap-2">
              View All Dive Sites
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. POPULAR DIVE PACKAGES */}
      <section className="py-24 bg-secondary/20 relative">
        <div className="container text-center max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Exclusive Expeditions</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-4 text-white">Popular Dive Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Choose from our premium curated dive packages. Whether you want a single dive or a multi-day underwater odyssey, we have the perfect itinerary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {DIVE_PACKAGES.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`glass-panel p-6 flex flex-col justify-between h-full relative ${
                  pkg.isBestValue ? 'border-primary/60 shadow-lg shadow-primary/10' : ''
                }`}
              >
                {pkg.isBestValue && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-gold/40 shadow-md shadow-gold/20">
                    Best Value
                  </span>
                )}
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">{pkg.duration}</span>
                  <h3 className="text-lg font-serif font-bold text-white mb-4">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-serif font-bold text-white">${pkg.price}</span>
                    <span className="text-xs text-muted-foreground">/ package</span>
                  </div>

                  <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                    <li className="flex items-center gap-2 text-white">
                      <Star className="w-4 h-4 text-primary shrink-0" />
                      <span><strong>{pkg.divesCount}</strong> Ocean Dives Included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary shrink-0" />
                      <span>{pkg.equipmentIncluded ? 'Premium Gear Included' : 'Gear Rental Available'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary shrink-0" />
                      <span>Free Nitrox Fills (Up to 32%)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary shrink-0" />
                      <span>Professional Dive Guide</span>
                    </li>
                  </ul>
                </div>

                <Link 
                  href={`/reservations?package=${pkg.id}`} 
                  className={`w-full text-center py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                    pkg.isBestValue 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                  }`}
                >
                  Book Package
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/packages" className="btn-premium-secondary text-sm inline-flex items-center gap-2">
              View All Packages
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SDI / TDI TRAINING COURSES */}
      <section className="py-24 relative">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Professional Training</span>
              <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-4 text-white">SDI & TDI Scuba Courses</h2>
              <p className="text-muted-foreground max-w-xl">
                Get certified or expand your technical diving capabilities with our world-renowned SDI and TDI training programs, taught in English, French & German.
              </p>
            </div>
            <Link href="/courses" className="btn-premium-secondary text-sm flex items-center gap-2 shrink-0">
              View All Courses
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>

          {/* Core Courses */}
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Core Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreCourses.map((course) => (
                <div key={course.id} className="glass-panel p-6 group hover:border-primary/40 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">{course.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{course.description}</p>
                  </div>
                  <Link href={`/reservations?course=${course.id}`} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold">
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Specialty Courses */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
              <Award className="w-4 h-4" /> Specialty Courses
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {specialtyCourseNames.map((name) => (
                <div key={name} className="glass-panel p-4 text-center hover:border-primary/40 transition-all duration-300">
                  <span className="text-sm text-white font-semibold">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROMOTIONS & SPECIAL OFFERS */}
      <section className="py-24 bg-secondary/20 relative">
        <div className="container text-center max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Exclusive Offers</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-4 text-white">Promotions & Special Deals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Take advantage of our seasonal campaigns and loyalty rewards. Book smarter and save on your next diving adventure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {PROMOTIONS.map((promo) => (
              <div key={promo.id} className="glass-panel p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Tag className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-2xl font-serif font-bold text-gold">{promo.discount}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-3">{promo.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{promo.description}</p>
                </div>
                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white tracking-wider bg-white/5 px-3 py-1.5 rounded border border-white/10">{promo.code}</span>
                  <Link href={`/reservations?promo=${promo.code}`} className="text-xs text-primary font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-1">
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/promotions" className="btn-premium-secondary text-sm inline-flex items-center gap-2">
              View All Promotions
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6b. PREMIUM SERVICES */}
      <section className="py-24 relative">
        <div className="container text-center max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">VIP Logistics</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-4 text-white">Premium Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Beyond elite diving. Airport transfers, private charters, snorkeling safaris, underwater photography, and luxury onboard catering.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {SERVICES.slice(0, 3).map((srv) => (
              <div key={srv.id} className="glass-panel overflow-hidden group flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {srv.description.slice(0, 120)}...
                  </p>
                  <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{srv.price}</span>
                    <Link href={`/reservations?service=${srv.id}`} className="text-xs text-primary font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-1">
                      Book <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/services" className="btn-premium-secondary text-sm inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS */}
      <section className="py-24 bg-secondary/5 relative">
        <div className="container text-center max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Guest Experiences</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-4 text-white">What Our Divers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            We pride ourselves on providing the highest standards of safety, professionalism, and luxury. Read reviews from our global diving community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-panel p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic mb-8">
                    "{t.text}"
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-serif text-sm font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-white">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8b. PHOTO GALLERY */}
      <section className="py-24 relative overflow-hidden">
        <div className="container text-center max-w-6xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Our World</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-4 text-white">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            A glimpse into the breathtaking underwater landscapes and marine encounters that await you in Mauritius.
          </p>

          <div className="relative">
            <div
              ref={galleryRef}
              className="overflow-hidden"
              onMouseEnter={() => galleryAutoplay.current.stop()}
              onMouseLeave={() => galleryAutoplay.current.play()}
            >
              <div className="flex -ml-4">
                {GALLERY_IMAGES.map((src, idx) => {
                  const tweenVal = galleryTweens[idx] ?? 1;
                  const scale = 1 - tweenVal * 0.15;
                  const opacity = 1 - tweenVal * 0.5;
                  return (
                    <div
                      key={idx}
                      className="min-w-0 shrink-0 grow-0 pl-4"
                      style={{ flex: '0 0 70%' }}
                    >
                      <div
                        className="rounded-xl overflow-hidden border border-border/40 shadow-2xl shadow-black/30"
                        style={{
                          transform: `scale(${scale})`,
                          opacity,
                          transition: 'transform 0.35s ease-out, opacity 0.35s ease-out',
                          boxShadow: tweenVal < 0.15
                            ? '0 25px 60px -12px rgba(0,0,0,0.5), 0 0 40px -8px oklch(0.65 0.18 200 / 0.15)'
                            : undefined,
                        }}
                      >
                        <div className="aspect-[16/9] relative">
                          <img
                            src={src}
                            alt={`Gallery photo ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => galleryApi?.scrollPrev()}
              className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-background/90 hover:border-primary/40 transition-all duration-200 z-10 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => galleryApi?.scrollNext()}
              className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-background/90 hover:border-primary/40 transition-all duration-200 z-10 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {GALLERY_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToGallery(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === galleryActiveSlide ? 'w-8 bg-gold' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. MULTILINGUAL AVAILABILITY */}
      <section className="py-20 relative border-t border-border/40">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Globe className="w-4 h-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">International Welcome</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-4 text-white">We Speak Your Language</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We provide all courses and services in multiple languages to support international learners and clients.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {[
              { lang: 'English', flag: '🇬🇧', label: 'EN' },
              { lang: 'Français', flag: '🇫🇷', label: 'FR' },
              { lang: 'Deutsch', flag: '🇩🇪', label: 'DE' },
            ].map((item) => (
              <div key={item.label} className="glass-panel px-8 py-6 flex flex-col items-center gap-3 min-w-[140px]">
                <span className="text-4xl">{item.flag}</span>
                <span className="text-base font-serif font-bold text-white">{item.lang}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 border border-gold/20 px-2.5 py-0.5 rounded-full">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. QUICK CONTACT & INTERACTIVE MAP */}
      <section className="py-24 relative border-t border-border/40">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Get in Touch */}
            <div className="glass-panel p-8 md:p-10 text-left flex flex-col justify-center h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Have Questions?</span>
              <h2 className="text-2xl md:text-4xl font-serif mt-2 mb-4 text-white">Get in Touch</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Our professional dive operations team is here to help you plan your next underwater expedition.
              </p>

              <div className="flex flex-col gap-4">
                <Link href="/contact" className="btn-premium-primary w-full py-3 text-sm font-semibold uppercase tracking-widest text-center">
                  Send a Message
                </Link>
                <Link href="/reservations" className="btn-premium-gold w-full py-3 text-sm font-semibold uppercase tracking-widest text-center">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="glass-panel overflow-hidden flex flex-col h-full min-h-[450px]">
              <div className="p-6 border-b border-white/10 bg-background/40">
                <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Physical Headquarters
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-1">Visit Our Dive Center</h3>
                <p className="text-xs text-muted-foreground mt-1">100 Marine Drive, Siren Bay, MB 1204</p>
              </div>
              <div className="flex-grow relative bg-slate-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.34925453057!2d57.54324857616065!3d-20.035808741613913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217dacaed25f4d75%3A0x1814f7c7bab412c1!2sDive%20Dream%20Divers!5e0!3m2!1sen!2smu!4v1781795341840!5m2!1sen!2smu"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dive Dream Divers Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
