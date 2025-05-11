import React from 'react';

const Hero = () => {
  return (
    <div className='w-full flex flex-col md:flex-row hero-gradient mt-3 font-work-sans px-4 py-6'>
      {/* Left Side */}
      <div className='flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-20 w-full md:w-1/2'>
        {/* Coins */}
        <div className='flex flex-row justify-center gap-4'>
          <img src='/images/coin.png' alt='coin' className='h-32 w-32 rotate-[2.7rad]' />
          <img src='/images/coin.png' alt='coin' className='h-32 w-32' />
          <img src='/images/coin.png' alt='coin' className='h-32 w-32' />
        </div>

        {/* Hero Text */}
        <div className='text-center md:text-left'>
          <p className='font-bold text-4xl md:text-5xl leading-tight'>
            <span className='text-white'>Get Digital </span>
            <span className='gradient-text'>Currencies and Assets</span>
          </p>
        </div>

        {/* Buttons */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
          <button className='px-6 py-4 bg-white text-black rounded-lg shadow-md hover:opacity-90'>
            Buy NFTs
          </button>
          <button className='px-6 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all'>
            Get Trading
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex flex-col items-center justify-center w-full md:w-1/2 mt-10 md:mt-0'>
        {/* Portfolio */}
        <div className='text-center text-white mb-6'>
          <p className='text-sm'>YOUR PORTFOLIO VALUE</p>
          <p className='text-2xl md:text-4xl font-bold gradient-text'>
            $ 416789.<sup>80</sup>
          </p>
          {/* Placeholder for Chart */}
          <div className='w-full h-32 bg-gray-700 rounded-lg mt-4 opacity-50'></div>
        </div>

        {/* NFT Cards */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-6'>
          {[30, 20, 10].map((followers, i) => (
            <div key={i} className='flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 w-[10rem]'>
              <h2 className='font-extrabold text-white text-sm text-center mb-2'>
                NFTs <br /> Collections
              </h2>
              <img src='./images/nft img1.png' alt='nft' className='h-36 w-36 object-cover rounded-lg' />
              <div className='flex flex-row items-center gap-2 mt-3 text-white text-xs'>
                <img src='./images/sub nft1.png' alt='sub nft' className='w-8 h-8 rounded-full' />
                <div>
                  <p className='font-medium'>Rae Hyuen</p>
                  <p className='text-gray-400'>@realrae</p>
                </div>
              </div>
              <p className='mt-1 text-xs text-gray-300'>{followers}K <span>Followers</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
