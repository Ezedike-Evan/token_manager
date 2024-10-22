import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'

const  NavBar = ()=>{
 
  return (
    <nav>
      <h2>Token Manager</h2>
      <WalletMultiButton />
    </nav>
  )
}

export default NavBar