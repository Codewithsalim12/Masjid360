import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedBubbles } from '@/components/layout/animated-bubbles';

export function HeroSection() {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      <AnimatedBubbles />
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-[calc(100vh-4rem)] py-16 sm:py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold font-headline tracking-tight text-foreground sm:text-5xl md:text-6xl">
                <span className="block">Your Digital Guide</span>
                <span className="block text-primary">to the Masjid</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-5 md:max-w-3xl lg:mx-0">
                Find Masjids. Accurate Timings. Straight from the Source.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link href="#" passHref>
                  <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-primary/50 transition-shadow">
                    <Image
                      src="https://ik.imagekit.io/ildjn57it/google-play.png?updatedAt=1751468934524"
                      alt="Google Play logo"
                      width={24}
                      height={24}
                      className="mr-3"
                    />
                    Download on Google Play
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:animate-float">
              <Image
                src="https://ik.imagekit.io/ildjn57it/ChatGPT_Image_Jul_2__2025__08_26_23_PM-removebg-preview.png?updatedAt=1751468935826"
                alt="SnapMap preview"
                width={400}
                height={867}
                className="rounded-lg max-h-[70vh] w-auto"
                data-ai-hint="app mockup map"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
