import Link from 'next/link';
import { navbar_data } from '../constants/navbar-data';

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-15 items-center justify-center text-secondary-font">
        {navbar_data.map((item) => (
          <li key={item.title}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
