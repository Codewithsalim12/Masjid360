import React from 'react';
import { MapPin, Clock, MessageSquare, Languages } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Discover Masjids',
    description: 'Easily find masjids near you with our interactive map and detailed listings.',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Real-time Prayer Times',
    description: 'Get accurate, real-time prayer schedules for any masjid, right at your fingertips.',
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'Contact Imams Directly',
    description: 'Connect with imams for spiritual guidance, questions, and community information.',
  },
  {
    icon: <Languages className="h-8 w-8 text-primary" />,
    title: 'Multi-language Support',
    description: 'Built for Urdu & English users',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-background overflow-hidden py-24 sm:py-32 scroll-mt-16">
      {/* Grid and glow background from Hero section for consistency */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--secondary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--secondary))_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_600px,hsl(var(--primary)/0.1),transparent)]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
            What Masjid360 Offers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            Masjid360 is designed to be your comprehensive guide to mosque life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 transition-all duration-300 hover:border-primary/50"
            >
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(at_top_left,_hsl(var(--primary)/0.15),transparent_40%)]" />
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-headline text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
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
