import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Code,
  Layers3,
  Server,
  Smartphone,
  Network,
  Spline,
  BarChart,
  ServerCog,
  Database,
  Cloud,
  Lock,
  BrainCircuit,
  Search,
  DraftingCompass,
  Paintbrush,
  FlaskConical,
  Rocket,
  Monitor,
  ShoppingCart,
  AppWindow,
  Workflow,
  Users,
  CheckCircle,
  GitMerge,
  FileText,
  Terminal,
  TestTube2,
} from 'lucide-react';
import { ParticleGrid } from '../particle-grid';

const whatWeBuild = [
  {
    title: 'Web Applications',
    description: 'Responsive, fast, and secure applications built with Angular, React, or Vue, backed by robust Laravel or Node.js APIs.',
    icon: AppWindow,
  },
  {
    title: 'Enterprise Systems',
    description: 'ERP, CRM, and workflow platforms engineered for performance, scalability, and real-time analytics.',
    icon: Server,
  },
  {
    title: 'Cross-Platform Solutions',
    description: 'Unified architecture that powers both web and mobile interfaces from one codebase.',
    icon: Smartphone,
  },
  {
    title: 'API-Driven Ecosystems',
    description: 'RESTful and GraphQL APIs connecting apps, data, and external services with consistency and control.',
    icon: Network,
  },
  {
    title: 'Microservices & Modular Architectures',
    description: 'Decoupled, resilient services that evolve independently for faster updates and easier scaling.',
    icon: Spline,
  },
  {
    title: 'Custom Dashboards & Analytics',
    description: 'Data visualization, KPI dashboards, and intelligent reporting tools integrated into your application.',
    icon: BarChart,
  },
];

const techStack = [
  {
    title: 'Frontend Frameworks',
    description: 'Angular, React, Vue.js, Tailwind CSS, Framer Motion',
    icon: Layers3,
  },
  {
    title: 'Backend Technologies',
    description: 'Laravel, Node.js, NestJS, Python (FastAPI)',
    icon: ServerCog,
  },
  {
    title: 'Databases',
    description: 'PostgreSQL, MySQL, MongoDB, Redis, ElasticSearch',
    icon: Database,
  },
  {
    title: 'Infrastructure',
    description: 'AWS, Azure, GCP, Docker, Kubernetes, CI/CD pipelines',
    icon: Cloud,
  },
  {
    title: 'Security & Compliance',
    description: 'OAuth2, JWT, HTTPS, multi-role access control, data encryption',
    icon: Lock,
  },
   {
    title: 'AI Integration Ready',
    description: 'Built with endpoints designed for AI agent communication and LLM extensions',
    icon: BrainCircuit,
  },
];

const devProcess = [
  {
    title: 'Discovery & Planning',
    description: 'Define scope, requirements, and user stories.',
    icon: Search,
  },
  {
    title: 'Architecture Design',
    description: 'Choose the right tech stack and modular structure.',
    icon: DraftingCompass,
  },
  {
    title: 'UI/UX Development',
    description: 'Craft responsive, accessible, and intelligent interfaces.',
    icon: Paintbrush,
  },
  {
    title: 'Backend Engineering',
    description: 'Build robust, secure, and scalable APIs.',
    icon: ServerCog,
  },
  {
    title: 'Integration & Testing',
    description: 'Combine all layers, test performance and security.',
    icon: FlaskConical,
  },
  {
    title: 'Deployment & Optimization',
    description: 'CI/CD pipelines and cloud rollout for real-time scaling.',
    icon: Rocket,
  },
];

const useCases = [
    { title: 'E-commerce Platforms', description: 'Scalable architecture for global transactions and logistics.' },
    { title: 'SaaS Platforms', description: 'Subscription systems with multi-tenant, modular design.' },
    { title: 'Data Management Systems', description: 'Intelligent storage, retrieval, and analytics dashboards.' },
    { title: 'Custom CRMs & ERPs', description: 'Workflow-specific solutions for operations and sales.' },
    { title: 'Internal Portals', description: 'Employee, supplier, or customer portals with RBAC and AI extensions.' },
];

const whyAngelesoft = [
    { text: 'End-to-End Expertise: From front-end UX to back-end logic and infrastructure.' },
    { text: 'Performance-First Architecture: Optimized for load, speed, and security.' },
    { text: 'AI Integration Ready: Every build is future-proofed for AI adoption.' },
    { text: 'Scalable by Design: Modular services, microservices, and containerization.' },
    { text: 'Human-Centered Engineering: Code that serves users and evolves with them.' },
]

