'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { Smartphone, Star, MessageSquare } from 'lucide-react';

export default function NfcSection() {
  const steps = [
    {
      icon: Smartphone,
      text: "Le client approche son téléphone du support NFC"
    },
    {
      icon: Star,
      text: "La page d'avis Google de votre établissement s'ouvre directement"
    },
    {
      icon: MessageSquare,
      text: "Votre client laisse un avis en quelques secondes, sans chercher"
    }
  ];

  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div>
            <SectionHeader
              centered={false}
              badge="Support NFC"
              title="Transformez vos clients satisfaits en avis authentiques"
              subtitle="Beaucoup de vos clients sont ravis de vos services, mais très peu pensent à laisser un avis. Simplifiez-leur la vie avec notre support NFC."
            />
            
            <div className="space-y-8 mb-10">
              {steps.map((step, index) => (
                <AnimateOnScroll key={index} delay={index * 0.15} direction="up">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center relative">
                      <step.icon className="text-blue-400" size={20} />
                      {index < steps.length - 1 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-8 bg-blue-500/20 hidden sm:block" />
                      )}
                    </div>
                    <div className="pt-3">
                      <span className="text-lg text-slate-200">{step.text}</span>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            
            <AnimateOnScroll delay={0.6}>
              <p className="text-sm text-slate-400 italic bg-white/5 p-4 rounded-lg border border-white/5 inline-block">
                * Les avis doivent toujours provenir de vrais clients et être laissés librement, sans contrepartie.
              </p>
            </AnimateOnScroll>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <AnimateOnScroll direction="left">
              <div className="relative w-[300px] sm:w-[350px]">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                
                {/* Mockup NFC Display */}
                <Card className="relative z-10 p-2 bg-navy-900 border-white/10 shadow-2xl overflow-hidden aspect-[3/4] flex flex-col">
                  <div className="flex-1 bg-gradient-to-b from-navy-800 to-navy-950 rounded-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    
                    {/* Simulated NFC waves */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="w-24 h-24 border-2 border-blue-400 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                      <div className="w-40 h-40 border-2 border-blue-400 rounded-full absolute animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                    </div>
                    
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 mb-6 relative z-10">
                      <Smartphone className="text-white" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Approchez<br/>votre téléphone</h3>
                    <p className="text-blue-200 text-sm mb-8 relative z-10">Pour laisser un avis Google</p>
                    
                    <div className="flex gap-1 relative z-10">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="text-amber-400 fill-amber-400" size={24} />
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>
          
        </div>
      </div>
    </section>
  );
}
