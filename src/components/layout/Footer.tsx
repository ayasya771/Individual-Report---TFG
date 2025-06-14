// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Ayasya Kumar Batta. All Rights Reserved.</p>
        <p className="text-sm mt-2">Interactive report generated for project submission.</p>
      </div>
    </footer>
  );
}
