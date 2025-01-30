
// import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiAdapter, } from '@reown/appkit-adapter-wagmi'
import { bsc, mainnet, arbitrum } from '@reown/appkit/networks'
import {
  createAppKit,
} from '@reown/appkit/react'
import { cookieStorage, createStorage } from 'wagmi';
export const projectId = import.meta.env.VITE_PROJECT_ID || 'b56e18d47c72ab683b10814fe9495694';
// export const projectId = '296924cdb9a40ac2bfe6b78e60779e09';
// export const projectId = '6ab2057d9cb439a116d445df1477ab2a';
export const networks = [bsc];
// import { bsc } from 'wagmi/chains';

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  networks,
  projectId,
  ssr: true,
})

// const modal = createAppKit({
createAppKit({
  debug: true,
  adapters: [wagmiAdapter],
  projectId,
  networks: [bsc],
  enableWalletGuide: true,
  allWallets: "SHOW",
  metadata: {
    //this is optional
    name: 'ByFx',
    description: 'ByForex',
    // url: window?.location?.hostname || "", // origin must match your domain & subdomain
    url: import.meta.env.VITE_DOMAIN_URL || 'https://byforex.coinconnect.tech',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  defaultNetwork: bsc,
  features: {
    // analytics: true,
    socials: false,
    email: false,
    // connectMethodsOrder: [''],
    walletFeaturesOrder: ['receive', 'send'],
  },
  themeMode: "dark"
})

export {
  // modal,
}