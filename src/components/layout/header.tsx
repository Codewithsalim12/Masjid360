'use client';

import React from 'react';
import Link from 'next/link';
import { Mosque } from '@/components/icons/mosque';
import { Button } from '@/components/ui/button';

export function Header() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Admin Login', href: '#admin' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2">
          <Mosque className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-primary">Masjid360</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
}
