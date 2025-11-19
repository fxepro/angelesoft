import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, Presentation } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-20 lg:py-32 bg-gradient-to-b from-accent/10 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Let's Build Intelligence Together.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you need an AI-driven product, a complete application suite, or intelligent infrastructure, Angelesoft is your innovation partner.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Strategy Call
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10" asChild>
              <Link href="/contact">
                <Presentation className="mr-2 h-5 w-5" />
                Request a Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

