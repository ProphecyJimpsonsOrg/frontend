import { useContext } from 'react';
import { Button } from '@material-tailwind/react';
import { WalletContext } from '../../context/WalletContext';

const ConnectWalletButton = () => {
  const { connectWallet, handleDisconnect, publicKey, isConnected } =
    useContext(WalletContext);

  return (
    <>
      <div>
        {isConnected ? (
          <div>
            <p>Connected: {publicKey}</p>
            <Button
              size='sm'
              color='orange'
              className='text-white hover:bg-orange-500'
              onClick={handleDisconnect}
            >
              Disconnect Phantom Wallet
            </Button>
          </div>
        ) : (
          <Button
            size='sm'
            color='orange'
            className='text-white hover:bg-orange-500'
            onClick={connectWallet}
          >
            Connect Wallet
          </Button>
        )}
      </div>
    </>
  );
};

export default ConnectWalletButton;
