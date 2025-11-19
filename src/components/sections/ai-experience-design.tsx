import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MessageSquare,
  Mic,
  BrainCircuit,
  Scan,
  Workflow,
  Sparkles,
  ShieldCheck,
  Figma,
  Bot,
  MessageCircle,
  Eye,
  PenTool,
  CheckCircle,
  BarChart,
} from 'lucide-react';
import { ParticleGrid } from '@/components/particle-grid';

const capabilities = [
  {
    title: 'Conversational UX & Voice Interfaces',
    description: 'We design intuitive conversational systems for chatbots, voice assistants, and multimodal AI interfaces, making interactions personalized and contextual.',
    icon: MessageCircle,
  },
  {
    title: 'Cognitive UI/UX',
    description: 'Our designers create adaptive interfaces that learn from user behavior, anticipating needs and reducing friction with predictive UX models.',
    icon: BrainCircuit,
  },
  {
    title: 'Multimodal AI Experiences',
    description: 'We combine voice, vision, and text into unified interaction systems that respond intelligently to multiple input modes for inclusive experiences.',
    icon: Scan,
  },
  {
    title: 'Intelligent Workflows & Automation Design',
    description: 'We map and design AI-assisted user flows that simplify complex tasks, making AI a natural extension of human capability.',
    icon: Workflow,
  },
  {
    title: 'Emotion & Empathy Modeling',
    description: 'Our design integrates affective computing to make interfaces emotionally responsive, building trust and making technology more humane.',
    icon: Sparkles,
  },
  {
    title: 'Ethical & Transparent Design',
    description: 'We embed explainability, bias control, and user transparency into every AI experience, because clarity builds confidence.',
    icon: ShieldCheck,
  },
];

const techStack = [
  {
    title: 'Design Tools',
    description: 'Figma, Adobe XD, Framer, Miro',
    icon: PenTool,
  },
  {
    title: 'AI Interaction Tools',
    description: 'Dialogflow, Rasa, LangChain, OpenAI API',
    icon: Bot,
  },
  {
    title: 'Voice Systems',
    description: 'Amazon Alexa SDK, Google Dialogflow CX, Twilio Voice',
    icon: Mic,
  },
  {
    title: 'Frontend Integration',
    description: 'Angular, React, Next.js',
    icon: Eye,
  },
  {
    title: 'Analytics',
    description: 'Mixpanel, Hotjar, Google Analytics 4',
    icon: BarChart,
  },
   {
    title: 'Prototyping AI Flows',
    description: 'ChatGPT Custom GPTs, HuggingFace, Llama',
    icon: BrainCircuit,
  },
];

const whyAngelesoft = [
  { text: 'Human-First AI Design: We design for intuition, not instruction.' },
  { text: 'Emotionally Intelligent Systems: Interfaces that adapt to tone, context, and user state.' },
  { text: 'Seamless Integration: Unified across voice, chat, web, and mobile platforms.' },
  { text: 'Design + Engineering Fusion: Designers and AI engineers work hand-in-hand.' },
  { text: 'Transparent AI Ethics: Every experience built with trust and explainability.' },
];

export default function AiExperienceDesign() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center overflow-hidden">
        <ParticleGrid className="opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center">
            <MessageSquare className="h-12 w-12 text-accent glow" />
          </div>
          <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Designing Human-Centered
            <br />
            <span className="text-primary">Intelligence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            At Angelesoft, we merge design thinking with artificial intelligence to craft experiences that feel natural, intelligent, and human-aware.
          </p>
          <div className="mt-10">
            <Button size="lg">Let's design your next intelligent experience</Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            We build interfaces that think.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Bridging creativity, empathy, and data-driven insight to deliver seamless digital journeys. Our AI Experience Design practice focuses on how users interact with intelligent systems — not just how AI functions, but how it communicates, learns, and adapts to people.
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
              Design & Technology Stack
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
              Why Angelesoft for AIXD
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
            Where Intelligence Meets Experience
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            AI should never feel mechanical. It should feel helpful, responsive, and alive. At Angelesoft, we design experiences that turn artificial intelligence into authentic interaction — where every touchpoint feels uniquely human.
          </p>
          <div className="mt-10">
            <Button size="lg">Let’s design your next intelligent experience</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
