import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import abi from "../../abi.json";
import { contractAddress } from "@/constants";
import { useState } from "react";

function Register(): JSX.Element {
  const { isDisconnected } = useAccount();

  const [sponsorData, setSponsorData] = useState({
    name: "",
    logoUrl: "",
    websiteUrl: "",
    email: "",
    description: "",
    offeredAmount: 0,
    fundedAmount: 0,
    deadline: 0,
    upfrontPercentage: 0,
    hackathonId: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSponsorData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Add registration logic here
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: "registerSponsor",
    args: [
      [
        sponsorData.name,
        sponsorData.logoUrl,
        sponsorData.websiteUrl,
        sponsorData.email,
        sponsorData.description,
        BigInt(sponsorData.offeredAmount),
        BigInt(sponsorData.fundedAmount),
        BigInt(sponsorData.deadline),
        BigInt(sponsorData.upfrontPercentage),
        BigInt(sponsorData.hackathonId)
      ],
      BigInt(0),
    ],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  console.log(`Data from contract is ${data}`);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Register as a Sponsor</h1>
      {isDisconnected ? (
        <ConnectButton />
      ) : (
        <div className="max-w-lg mx-auto">
          <form onSubmit={write}>
            <label>
              Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                value={sponsorData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Logo URL:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="logoUrl"
                value={sponsorData.logoUrl}
                onChange={handleChange}
              />
            </label>
            <label>
              Website URL:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="websiteUrl"
                value={sponsorData.websiteUrl}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={sponsorData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Description:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="description"
                value={sponsorData.description}
                onChange={handleChange}
              />
            </label>
            <label>
              Offered Amount:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="offeredAmount"
                value={sponsorData.offeredAmount}
                onChange={handleChange}
              />
            </label>
            <label>
              Funded Amount:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="fundedAmount"
                value={sponsorData.fundedAmount}
                onChange={handleChange}
              />
            </label>
            <label>
              Deadline:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="deadline"
                value={sponsorData.deadline}
                onChange={handleChange}
              />
            </label>
            <label>
              Upfront Percentage:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="upfrontPercentage"
                value={sponsorData.upfrontPercentage}
                onChange={handleChange}
              />
            </label>
            <label>
              Hackathon id:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="hackathonId"
                value={sponsorData.hackathonId}
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded justify-center"
            >
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Register;
