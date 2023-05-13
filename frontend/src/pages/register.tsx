import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Register(): JSX.Element {
  const { isDisconnected } = useAccount();

  async function register() {
    // Add registration logic here
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
