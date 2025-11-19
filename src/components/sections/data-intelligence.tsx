import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  BrainCircuit,
  Cloud,
  Database,
  DatabaseZap,
  DraftingCompass,
  FlaskConical,
  GitBranch,
  Lock,
  Monitor,
  Network,
  PieChart,
  Search,
  Server,
  Share2,
  Workflow,
  FileText,
  Terminal,
  TestTube2,
  CheckCircle,
} from 'lucide-react';
import { ParticleGrid } from '../particle-grid';

const whatWeBuild = [
  {
    title: 'Data Infrastructure',
    description:
      'High-performance architectures for data ingestion, processing, and storage across cloud and hybrid environments.',
    icon: DatabaseZap,
  },
  {
    title: 'Data Pipelines & ETL Systems',
    description:
      'Automated, resilient pipelines for real-time or batch data movement and transformation.',
    icon: Workflow,
  },
  {
    title: 'Data Warehouses & Lakes',
    description:
      'Scalable data environments using PostgreSQL, BigQuery, Snowflake, or Redshift.',
    icon: Database,
  },
  {
    title: 'Analytics & Visualization Dashboards',
    description:
      'Business intelligence dashboards with actionable metrics and KPIs using Power BI, Tableau, or custom-built dashboards.',
    icon: PieChart,
  },
  {
    title: 'Machine Learning Data Feeds',
    description:
      'Structured data systems ready for AI/ML integration and model training.',
    icon: BrainCircuit,
  },
  {
    title: 'Knowledge Graphs & Semantic Search',
    description:
      'Context-aware data relationships for deep discovery, reasoning, and enterprise memory.',
    icon: Share2,
  },
];

const dataStack = [
  {
    title: 'Data Storage',
    description: 'PostgreSQL, BigQuery, Snowflake, MongoDB, S3',
    icon: Database,
  },
  {
    title: 'ETL & Pipelines',
    description: 'Airflow, Prefect, Kafka, dbt, NiFi',
    icon: Workflow,
  },
  {
    title: 'Analytics & BI',
    description: 'Power BI, Tableau, Apache Superset, Metabase',
    icon: BarChart,
  },
  {
    title: 'ML/AI Integration',
    description: 'TensorFlow, PyTorch, Scikit-learn, LangChain, LlamaIndex',
    icon: BrainCircuit,
  },
  {
    title: 'Infrastructure',
    description: 'AWS Glue, GCP Dataflow, Azure Synapse, Docker, Kubernetes',
    icon: Cloud,
  },
  {
    title: 'Security',
    description:
      'Data encryption, anonymization, access policies, compliance frameworks',
    icon: Lock,
  },
];

const devProcess = [
  {
    title: 'Discovery & Data Mapping',
    description: 'Identify data sources, silos, and quality metrics.',
    icon: Search,
  },
  {
    title: 'Architecture Design',
    description: 'Blueprint the optimal warehouse or pipeline architecture.',
    icon: DraftingCompass,
  },
  {
    title: 'Data Engineering',
    description:
      'Build automated ingestion, transformation, and normalization workflows.',
    icon: Server,
  },
  {
    title: 'Analytics & Dashboards',
    description: 'Design meaningful reports and visualization layers.',
    icon: PieChart,
  },
  {
    title: 'ML Integration',
    description: 'Enable AI-ready datasets for training and inference.',
    icon: BrainCircuit,
  },
  {
    title: 'Monitoring & Optimization',
    description: 'Implement observability and performance tracking.',
    icon: Monitor,
  },
];

const useCases = [
  {
    title: 'Sales Intelligence Systems',
    description:
      'Integrate sales, CRM, and marketing analytics into a unified real-time dashboard.',
  },
  {
    title: 'Predictive Maintenance Platforms',
    description:
      'Detect anomalies and forecast failures using sensor data streams.',
  },
  {
    title: 'Healthcare Intelligence Systems',
    description: 'Patient data analytics with HIPAA-compliant cloud infrastructure.',
  },
  {
    title: 'Financial Data Lakehouses',
    description: 'Secure, high-volume transaction analysis and fraud detection.',
  },
  {
    title: 'Knowledge Graph Integrations',
    description:
      'Intelligent search and document summarization powered by semantic context.',
  },
];

