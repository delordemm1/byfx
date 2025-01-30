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

  async function handleDisconnect() {
    try {
      await disconnect()
    } catch (error) {
      console.error('Error during disconnect:', error)
    }
  }

  function toggleTheme() {
    const newTheme = themeMode === 'dark' ? 'light' : 'dark'
    setThemeMode(newTheme)
    document.body.className = newTheme
  }

  return (
    <div className="action-button-list flex gap-2 justify-center items-center text-white">
      <button onClick={openAppKit} className='flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors'>Connect Wallet</button>
    </div>
  )
}

export default ActionButtonList