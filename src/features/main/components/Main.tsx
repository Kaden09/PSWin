import { FeedbackSection } from '@/features/feedback';
import { HeroSection } from '@/features/hero';
import { AdvantageItem, EAPlayCard } from '@/features/eaplay';
import { Gamepad, Rocket } from 'lucide-react';
import StepItem from '@/features/instruction/components/StepItem';
import PlayStationCard from '@/features/playstation/components/PlayStationCard';
import { QuestionsSection } from '@/features/faq';

function Main() {
  return (
    <main className='w-full'>
      <HeroSection />
      <PlayStationCard />
      <EAPlayCard />
      <StepItem
        icon={<Rocket />}
        step="01"
        title="Учетные данные"
        desc="Вы получаете логин и пароль от игрового аккаунта."
      />
      <QuestionsSection />
      <AdvantageItem icon={<Gamepad />} title="Title" />
      <FeedbackSection />
    </main>
  );
}

export default Main;
