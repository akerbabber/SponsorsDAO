import { useRouter } from "next/router";
import React from "react";

interface Sponsor {
  id: number;
  name: string;
  bio: string;
  walletAddress: string;
  imageUrl: string;
  websiteUrl: string;
  twitterUrl: string;
  githubUrl: string;
  discordUrl: string;
  telegramUrl: string;
  linkedinUrl: string;
  youtubeUrl: string;
  mediumUrl: string;
  devtoUrl: string;
  hashnodeUrl: string;
  blogUrl: string;
  otherUrl: string;
}

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { sponsorId } = router.query;
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="bio" className="block font-medium text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            id="bio"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-3 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export async function getStaticProps(context: { params: { sponsorId: any; }; }) {
  const { sponsorId } = context.params;
  const res = await fetch(`http://localhost:3000/api/sponsors/${sponsorId}`);
  const sponsor: Sponsor = await res.json();
  return {
    props: {
      sponsor,
    },
  };
}

export default ProfilePage;
