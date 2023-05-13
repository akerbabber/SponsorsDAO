import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import abi from "../../abi.json";
import { contractAddress } from "@/constants";

function Register(): JSX.Element {
  const { isDisconnected } = useAccount();

  // Add registration logic here
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: "registerSponsor",
    args: [
      [
        "1inch",
        "",
        "",
        "",
        "The unicorn of unicorns",
        BigInt(0),
        BigInt(0),
        BigInt(0),
        BigInt(0),
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
        <form onSubmit={write} className="flex flex-col gap-4">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
}

export default Register;
