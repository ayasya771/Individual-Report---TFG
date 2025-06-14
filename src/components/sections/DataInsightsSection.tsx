// src/components/sections/DataInsightsSection.tsx
"use client";
import FraudsBarChart from '@/components/charts/FraudsBarChart';
import LiteracyDoughnutChart from '@/components/charts/LiteracyDoughnutChart';
import { Card } from '@/components/ui/card';
import { useRef } from 'react';

export default function DataInsightsSection() {
  const sectionContentRef = useRef<HTMLDivElement>(null);

  return (
    <section id="data-insights" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6" ref={sectionContentRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary primary-glow">Global Cyber Landscape</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <Card className="bg-background p-6 md:p-8 rounded-xl border-primary">
            <h3 className="font-headline text-2xl text-center text-foreground mb-4">Common Cyber Frauds</h3>
            <FraudsBarChart />
          </Card>
          <Card className="bg-background p-6 md:p-8 rounded-xl border-primary">
            <h3 className="font-headline text-2xl text-center text-foreground mb-4">Global Cyber Literacy</h3>
            <LiteracyDoughnutChart />
          </Card>
        </div>
      </div>
    </section>
  );
}
