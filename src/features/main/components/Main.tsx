import { FeedbackItem } from "@/features/feedback";
import { HeroSection } from "@/features/hero";
import { AdvantageItem } from "@/features/eaplay";
import { Gamepad, Rocket } from "lucide-react";
import QuestionItem from "@/features/faq/components/QuestionItem";
import StepItem from "@/features/instruction/components/StepItem";

function Main() {
    return (
      <main>
        <HeroSection />
        <StepItem icon={<Rocket />} step="01" title="Учетные данные" desc="Вы получаете логин и пароль от игрового аккаунта." />
        <QuestionItem
          title="Как подключается подписка?"
          desc="Наш менеджер Службы Заботы выдаст Вам логин и пароль от игрового аккаунта, который необходимо активировать по инструкции, после чего подписка начнёт работать на всех аккаунтах вашей консоли"
        />
        <AdvantageItem icon={<Gamepad />} title="Title" />
        <FeedbackItem />
      </main>
    );
}

export default Main;