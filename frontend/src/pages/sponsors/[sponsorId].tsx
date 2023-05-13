import React from "react";
import { Sponsor } from "@/interfaces/front";

interface Props {
  sponsor: Sponsor;
}

const SponsorDetails: React.FC<Props> = ({ sponsor }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="flex items-center mb-4">
        <img
          src={sponsor.logoUrl}
          className="w-12 h-12 object-cover rounded-full mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{sponsor.name}</h1>
          <p className="text-gray-500">{sponsor.websiteUrl}</p>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-2">Sponsorships:</h2>
      <div className="space-y-4">
        {sponsor.sponsorships?.map((sponsorship) => (
          <div key={sponsorship.hacker}>
            <h3 className="text-lg font-bold mb-1">{sponsorship.hacker}</h3>
            <p>Amount: {sponsorship.amount}</p>
            <p>Description: {sponsorship.description}</p>
            <p>Status: {sponsorship.isApproved ? "Approved" : "Pending"}</p>
            <p>Lock status: {sponsorship.isLocked ? "Locked" : "Unlocked"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: {
  query: { sponsorId: number };
}) {
  const { sponsorId } = context.query;
  const res = await fetch(`http://localhost:3000/api/sponsors/${sponsorId}`);
  const sponsor = await res.json();
  console.log(sponsor);
  return {
    props: {
      sponsor,
    },
  };
}
export default SponsorDetails;
