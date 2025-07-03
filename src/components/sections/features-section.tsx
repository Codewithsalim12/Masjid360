import React from 'react';
import { MapPin, Clock, MessageSquare, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedBubbles } from '@/components/layout/animated-bubbles';

const features = [
  {
    icon: <MapPin />,
    title: 'Discover Masjids',
    description: 'Easily find masjids near you with our interactive map and detailed listings.',
  },
  {
    icon: <Clock />,
    title: 'Real-time Prayer Times',
    description: 'Get accurate, real-time prayer schedules for any masjid, right at your fingertips.',
  },
  {
    icon: <MessageSquare />,
    title: 'Contact Imams Directly',
    description: 'Connect with imams for spiritual guidance, questions, and community information.',
  },
  {
    icon: <Languages />,
    title: 'Multi-language Support',
    description: 'Our app is available in multiple languages to serve a diverse and global community.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-secondary py-24 sm:py-32">
      <AnimatedBubbles />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            What Masjid360 Offers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            Masjid360 is designed to be your comprehensive guide to mosque life.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'flex flex-col md:flex-row items-center gap-8 md:gap-16',
                index % 2 !== 0 && 'md:flex-row-reverse'
              )}
            >
              <div className="md:w-1/2 flex justify-center">
                 <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-primary/10 transform transition-transform duration-500 hover:scale-105">
                  {React.cloneElement(feature.icon, {
                    className: 'h-24 w-24 text-primary',
                  })}
                 </div>
              </div>

              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold font-headline text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
