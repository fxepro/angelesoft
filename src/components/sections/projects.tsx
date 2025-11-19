import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Projects() {
  const projectImages = Object.fromEntries(
    PlaceHolderImages.map((img) => [img.id, img])
  );

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Innovation Showcase
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the cutting-edge projects from Angelesoft Labs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const imageData = projectImages[project.imageId];
            return (
              <div key={index}>
                <Card className="overflow-hidden">
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
                  <h3 className="font-headline text-lg font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
