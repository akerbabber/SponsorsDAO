import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import abi from "../../abi.json";
import { contractAddress } from "@/constants";
import { useState } from "react";

function Register(): JSX.Element {
  const { isDisconnected } = useAccount();
  const [formData, setSponsorshipForm] = useState({
    name: "",
    logoUrl: "",
    websiteUrl: "",
    description: "",
    startDate: "",
    endDate: "",
    lastSponsorDeadline: "",
  });

  type SponsorshipForm = {
    name: string;
    logoUrl: string;
    websiteUrl: string;
    description: string;
    startDate: number;
    endDate: number;
    lastSponsorDeadline: string;
  };

  const initialSponsorshipFormState: SponsorshipForm = {
    name: "",
    logoUrl: "",
    websiteUrl: "",
    description: "",
    startDate: Date.now(),
    endDate: Date.now(),
    lastSponsorDeadline: "",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSponsorshipForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add registration logic here
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: "registerHackathon",
    args: [
      formData.name,
      formData.logoUrl,
      formData.websiteUrl,
      formData.description,
      BigInt(formData.startDate),
      BigInt(formData.endDate),
      BigInt(formData.lastSponsorDeadline),
    ],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  console.log(`Data from contract is ${data}`);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Register a new Hackathon</h1>
      {isDisconnected ? (
        <ConnectButton />
      ) : (
        <form className="space-y-4" onSubmit={write}>
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="logoUrl"
              className="block font-medium text-gray-700"
            >
              Logo URL
            </label>
            <input
              type="text"
              id="logoUrl"
              name="logoUrl"
              value={formData.logoUrl}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="websiteUrl"
              className="block font-medium text-gray-700"
            >
              Website URL
            </label>
            <input
              type="text"
              id="websiteUrl"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Description
            </label>
            <input
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-textarea mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            ></input>
          </div>
          <div>
            <label
              htmlFor="startDate"
              className="block font-medium text-gray-700"
            >
              Start Date timestamp
            </label>
            <input
              type="number"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="block font-medium text-gray-700"
            >
              End Date timestamp
            </label>
            <input
              type="number"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="lastSponsorDeadline"
              className="block font-medium text-gray-700"
            >
              Last Sponsor Deadline timestamp
            </label>
            <input
              type="number"
              id="lastSponsorDeadline"
              name="lastSponsorDeadline"
              value={formData.lastSponsorDeadline}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Register;
