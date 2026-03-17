import FooterInfo from "./FooterInfo";
import FooterNav from "./FooterNav";
import FooterNavItem from "./FooterNavItem";

function Footer() {
    return (
      <footer className="flex justify-between items-center bg-secondary-background w-full py-8">
        <FooterInfo />
        <FooterNav />
      </footer>
    );
}

export default Footer;