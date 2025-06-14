// src/components/sections/TheWhySection.tsx
"use client";

import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TheWhySection() {
  const [count, setCount] = useState(0);
  const statCounterRef = useRef<HTMLDivElement>(null);
  const sectionContentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const end = 90;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));
            let current = start;
            const timer = setInterval(() => {
              current += 1;
              setCount(current);
              if (current === end) {
                clearInterval(timer);
              }
            }, stepTime);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    if (statCounterRef.current) {
      observer.observe(statCounterRef.current);
    }

    return () => {
      if (statCounterRef.current) {
        observer.unobserve(statCounterRef.current); // Use statCounterRef
      }
    };
  }, []);


  return (
    <section id="the-why" className="py-20 md:py-32 bg-custom-section-bg-why">
      <div className="container mx-auto px-6" ref={sectionContentRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary primary-glow">The Critical Unseen</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <Card className="mt-8 bg-primary/30 border-primary">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-foreground">The Critical Knowledge Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mt-2 text-muted-foreground">The digital age brings unprecedented innovation but also burgeoning threats. While cyber security and data visualization are foundational to every industry, a vast majority of the global population remains <span className="text-accent font-bold">dangerously uninformed</span> about basic cyber hygiene and the risks associated with their digital footprint.</p>
              </CardContent>
            </Card>
          </div>
          <Card className="flex flex-col items-center justify-center p-8 bg-primary/50 border-2 border-accent/50 shadow-2xl shadow-accent/10 rounded-2xl">
            <CardContent className="text-center p-0">
              <div ref={statCounterRef} className="text-8xl md:text-9xl font-headline font-extrabold text-accent accent-glow">{count}%</div>
              <p className="mt-2 text-4xl font-headline text-foreground">UNAWARE</p>
              <p className="mt-4 text-center text-muted-foreground">of the population lacks detailed cyber security education.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
