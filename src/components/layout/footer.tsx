import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Masjid360. All rights reserved.
            </p>
            <nav className="flex space-x-6">
              <a href="#" className="text-sm hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-background transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
          <p className="text-sm">Built with love & faith.</p>
        </div>
      </div>
    </footer>
  );
}
