// src/components/sections/HeroSection.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center text-center bg-pattern -mt-20 p-6">
      <div className="container mx-auto relative max-w-4xl w-full h-[500px] md:h-[600px] border-base rounded-lg flex items-center justify-center bg-background">
        {/* Innermost content box */}
        <div className="absolute inset-0 bg-primary border-base rounded-lg p-8 flex flex-col justify-between items-start" style={{ top: '20px', left: '20px', right: '20px', bottom: '20px' }}>
          <div className="w-full flex justify-between items-start">
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-foreground uppercase tracking-wide">REPORT</h1>
            <div className="w-40 h-32 border-base p-2 flex flex-col items-center justify-center text-center rounded-lg bg-custom-lavender">
              <div className="w-full h-1/2 bg-custom-light-blue border-b border-foreground flex items-center justify-center text-foreground text-sm font-bold uppercase"></div>
              <div className="w-full h-1/2 bg-custom-lavender flex items-center justify-center text-foreground text-sm font-bold uppercase"></div>
            </div>
          </div>
          <div className="absolute bottom-4 left-8 text-foreground text-xl md:text-2xl font-bold">
            ~ Ayasya Kumar Batta
          </div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 bg-custom-light-blue border-base flex items-center justify-center text-foreground font-headline text-5xl font-extrabold rounded-lg">
            {/* Content for this box if any */}
          </div>
          <div className="absolute right-20 top-40 w-24 h-24 bg-accent dot-pattern border-base rounded-lg"></div>
        </div>
        {/* Layering effect */}
        <div className="absolute inset-0 border-base rounded-lg bg-secondary" style={{ top: '40px', left: '40px', right: '40px', bottom: '40px', zIndex: -1 }}></div>
        <div className="absolute inset-0 border-base rounded-lg bg-custom-hero-layer-blue" style={{ top: '60px', left: '60px', right: '60px', bottom: '60px', zIndex: -2 }}></div>
      </div>
    </section>
  );
}
