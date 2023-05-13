import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../../components/Layout";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  scrollTestnet,
  lineaTestnet,
  goerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const mantleTestnet = {
  id: 5001,
  name: "Mantle Testnet",
  network: "scroll-testnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "BIT",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.mantle.xyz"],
      webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"],
    },
    public: {
      http: ["https://rpc.testnet.mantle.xyz"],
      webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "Mantle",
      url: "https://explorer.testnet.mantle.xyz/",
    },
  },
  testnet: true,
};

const { chains, publicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    lineaTestnet,
    goerli,
    scrollTestnet,
    mantleTestnet,
  ],
  [
    alchemyProvider({
      apiKey: process.env.ALCHEMY_ID || "DeeXY4N_3_tSkueJVOSUSUCr922NbdLP",
    }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
