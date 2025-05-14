import React, { useState } from 'react';

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
  { title: 'Embosse', image: '/images/nfts/nft13.png',BidPrice: '50 ETH' },
  { title: 'Beautiful Woman', image: '/images/nfts/nft14.png',BidPrice: '50 ETH' },
  { title: 'Finger of Men', image: '/images/nfts/nft15.png',BidPrice: '50 ETH' },
];


const Nft = () => {
  const [priceRange, setPriceRange] = useState(50);

  return (
    <div className="bg-gradient-to-b from-white to-purple-100 text-gray-800 px-6 py-8">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#e5eaff] to-[#d5e9ff] flex flex-col md:flex-row justify-between items-center gap-6 py-16 px-6 rounded-xl">
        {/* Left Text */}
        <div className="flex flex-col items-start max-w-md">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Explore Our <br /> ExtraOrdinary Collection
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">NFTs</h2>
            <div className="w-16 h-2 bg-purple-500 rounded-full"></div>
            <select className="border border-gray-100 px-4 py-2 rounded">
              <option value="recently-added">Recently Added</option>
              <option value="highest-price">Highest Price</option>
              <option value="most-liked">Most Liked</option>
            </select>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex flex-col items-center">
          <img src="/images/coin.png" alt="coin" className="w-20 h-20 mb-2 animate-spin-slow" />
          <div className="text-center leading-none font-anton text-[7rem]">
            <h2 className="bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text sm:text-[9rem] md:text-[12rem] lg:text-[16rem]">
              NFT
            </h2>
            <h3 className="bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text sm:text-[9rem] md:text-[12rem] lg:text-[16rem] mt-[-2rem]">
              CRY<span>PTO</span>
            </h3>
            <div className="w-[60%] h-4 bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF]"></div>
            <ul className="flex flex-row gap-2 mt-4 text-xl font-normal">
              <li>All items</li>
              <li>Art</li>
              <li>Games</li>
              <li>Photography</li>
              <li>Nature</li>
              <li>Digitals</li>
            </ul>
          </div>
          <img src="/images/coin.png" alt="coin" className="w-20 h-20 mt-2 animate-spin-slow" />
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gradient-to-r from-[#e5eaff] to-[#d5e9ff] flex flex-col md:flex-row justify-between items-center gap-6 py-12 px-6 rounded-xl mt-10">
        <div className="flex flex-wrap justify-between gap-6 w-full md:w-auto">
          {[
            { label: "PRICE", options: ["Highest Price", "Lowest Price", "Best Price"] },
            { label: "LIKES", options: ["Most Liked", "Least Liked", "Regular"] },
            { label: "CREATOR", options: ["Verified only", "Unverified", "All"] },
          ].map(({ label, options }) => (
            <div key={label}>
              <p className="font-medium">{label}</p>
              <select className="border border-gray-100 px-4 py-2 rounded">
                {options.map((opt, i) => (
                  <option key={i} value={opt.toLowerCase().replace(/\s/g, '-')}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="w-full max-w-md mx-auto p-4">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-12">
        {nftData.map((nft, i) => (
        <div key={i} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          {/* NFT Image */}
          <img src={nft.image} alt={nft.title} className="w-full h-40 object-cover" />
      
             {/* Card Content - 3 Rows */}
            <div className="p-2">
            {/* Row 1: Title (left) | Bid Price text (right) */}
              <div className="flex justify-between items-center">
                <p className="font-semibold">{nft.title}</p>
                <p className="text-sm text-gray-500">Bid Price</p>
              </div>
        
           {/* Row 2: TON NFT (left) | ETH Price (right) */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-purple-500">TON NFT CONCEPT</p>
              <p className="font-medium">{nft.BidPrice}</p>
            </div>
        
            {/* Row 3: Viewed by (left) | Ratings text (right) */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Viewed by</p>
              <p className="text-sm">Ratings</p>
            </div>
        
        {/* Row 4: Profile images (left) | Star icon (right) */}
           <div className="flex justify-between items-center">
             <div className="flex ">
              <img src='/images/nfts/profile1.png' alt='Profile 1' className="w-8 h-8 rounded-full" />
              <img src='/images/nfts/profile2.png' alt='Profile 2' className="w-8 h-8 rounded-full" />
              <img src='/images/nfts/profile3.png' alt='Profile 3' className="w-8 h-8 rounded-full" />
              <img src='/images/nfts/profile4.png' alt='Profile 4' className="w-8 h-8 rounded-full" />
             </div>
             <img src='/images/nfts/staricon.png' alt='rating'/>
            </div>
         </div>
        </div>
      ))}
    </div>

      {/* Info Section */}
      <div className="text-center my-12">
        <h3 className="text-xl font-bold">💎 Create and sell your NFTs 💎</h3>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
        {[
          { title: 'Collect NFT', desc: 'Add your favourite NFT from our marketplace to your collection.' },
          { title: 'Connect Wallet', desc: 'Connect your wallet easily and start trading.' },
          { title: 'Trade Currencies', desc: 'Exchange your crypto assets securely.' },
        ].map((feature, i) => (
          <div key={i}>
            <h4 className="text-lg font-semibold">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Live Auction Banner */}
      <div className="text-center text-2xl font-bold text-purple-600 mb-8">
        &laquo;&laquo; LIVE AUCTIONS ONGOING &raquo;&raquo;
      </div>

      {/* Top Collections */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Top Collections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border rounded-lg p-4 text-center">
              <div className="h-24 bg-red-200 mb-2"></div>
              <p className="font-semibold">TON NFT CONCEPTS</p>
              <p className="text-sm text-gray-600">By TON Groups</p>
              <button className="mt-2 px-4 py-1 border rounded text-purple-600 hover:bg-purple-100">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="text-center mb-12">
        <h4 className="text-xl font-semibold">Never miss a drop!</h4>
        <p className="text-sm text-gray-600 mb-4">Join our newsletter to stay up-to-date with the latest NFTs.</p>
        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-l w-64"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-r hover:bg-purple-700">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Nft;
