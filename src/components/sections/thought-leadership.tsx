import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    title: 'Designing Human-Aware AI Systems',
    description: 'Exploring how to create AI that understands and adapts to human needs.',
  },
  {
    title: 'How Agents Will Transform Software Workflows',
    description: 'The future of automation and intelligent agent ecosystems.',
  },
  {
    title: 'Integrating LLMs with Laravel and Angular: A Practical Guide',
    description: 'Step-by-step guide to building AI-powered full-stack applications.',
  },
];

export function ThoughtLeadership() {
  return (
    <section id="insights" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            From vision to verification.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore insights from our engineers and researchers on AI ethics, system design, and next-generation full-stack architectures.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-10">
          {blogPosts.map((post) => (
            <Card
              key={post.title}
              className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <CardTitle className="font-headline text-xl text-foreground">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
            <Link href="/blog">
              Read the Blog <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

