import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Clock, MessageSquare, Languages } from 'lucide-react';

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
    <section id="features" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Everything You Need in One App
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Masjid360 is designed to be your comprehensive guide to mosque life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-blue-100 p-4 rounded-full">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
