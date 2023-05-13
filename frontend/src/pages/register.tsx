import { useState } from "react";
import { ethers } from "ethers";

function Register(): JSX.Element {
  const [provider, setProvider] = useState<ethers.Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  async function connectWallet() {
    if (!window.ethereum) {
      alert(
        "No Ethereum wallet found. Please install MetaMask or another wallet to continue."
      );
      return;
    } else {
      const walletProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(walletProvider);
      const walletSigner = await walletProvider.getSigner();
      setSigner(walletSigner);
    }
  }

  async function register() {
    // Add registration logic here
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Register as a Hacker</h1>
      {!signer && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={connectWallet}
        >
          Connect a wallet
        </button>
      )}
      {signer && (
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
