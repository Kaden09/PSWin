import Image from 'next/image';

function FooterInfo() {
  return (
    <div className="flex flex-col gap-5 max-w-65">
      <Image src="/pswin.svg" alt="logo" width={170} height={44} />
      <p>Заказы принимаются с 10:00 до 23:00 (МСК)</p>
      <hr className="border-tertiary-background" />
      <p className="text-secondary-font text-sm">© 2025 PsWin. Все права защищены.</p>
    </div>
  );
}

export default FooterInfo;
