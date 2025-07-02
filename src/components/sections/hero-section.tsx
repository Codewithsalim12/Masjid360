import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const GooglePlayLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M428.3,234.4,142,56.3a32.3,32.3,0,0,0-48.4,28.1V427.6a32.3,32.3,0,0,0,48.4,28.1l286.3-178.1A32.5,32.5,0,0,0,428.3,234.4Z"/>
    </svg>
);


export function HeroSection() {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 hover:text-background border-transparent">
                    <GooglePlayLogo className="h-6 w-6 mr-3" />
                    Download on Google Play
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-12 lg:mt-0 flex justify-center">
              <Image
                src="https://i.ibb.co/VvZg1DE/image.png"
                alt="SnapMap preview"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
                data-ai-hint="app mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
