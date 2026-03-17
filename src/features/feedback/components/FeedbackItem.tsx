import { Star } from "lucide-react";
import Image from "next/image";

function FeedbackItem() {
    return (
      <div className="flex flex-col gap-5 bg-secondary-background rounded-2xl p-8 shadow-[0_0_10px_0_#2a8cee]">
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-3 items-center">
            <Star fill="#2a8cee" stroke="#2a8cee" />
            <Star fill="#2a8cee" stroke="#2a8cee" />
            <Star fill="#2a8cee" stroke="#2a8cee" />
            <Star fill="#2a8cee" stroke="#2a8cee" />
            <Star fill="#2a8cee" stroke="#2a8cee" />
          </div>
          <Image src="/pswinlogo.svg" alt="logo" width={40} height={40} />
        </div>
        <p className="text-secondary-font text-sm">
          Отличные товары, ребята быстро работают, все быстро подключили инструкции понятны. Все
          работает.
        </p>
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src="/avatar.jpeg" alt="avatar" width={40} height={40} />
          </div>
          <div>
            <h3>Оксана</h3>
            <span className="text-sm text-secondary-font">12-12-2025</span>
          </div>
        </div>
      </div>
    );
}

export default FeedbackItem;