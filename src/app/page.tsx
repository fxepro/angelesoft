import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Showcase } from '@/components/sections/showcase';
import { WhyChoose } from '@/components/sections/why-choose';
import { Industries } from '@/components/sections/industries';
import { ThoughtLeadership } from '@/components/sections/thought-leadership';
import { AITool } from '@/components/sections/ai-tool';
import { FinalCTA } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Showcase />
      <WhyChoose />
      <Industries />
      <ThoughtLeadership />
      <AITool />
      <FinalCTA />
    </>
  );
}
