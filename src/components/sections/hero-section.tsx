import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="relative bg-background overflow-hidden scroll-mt-16">
      {/* Grid and glow background */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--secondary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--secondary))_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,hsl(var(--primary)/0.1),transparent)]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-[calc(100vh-4rem)] py-24 sm:py-32 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-extrabold font-headline tracking-tight text-foreground sm:text-6xl md:text-7xl">
                <span className="block">Your Digital Guide</span>
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent pt-2">to the Masjid</span>
              </h1>
              <p className="mt-6 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:max-w-3xl lg:mx-0">
                Find Masjids. Accurate Timings. Straight from the Source.
              </p>
              <div className="mt-10 flex justify-center lg:justify-start">
                <Link href="#" passHref>
                  <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
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
                className="rounded-lg max-h-[70vh] w-auto drop-shadow-[0_25px_25px_hsl(var(--primary)/0.15)]"
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
