export const ConnectButton = () => {

  return (
    <div className="rounded-3xl">
      <appkit-button />
    </div>
  )
}

// import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit';
// import { Wallet } from 'lucide-react';

// export const ConnectButton = () => {
  // return (
  //   <appkit-button />
    // <RainbowConnectButton.Custom>
    //   {({
    //     account,
    //     chain,
    //     openAccountModal,
    //     openChainModal,
    //     openConnectModal,
    //     mounted,
    //   }) => {
    //     const ready = mounted;
    //     const connected = ready && account && chain;

    //     return (
    //       <div
    //         {...(!ready && {
    //           'aria-hidden': true,
    //           style: {
    //             opacity: 0,
    //             pointerEvents: 'none',
    //             userSelect: 'none',
    //           },
    //         })}
    //       >
    //         {(() => {
    //           if (!connected) {
    //             return (
    //               <button
    //                 onClick={openConnectModal}
    //                 className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors"
    //               >
    //                 <Wallet size={20} />
    //                 <span>Connect Wallet</span>
    //               </button>
    //             );
    //           }

    //           if (chain.unsupported) {
    //             return (
    //               <button
    //                 onClick={openChainModal}
    //                 className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors"
    //               >
    //                 Wrong network
    //               </button>
    //             );
    //           }

    //           return (
    //             <div className="flex items-center gap-2">
    //               <button
    //                 onClick={openChainModal}
    //                 className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 px-3 py-2 rounded-lg transition-colors"
    //               >
    //                 {chain.name}
    //               </button>

    //               <button
    //                 onClick={openAccountModal}
    //                 className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg transition-colors"
    //               >
    //                 {account.displayName}
    //               </button>
    //             </div>
    //           );
    //         })()}
    //       </div>
    //     );
    //   }}
    // </RainbowConnectButton.Custom>
//   );
// };

// import { useAppKit, useAppKitNetwork, useAppKitTheme, useDisconnect } from "@reown/appkit/react";
// import { bsc } from '@reown/appkit/networks'


// export function ConnectButton() {
//   const modal = useAppKit()
//   const { switchNetwork } = useAppKitNetwork()

//   function openAppKit() {
//     modal.open()
//   }

//   return (
//     <div className="action-button-list flex gap-2 justify-center items-center">
//       <button onClick={openAppKit} className='flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors text-white'>Connect Wallet</button>
//     </div>
//   )
// }
