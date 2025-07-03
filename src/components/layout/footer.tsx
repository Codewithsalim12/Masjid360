import React from 'react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            <a href="#" className="text-background/80 hover:text-background transition-colors">
              Privacy
            </a>
            <a href="#" className="text-background/80 hover:text-background transition-colors">
              Terms
            </a>
            <a href="#" className="text-background/80 hover:text-background transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="w-full max-w-xs border-t border-background/20" />

          <p className="text-sm text-center text-background/60">
            © 2025 Masjid360. Built with love & faith.
          </p>
        </div>
      </div>
    </footer>
  );
}
