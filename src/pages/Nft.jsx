import React, { useState } from 'react';
import Footer from '../components/Footer';

const nftData = [
  { title: 'Elements of Earth', image: '/images/nfts/nft1.png', BidPrice: '50 ETH' },
  { title: 'What about man?', image: '/images/nfts/nft2.png', BidPrice: '30 ETH' },
  { title: 'Function of art', image: '/images/nfts/nft3.png', BidPrice: '20 ETH' },
  { title: 'I will recognize Us', image: '/images/nfts/nft4.png', BidPrice: '10 ETH' },
  { title: 'What about man?', image: '/images/nfts/nft5.png', BidPrice: '60 ETH' },
  { title: 'Metamorphosis', image: '/images/nfts/nft6.png', BidPrice: '70 ETH' },
  { title: 'Ageless Groth', image: '/images/nfts/nft7.png', BidPrice: '30 ETH' },
  { title: 'Is money the key?', image: '/images/nfts/nft8.png', BidPrice: '20 ETH' },
  { title: 'A little Different', image: '/images/nfts/nft9.png', BidPrice: '100 ETH' },
  { title: 'Nature', image: '/images/nfts/nft10.png', BidPrice: '50 ETH' },
  { title: 'Life without nature', image: '/images/nfts/nft11.png', BidPrice: '50 ETH' },
  { title: 'What is the art?', image: '/images/nfts/nft12.png', BidPrice: '50 ETH' },
  { title: 'Embosse', image: '/images/nfts/nft13.png', BidPrice: '50 ETH' },
  { title: 'Beautiful Woman', image: '/images/nfts/nft14.png', BidPrice: '50 ETH' },
  { title: 'Finger of Men', image: '/images/nfts/nft15.png', BidPrice: '50 ETH' },
];

