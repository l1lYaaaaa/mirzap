import { SiteHeader } from "@/components/sites/sv-svai-ru-5bde0d5b/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/sv-svai-ru-5bde0d5b/shared/SiteFooter";
import { HeroSection } from "@/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/HeroSection";
import { ProcessSection } from "@/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/ProcessSection";
import { CaseShowcaseSection } from "@/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/CaseShowcaseSection";
import { GuaranteeSection } from "@/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/GuaranteeSection";
import { TestimonialsSection } from "@/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/TestimonialsSection";
import { ChatRequestSection } from "@/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/ChatRequestSection";
import { FAQSection } from "@/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/FAQSection";
import { TaskNavigatorSection } from "@/components/sites/sv-svai-ru-5bde0d5b/mir-61746d61/TaskNavigatorSection";

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
        <TaskNavigatorSection />
      </main>
      <SiteFooter />
    </>
  );
}