const whyAngelesoft = [
  {
    text: 'End-to-End Expertise: From architecture design to visualization and AI integration.',
  },
  { text: 'Real-Time Intelligence: Live analytics and streaming data readiness.' },
  { text: 'AI-Centric Design: Every pipeline built for AI enablement from day one.' },
  {
    text: 'Scalable Infrastructure: Modular, multi-cloud, and microservice-friendly.',
  },
  {
    text: 'Enterprise-Grade Security: Compliance-first architecture with full data lineage and audit trails.',
  },
];

const devHighlights = [
    { title: 'Modular ETL architecture with version control', icon: GitBranch},
    { title: 'dbt-based data transformation documentation', icon: FileText},
    { title: 'Real-time logging and monitoring (Grafana / Prometheus)', icon: Terminal},
    { title: 'Automated schema migration and rollback workflows', icon: TestTube2},
    { title: 'API-driven access to analytics layers', icon: Network},
]

export function DataIntelligence() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center overflow-hidden">
        <ParticleGrid className="opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center">
            <BarChart className="h-12 w-12 text-accent glow" />
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Turn Your Data Into a
            <br />
            <span className="text-primary">Living Intelligence System</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Angelesoft builds scalable data architectures, pipelines, and
            analytics systems that transform raw data into actionable insight —
            powering decisions, automation, and AI-driven outcomes across the
            enterprise.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">Talk to a Data Architect</Button>
            <Button size="lg" variant="outline">
              Explore Capabilities
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            Data is the foundation of every intelligent system.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            At Angelesoft, Data & Intelligence Systems means more than
            collecting and storing information — it’s about engineering data
            that thinks with you. We design and deploy end-to-end data
            solutions that collect, clean, contextualize, and convert data into
            real-time intelligence. From enterprise data warehouses to
            predictive analytics and knowledge graphs, we help organizations
            gain clarity, foresight, and control over their most valuable asset
            — information.
          </p>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="what-we-build" className="bg-secondary/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              What We Build
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whatWeBuild.map((item) => (
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

      {/* Data Stack Section */}
      <section id="data-stack" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              The Angelesoft Data Stack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Modern Data Architecture. Intelligent at Every Layer. We build
              systems that are scalable, secure, and AI-ready — engineered for
              interoperability and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dataStack.map((item) => (
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

      {/* Development Process Section */}
      <section id="dev-process" className="bg-secondary/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Structured Intelligence Begins with Structured Data
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Angelesoft follows a disciplined data engineering lifecycle
              designed for reliability, adaptability, and AI integration.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 hidden w-1 bg-border/50 md:block" />
            {devProcess.map((item, index) => (
              <div
                key={item.title}
                className={`mb-8 flex w-full items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden w-5/12 md:flex"></div>
                <div className="hidden w-2/12 justify-center md:flex">
                  <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="w-full md:w-5/12">
                  <Card className="neon-border-card">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              When Data Becomes a Decision Engine
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Example Implementations
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {useCase.description}
                  </p>
                </CardContent>
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
              Engineering Data That Drives Intelligent Action
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

      {/* Testimonial Section */}
      <section id="testimonial" className="py-20 lg:py-32">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <blockquote className="text-xl italic text-foreground md:text-2xl">
            “Angelesoft transformed our fragmented data into a unified
            intelligence ecosystem — giving us real-time insights, predictive
            capabilities, and a competitive edge.”
          </blockquote>
          <p className="mt-6 font-semibold text-muted-foreground">
            — Director of Analytics, Manufacturing Client
          </p>
        </div>
      </section>

      {/* Developer Highlights Section */}
      <section id="dev-highlights" className="bg-secondary/30 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Clean Architecture, Observable Systems, Measurable Results.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our engineers follow proven data-engineering practices to ensure
              maintainability and observability:
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {devHighlights.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <item.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="bg-primary/10 py-20 lg:py-32">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let’s design your data-driven future.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you need a real-time analytics pipeline, a unified data
            warehouse, or AI-ready infrastructure — Angelesoft delivers data
            systems that think, learn, and scale with your business.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">Book a Data Strategy Call</Button>
            <Button size="lg" variant="outline">
              Request a Technical Proposal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
