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
        <div className='bg-gradient-to-r from-[#e5eaff] to-[#d5e9ff] flex flex-col md:flex-row justify-center items-center py-10'>
            <div>
                <p className='font-normal text-6xl'>Explore Our <br/>  ExtraOrdinary Collection</p>
            </div>
            <div>
                <p className='bg-gradient-to-r from-[#9F04FF] to-[#222AE2] text-transparent bg-clip-text
                font-normal text-[19.76rem] font-anton'>NFT<br/>
                {/* <span>CRY</span><span>PTO</span> */}
                </p>
                <p>CRY <span>PTO</span></p>
            </div>
        </div>
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
