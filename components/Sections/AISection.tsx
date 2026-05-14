import { SectionHead } from "./SectionHead";
import { Reveal } from "../Reveal/Reveal";
import { AILead } from "./ai/AILead";
import { NorthStar } from "./ai/NorthStar";
import { Toolchain } from "./ai/Toolchain";
import section from "./Section.module.css";

export function AISection() {
  return (
    <section id="ai" className={section.section}>
      <SectionHead
        anchor="04"
        kr="AI 시대의 강점"
        en="Adapting to the AI Era"
        desc="변화하는 시장에 어떻게 대응하고, 무엇을 준비하고 있는가."
      />
      <Reveal>
        <AILead />
      </Reveal>
      <Reveal>
        <NorthStar />
      </Reveal>
      <Reveal delay={320}>
        <Toolchain />
      </Reveal>
    </section>
  );
}
