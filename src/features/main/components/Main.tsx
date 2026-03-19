import { FeedbackSection } from '@/features/feedback';
import { HeroSection } from '@/features/hero';
import { EAPlayCard } from '@/features/eaplay';
import { QuestionsSection } from '@/features/faq';
import { InstructionSection } from '@/features/instruction';
import PlayStationSection from '@/features/playstation/components/PlayStationSection';

function Main() {
  return (
    <main className="w-full">
      <HeroSection />
      <PlayStationSection />
      <EAPlayCard />
      <InstructionSection />
      <QuestionsSection />
      <FeedbackSection />
    </main>
  );
}

export default Main;
