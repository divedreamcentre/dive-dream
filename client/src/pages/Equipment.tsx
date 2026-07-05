import React from 'react';
import Layout from '@/components/Layout';
import { equipment } from '@/images';
import { Shield, CheckCircle2, Anchor, AlertCircle } from 'lucide-react';

export default function Equipment() {
  const diverEquipment = [
    '20 BCD Jackets',
    '20 Rough Water Wetsuits',
    'Masks',
    'Regulators',
    'Fins',
    'Snorkels',
    'Surface Buoys',
  ];

  const onboardEquipment = [
    'Life Jackets',
    'First Aid Box',
    'Emergency Oxygen Kit',
    'Fire Extinguisher',
    'VHF Radio',
    'GPS Locator',
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 border-b border-border/40">
        <div className="container text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Gear & Safety</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2 mb-4">Equipment & Safety</h1>
          <p className="text-muted-foreground">
            Dive Dream is equipped with all the necessary facilities to ensure that divers feel comfortable and enjoy their dives in the safest environment possible.
          </p>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Safety First</span>
              <h2 className="text-3xl font-serif font-bold text-white">International Safety Standards</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dive Dream owes its recognition to its high level of professionalism and international safety standards. Only equipment of internationally recognised brands is provided at the diving centre, and all maintenance is carried out on a regular basis by an authorised and approved firm. CE mark is used to show conformity with the European Union PPE directive 89/686/EEC and 89/336/EEC.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dive Dream Diving Centre holds all necessary diving insurances with PADI and CMAS, and is fully licensed with the relevant local authorities. All members of the centre are insured with PADI, and our clients are fully covered by a special insurance policy during diving and boat transfers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {['PADI Insured', 'CMAS Licensed', 'EU PPE Certified', 'Local Authority Approved'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={equipment.safetyStandards}
                  alt="Safety Standards"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diver Equipment */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-last">
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={equipment.rentalGear}
                  alt="Dive Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Rental Gear</span>
              <h2 className="text-3xl font-serif font-bold text-white">Equipment for 25 Divers</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We can provide full equipment for up to 25 divers at one time. The centre also operates 2 Bauer compressors to ensure a continuous supply of quality compressed air. Our rental inventory includes:
              </p>
              <ul className="space-y-3">
                {diverEquipment.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Boats & On-board Equipment */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Fleet</span>
              <h2 className="text-3xl font-serif font-bold text-white">Two Boston Whalers</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The diving centre is equipped with two boats — Boston Whalers of 10 metres — purpose-built and equipped for diving activities. Each vessel carries a full complement of safety and emergency equipment:
              </p>
              <ul className="space-y-3">
                {onboardEquipment.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Anchor className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={equipment.fleet}
                  alt="Dive Boats"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
