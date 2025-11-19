import { AiAnalyzer } from '@/components/ai-analyzer';

export function AITool() {
  return (
    <section id="ai-tool" className="py-20 lg:py-32 bg-gradient-to-b from-accent/10 via-accent/5 to-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Ask Our AI Assistant
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a technical question about our services? Ask our AI assistant, which is trained on our company's expertise.
          </p>
        </div>
        <div className="bg-card border border-border/50 rounded-lg p-6 shadow-lg">
          <AiAnalyzer />
        </div>
      </div>
    </section>
  );
}
