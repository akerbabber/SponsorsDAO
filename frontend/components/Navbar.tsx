import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* <Link href="/">
          <span className="text-xl font-bold">Hackathon Sponsorship</span>
        </Link> */}
        <div className="flex items-center space-x-4 justify-end">
          <ul className="flex space-x-4 items-center">
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
              <ConnectButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
