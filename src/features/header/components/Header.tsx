import Image from 'next/image';
import TelegramButton from './TelegramButton';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="flex justify-between items-center w-full">
      <Image src="/pswin.svg" alt="pswin" width={170} height={44} className="cursor-pointer" />
      <Navbar />
      <TelegramButton />
    </header>
  );
}

export default Header;
