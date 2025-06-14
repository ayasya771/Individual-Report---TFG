// src/hooks/useScrollSpy.ts
"use client";

import { useState, useEffect, useCallback } from 'react';

interface ScrollSpyOptions {
  sectionSelector: string;
  offset?: number; // Offset from the top of the viewport
  throttleTime?: number; // Throttle time for scroll event
}

export function useScrollSpy({
  sectionSelector,
  offset = 0,
  throttleTime = 100,
}: ScrollSpyOptions): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll<HTMLElement>(sectionSelector);
    let currentActiveSection: string | null = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - offset;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentActiveSection = section.id;
      }
    });
    
    // If no section is "active" (e.g., between sections or at the very top/bottom),
    // try to determine the closest one or default to the first if scrolling up from bottom.
    if (!currentActiveSection && sections.length > 0) {
      if (window.scrollY < sections[0].offsetTop - offset) {
        currentActiveSection = sections[0].id; // Default to first if above all
      } else if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) { // Near bottom of page
         currentActiveSection = sections[sections.length - 1].id;
      } else {
        // Find the section whose top is closest to current scroll pos + offset
        let minDistance = Infinity;
        sections.forEach(section => {
          const distance = Math.abs(window.scrollY - (section.offsetTop - offset));
          if (distance < minDistance) {
            minDistance = distance;
            currentActiveSection = section.id;
          }
        });
      }
    }


    setActiveSection(currentActiveSection);
  }, [sectionSelector, offset]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const throttledScrollHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, throttleTime);
    };

    window.addEventListener('scroll', throttledScrollHandler);
    handleScroll(); // Initial check

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [handleScroll, throttleTime]);

  return activeSection;
}
