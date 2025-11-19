import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BrainCircuit,
  Bot,
  GitBranch,
  Database,
  Cpu,
  ShieldCheck,
  Rocket,
  Search,
  Brain,
  Layers,
  FlaskConical,
  Server,
  Monitor,
  CheckCircle,
} from 'lucide-react';
import { ParticleGrid } from '../particle-grid';

const whatWeBuild = [
  {
    title: 'Conversational AI Agents',
    description:
      'Intelligent chat and voice agents capable of handling complex dialogue, context retention, and task execution.',
    icon: Bot,
  },
  {
    title: 'Workflow Automation Agents',
    description:
      'AI-driven process automation that integrates with CRMs, ERPs, and custom business logic.',
    icon: GitBranch,
  },
  {
    title: 'Cognitive Decision Systems',
    description:
      'Agents that analyze data, predict outcomes, and suggest optimal decisions.',
    icon: Brain,
  },
  {
    title: 'Data Intelligence Agents',
    description:
      'Contextual data discovery, anomaly detection, and continuous insight generation.',
    icon: Database,
  },
  {
    title: 'Multi-Agent Architectures',
    description:
      'Orchestrated systems of cooperating agents for complex enterprise environments.',
    icon: Layers,
  },
  {
    title: 'Custom LLM Integrations',
    description:
      'Private, secure, fine-tuned large language models built for your domain and data.',
    icon: FlaskConical,
  },
];

const aiStack = [
  {
    title: 'Core Frameworks',
    description: 'LangChain, LlamaIndex, Transformers, FastAPI',
    icon: Layers,
  },
  {
    title: 'Data Pipelines',
    description: 'Pinecone, Redis, PostgreSQL, Kafka',
    icon: Database,
  },
  {
    title: 'Machine Learning',
    description: 'PyTorch, Scikit-learn, Hugging Face',
    icon: BrainCircuit,
  },
  {
    title: 'Infrastructure',
    description: 'AWS SageMaker, GCP Vertex AI, Docker, Kubernetes',
    icon: Server,
  },
  {
    title: 'Security & Compliance',
    description:
      'End-to-end encryption, private deployment, role-based access control',
    icon: ShieldCheck,
  },
];

const devProcess = [
  {
    title: 'Discovery & Definition',
    description: 'Identify automation opportunities and use cases.',
    icon: Search,
  },
  {
    title: 'Data Intelligence',
    description: 'Analyze your data sources and define contextual inputs.',
    icon: Database,
  },
  {
    title: 'Model Selection & Training',
    description: 'Choose or fine-tune the most efficient AI model.',
    icon: Brain,
  },
  {
    title: 'Agent Architecture Design',
    description: 'Define memory, goals, and autonomy levels.',
    icon: Layers,
  },
  {
    title: 'Integration & Testing',
    description: 'Connect to your stack via secure APIs.',
    icon: FlaskConical,
  },
  {
    title: 'Deployment & Monitoring',
    description: 'Continuous learning and feedback-based improvement.',
    icon: Monitor,
  },
];

const useCases = [
    { title: 'AI Customer Copilots', description: 'Real-time conversational support with context awareness.' },
    { title: 'Predictive Analytics Agents', description: 'Continuous insight generation for finance and operations.' },
    { title: 'Data Summarization Bots', description: 'Automated document and report synthesis.' },
    { title: 'Task Automation Agents', description: 'RPA + LLM integration for intelligent workflows.' },
    { title: 'Knowledge Assistants', description: 'Company-specific, context-rich internal copilots.' },
];

const whyAngelesoft = [
    { text: 'Human-Aware Design: Our AI agents adapt to people, not the other way around.' },
    { text: 'Cross-Domain Expertise: Seamlessly integrate with existing software ecosystems.' },
    { text: 'Transparent AI: Explainable and auditable agent logic.' },
    { text: 'Scalable Infrastructure: Cloud-native and containerized for any workload.' },
    { text: 'Ethical Foundations: Privacy, fairness, and data integrity built into every model.' },
]

export function AIEngineering() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background">
        <ParticleGrid className="opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center">
            <BrainCircuit className="h-12 w-12 text-accent glow" />
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-foreground">
            Build Intelligent Systems
            <br />
            that <span className="text-primary">Think, Learn, and Act</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Angelesoft designs and deploys AI agents that automate workflows, augment decision-making, and create adaptive digital ecosystems.
            <br />
            From conversational copilots to autonomous data engines — we turn intelligence into infrastructure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">Request a Demo</Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">Talk to Our AI Engineers</Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Intelligence is no longer optional — it's foundational.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                <p>
                    At Angelesoft, AI Engineering means building systems that understand context, learn continuously, and act autonomously.
                    Our team engineers intelligent agents that work across business functions — from operations and analytics to customer engagement — enabling enterprises to scale without friction.
                </p>
                <p>
                    We integrate large language models (LLMs), neural reasoning, and context-driven automation into real-world applications that align with your goals, infrastructure, and data privacy requirements.
                </p>
            </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="what-we-build" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                    What We Build
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {whatWeBuild.map((item) => (
                    <Card key={item.title} className="flex flex-col bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="font-headline text-xl text-foreground">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* AI Stack Section */}
      <section id="ai-stack" className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                    The Angelesoft AI Stack
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Modern Intelligence. Modular Design. Maximum Control.
                </p>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                    We use cutting-edge frameworks and open ecosystems to ensure flexibility, scalability, and transparency.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {aiStack.map((item) => (
                    <Card key={item.title} className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                        <CardHeader className="flex flex-row items-center gap-4">
                             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <div>
                               <CardTitle className="font-headline text-xl mb-1 text-foreground">{item.title}</CardTitle>
                               <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section id="dev-process" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                    From Idea to Intelligent Deployment.
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We follow a structured and agile AI engineering lifecycle to ensure each agent is aligned, explainable, and effective.
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
      <section id="use-cases" className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              When Intelligence Meets Application.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Example Implementations:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-foreground">{useCase.title}</CardTitle>
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
      <section id="why-choose-us" className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                  <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                      Engineering Intelligence with Precision and Purpose.
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">Unique Advantages:</p>
              </div>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                    {whyAngelesoft.map((item) => (
                        <li key={item.text} className="flex items-start gap-4 p-4 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                            <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <span className="text-lg text-muted-foreground">{item.text}</span>
                        </li>
                    ))}
                </ul>
              </div>
          </div>
      </section>

      {/* Client Outcomes Section */}
      <section id="client-outcomes" className="py-20 lg:py-32 bg-gradient-to-b from-accent/10 via-accent/5 to-background">
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
      <section id="get-started" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Let's design your next intelligent system.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you're building a conversational copilot, an enterprise decision agent, or an automation network — Angelesoft's AI engineers can bring it to life with precision, security, and speed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">Schedule an AI Strategy Call</Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">Download Technical Overview PDF</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
