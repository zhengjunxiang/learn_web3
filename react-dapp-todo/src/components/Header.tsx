import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header() {
  return (
    <div>
      <div>
        <ConnectButton accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full'
        }}></ConnectButton>
      </div>
    </div>
  )
}

export default Header