import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { services } from '@/lib/data';
import { ArrowRight, BrainCircuit, Cog } from 'lucide-react';
import { ParticleGrid } from '../particle-grid';

export function Services() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background">
        <ParticleGrid className="opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Cog className="h-6 w-6 animate-spin-slow text-primary" />
            <div className="w-16 h-px bg-gradient-to-r from-primary to-accent" />
            <BrainCircuit className="h-6 w-6 text-accent" />
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-foreground">
            The Angelesoft 6-Pack Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Each pillar forms part of an integrated digital transformation framework.
            From AI engineering to cloud infrastructure — we deliver comprehensive solutions that evolve with your business.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Intelligence is no longer optional — it's foundational.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>
              At Angelesoft, we engineer intelligence into every layer of technology.
              Our comprehensive suite of services combines full-stack development, data science, and applied AI to help businesses reimagine what's possible.
            </p>
            <p>
              From front-end experiences to backend architectures, we deliver adaptive, scalable, and self-learning systems that work across business functions — enabling enterprises to scale without friction.
            </p>
          </div>
        </div>
      </section>

      {/* 6-Pack Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Our Service Portfolio
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore our comprehensive suite of AI-infused engineering services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} href={service.href || '#'} className="flex">
                <Card className="flex flex-col bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full">
                  <CardHeader className="flex-grow">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-xl text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  {service.href && (
                    <CardHeader>
                      <div className="text-sm font-medium text-primary hover:underline flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardHeader>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              What We Build
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Across all our services, we deliver intelligent solutions that think, learn, and act.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-foreground">Conversational AI Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Intelligent chat and voice agents capable of handling complex dialogue, context retention, and task execution.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-foreground">Workflow Automation Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">AI-driven process automation that integrates with CRMs, ERPs, and custom business logic.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-foreground">Cognitive Decision Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Agents that analyze data, predict outcomes, and suggest optimal decisions.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-foreground">Data Intelligence Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contextual data discovery, anomaly detection, and continuous insight generation.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-foreground">Multi-Agent Architectures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Orchestrated systems of cooperating agents for complex enterprise environments.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-foreground">Custom LLM Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Private, secure, fine-tuned large language models built for your domain and data.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Angelesoft Stack Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              The Angelesoft Stack
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Modern Intelligence. Modular Design. Maximum Control.
            </p>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              We use cutting-edge frameworks and open ecosystems to ensure flexibility, scalability, and transparency across all our services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Core Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">LangChain, LlamaIndex, Transformers, FastAPI</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Data Pipelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Pinecone, Redis, PostgreSQL, Kafka</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">PyTorch, Scikit-learn, Hugging Face</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">AWS SageMaker, GCP Vertex AI, Docker, Kubernetes</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">End-to-end encryption, private deployment, role-based access control</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              From Idea to Intelligent Deployment.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We follow a structured and agile engineering lifecycle to ensure each solution is aligned, explainable, and effective.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Discovery & Definition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Identify automation opportunities and use cases.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Data Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Analyze your data sources and define contextual inputs.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Model Selection & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Choose or fine-tune the most efficient AI model.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Architecture Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Define memory, goals, and autonomy levels.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Integration & Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Connect to your stack via secure APIs.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Deployment & Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Continuous learning and feedback-based improvement.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              When Intelligence Meets Application.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Example Implementations:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">AI Customer Copilots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Real-time conversational support with context awareness.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Predictive Analytics Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Continuous insight generation for finance and operations.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Data Summarization Bots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Automated document and report synthesis.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Task Automation Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">RPA + LLM integration for intelligent workflows.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-foreground">Knowledge Assistants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Company-specific, context-rich internal copilots.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Angelesoft Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-accent/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Engineering Intelligence with Precision and Purpose.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Unique Advantages:</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">🔹 Human-Aware Design: Our AI agents adapt to people, not the other way around.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">🔹 Cross-Domain Expertise: Seamlessly integrate with existing software ecosystems.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">🔹 Transparent AI: Explainable and auditable agent logic.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">🔹 Scalable Infrastructure: Cloud-native and containerized for any workload.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">🔹 Ethical Foundations: Privacy, fairness, and data integrity built into every model.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Outcomes Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="bg-card border border-border/50 rounded-lg p-8 shadow-lg">
            <blockquote className="text-xl italic text-foreground md:text-2xl text-center">
              "Angelesoft helped us transform our internal support workflows into a 24/7 intelligent operation — cutting response time by 60% while maintaining complete accuracy."
            </blockquote>
            <p className="mt-6 font-semibold text-muted-foreground text-center">— CTO, Enterprise Software Client</p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Let's design your next intelligent system.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you're building a conversational copilot, an enterprise decision agent, or an automation network — Angelesoft's engineers can bring it to life with precision, security, and speed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/contact">Schedule an AI Strategy Call</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              Download Technical Overview PDF
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
