import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { PROMOTIONS } from '@/const';
import { Flame, Clock, Tag, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from 'sonner';

export default function Promotions() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast.success('Promo code copied to clipboard!', {
      description: `Use code ${code} during checkout to redeem.`,
    });
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Exclusive Offers</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Seasonal Campaigns</h1>
          <p className="text-muted-foreground">
            Take advantage of our exclusive seasonal promotions and special group rates. Book in advance or bring your diving buddies to unlock premium discounts.
          </p>
        </div>
      </section>

      {/* Promotions List */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch">
            {PROMOTIONS.map((promo) => {
              const isCampaign = !!promo.expiryDate;
              return (
                <div 
                  key={promo.id} 
                  className={`glass-panel p-8 flex flex-col justify-between h-full relative transition-all duration-300 ${
                    isCampaign 
                      ? 'border-primary/60 shadow-xl shadow-primary/5 scale-102 z-10' 
                      : 'hover:border-white/20'
                  }`}
                >
                  {isCampaign && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/40 shadow-lg flex items-center gap-1.5 animate-glow">
                      <Flame className="w-3.5 h-3.5 fill-current" /> Sizzling Campaign
                    </span>
                  )}
                  
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        {promo.id === 'early-booking' ? (
                          <Clock className="w-6 h-6 text-primary" />
                        ) : promo.id === 'group-discount' ? (
                          <Users className="w-6 h-6 text-primary" />
                        ) : (
                          <Tag className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <span className="text-3xl font-serif font-bold text-primary">{promo.discount}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white mb-4">{promo.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {promo.description}
                    </p>

                    {/* Expiry / Countdown Teaser */}
                    {isCampaign && (
                      <div className="bg-white/5 border border-white/5 rounded-lg p-4 mb-6">
                        <span className="text-xs text-muted-foreground block mb-2 font-semibold uppercase tracking-wider flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-primary" /> Campaign Ends In:
                        </span>
                        <div className="flex gap-2">
                          <div className="bg-background/80 border border-border px-3 py-1.5 rounded text-center shrink-0 flex-grow">
                            <span className="block font-serif text-base font-bold text-white">05</span>
                            <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Days</span>
                          </div>
                          <div className="bg-background/80 border border-border px-3 py-1.5 rounded text-center shrink-0 flex-grow">
                            <span className="block font-serif text-base font-bold text-white">14</span>
                            <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Hrs</span>
                          </div>
                          <div className="bg-background/80 border border-border px-3 py-1.5 rounded text-center shrink-0 flex-grow">
                            <span className="block font-serif text-base font-bold text-white">32</span>
                            <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Mins</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Terms Checklist */}
                    <ul className="space-y-2.5 text-xs text-muted-foreground mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>Valid on all standard SDI/TDI bookings</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>Cannot be combined with other offers</span>
                      </li>
                    </ul>
                  </div>

                  {/* Promo Code Copy Action */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3">
                      <span className="font-mono text-sm font-bold text-white tracking-wider">{promo.code}</span>
                      <button 
                        onClick={() => handleCopyCode(promo.code)}
                        className="text-xs text-primary font-bold uppercase tracking-wider hover:underline cursor-pointer"
                      >
                        {copiedCode === promo.code ? 'Copied!' : 'Copy Code'}
                      </button>
                    </div>
                    
                    <Link 
                      href={`/reservations?promo=${promo.code}`} 
                      className="w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors block"
                    >
                      Apply Promo Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
