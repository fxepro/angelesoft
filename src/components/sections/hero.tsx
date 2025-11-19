import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ParticleGrid } from '@/components/particle-grid';
import { ArrowRight, BrainCircuit, Cog } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="absolute inset-0 opacity-30">
        <ParticleGrid className="opacity-40" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="mb-6 flex items-center justify-center lg:justify-start gap-2">
              <Cog className="h-6 w-6 animate-spin-slow text-primary" />
              <div className="w-16 h-px bg-gradient-to-r from-primary to-accent" />
              <BrainCircuit className="h-6 w-6 text-accent" />
            </div>
            <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-foreground">
              Intelligence Engineered.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg text-muted-foreground md:text-xl">
              Angelesoft builds the future of full-stack innovation — intelligent systems, AI agents, and data-driven applications that evolve with your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/contact">
                  Start Your AI Transformation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10" asChild>
                <Link href="#services">Explore Our 6-Pack Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 blur-3xl animate-pulse" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                  <BrainCircuit className="h-32 w-32 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
