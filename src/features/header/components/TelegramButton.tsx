import Image from 'next/image';

function TelegramButton() {
  return (
    <div className="flex gap-3 items-center justify-center bg-contrast rounded-xl cursor-pointer py-2 px-4">
      <Image src="/telegram.svg" alt="telegram" width={20} height={20} />
      <span>Мы в телеграм</span>
    </div>
  );
}

export default TelegramButton;
