import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Showcase() {
  const projectImages = Object.fromEntries(
    PlaceHolderImages.map((img) => [img.id, img])
  );

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Where ideas become intelligent systems.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Angelesoft Labs is our innovation hub — where we prototype AI agents, explore neural UI design, and develop proprietary SDKs like Angelesoft Core, our AI-integration framework.
            Our lab projects demonstrate what's next in autonomous software, workflow automation, and adaptive analytics.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => {
              const imageData = projectImages[project.imageId];
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border border-border/50 bg-card hover:shadow-lg transition-shadow">
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        {imageData && (
                          <Image
                            src={imageData.imageUrl}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="object-cover w-full h-full"
                            data-ai-hint={imageData.imageHint}
                          />
                        )}
                      </CardContent>
                    </Card>
                    <div className="pt-4">
                       <h3 className="font-headline text-lg font-bold text-foreground">{project.title}</h3>
                       <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="mt-10 text-center">
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10" asChild>
            <Link href="/projects">
              Explore Angelesoft Labs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
