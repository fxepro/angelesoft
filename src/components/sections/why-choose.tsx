import { CheckCircle, Cog, BrainCircuit } from 'lucide-react';

const reasons = [
  'Integrated AI + Full-Stack Expertise: Not just code — context-aware systems.',
  'Rapid Prototyping & Deployment: From concept to cloud in weeks.',
  'Open Innovation Ethos: Transparency and continuous improvement.',
  'Future-Proof Architecture: Modular, scalable, and AI-ready.',
  'Cross-Platform Mastery: Web, mobile, edge, and enterprise integration.',
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Cog className="h-8 w-8 text-primary animate-spin-slow" />
            <BrainCircuit className="h-8 w-8 text-accent" />
          </div>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Built by engineers. Driven by intelligence.
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-4 p-4 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <span className="text-lg text-muted-foreground">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

