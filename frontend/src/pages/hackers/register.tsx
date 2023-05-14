import { useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { contractAddress } from "@/constants";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import abi from "../../abi.json";

type Hacker = {
  isRegistered: boolean;
  lensUrl: string;
  githubUrl: string;
  linkedInUrl: string;
  twitterUrl: string;
  websiteUrl: string;
  telegramHandle: string;
  discordHandle: string;
  email: string;
  location: string;
  DAOs: string[];
};

const initialHackerState: Hacker = {
  isRegistered: false,
  lensUrl: "",
  githubUrl: "",
  linkedInUrl: "",
  twitterUrl: "",
  websiteUrl: "",
  telegramHandle: "",
  discordHandle: "",
  email: "",
  location: "",
  DAOs: []
};

const HackerForm = () => {
  const [hacker, setHacker] = useState<Hacker>(initialHackerState);
  const { isDisconnected } = useAccount();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHacker((prevHacker) => ({
      ...prevHacker,
      [name]: value,
    }));
  };

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: "registerHacker",
    args: [
      [
        hacker.lensUrl,
        hacker.githubUrl,
        hacker.linkedInUrl,
        hacker.twitterUrl,
        hacker.websiteUrl,
        hacker.telegramHandle,
        hacker.discordHandle,
        hacker.email,
        hacker.location,
        [],
      ],
    ],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Register as a Hacker</h1>
      {isDisconnected ? (
        <ConnectButton />
      ) : (
        <form onSubmit={write}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lensUrl"
            >
              Lens URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lensUrl"
              type="text"
              name="lensUrl"
              value={hacker.lensUrl}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="githubUrl"
            >
              GitHub
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="githubUrl"
              type="text"
              name="githubUrl"
              value={hacker.githubUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="linkedInUrl"
            >
              LinkedIn URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="linkedInUrl"
              type="text"
              name="linkedInUrl"
              value={hacker.linkedInUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="twitterUrl"
            >
              Twitter URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="twitterUrl"
              type="text"
              name="twitterUrl"
              value={hacker.twitterUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="websiteUrl"
            >
              Website URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="websiteUrl"
              type="text"
              name="websiteUrl"
              value={hacker.websiteUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="telegramHandle"
            >
              Telegram Handle{" "}
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="telegramHandle"
              type="text"
              name="telegramHandle"
              value={hacker.telegramHandle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="discordHandle"
            >
              Discord Handle{" "}
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="discordHandle"
              type="text"
              name="discordHandle"
              value={hacker.discordHandle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email{" "}
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              name="email"
              value={hacker.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="location"
            >
              Location{" "}
            </label>

            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              name="location"
              value={hacker.location}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              disabled={!write}
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded justify-center"
            >
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default HackerForm;
