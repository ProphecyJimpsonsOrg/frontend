/* Detect Phantom is installed or not and return the provider if installed */

export const getProvider = () => {
  if (
    typeof window !== 'undefined' &&
    window.solana &&
    window.solana.isPhantom
  ) {
    // return phantom is available
    return window.solana;
  }

  // If phantom is not installed, redirect to their website
  window.open('https://phantom.app/', '_blank');
  return null;
};

/* Automatically connect to the page load without prompting the user for approval */
export const eagerConnect = async () => {
  try {
    const response = await window.solana.request({
      method: 'connect',
      params: { onlyIfTrusted: true },
    });
    return response;
  } catch (err) {
    console.error('Eager connection Failed: ', err);
  }
};

/* Disconnecting the wallet */
export const disconnectWallet = async () => {
  try {
    await window.solana.disconnect();
    console.log('Disconnected from phantom');
  } catch (err) {
    console.error('Error while disconnection wallet: ', err);
  }
};