const devHighlights = [
    { title: 'Git-based workflow (feature branches & PRs)', icon: GitMerge},
    { title: 'API documentation via Swagger/OpenAPI', icon: FileText},
    { title: 'CI/CD pipelines (GitHub Actions / GitLab CI)', icon: Terminal},
    { title: 'Automated unit & integration testing', icon: TestTube2},
    { title: 'Code linting, formatting, and version tagging', icon: Code},
]

export function FullStackDevelopment() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <ParticleGrid className="opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center">
            <Code className="h-12 w-12 text-accent glow" />
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Build, Scale, and Evolve
            <br />
            <span className="text-primary">Full-Stack from Core to Cloud</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Angelesoft crafts intelligent, high-performance web and enterprise applications using modern front-end and back-end architectures — seamlessly integrated, AI-ready, and built to scale.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start a Project</Button>
            <Button size="lg" variant="outline">View Tech Stack</Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
              From Interface to Infrastructure — We Build Complete Systems.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Angelesoft’s Full-Stack Development practice is built on precision engineering and intelligent design. We create dynamic, modular applications that connect data, logic, and user experience across every layer — from Angular front-ends to Laravel back-ends, powered by cloud-native deployment. Our goal: build software that’s not just functional, but fluid, fast, and future-proof.
            </p>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="what-we-build" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    What We Build
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {whatWeBuild.map((item) => (
                    <Card key={item.title} className="neon-border-card flex flex-col bg-card/50 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2">
                        <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
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
                    The Angelesoft Stack
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Modern Engineering for a Multi-Platform World. We leverage an optimized stack designed to balance flexibility, performance, and maintainability — while ensuring readiness for AI and automation integration.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {techStack.map((item) => (
                    <Card key={item.title} className="bg-card/50">
                        <CardHeader className="flex flex-row items-center gap-4">
                             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <div>
                               <CardTitle className="font-headline text-xl mb-1">{item.title}</CardTitle>
                               <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section id="dev-process" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Engineering that Follows Logic, Strategy, and Precision
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                   Every project follows a clear, iterative lifecycle — from strategy to deployment — designed for reliability and continuous improvement.
                </p>
            </div>
            <div className="relative">
                 <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 hidden md:block" />
                 {devProcess.map((item, index) => (
                     <div key={item.title} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                         <div className="hidden md:flex w-5/12"></div>
                         <div className="hidden md:flex justify-center w-2/12">
                            <div className="w-8 h-8 bg-primary rounded-full z-10 flex items-center justify-center text-primary-foreground">
                                <item.icon className="h-5 w-5"/>
                            </div>
                         </div>
                         <div className="w-full md:w-5/12">
                             <Card className="neon-border-card">
                                 <CardHeader>
                                     <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                                 </CardHeader>
                                 <CardContent>
                                     <p className="text-muted-foreground">{item.description}</p>
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
              Building the Digital Backbone of Modern Enterprises
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Example Implementations
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                  <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      Engineering Excellence. Designed for Intelligence.
                  </h2>
              </div>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                    {whyAngelesoft.map((item) => (
                        <li key={item.text} className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <span className="text-lg text-muted-foreground">{item.text}</span>
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
           “Angelesoft delivered a complete full-stack solution that scaled our operations tenfold — from a prototype to an enterprise-ready platform with zero downtime.”
          </blockquote>
          <p className="mt-6 font-semibold text-muted-foreground">— VP of Product, Cloud Operations Client</p>
        </div>
      </section>
      
        {/* Developer Highlights Section */}
        <section id="dev-highlights" className="py-20 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                       Code that’s clean, documented, and deployment-ready.
                    </h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Our engineers follow industry-leading practices for version control, code review, and maintainability.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {devHighlights.map((item) => (
                        <div key={item.title} className="flex items-center gap-3">
                           <item.icon className="h-5 w-5 text-primary shrink-0" />
                            <span className="text-muted-foreground">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-20 lg:py-32 bg-primary/10">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let’s build your next-generation platform.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
           From MVPs to enterprise ecosystems — Angelesoft brings design, engineering, and intelligence together under one architecture.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Schedule a Consultation</Button>
            <Button size="lg" variant="outline">Request a Technical Proposal</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
