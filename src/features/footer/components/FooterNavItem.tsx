import Link from "next/link";

interface FooterNavItem {
    title: string;
    items: {
        link: string;
        title: string;
    }[];
}

function FooterNavItem({title, items}: FooterNavItem) {
    return (
        <nav className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <ul className="flex flex-col">
                {items.map(item => (
                    <li key={item.title} className="text-secondary-font">
                        <Link href={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>           
        </nav>
    )
}

export default FooterNavItem;