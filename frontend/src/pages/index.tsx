import React from 'react';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Hackathon Sponsorship</h1>
      <p className="text-gray-500 mb-6">
        Sponsor participation for underprivileged hackers
      </p>
      <div className="flex space-x-4 mb-8">
        <Link href="/events" passHref>
          <span className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
            Events
          </span>
        </Link>
        <Link href="/hackers" passHref>
          <span className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
            Profiles
          </span>
        </Link>
        <Link href="/sponsors" passHref>
          <span className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
            Sponsors
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
