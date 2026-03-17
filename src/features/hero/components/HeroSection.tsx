import Link from 'next/link';
import HeroBadge from './HeroBadge';
import { ChevronRight } from 'lucide-react';

function HeroSection() {
  return (
    <div className="flex flex-col min-h-screen mt-20 pb-100 items-center justify-center gap-5">
      <HeroBadge />
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-6xl font-bold max-w-250 text-center">
          Получи доступ ко всем играм прямо сейчас
        </h1>
        <p className="text-secondary-font text-center max-w-180 text-2xl">
          Активируй подписку PlayStation Plus или EA Play на свой аккаунт. Мгновенная активация,
          гарантия качества, поддержка 24/7
        </p>
      </div>
      <div className="flex gap-5 mt-10">
        <Link href="#" className="flex gap-3 bg-contrast rounded-full py-3 px-10 text-xl">
          <span>Выбрать подписку</span>
          <ChevronRight />
        </Link>
        <Link href="#" className="bg-secondary-background rounded-full py-3 px-10 text-xl">
          Выбрать подписку
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
