import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AppleLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.6 0 184.2 0 241.2c0 61.6 31.5 112.9 79.2 152.8 23.6 19.5 50.7 32.8 82.5 32.8 25.8 0 48.6-11.2 65.3-22.7 22.8-15.7 42.1-42.1 42.1-42.1l-1.4-1.2c-12.8-11.1-34.3-21.6-34.3-21.6 15.2-12.8 30.2-26.4 39.6-40.2 12.8-19.5 17.2-42.1 17.2-42.1zM234.3 100.2c13.2-14.4 24.8-31.5 30.2-48.4-14.9-1.3-30.7 3.5-44.5 13.2-13.7 9.7-25.9 25.9-31.5 42.1-16.7-5.3-34.3-3.5-47.2-1.3 11.1 16.7 25.9 31.5 44.5 40.2 18.8 8.7 39.6 8.7 58.5-4.5z" />
  </svg>
);

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
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="#" passHref>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 hover:text-background border-transparent">
                    <AppleLogo className="h-6 w-6 mr-3" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-xl font-semibold leading-tight">App Store</div>
                    </div>
                  </Button>
                </Link>
                <Link href="#" passHref>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 hover:text-background border-transparent">
                    <GooglePlayLogo className="h-6 w-6 mr-3" />
                    <div className="text-left">
                      <div className="text-xs uppercase">Get it on</div>
                      <div className="text-xl font-semibold leading-tight">Google Play</div>
                    </div>
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
