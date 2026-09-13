import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CaseShowcaseSection } from "@/components/sections/CaseShowcaseSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ChatRequestSection } from "@/components/sections/ChatRequestSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col">
        <HeroSection />
        <ProcessSection />
        <CaseShowcaseSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <ChatRequestSection />
        <FAQSection />
      </main>
      <SiteFooter />
    </>
  );
}
