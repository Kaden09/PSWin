import { FeedbackSection } from '@/features/feedback';
import { HeroSection } from '@/features/hero';
import { EAPlayCard } from '@/features/eaplay';
import { QuestionsSection } from '@/features/faq';
import { InstructionSection } from '@/features/instruction';
import PlayStationSection from '@/features/playstation/components/PlayStationSection';
import EAPlaySection from '@/features/eaplay/components/EAPlaySection';

function Main() {
  return (
    <main className="flex flex-col items-center w-full px-30">
      <HeroSection />
      <PlayStationSection />
      <EAPlaySection />
      <InstructionSection />
      <QuestionsSection />
      <FeedbackSection />
    </main>
  );
}

export default Main;
