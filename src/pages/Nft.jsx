import React, { useState } from 'react';


  

const Nft = () => {
    const [value, setValue] = useState(50)
  return (
    <div className="bg-gradient-to-b from-white to-purple-100 text-gray-800 px-6 py-8">
     {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#e5eaff] to-[#d5e9ff] flex flex-col md:flex-row justify-between items-center gap-6 py-16 px-6 rounded-xl">
            {/* Text Block */}
            <div className="flex flex-col items-start max-w-md">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                 Explore Our <br /> ExtraOrdinary Collection
                </h1>
                <div className="flex flex-col gap-2">
                    <h2 className='text-2xl font-semibold'>NFTs</h2>
                    <div className='w-16 h-2 bg-purple-500 rounded-full'></div>
                    <select className="border border-gray-100 px-4 py-2 rounded">
                        <option value="recently-added">Recently Added</option>
                        <option value="highest-price">Highest Price</option>
                        <option value="most-liked">Most Liked</option>
                    </select>
                </div>
            </div>
             {/* NFT + CRYPTO Visual Block */}
            <div className="relative flex flex-col items-center">
                {/* Top Coin */}
                <img
                src="/images/coin.png"
                alt="golden coin"
                className="w-20 h-20 mb-2 animate-spin-slow"
                />
             {/* NFT + CRYPTO Texts */}
                <div className="text-center leading-none font-anton text-[7rem]  ">
                    <h2 className="bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text sm:text-[9rem] md:text-[12rem] lg:text-[16rem] mb-0">
                        NFT
                    </h2>
                    <h3 className="bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text sm:text-[9rem] md:text-[12rem] lg:text-[16rem] mt-[-2rem]">
                        CRY<span className='bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text'>PTO</span>
                    </h3>
                    <div className='w-[60%] h-4 bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] '></div>
                    <div className='flex flex-row gap-2'>
                        <ul className='flex flex-row gap-2 mt-4'>
                            <li className='text-xl font-normal'>All items</li>
                            <li className='text-xl font-normal'>Art</li>
                            <li className='text-xl font-normal'>Games</li>
                            <li className='text-xl font-normal'>Photography</li>
                            <li className='text-xl font-normal'>Nature</li>
                            <li className='text-xl font-normal'>Digitals</li>
                        </ul>
                  </div>                               
            </div>
            {/* Bottom Coin */}
            <img
            src="/images/coin.png"
            alt="golden coin"
            className="w-20 h-20 mt-2 animate-spin-slow"
            />
            </div>
        </section>
        {/* Second Hero Section */}
        <section className="bg-gradient-to-r from-[#e5eaff] to-[#d5e9ff] flex flex-col md:flex-row justify-between items-center gap-2 py-16 px-6 rounded-xl">
            <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                <div>
                    <p>PRICE</p>
                    <select className="border border-gray-100 px-4 py-2 rounded">                    
                        <option value="highest-price">Highest Price</option>
                        <option value="most-liked">Lowest Price</option>
                        <option value="best-price">Best Price</option>
                    </select>
                </div>
                <div>
                    <p>LIKES</p>
                    <select className="border border-gray-100 px-4 py-2 rounded">
                        <option value="most-liked">Most Liked</option>
                        <option value="least-liked">Least Liked</option>
                        <option value="regular">Regular</option>
                    </select>
                </div>
                <div>
                    <p>CREATOR</p>
                    <select className="border border-gray-100 px-4 py-2 rounded">
                        <option value="verified">Verified only</option>
                        <option value="unverified">Unverified</option>
                        <option value="all">All</option>
                    </select>
                </div>         
            </div>
            <div className="w-full max-w-md mx-auto p-4">
                <label htmlFor="range" className="block mb-2 text-sm font-medium text-gray-700">
                    Price Range: {value} ETH
                </label>
                <input
                    id="range"
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-lg appearance-none cursor-pointer"
                />
            </div>
        </section>     
        {/* NFT Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <img
                src={`/images/nft${i + 1}.jpg`} // You can change the path based on where your images are
                alt={`NFT ${i + 1}`}
                className="w-full h-40 object-cover"
                />
                <div className="p-2">
                <p className="font-semibold">NFT Title {i + 1}</p>
                <p className="text-sm text-purple-500">50 ETH</p>
                </div>
            </div>
        ))}
        </div>

      {/* Call to Action */}
      <div className="text-center my-12">
        <h3 className="text-xl font-bold">💎 Create and sell your NFTs 💎</h3>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
        <div>
          <h4 className="text-lg font-semibold">Collect NFT</h4>
          <p className="text-sm text-gray-600">Add your favourite NFT from our marketplace to your collection.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Connect Wallet</h4>
          <p className="text-sm text-gray-600">Connect your wallet easily and start trading.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Trade Currencies</h4>
          <p className="text-sm text-gray-600">Exchange your crypto assets securely.</p>
        </div>
      </div>

      {/* Live Auctions Banner */}
      <div className="text-center text-2xl font-bold text-purple-600 mb-8">
        &laquo;&laquo; LIVE AUCTIONS ONGOING &raquo;&raquo;
      </div>

      {/* Top Collections */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Top Collections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="h-24 bg-red-200 mb-2"></div>
              <p className="font-semibold">TON NFT CONCEPTS</p>
              <p className="text-sm text-gray-600">By TON Groups</p>
              <button className="mt-2 px-4 py-1 border rounded text-purple-600 hover:bg-purple-100">View Profile</button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="text-center mb-12">
        <h4 className="text-xl font-semibold">Never miss a drop!</h4>
        <p className="text-sm mb-4">Stay updated and notified of the latest drops.</p>
        <div className="flex justify-center gap-2">
          <input type="email" placeholder="Enter your email address" className="px-4 py-2 rounded border w-64" />
          <button className="bg-purple-500 text-white px-4 py-2 rounded">Sign In</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 border-t pt-4">
        <p>&copy; 2022 Web 3.0 Marketplace designed by Okolo Faith.</p>
      </footer>
    </div>
  );
};

export default Nft;
