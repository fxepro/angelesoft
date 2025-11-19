import {
  BrainCircuit,
  Layers3,
  BarChart,
  Cloud,
  MessageSquare,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

export const services: Service[] = [
  {
    title: 'AI Engineering & Agent Systems',
    description:
      'Build intelligent assistants, automation agents, and adaptive workflows using next-gen LLMs.',
    icon: BrainCircuit,
    href: '/ai-engineering',
  },
  {
    title: 'Full-Stack Application Development',
    description:
      'End-to-end web, mobile, and enterprise systems powered by Angular, Laravel, and AI tooling.',
    icon: Layers3,
    href: '/full-stack-development',
  },
  {
    title: 'Data & Intelligence Systems',
    description:
      'Transform data into actionable intelligence with predictive analytics and visual dashboards.',
    icon: BarChart,
    href: '/data-intelligence',
  },
  {
    title: 'Cloud & Infrastructure Engineering',
    description:
      'Design and deploy high-performance, AI-ready infrastructures on AWS, GCP, or Azure.',
    icon: Cloud,
    href: '/cloud-infrastructure',
  },
  {
    title: 'AI Experience Design (AIXD)',
    description:
      'Create human-centered, conversational, and adaptive user interfaces for next-gen experiences.',
    icon: MessageSquare,
    href: '/ai-experience-design',
  },
  {
    title: 'Cognitive Consulting & Integration',
    description:
      'Strategic advisory for enterprises seeking to become AI-first organizations.',
    icon: Briefcase,
    href: '/cognitive-consulting',
  },
];

export type Project = {
  title: string;
  description: string;
  imageId: string;
};

export const projects: Project[] = [
  {
    title: 'AI Content Analyzer',
    description: 'A tool that provides insights and summaries for text using GenAI.',
    imageId: 'project1',
  },
  {
    title: 'Mobile-First Platform',
    description: 'A responsive social platform designed for seamless mobile interaction.',
    imageId: 'project2',
  },
  {
    title: 'Real-time Data Dashboard',
    description: 'Visualizing complex datasets with interactive charts and live updates.',
    imageId: 'project3',
  },
  {
    title: 'Headless E-commerce',
    description: 'A flexible and fast e-commerce solution with a decoupled frontend.',
    imageId: 'project4',
  },
  {
    title: 'Developer Tooling Suite',
    description: 'Custom scripts and extensions to improve developer workflow.',
    imageId: 'project5',
  },
  {
    title: 'Elite',
    description: '123456789012345123456789012345',
    imageId: 'project6',
  },
];
