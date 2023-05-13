import React from "react";
import Link from "next/link";

type Profile = {
  id: number;
  name: string;
  bio: string;
  imageUrl?: string;
};

const hackers: Profile[] = [
  {
    id: 1,
    name: "John Doe",
    bio: "I love coding and building cool stuff!",
    // imageUrl: "/images/profile-1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    bio: "Frontend developer and designer",
    // imageUrl: "/images/profile-2.jpg",
  },
  // Add more profiles here
];

const ProfileSummary: React.FC<{ hacker: Profile }> = ({ hacker }) => {
  return (
    <div key={hacker.id} className="flex items-center mb-4">
      <img
        src={hacker.imageUrl ?? "/images/generic-profile.jpg"}
        className="w-12 h-12 object-cover rounded-full mr-4"
      />
      <Link href={`/hackers/${hacker.id}`} passHref>
        <div>
          <span className="text-xl font-bold">{hacker.name}</span>
          <p className="text-gray-500">{hacker.bio}</p>
        </div>
      </Link>
    </div>
  );
};

const ProfilesPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Hacker Profiles</h1>
      {hackers.map((hacker) => (
        <ProfileSummary hacker={hacker} />
      ))}
    </div>
  );
};

export default ProfilesPage;
