import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Hacker } from "@/interfaces/front";
import abi from "../../abi.json";
import { useContractRead } from "wagmi";
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
  let contractHackers;
  const { data, isError, isLoading } = useContractRead({
    address: "0x039b2A1461c5Dca438132D9341fb1Da386a984eB",
    abi: abi,
    functionName: "hackersCounter",
    chainId: 5,
    onSuccess(data) {
      console.log(`Data from contract is ${data}`);
      contractHackers = data;
    },
  });
  console.log(`Data from contract is ${data}`);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Hacker Profiles</h1>
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
