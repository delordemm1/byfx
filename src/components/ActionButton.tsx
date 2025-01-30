import { bsc } from '@reown/appkit/networks'

// import { modal } from "../utils/wagmi.ts";
import { useAppKit, useAppKitNetwork, useAppKitTheme, useDisconnect } from "@reown/appkit/react";

export function ActionButtonList() {
  const modal = useAppKit()
  const { disconnect } = useDisconnect()
  const { switchNetwork } = useAppKitNetwork()
  const { themeMode, setThemeMode } = useAppKitTheme()

  function openAppKit() {
    modal.open()
  }

  function switchToNetwork() {
    switchNetwork(bsc)
  }

  return (
    <div className="action-button-list flex gap-2 justify-center items-center">
      <button onClick={openAppKit} className='flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors text-white'>Connect Wallet</button>
    </div>
  )
}

export default ActionButtonList