import NavigationBar from '../NavigationBar/NavigationBar';
import heroBg from '../../assets/images/hero_bg.png';
import Hero from '../Hero/Hero';

function Header() {
  return (
    <header
      className='relative h-screen bg-cover bg-center'
      style={{
        backgroundImage: `url(${heroBg})`,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className=''></div>
      <NavigationBar />
      <Hero />
    </header>
  );
}

export default Header;
