import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Briefcase,
  Map,
  GitMerge,
  Share2,
  Bot,
  Library,
  BookOpen,
  BrainCircuit,
  Database,
  Wrench,
  Plug,
  CloudCog,
  BarChart,
  CheckCircle,
} from 'lucide-react';
import { ParticleGrid } from '../particle-grid';

const capabilities = [
  {
    title: 'Cognitive Strategy & Roadmapping',
    description: 'We work with leadership teams to define a cognitive vision, identifying where AI can augment operations, drive efficiencies, and unlock new business value. Our roadmaps balance technical feasibility with strategic impact.',
    icon: Map,
  },
  {
    title: 'AI System Integration',
    description: 'We integrate AI models and decision engines directly into your enterprise stack, from ERP and CRM systems to IoT and cloud workflows, ensuring seamless data exchange and cross-platform intelligence.',
    icon: GitMerge,
  },
  {
    title: 'Knowledge Graphs & Semantic Systems',
    description: 'We design knowledge-based architectures that organize enterprise information into interconnected insights, transforming scattered data into cognitive ecosystems that understand relationships and context.',
    icon: Share2,
  },
  {
    title: 'Intelligent Automation',
    description: 'We combine RPA with machine learning to automate decision-intensive tasks. Our systems analyze, adapt, and self-improve, freeing teams to focus on high-value work.',
    icon: Bot,
  },
  {
    title: 'Enterprise Cognitive Architecture',
    description: 'We architect hybrid AI systems that integrate language models, data warehouses, and analytics dashboards, delivering real-time intelligence across departments for cohesive organizational thinking.',
    icon: Library,
  },
  {
    title: 'Advisory, Training & Governance',
    description: 'Our consultants help enterprises adopt responsible AI, building internal capability through training, compliance, and governance frameworks to ensure every system is transparent and ethical.',
    icon: BookOpen,
  },
];

const techStack = [
  {
    title: 'AI Frameworks',
    description: 'TensorFlow, PyTorch, OpenAI API, Hugging Face',
    icon: BrainCircuit,
  },
  {
    title: 'Data Systems',
    description: 'Snowflake, Databricks, Neo4j, ElasticSearch',
    icon: Database,
  },
  {
    title: 'Automation Tools',
    description: 'UiPath, Blue Prism, Automation Anywhere',
    icon: Wrench,
  },
  {
    title: 'Integration',
    description: 'Zapier, Make, n8n, REST/GraphQL APIs',
    icon: Plug,
  },
  {
    title: 'Cognitive Services',
    description: 'Azure Cognitive, Google Vertex AI, AWS Bedrock',
    icon: CloudCog,
  },
  {
    title: 'Visualization',
    description: 'Power BI, Tableau, Looker',
    icon: BarChart,
  },
];

const whyAngelesoft = [
  { text: 'End-to-End Cognitive Transformation: From strategy to integration to continuous learning.' },
  { text: 'Enterprise-Ready Systems: Designed for interoperability and scale.' },
  { text: 'Ethical & Transparent AI: Governance and accountability at every stage.' },
  { text: 'Cross-Domain Expertise: Bridging data science, software, and decision intelligence.' },
  { text: 'Sustainable Intelligence: Systems that adapt and evolve with your business.' },
];

export default function CognitiveConsulting() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center overflow-hidden">
        <ParticleGrid className="opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center">
            <Briefcase className="h-12 w-12 text-accent glow" />
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Transforming Operations Through
            <br />
            <span className="text-primary">Cognitive Intelligence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            We integrate thinking systems that learn, reason, and act — enabling enterprises to make smarter, faster, and more adaptive decisions.
          </p>
          <div className="mt-10">
            <Button size="lg">Start your cognitive journey today</Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            From Insight to Intelligence. From Automation to Cognition.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            At Angelesoft, we help organizations evolve from data-driven to cognition-driven. Our Cognitive Consulting & Integration practice empowers businesses to embed intelligence across every process — connecting people, data, and systems through advanced AI frameworks and automation strategies.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="bg-secondary/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Our Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Card
                key={item.title}
                className="neon-border-card flex flex-col bg-card/50 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-xl">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Technology & Integration Stack
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((item) => (
              <Card key={item.title} className="bg-card/50">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="mb-1 font-headline text-xl">
                      {item.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="bg-secondary/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Why Angelesoft for Cognitive Consulting
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-4">
              {whyAngelesoft.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <span className="text-lg text-muted-foreground">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="bg-primary/10 py-20 lg:py-32">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            From Insight to Intelligence. From Automation to Cognition.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Cognitive transformation is not about replacing human intelligence — it’s about enhancing it. At Angelesoft, we integrate systems that think, adapt, and grow — empowering your enterprise to move from reactive workflows to proactive intelligence.
          </p>
          <div className="mt-10">
            <Button size="lg">Start your cognitive journey today</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
