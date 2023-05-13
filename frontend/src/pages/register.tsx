import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import abi from "../abi.json";

function Register(): JSX.Element {
  const { isDisconnected } = useAccount();

  async function register() {
    // Add registration logic here
    const { config } = usePrepareContractWrite({
      address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
      abi: abi,
      functionName: "registerHacker",
      args: [{ hacker: { email: "test@abc.com" } }],
    });
    const { data, isLoading, isSuccess, write } = useContractWrite(config);
    console.log(`Data from contract is ${data}`);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Register as a Hacker</h1>
      {isDisconnected ? (
        <ConnectButton />
      ) : (
        <form onSubmit={register} className="flex flex-col gap-4">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button
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
