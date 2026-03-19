import { FeedbackSection } from '@/features/feedback';
import { HeroSection } from '@/features/hero';
import { AdvantageItem, EAPlayCard } from '@/features/eaplay';
import { Gamepad, Rocket } from 'lucide-react';
import StepItem from '@/features/instruction/components/StepItem';
import PlayStationCard from '@/features/playstation/components/PlayStationCard';
import { QuestionsSection } from '@/features/faq';
import { InstructionSection } from '@/features/instruction';

function Main() {
  return (
    <main className="w-full">
      <HeroSection />
      <PlayStationCard />
      <EAPlayCard />
      <InstructionSection />
      <QuestionsSection />
      <FeedbackSection />
    </main>
  );
}

export default Main;
