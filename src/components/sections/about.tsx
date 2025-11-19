import { Zap, Brain, Cloud, Target } from 'lucide-react';

const valuePillars = [
  {
    icon: Zap,
    title: 'Full-stack engineering powered by AI accelerators',
  },
  {
    icon: Brain,
    title: 'AI-agent ecosystems built for real-world tasks',
  },
  {
    icon: Cloud,
    title: 'Cloud, infrastructure, and automation excellence',
  },
  {
    icon: Target,
    title: 'Strategy and cognitive consulting for AI adoption',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            We engineer intelligence into every layer of technology.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            From front-end experiences to backend architectures, Angelesoft delivers adaptive, scalable, and self-learning systems.
            We combine full-stack development, data science, and applied AI to help businesses reimagine what's possible.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valuePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center text-center p-6 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <pillar.icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-foreground">{pillar.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

