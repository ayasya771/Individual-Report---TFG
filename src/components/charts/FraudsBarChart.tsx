// src/components/charts/FraudsBarChart.tsx
"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { useEffect, useState, useRef } from 'react';

const chartData = [
  { type: 'Phishing', percentage: 40, fill: "hsl(var(--primary))" },
  { type: 'Malware', percentage: 25, fill: "hsl(var(--light-blue-hsl))" },
  { type: 'Ransomware', percentage: 15, fill: "hsl(var(--accent))" },
  { type: 'Data Breaches', percentage: 10, fill: "hsla(var(--primary-hsl), 0.8)"},
  { type: 'Identity Theft', percentage: 10, fill: "hsl(var(--lavender-hsl))" },
];

const chartConfig = {
  percentage: {
    label: '% of Cyber Frauds',
  },
  phishing: { label: "Phishing", color: "hsl(var(--primary))" },
  malware: { label: "Malware", color: "hsl(var(--light-blue-hsl))" },
  ransomware: { label: "Ransomware", color: "hsl(var(--accent))" },
  databreaches: { label: "Data Breaches", color: "hsla(var(--primary-hsl), 0.8)" },
  identitytheft: { label: "Identity Theft", color: "hsl(var(--lavender-hsl))" },
} satisfies ChartConfig;


export default function FraudsBarChart() {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);


  if (!isVisible) {
    return <div ref={chartRef} className="chart-container h-[320px] md:h-[400px] w-full max-w-[600px] mx-auto flex items-center justify-center text-muted-foreground">Loading chart...</div>;
  }

  return (
    <div ref={chartRef} className="chart-container h-[320px] md:h-[400px] w-full max-w-[600px] mx-auto">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ right: 30 }}>
            <CartesianGrid horizontal={false} stroke="hsl(var(--muted))" />
            <XAxis type="number" dataKey="percentage" stroke="hsl(var(--foreground))" tickFormatter={(value) => `${value}%`} />
            <YAxis type="category" dataKey="type" stroke="hsl(var(--foreground))" width={100} interval={0} />
            <Tooltip
              cursor={{ fill: "hsl(var(--muted))" }}
              content={<ChartTooltipContent 
                labelKey="percentage" 
                nameKey="type" 
                formatter={(value, name) => [`${value}%`, name]}
              />}
            />
            <Bar dataKey="percentage" radius={5}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
