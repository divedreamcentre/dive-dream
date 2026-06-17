import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { FAQS } from '@/const';
import { HelpCircle, Search, ChevronDown, ChevronUp, ShieldAlert, Phone } from 'lucide-react';
import { Link } from 'wouter';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = ['All', 'General', 'Safety', 'Equipment', 'Booking'];

  // Filter FAQs based on category and search query
  const filteredFaqs = FAQS.filter((faq, idx) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Knowledge Base</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Have questions about medical clearances, certification mapping, safety standards, or booking cancellation policies? Explore our searchable database below.
          </p>
        </div>
      </section>

      {/* FAQ Search and List */}
      <section className="py-24">
        <div className="container max-w-4xl">
          {/* Search Bar & Categories */}
          <div className="space-y-6 mb-16">
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="Search questions or keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-border rounded-full py-3.5 pl-12 pr-6 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex justify-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion FAQ List */}
          <div className="space-y-4 text-left">
            {filteredFaqs.length === 0 ? (
              <div className="glass-panel p-12 text-center text-muted-foreground text-sm">
                No matching questions found. Try typing a different keyword or browse other categories.
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className={`glass-panel overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'border-primary/40 shadow-lg shadow-primary/5' : ''
                    }`}
                  >
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer"
                    >
                      <h3 className="text-base md:text-lg font-serif font-bold text-white flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                        {faq.question}
                      </h3>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                      )}
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-0 border-t border-white/5 animate-fadeIn">
                        <p className="text-sm text-muted-foreground leading-relaxed pl-8 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Emergency Notice */}
          <div className="mt-16 bg-red-500/5 border border-red-500/20 rounded-xl p-6 text-left flex gap-4 items-start max-w-3xl mx-auto">
            <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white">Emergency Medical Contacts</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                If you are a diver experiencing decompression sickness (DCS) symptoms, do not use email or online forms. Contact emergency services or the DAN hotline immediately.
              </p>
              <span className="flex items-center gap-1.5 text-xs text-red-400 font-bold">
                <Phone className="w-4 h-4" /> DAN Hotline: +1 (919) 684-9111 (24/7 Secure Medical Desk)
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
