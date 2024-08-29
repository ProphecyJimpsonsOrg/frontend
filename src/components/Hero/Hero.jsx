import hero from '../../assets/images/hero1.png';
import verified from '../../assets/images/verified.png';

function Hero() {
  return (
    <div className='max-w-screen-xl mx-auto mt-20 py-16 flex flex-col lg:flex-row items-center'>
      <div className='lg:w-7/12'>
        <div>
          <h1 className='text-stroke text-6xl font-semibold mb-4 uppercase leading-tight'>
            Exchange Non-Fungible Token
          </h1>
          <h1 className='text-gradient mb-12 text-6xl'>
            Developed by Prophecy Jimpsons
          </h1>
          <div className='flex flex-col lg:flex-row gap-10 justify-center lg:justify-start'>
            <a
              href='#'
              className='inline-block py-4 px-9 bg-[#2F2F2F] text-[#F5F5F5] font-semibold text-sm rounded-md transition-all duration-300 hover:bg-orange-400 hover:text-black'
            >
              Explore NFTs
            </a>

            <a
              href='#'
              className='inline-flex items-center py-2 px-12 border border-orange-300 text-orange-500 text-sm font-semibold rounded-md transition-transform transform hover:scale-105 bg-transparent shadow-lg hover:bg-orange-500 hover:border-orange-500 hover:text-black'
            >
              Create NFT
            </a>
          </div>
        </div>
      </div>
      <div className='lg:w-5/12 mt-12 lg:mt-0 text-center lg:text-right'>
        <div className='relative inline-block rounded-lg bg-white/5 border border-white/10 shadow-[0px_0px_70px_rgba(5,5,20,0.2)] backdrop-blur-lg'>
          <img
            className='h-96 w-full rounded-lg object-cover object-center'
            src={hero}
            alt='Hero Image'
          />
          <img
            src={verified}
            alt='Verified Icon'
            className='absolute bottom-[5%] left-[7%] w-[27%] animate-rotate-3d rounded-full shadow-xl shadow-blue-gray-900/50'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
