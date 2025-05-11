import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Marketplace = () => {
  const [exchangeRates, setExchangeRates] = useState(null);

  // Fetch exchange rates from CoinGecko
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd'
        );
        const data = await res.json();
        setExchangeRates(data);
      } catch (err) {
        console.error('Failed to fetch exchange rates:', err);
      }
    };
    fetchRates();
  }, []);

  // Dummy chart data
  const chartData = [
    { time: 'Jan', price: 1500 },
    { time: 'Feb', price: 1700 },
    { time: 'Mar', price: 1650 },
    { time: 'Apr', price: 1900 },
    { time: 'May', price: 1750 },
  ];

  // Dummy marketplace items
  const items = [
    {
      id: 1,
      name: 'Cool NFT #1',
      price: '0.5 ETH',
      img: '/images/nft1.png',
    },
    {
      id: 2,
      name: 'Rare Token #1',
      price: '1.2 ETH',
      img: '/images/nft2.png',
    },
    {
      id: 3,
      name: 'Unique Art #3',
      price: '0.9 ETH',
      img: '/images/nft3.png',
    },
  ];

  return (
    <main className="px-4 py-10 min-h-screen text-black font-work-sans">
     {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#e5eaff] to-[#d5e9ff] flex flex-col md:flex-row justify-between items-center gap-6 py-16 px-6 rounded-xl">
            {/* Text Block */}
            <div className="flex flex-col items-start max-w-md">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                 Explore Our <br /> ExtraOrdinary Collection
                </h1>
                <img
                src="/images/coin.png"
                alt="golden coin"
                className="w-16 h-16 animate-bounce mt-4"
                />
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
        <div className="text-center leading-none font-anton text-[7rem] bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text ">
            <h2 className=" sm:text-[9rem] md:text-[12rem] lg:text-[16rem] mb-0">
            NFT
        </h2>
        <h3 className="text-[#c5ccf4]  sm:text-[9rem] md:text-[12rem] lg:text-[16rem] mt-[-2rem]">
            CRY<span className='bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text'>PTO</span>
        </h3>
        </div>

        {/* Bottom Coin */}
        <img
        src="/images/coin.png"
        alt="golden coin"
        className="w-20 h-20 mt-2 animate-spin-slow"
        />
    </div>
    </section>


      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 gradient-text">Web3 Marketplace</h1>
        <p className="text-gray-400">Track crypto prices and explore featured NFTs & tokens</p>
      </div>

      {/* Exchange Rates */}
      <div className="bg-gray-900 p-5 rounded mb-8 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-3">Live Exchange Rates</h2>
        {exchangeRates ? (
          <div className="flex flex-col gap-2 text-gray-200">
            <p>Ethereum (ETH): ${exchangeRates.ethereum.usd}</p>
            <p>Bitcoin (BTC): ${exchangeRates.bitcoin.usd}</p>
          </div>
        ) : (
          <p className="text-gray-400">Fetching rates...</p>
        )}
      </div>

      {/* Chart */}
      <div className="bg-gray-900 p-5 rounded mb-10 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">ETH Price Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="time" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#00d09c" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Marketplace Items */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-300">{item.price}</p>
            <button className="mt-3 px-4 py-2 w-full bg-blue-700 hover:bg-blue-800 text-white rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Marketplace;
