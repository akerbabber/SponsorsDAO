import React from "react";
import { Hacker } from "@/interfaces/front";
import { walletActions } from "viem/dist/types/clients/decorators/wallet";
import { lensSubgraphUri } from "@/constants";

const query = (walletAddress: string) => {
  return `{
    profiles(
      first: 10
      where: {owner: "${walletAddress}"}
    ) {
      id
      profileId
      pubCount
      owner
      handle
      imageURI
    }
  }`;
};

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
      <div className="flex items-center mt-4">
        <h2>Data from Lens</h2>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: {
  query: { walletAddress: string };
}) {
  const wallet = context.query.walletAddress;
  const lensQuery = `
  {
    profiles( 
      where: {owner: "${wallet}"}
      ) {
        id
        profileId
      pubCount
      owner
      handle
      imageURI
    }
  }
  `;
  const lensRes = await fetch(lensSubgraphUri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lensQuery }),
  });

  console.log(lensRes);
  return {
    props: {
      hacker: lensRes,
    },
  };
}

export default HackerPage;
