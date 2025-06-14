// src/components/charts/LiteracyDoughnutChart.tsx
"use client";

import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltipContent } from '@/components/ui/chart';
import { useEffect, useState, useRef } from 'react';

const chartData = [
  { name: 'Unaware/Vulnerable', value: 60, fill: 'hsl(var(--accent))' },
  { name: 'Basic Knowledge', value: 30, fill: 'hsl(var(--primary))' },
  { name: 'Highly Literate', value: 10, fill: 'hsl(var(--light-blue-hsl))' },
];

const chartConfig = {
  value: {
    label: 'Cyber Literacy',
  },
  unaware: { label: "Unaware/Vulnerable", color: "hsl(var(--accent))" },
  basic: { label: "Basic Knowledge", color: "hsl(var(--primary))" },
  literate: { label: "Highly Literate", color: "hsl(var(--light-blue-hsl))" },
} satisfies ChartConfig

export default function LiteracyDoughnutChart() {
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
          <PieChart>
            <Tooltip 
              cursor={{ fill: "hsl(var(--muted))" }}
              content={<ChartTooltipContent 
                formatter={(value, name, props) => {
                  const item = chartData.find(d => d.name === props.name);
                  return (
                    <div className="flex flex-col">
                      <span className="font-medium" style={{color: item?.fill}}>{props.name}</span>
                      <span>{value}%</span>
                    </div>
                  );
                }}
              />} 
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              strokeWidth={4}
              stroke="hsl(var(--background))"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <ChartLegend content={<ChartLegendContent nameKey="name" />} />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
