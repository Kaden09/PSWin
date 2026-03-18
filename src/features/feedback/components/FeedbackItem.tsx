import { Star } from 'lucide-react';
import Image from 'next/image';

function FeedbackItem({text, username, date}: IFeedback) {
  return (
    <div className="flex flex-col gap-5 bg-secondary-background rounded-2xl p-8 shadow-[0_-1px_3px_0_#2a8cee] min-w-100 w-full">
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
        {text}
      </p>
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image src="/avatar.jpg" alt="avatar" width={50} height={50} />
        </div>
        <div>
          <h3 className='text-xl'>{username}</h3>
          <span className="text-sm text-secondary-font">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;
