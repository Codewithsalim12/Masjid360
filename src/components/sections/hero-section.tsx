import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const GooglePlayLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em" {...props}>
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0L11 27.3l104.6 104.6L47 0zm0 512l104.6-104.6L11 484.7 47 512zm221.3-221.3l60.1-60.1L384.2 166.7 268.3 290.7zM203.3 109.2L27 234.3l176.3 176.3 176.3-176.3-176.3-176.3z" />
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
               <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background">
                        <Image
                            src="https://m.media-amazon.com/images/I/61UWctKaOXL._AC_UF1000,1000_QL80_.jpg"
                            alt="App preview showing a map with pins"
                            width={300}
                            height={600}
                            className="w-full h-full object-cover"
                            data-ai-hint="map preview"
                        />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
