import React from 'react';
import Link from 'next/link';

type Profile = {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
};

const profiles: Profile[] = [
  {
    id: 1,
    name: '1inch',
    bio: 'To the moon',
    imageUrl: '/images/sponsors/1inch.png',
  },
  {
    id: 2,
    name: 'Ethereum Foundation',
    bio: 'Distributed computing for everyone',
    imageUrl: '/images/sponsors/ethereum-foundation.jpeg',
  },
  // Add more profiles here
];

const ProfileSummary: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <div key={profile.id} className="flex items-center mb-4">
      <img src={profile.imageUrl} className="w-12 h-12 object-cover rounded-full mr-4" />
      <div>
        <Link href={`/sponsors/${profile.id}`} passHref>
          <span className="text-xl font-bold">{profile.name}</span>
        </Link>
        <p className="text-gray-500">{profile.bio}</p>
      </div>
    </div>
  );
};

const ProfilesPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Hacker Profiles</h1>
      {profiles.map((profile) => (
        <ProfileSummary profile={profile} />
      ))}
    </div>
  );
};

export default ProfilesPage;
