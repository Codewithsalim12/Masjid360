import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold font-headline tracking-tight text-foreground sm:text-5xl md:text-6xl">
                <span className="block">Your Digital Guide</span>
                <span className="block text-primary">to the Masjid</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-5 md:max-w-3xl lg:mx-0">
                Find Masjids. Accurate Timings. Straight from the Source.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="#" passHref>
                    <Button size="lg" className="w-full">
                      Download The App
                      <Play className="ml-2 -mr-1 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                 <Image
                    src="https://images.unsplash.com/photo-1583410657903-27a3741b69e3"
                    alt="A beautiful mosque"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    data-ai-hint="mosque architecture"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
