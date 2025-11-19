'use server';

/**
 * @fileOverview An AI agent that answers technical questions about Angelesoft.
 *
 * - askAngelesoft - A function to ask questions to the Angelesoft AI agent.
 * - AskAngelesoftInput - The input type for the askAngelesoft function.
 * - AskAngelesoftOutput - The return type for the askAngelesoft function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AskAngelesoftInputSchema = z.object({
  question: z
    .string()
    .min(3, 'Question must be at least 3 characters.')
    .max(1000, 'Question must be less than 1000 characters.')
    .describe('The user\'s question about Angelesoft.'),
});
export type AskAngelesoftInput = z.infer<typeof AskAngelesoftInputSchema>;

const AskAngelesoftOutputSchema = z.object({
  answer: z.string().describe('The AI\'s answer to the question.'),
});
export type AskAngelesoftOutput = z.infer<typeof AskAngelesoftOutputSchema>;

export async function askAngelesoft(input: AskAngelesoftInput): Promise<AskAngelesoftOutput> {
  return askAngelesoftFlow(input);
}

const ANGELESOFT_CONTEXT = `
You are an expert AI assistant for Angelesoft, a company specializing in AI engineering, full-stack development, data intelligence, cloud infrastructure, AI experience design, and cognitive consulting.

Your purpose is to answer technical questions from potential clients about what Angelesoft does.

Use the following information about Angelesoft's services to answer the user's question. Be helpful, concise, and professional.

## Our Services:

- **AI Engineering & Agent Systems**: We build intelligent assistants, automation agents, and adaptive workflows using next-gen LLMs. We create conversational AI, workflow automation, cognitive decision systems, and multi-agent architectures.

- **Full-Stack Application Development**: We build end-to-end web, mobile, and enterprise systems using modern frameworks like Angular, React, and Laravel. Our applications are AI-ready and built to scale.

- **Data & Intelligence Systems**: We transform data into actionable intelligence with predictive analytics and visual dashboards. We build data infrastructure, ETL pipelines, data warehouses, and knowledge graphs.

- **Cloud & Infrastructure Engineering**: We design and deploy high-performance, AI-ready infrastructures on AWS, GCP, or Azure. We specialize in Infrastructure as Code (IaC), CI/CD, and containerization with Docker and Kubernetes.

- **AI Experience Design (AIXD)**: We create human-centered, conversational, and adaptive user interfaces for AI-powered applications.

- **Cognitive Consulting & Integration**: We provide strategic advisory for enterprises seeking to become AI-first organizations, helping them integrate AI into their core operations.
`;

const askAngelesoftPrompt = ai.definePrompt({
  name: 'askAngelesoftPrompt',
  input: { schema: AskAngelesoftInputSchema },
  output: { schema: AskAngelesoftOutputSchema },
  prompt: `${ANGELESOFT_CONTEXT}

Question:
"{{{question}}}"

Answer:`,
});

const askAngelesoftFlow = ai.defineFlow(
  {
    name: 'askAngelesoftFlow',
    inputSchema: AskAngelesoftInputSchema,
    outputSchema: AskAngelesoftOutputSchema,
  },
  async (input) => {
    const { output } = await askAngelesoftPrompt(input);
    return output!;
  }
);

