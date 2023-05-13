import React, { useState } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Hacker } from "@/interfaces/front";
import abi from "../../abi.json";
import { useContractRead } from "wagmi";
import { contractAddress } from "@/constants";
type Props = {
  hackers: Hacker[];
};

const ProfileSummary: React.FC<{ hacker: Hacker }> = ({ hacker }) => {
  return (
    <Link href={`/hackers/${hacker.id}`} passHref>
      <div key={hacker.id} className="flex items-center mb-4">
        <img
          src={hacker.imageUrl ?? "/images/generic-profile.jpg"}
          className="w-12 h-12 object-cover rounded-full mr-4"
        />
        <div>
          <span className="text-xl font-bold">{hacker.name}</span>
          <p className="text-gray-500">{hacker.bio}</p>
        </div>
      </div>
    </Link>
  );
};

const ProfilesPage: React.FC<Props> = ({ hackers }) => {
  const [hackersCount, setHackersCount] = useState(-1);
  const { data, isError, isLoading, isSuccess } = useContractRead({
    address: contractAddress,
    abi: abi,
    functionName: "hackersCounter",
    chainId: 5,
    onSuccess(data) {
      setHackersCount(parseInt(data as string));
    },
  });

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Hacker Profiles</h1>
      <Link href="/register" passHref>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
          Register a new Hacker
        </button>
      </Link>
      <h2 className="mb-4">
        <span className="font-bold">{hackersCount}</span> hackers registered
      </h2>
      {hackers.map((hacker) => (
        <ProfileSummary hacker={hacker} key={hacker.id} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("http://localhost:3000/api/hackers");
  const hackers = await res.json();

  return {
    props: {
      hackers,
    },
  };
};

export default ProfilesPage;
