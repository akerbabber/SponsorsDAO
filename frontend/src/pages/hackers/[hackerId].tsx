import React from "react";
import { Hacker } from "@/interfaces/front";

const HackerPage: React.FC<{ hacker: Hacker }> = ({ hacker }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{hacker.name}</h1>
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 bg-gray-200 rounded-full mr-4"
          src={hacker.imageUrl || "/images/generic-profile.jpg"}
        />
        <div>
          <p className="text-gray-500">{hacker.location}</p>
        </div>
      </div>
      <p className="text-gray-500">{hacker.bio}</p>
    </div>
  );
};

export async function getServerSideProps(context: {
  query: { hackerId: number };
}) {
  const { hackerId } = context.query;
  const res = await fetch(`http://localhost:3000/api/hackers/${hackerId}`);
  const hacker = await res.json();
  console.log(hacker);
  return {
    props: {
      hacker,
    },
  };
}

export default HackerPage;
