// src/components/sections/ImpactFutureSection.tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Wrench, Handshake, TrendingUp } from "lucide-react";
import { useRef } from 'react';

const tabData = {
  whyMatters: {
    title: "Securing Our Digital Future",
    items: [
      { title: "Protecting Critical Assets", description: "Cyber attacks lead to massive financial losses, IP theft, and disruption of essential services. Data visualization enables rapid threat detection and response, minimizing damage." },
      { title: "Maintaining Trust & Privacy", description: "Robust cyber security and clear data visualization build trust and ensure privacy, crucial for economic stability and personal well-being in a digital world." },
      { title: "Informed Decision-Making", description: "Visualizing complex threat data empowers security teams to make faster, more informed decisions, proactively prioritizing risks and adapting to evolving threats." },
      { title: "Bridging the Communication Gap", description: "Visualizing complex security data helps communicate risks and solutions to non-technical stakeholders, fostering a shared understanding and encouraging better security practices." },
    ]
  },
  outcomes: {
    title: "Impact & Empowerment",
    items: [
      { icon: Lightbulb, title: "Enhanced Awareness", description: "Significantly raised awareness about crucial cyber security threats and data literacy among diverse audiences." },
      { icon: Wrench, title: "Practical Knowledge Transfer", description: "Successfully imparted practical skills in cyber hygiene, forensics, and vulnerability analysis through real-life examples." },
      { icon: Handshake, title: "Community Engagement", description: "Established strong engagement with NGOs, fostering collaborative learning and reaching over 35 students cumulatively." },
      { icon: TrendingUp, title: "Skill Development", description: "Demonstrated personal initiative and capability in researching, structuring, and delivering complex technical information." },
    ]
  },
  future: {
    title: "Future Horizons",
    items: [
      { title: "Continued Relevance", description: "Cyber threats are constantly evolving, driving continuous demand for skilled professionals and updated security measures globally." },
      { title: "Emerging Technologies", description: "The integration of AI and Machine Learning will revolutionize threat detection and response, leading to more immersive data visualizations (e.g., VR/AR)." },
      { title: "Increased Specialization & Demand", description: "The field will see a growing need for specialists in areas like cloud security, IoT security, and privacy-enhancing technologies." },
      { title: "Community & Education", description: "Ongoing efforts to bridge the knowledge gap through education and awareness programs remain crucial for a secure digital future." },
    ]
  }
};

export default function ImpactFutureSection() {
  const sectionContentRef = useRef<HTMLDivElement>(null);

  return (
    <section id="impact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6" ref={sectionContentRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary primary-glow">Impact &amp; Future</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="why-matters">
            <TabsList className="mb-6 flex flex-wrap justify-center border-b border-primary bg-transparent p-0 h-auto">
              <TabsTrigger value="why-matters" className="tab-btn py-3 px-6 text-lg font-headline text-muted-foreground hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-t-md">Why It Matters</TabsTrigger>
              <TabsTrigger value="outcomes" className="tab-btn py-3 px-6 text-lg font-headline text-muted-foreground hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-t-md">Outcomes</TabsTrigger>
              <TabsTrigger value="future" className="tab-btn py-3 px-6 text-lg font-headline text-muted-foreground hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-t-md">Future Scope</TabsTrigger>
            </TabsList>

            <Card className="bg-background/50 p-0 border-primary">
              <CardContent className="p-6 md:p-8">
                <TabsContent value="why-matters" className="space-y-6 m-0">
                  <h3 className="text-3xl font-headline text-foreground mb-4">{tabData.whyMatters.title}</h3>
                  {tabData.whyMatters.items.map((item, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="outcomes" className="space-y-6 m-0">
                  <h3 className="text-3xl font-headline text-foreground mb-4">{tabData.outcomes.title}</h3>
                  {tabData.outcomes.items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <item.icon className="text-3xl text-accent mt-1 h-8 w-8 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="future" className="space-y-6 m-0">
                  <h3 className="text-3xl font-headline text-foreground mb-4">{tabData.future.title}</h3>
                  {tabData.future.items.map((item, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
