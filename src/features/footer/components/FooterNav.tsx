import Image from "next/image";
import { data1, data2 } from "../constants/footer-nav-data";
import FooterNavItem from "./FooterNavItem";
import Link from "next/link";


function FooterNav() {
    return (
      <div className="flex gap-10">
        <FooterNavItem title="Сервисы" items={data1} />
        <FooterNavItem title="Прочее" items={data2} />
        <nav className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Контакты</h2>
          <div className="flex gap-4">
            <Link href="#" className="bg-tertiary-background rounded-lg py-2 px-4"><Image src="/telegram.svg" alt="telegram" width={20} height={20}/></Link>
            <Link href="#" className="bg-tertiary-background rounded-lg py-2 px-4"><Image src="/telegram.svg" alt="telegram" width={20} height={20}/></Link>
          </div>
        </nav>
      </div>
    );
}

export default FooterNav;