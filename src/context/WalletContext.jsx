/* Context to manage the state for the phantom wallet connection */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getProvider,
  eagerConnect,
  disconnectWallet,
} from '../utils/phantomUtils';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [publicKey, setPublicKey] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Manually Connect to the wallet
  const connectWallet = async () => {
    const provider = getProvider();

    if (provider) {
      try {
        const response = await provider.request({ method: 'connect' });
        setPublicKey(response.publicKey.toString());
        setIsConnected(true);
        console.log('Wallet Connected: ', response.publicKey.toString());
      } catch (err) {
        console.error('User reject the connection request: ', err);
      }
    } else {
      alert(
        'Phantom wallet is not installed. Please install it from from "https://phantom.app/"'
      );
    }
  };

  // Handle Wallet Disconnect
  const handleDisconnect = async () => {
    if (isConnected) {
      await disconnectWallet();
      setPublicKey(null);
      setIsConnected(false);
    }
  };

  // Eagerly connect on page load if the app is trusted or already connected
  useEffect(() => {
    const provider = getProvider();
    if (provider) {
      // Using window.solona.request with onlyIfTrusted for eager connection\
      eagerConnect().then((response) => {
        if (response?.publicKey) {
          setPublicKey(response.publicKey.toString());
          setIsConnected(true);
          console.log('Eagerly connected: ', response.publicKey.toString());
        }
      });

      // Listen for account change
      provider.on('accountChanged', (publicKey) => {
        if (publicKey) {
          setPublicKey(publicKey.toString());
          console.log(`Switched to account ${publicKey.toBase58()}`);
        } else {
          setPublicKey(null);
          setIsConnected(false);
          console.log('Disconnected from phantom wallet');
        }
      });
    }
  }, []);

  return (
    <WalletContext.Provider
      value={{ publicKey, isConnected, connectWallet, handleDisconnect }}
    >
      {children}
    </WalletContext.Provider>
  );
};

// PropTypes fro WalletProvider to validate 'children'
WalletProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WalletProvider;
