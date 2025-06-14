// src/components/sections/ProjectJourneySection.tsx
"use client";

import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const timelineEvents = [
  { id: '1', title: 'Virtual Field Work 1', date: 'May 21, 2025', interactive: true },
  { id: '2', title: 'Virtual Field Work 2', date: 'May 29, 2025', interactive: true },
  { id: '3', title: 'Virtual Field Work 3', date: 'June 5, 2025', interactive: true },
  { id: '4', title: 'Graduation Day', date: 'June 14, 2025', interactive: false },
];

const fieldworkDetails = [
  { 
    id: '1', 
    title: 'Fieldwork Spotlight: ThinkSharp Foundation', 
    focus: 'Cyber Hygiene & Real-Life Relevance',
    description: 'Conducted an engaging and practical session with ThinkSharp Foundation, reaching 10+ students. We focused on crucial Cyber Hygiene practices, illustrating concepts with compelling real-life examples and interactive assistive videos. The aim was to equip them with immediate, actionable knowledge to navigate the digital world safely.' 
  },
  { 
    id: '2', 
    title: 'Deep Dive: KurNiv Foundation Session (Part 1)', 
    focus: 'Cyber Security – Forensics & Hacking',
    description: 'The first intensive session with the KurNiv Foundation engaged 25+ STEM collegiate students. Discussions delved into advanced topics like Digital Forensics and Ethical Hacking. Key areas covered included Metadata Analysis and Zero Day Vulnerabilities, enhanced by real-world case studies to provide practical insights.' 
  },
  { 
    id: '3', 
    title: 'Deep Dive: KurNiv Foundation Session (Part 2)', 
    focus: 'Cyber Security – Exploitation & Advanced Attacks',
    description: 'The second session with the KurNiv Foundation continued the deep dive with 25+ STEM collegiate students. This session focused on Vulnerability Exploitation and advanced attack vectors. Topics included Database Breaches and SS7 Attacks, thoroughly discussed with compelling real-world case studies to illustrate complex scenarios and defense strategies.'
  },
];

export default function ProjectJourneySection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(fieldworkDetails[0].id);
  const sectionContentRef = useRef<HTMLDivElement>(null);

  const handleTimelineClick = (id: string, interactive: boolean) => {
    if (interactive) {
      setActiveCardId(id);
      const cardElement = document.getElementById(`card-${id}`);
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section id="project-journey" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={sectionContentRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary primary-glow">Project Journey</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 relative">
            <div className="sticky top-28">
              <h3 className="font-headline text-3xl text-foreground mb-6">Timeline</h3>
              <div className="relative border-l-4 border-primary pl-8 space-y-12">
                {timelineEvents.map((event) => (
                  <div
                    key={event.id}
                    id={`timeline-${event.id}`}
                    className={cn(
                      'timeline-item',
                      event.interactive && 'interactive cursor-pointer'
                    )}
                    onClick={() => handleTimelineClick(event.id, event.interactive)}
                    role={event.interactive ? "button" : undefined}
                    tabIndex={event.interactive ? 0 : undefined}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleTimelineClick(event.id, event.interactive);}}
                  >
                    <h4 className="font-bold text-lg text-foreground">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="fieldwork-cards" className="md:col-span-2 space-y-8">
            {fieldworkDetails.map((detail) => (
              <Card
                key={detail.id}
                id={`card-${detail.id}`}
                className={cn(
                  'bg-custom-section-bg-why border-primary transition-all duration-300',
                  activeCardId === detail.id ? 'opacity-100 border-accent scale-105 shadow-lg' : 'opacity-50 hover:opacity-100 hover:border-accent'
                )}
              >
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{detail.title}</CardTitle>
                  <CardDescription>{detail.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{detail.description.split(/(\<\/?span.*?\>)/g).map((part, index) => {
                    if (part.startsWith('<span')) {
                      const text = part.match(/>(.*?)</)?.[1];
                      return <span key={index} className="font-semibold text-accent">{text}</span>;
                    }
                    if (part === '</span>') return null;
                    return part;
                  })}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
