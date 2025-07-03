import React from 'react';
import { MapPin, Clock, MessageSquare, Languages } from 'lucide-react';
import { AnimatedBubbles } from '@/components/layout/animated-bubbles';

const features = [
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: 'Discover Masjids',
    description: 'Easily find masjids near you with our interactive map and detailed listings.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Real-time Prayer Times',
    description: 'Get accurate, real-time prayer schedules for any masjid, right at your fingertips.',
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: 'Contact Imams Directly',
    description: 'Connect with imams for spiritual guidance, questions, and community information.',
  },
  {
    icon: <Languages className="h-10 w-10 text-primary" />,
    title: 'Multi-language Support',
    description: 'Our app is available in multiple languages to serve a diverse and global community.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-secondary py-24 sm:py-32">
      <AnimatedBubbles />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
            What Masjid360 Offers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            Masjid360 is designed to be your comprehensive guide to mosque life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-lg border border-transparent transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-headline text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
