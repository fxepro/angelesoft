import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CreditCard,
  Heart,
  Shield,
  GraduationCap,
  ShoppingCart,
  Factory,
  HeartHandshake,
} from 'lucide-react';

const industries = [
  { name: 'Fintech & Payments', icon: CreditCard },
  { name: 'Healthcare & Life Sciences', icon: Heart },
  { name: 'Defense & Security', icon: Shield },
  { name: 'Education & EdTech', icon: GraduationCap },
  { name: 'Retail & E-commerce', icon: ShoppingCart },
  { name: 'Manufacturing & Robotics', icon: Factory },
  { name: 'Nonprofits & Social Impact', icon: HeartHandshake },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Intelligence for every sector.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-10">
          {industries.map((industry) => (
            <Card
              key={industry.name}
              className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-lg text-foreground">
                    {industry.name}
                  </CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10" asChild>
            <Link href="/services">Discover Solutions by Industry</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

