import WalletProvider from './context/WalletContext';
import Home from './pages/Home';

function App() {
  return (
    <>
      <WalletProvider>
        <Home />
      </WalletProvider>
    </>
  );
}

export default App;
