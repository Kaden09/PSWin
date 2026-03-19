import { CardActionButton, CardSwitchButton } from '@/shared/components';
import Image from 'next/image';

function PlayStationCard() {
  return (
    <div className="flex flex-col gap-3 bg-secondary-background rounded-2xl p-10 border border-primary-border">
      <div className="flex items-end gap-5">
        <div className="bg-contrast rounded-2xl p-8">
          <Image src="/playstation.svg" alt="playstation" width={50} height={50} />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-secondary-font">Ваша подписка</span>
          <h2 className="text-2xl font-semibold">PlayStation Plus Delux</h2>
          <div className="flex gap-3">
            <Image src="/playstation.svg" alt="playstation" width={20} height={20} />
            <span className="text-secondary-font">Игры по подписке</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-2">
          <span className="text-secondary-font">Длительность подписки</span>
          <div className="flex justify-between bg-tertiary-background rounded-lg py-2 px-4 border border-primary-border">
            <span>12 месяцев</span>
            <span>6000.00₽</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-secondary-font">Ваша консоль</span>
        <div className="flex gap-3">
          <CardSwitchButton title="PS5" selected />
          <CardSwitchButton title="PS4" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-secondary-font">Уровень подписки</span>
        <div className="flex gap-3">
          <CardSwitchButton title="Deluxe" />
          <CardSwitchButton title="Essential" selected />
        </div>
      </div>
      <CardActionButton title="Купить" />
    </div>
  );
}

export default PlayStationCard;
