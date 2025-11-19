import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CloudCog,
  FileCode,
  GitMerge,
  Container,
  Monitor,
  Globe,
  Cloud,
  Wrench,
  BarChart3,
  Network,
  Shield,
  CheckCircle,
} from 'lucide-react';
import { ParticleGrid } from '@/components/particle-grid';

const capabilities = [
  {
    title: 'Cloud Architecture & Design',
    description:
      'From single-region startups to global-scale enterprise systems, we architect cloud infrastructures that maximize performance, redundancy, and cost-efficiency on AWS, Azure, and Google Cloud.',
    icon: CloudCog,
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description:
      'We automate infrastructure provisioning with Terraform, Ansible, and CloudFormation, making your systems replicable, consistent, and version-controlled for true DevOps agility.',
    icon: FileCode,
  },
  {
    title: 'CI/CD & DevOps Automation',
    description:
      'We implement Jenkins, GitHub Actions, and GitLab CI pipelines that streamline code testing, deployment, and rollback, minimizing downtime and accelerating innovation.',
    icon: GitMerge,
  },
  {
    title: 'Containerization & Orchestration',
    description:
      'By leveraging Docker and Kubernetes, we containerize applications for maximum portability and fault tolerance, ensuring smooth deployments and rolling updates.',
    icon: Container,
  },
  {
    title: 'Monitoring, Security & Compliance',
    description:
      'We deploy end-to-end observability stacks using Prometheus, Grafana, and ELK, with real-time performance tracking, threat detection, and auto-scaling alerts, compliant with SOC 2, HIPAA, and GDPR.',
    icon: Monitor,
  },
  {
    title: 'Edge & Global Delivery Systems',
    description:
      'Our engineers integrate CDNs, edge computing, and content optimization networks that deliver ultra-fast performance to users anywhere in the world.',
    icon: Globe,
  },
];

const techStack = [
  {
    title: 'Cloud Platforms',
    description: 'AWS, Azure, Google Cloud, DigitalOcean',
    icon: Cloud,
  },
  {
    title: 'Infrastructure Tools',
    description: 'Terraform, Ansible, CloudFormation',
    icon: Wrench,
  },
  {
    title: 'Containers',
    description: 'Docker, Kubernetes, OpenShift',
    icon: Container,
  },
  {
    title: 'CI/CD Tools',
    description: 'Jenkins, GitHub Actions, GitLab CI',
    icon: GitMerge,
  },
  {
    title: 'Monitoring',
    description: 'Prometheus, Grafana, ELK Stack',
    icon: BarChart3,
  },
  {
    title: 'Networking & Security',
    description: 'Cloudflare, Nginx, HAProxy, IAM, Vault, TLS',
    icon: Shield,
  },
];

const whyAngelesoft = [
  { text: 'Cloud-Native Engineering: Architected for flexibility, speed, and global scale.' },
  { text: 'Automation at the Core: Every system designed with Infrastructure-as-Code principles.' },
  { text: 'Resilient & Secure: Fault-tolerant design with continuous threat monitoring.' },
  { text: 'Performance-Driven Delivery: Low latency, high availability, and elastic scaling.' },
  { text: 'Enterprise Confidence: Proven frameworks, tested reliability, and continuous compliance.' },
];

export default function CloudInfrastructure() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center overflow-hidden">
        <ParticleGrid className="opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center">
            <CloudCog className="h-12 w-12 text-accent glow" />
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Building the Foundation for
            <br />
            <span className="text-primary">Intelligent, Always-On Systems</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Angelesoft empowers businesses to scale confidently, designing secure, resilient, and high-availability environments that power everything from startups to enterprise-grade AI systems.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">Talk to a Cloud Architect</Button>
            <Button size="lg" variant="outline">
              Explore Our Stack
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            Innovation thrives on a foundation of reliability and speed.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We don’t just deploy applications — we engineer ecosystems that adapt, optimize, and evolve with your operational demands.
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
              Technology Stack
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
              Why Angelesoft for Cloud & Infrastructure
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
            Build Smarter. Scale Faster. Operate Confidently.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Your digital success depends on the strength of your infrastructure. At Angelesoft, we design cloud environments that let your applications — and your business — run at full potential.
          </p>
          <div className="mt-10">
            <Button size="lg">Let's Engineer Your Cloud</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