const Nft = () => {
  const [priceRange, setPriceRange] = useState(50);

  return (
    <div className="bg-white text-gray-800 px-4 sm:px-6 py-8 font-work-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#e5eaff] to-[#d5e9ff] flex flex-col md:flex-row justify-between items-center gap-6 py-16 px-4 sm:px-6 rounded-xl">
        <div className="flex flex-col items-start max-w-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Explore Our <br /> ExtraOrdinary Collection
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold">NFTs</h2>
            <div className="w-16 h-2 bg-purple-500 rounded-full"></div>
            <select className="border border-gray-100 px-4 py-2 rounded">
              <option value="recently-added">Recently Added</option>
              <option value="highest-price">Highest Price</option>
              <option value="most-liked">Most Liked</option>
            </select>
          </div>
        </div>

        <div className="relative flex flex-col items-center text-center">
          <img src="/images/coin.png" alt="coin" className="w-16 sm:w-20 mb-2 animate-spin-slow" />
          <div className="leading-none font-anton">
            <h2 className="bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text text-6xl sm:text-7xl md:text-8xl lg:text-[10rem]">NFT</h2>
            <h3 className="bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] mt-[-1rem]">
              CRY<span>PTO</span>
            </h3>
            <div className="w-3/4 mx-auto h-2 bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] my-4"></div>
            <ul className="flex flex-wrap justify-center gap-2 text-base">
              <li>All items</li>
              <li>Art</li>
              <li>Games</li>
              <li>Photography</li>
              <li>Nature</li>
              <li>Digitals</li>
            </ul>
          </div>
          <img src="/images/coin.png" alt="coin" className="w-16 sm:w-20 mt-2 animate-spin-slow" />
        </div>
      </section>

      {/* Filter Section */}
      <section className="mt-[-2rem] bg-gradient-to-r from-[#e5eaff] to-[#d5e9ff] flex flex-col lg:flex-row justify-between gap-6 py-12 px-4 sm:px-6 rounded-xl">
        <div className="flex flex-wrap justify-between gap-6 w-full">
          {[{ label: "PRICE", options: ["Highest Price", "Lowest Price", "Best Price"] }, { label: "LIKES", options: ["Most Liked", "Least Liked", "Regular"] }, { label: "CREATOR", options: ["Verified only", "Unverified", "All"] }].map(({ label, options }) => (
            <div key={label} className="w-full sm:w-auto">
              <p className="font-medium mb-1">{label}</p>
              <select className="border border-gray-100 px-4 py-2 rounded w-full">
                {options.map((opt, i) => (
                  <option key={i} value={opt.toLowerCase().replace(/\s/g, '-')}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 p-4">
          <label htmlFor="range" className="block mb-2 text-sm font-medium text-gray-700">
            Price Range: {priceRange} ETH
          </label>
          <input
            id="range"
            type="range"
            min="0"
            max="100"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </section>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 my-12">
        {nftData.map((nft, i) => (
          <div key={i} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={nft.image} alt={nft.title} className="w-full h-40 object-cover" />
            <div className="p-2">
              <div className="flex justify-between text-sm">
                <p className="font-semibold text-sm sm:text-base">{nft.title}</p>
                <span className="text-gray-500">Bid Price</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <p className="text-purple-500">TON NFT CONCEPT</p>
                <p className="font-medium">{nft.BidPrice}</p>
              </div>
              <div className="flex justify-between text-gray-500 text-xs">
                <p>Viewed by</p>
                <p>Ratings</p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((num) => (
                    <img key={num} src={`/images/nfts/profile${num}.png`} alt={`Profile ${num}`} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                  ))}
                </div>
                <img src="/images/nfts/staricon.png" alt="rating" className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="text-center my-12">
        <h3 className="text-3xl sm:text-4xl font-medium shadow">💎 Create and sell your NFTs 💎</h3>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center bg-[#FBF4FF] p-6 rounded-lg shadow">
        {[
          { title: 'Collect NFT', image: "/images/wallet icon.png", desc: 'Add your favourite NFT from our marketplace to your collection.' },
          { title: 'Connect Wallet', image: "images/nfts/walletlogo.png", desc: 'Connect your wallet easily and start trading.' },
          { title: 'Trade Currencies', image: "images/nfts/tradelogo.png", desc: 'Exchange your crypto assets securely.' },
        ].map((feature, i) => (
          <div key={i}>
            <img src={feature.image} alt={feature.title} className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-2xl font-medium">{feature.title}</h4>
            <p className="text-[0.875rem] text-gray-600 font-normal">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Live Auction Banner */}
      <div className="text-center text-xl sm:text-2xl font-bold text-purple-600 mb-8">
        «« LIVE AUCTIONS ONGOING »»
      </div>

      {/* Top Collections */}
      <div className='mb-6'>
         <h3 className="text-xl sm:text-2xl font-bold mb-4">Top Collections</h3>
      </div>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
        <div className='flex flex-col items-center gap-4'>
          <div>
            <img src="/images/top icon1.png" alt='space image' className='w-full max-w-xs' />
          </div>
          <div className='flex flex-row items-center justify-center gap-4'>
            <img src='/images/top icon2.png' alt='space image' className='w-24 h-24 object-cover' />
            <img src='/images/top icon3.png' alt='space image' className='w-24 h-24 object-cover' />
            <img src='/images/top icon4.png' alt='space image' className='w-24 h-24 object-cover' />
          </div>
          <div className='flex flex-col items-center justify-center text-center max-w-md'>
          <p className='text-2xl font-bold text-black mb-2'>TON NFT CONCEPTS.</p>
          <div className='flex flex-row items-center justify-center gap-2'>
            <img src='/images/rounded top icon.png' alt='profile picture' className='w-8 h-8 rounded-full' />
            <p className='text-xl font-medium'>By TON Groups</p>
            <button className=''>View Profile</button>
          </div>
        </div>
        </div>      
        {/* Second div */}
        <div className='flex flex-col items-center gap-4'>
          <div>
            <img src="/images/top icon5.png" alt='space image' className='w-full max-w-xs' />
          </div>
          <div className='flex flex-row items-center justify-center gap-4'>
            <img src='/images/top icon6.png' alt='space image' className='w-24 h-24 object-cover' />
            <img src='/images/top icon7.png' alt='space image' className='w-24 h-24 object-cover' />
            <img src='/images/top icon8.png' alt='space image' className='w-24 h-24 object-cover' />
          </div>
          <div className='flex flex-col items-center justify-center text-center max-w-md'>
          <p className='text-2xl font-bold text-black mb-2'>Amelia Supra</p>
          <div className='flex flex-row items-center justify-center gap-2'>
            <img src='/images/rounded top icon.png' alt='profile picture' className='w-8 h-8 rounded-full' />
            <p className='text-xl font-medium'>By Amelia Criste</p>
            <button className=''>View Profile</button>
          </div>
        </div>
        </div>    
        {/* Third div */}
        <div className='flex flex-col items-center gap-4'>
          <div>
            <img src="/images/top icon9.png" alt='space image' className='w-full max-w-xs' />
          </div>
          <div className='flex flex-row items-center justify-center gap-4'>
            <img src='/images/top icon10.png' alt='space image' className='w-24 h-24 object-cover' />
            <img src='/images/top icon11.png' alt='space image' className='w-24 h-24 object-cover' />
            <img src='/images/top icon12.png' alt='space image' className='w-24 h-24 object-cover' />
          </div>
          <div className='flex flex-col items-center justify-center text-center max-w-md'>
          <p className='text-2xl font-bold text-black mb-2'>Prostrica</p>
          <div className='flex flex-row items-center justify-center gap-2'>
            <img src='/images/rounded top icon.png' alt='profile picture' className='w-8 h-8 rounded-full' />
            <p className='text-xl font-medium'>By Vincente Fil</p>
            <button className=''>View Profile</button>
          </div>
        </div>
        </div>    
      </section>
      <Footer />
    </div>
  );
};

export default Nft;
