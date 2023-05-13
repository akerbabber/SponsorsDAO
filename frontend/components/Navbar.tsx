import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">Hackathon Sponsorship</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/events">
              <span className="hover:text-gray-400">Events</span>
            </Link>
          </li>
          <li>
            <Link href="/hackers">
              <span className="hover:text-gray-400">Hackers</span>
            </Link>
          </li>
          <li>
            <Link href="/sponsors">
              <span className="hover:text-gray-400">Sponsors</span>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <span className="hover:text-gray-400">Register</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
