import React from 'react';
import { Mosque } from '@/components/icons/mosque';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          
          <a href="#home" className="flex items-center gap-2">
            <Mosque className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-headline text-primary">Masjid360</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#home" className="hover:text-background transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-background transition-colors">
              Features
            </a>
            <a href="#admin" className="hover:text-background transition-colors">
              Admin Login
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </nav>
          
          <div className="flex space-x-6">
            <a href="#" aria-label="Facebook" className="text-background/60 hover:text-background transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-background/60 hover:text-background transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-background/60 hover:text-background transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          <div className="w-full max-w-screen-md border-t border-background/20 pt-8" />
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:w-full max-w-screen-md items-center gap-4">
             <p className="text-sm text-background/60">
              &copy; {currentYear} Masjid360. All rights reserved.
            </p>
             <p className="text-sm">
              Built with love & faith.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
