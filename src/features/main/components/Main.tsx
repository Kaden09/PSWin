import { FeedbackItem } from '@/features/feedback';
import { HeroSection } from '@/features/hero';
import { AdvantageItem, EAPlayCard } from '@/features/eaplay';
import { Gamepad, Rocket } from 'lucide-react';
import QuestionItem from '@/features/faq/components/QuestionItem';
import StepItem from '@/features/instruction/components/StepItem';
import PlayStationCard from '@/features/playstation/components/PlayStationCard';
import QuestionItemsList from '@/features/faq/components/QuestionItemsList';
import { QuestionsSection } from '@/features/faq';

function Main() {
  return (
    <main>
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
      <FeedbackItem />
    </main>
  );
}

export default Main;
