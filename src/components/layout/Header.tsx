// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#the-why', label: 'The Why' },
  { href: '#data-insights', label: 'Data Insights' },
  { href: '#project-journey', label: 'Project Journey' },
  { href: '#impact', label: 'Impact & Future' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy({ sectionSelector: 'main section', offset: 100 });

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);


  return (
    <header id="header" className="bg-background/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold font-headline text-foreground">
          Cyber Report <span className="text-primary">/</span> <span className="text-accent">AKB</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className={cn(
                'nav-link text-muted-foreground hover:text-foreground',
                activeSection === item.href.substring(1) && 'active text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          id="mobile-menu-button"
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </nav>
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden px-6 pb-4 absolute top-full left-0 w-full bg-background/95 shadow-lg h-[calc(100vh-var(--header-height,4rem))] overflow-y-auto flex flex-col items-center justify-center space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className={cn(
                'block py-2 nav-link text-muted-foreground hover:text-foreground text-xl',
                activeSection === item.href.substring(1) && 'active text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
