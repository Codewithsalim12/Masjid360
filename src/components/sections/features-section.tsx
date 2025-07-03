import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
    <section id="features" className="relative pt-28 pb-40 md:pt-40 md:pb-48 bg-secondary">
      <AnimatedBubbles />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            What Masjid360 Offers
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Masjid360 is designed to be your comprehensive guide to mosque life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="bg-background/50 border-2 border-transparent hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 text-left"
            >
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center shadow-md">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
