import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { GiBouncingSpring } from "react-icons/gi";
import Hero2 from '../components/Hero2';
import { FaHandHoldingUsd } from "react-icons/fa";
import Footer from '../components/Footer';


const Crypto = () => {
  
  const chartData = [
    { time: 'Jan', price: 1500 },
    { time: 'Feb', price: 1700 },
    { time: 'Mar', price: 1650 },
    { time: 'Apr', price: 1900 },
    { time: 'May', price: 1750 },
  ];

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

  const cryptoData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      icon: "/images/bitcoinimg.png",
      value: "$65,320",
      change: 2.35,
      chartData: [
        { time: "Jan", value: 50000 },
        { time: "Feb", value: 53000 },
        { time: "Mar", value: 56000 },
        { time: "Apr", value: 65320 },
      ],
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      icon: "/images/etherum img.png",
      value: "$3,420",
      change: -1.28,
      chartData: [
        { time: "Jan", value: 3500 },
        { time: "Feb", value: 3700 },
        { time: "Mar", value: 3600 },
        { time: "Apr", value: 3420 },
      ],
    },
    {
      name: "Zestcoin",
      symbol: "ZST",
      icon: "/images/zestcoin img.png",
      value: "$130",
      change: 3.45,
      chartData: [
        { time: "Jan", value: 100 },
        { time: "Feb", value: 110 },
        { time: "Mar", value: 120 },
        { time: "Apr", value: 130 },
      ],
    },
    {
      name: "Zelle",
      symbol: "ZEL",
      icon: "/images/zelle img.png",
      value: "$0.078",
      change: -0.87,
      chartData: [
        { time: "Jan", value: 0.09 },
        { time: "Feb", value: 0.085 },
        { time: "Mar", value: 0.08 },
        { time: "Apr", value: 0.078 },
      ],
    },
  ];

  const EXCHANGE_RATES = {
  BTC: 65000,
  ETH: 3000,
  ZEST: 1.25,
  ZelleCoin: 0.75,
};

const COIN_ICONS = {
  BTC: "/images/bitcoinimg.png",
  ETH: "/images/etherum img.png",
  ZEST: "/images/zestcoin img.png",
  ZelleCoin: "/images/zelle img.png",
};
 const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [cryptoAmount, setCryptoAmount] = useState("");
  const [usdAmount, setUsdAmount] = useState("");

  const handleExchange = () => {
    const amount = parseFloat(cryptoAmount);
    if (!amount || amount <= 0) {
      setUsdAmount("0.00");
      return;
    }
    const rate = EXCHANGE_RATES[selectedCoin];
    const result = amount * rate;
    setUsdAmount(result.toFixed(2));
  };

  return (
    <main className="px-4 py-10 min-h-screen text-black font-work-sans bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#e5eaff] to-[#d5e9ff] flex flex-col md:flex-row justify-between items-center gap-6 py-16 px-6 rounded-xl">
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
        
        <div className="relative flex flex-col items-center text-center">
          <img
            src="/images/coin.png"
            alt="golden coin"
            className="w-20 h-20 mb-2 animate-spin-slow"
          />
          <div className="leading-none font-anton text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text">
            <h2 className="sm:text-[9rem] md:text-[12rem] lg:text-[16rem] mb-5 md:mb-0">
              NFT
            </h2>
            <h3 className="text-[#c5ccf4] sm:text-[9rem] md:text-[9rem] md:ml-[-2.5rem] lg:text-[16rem] mt-[-2rem]">
              CRY<span className='bg-gradient-to-r from-[#c5ccf4] to-[#9F04FF] text-transparent bg-clip-text'>PTO</span>
            </h3>
          </div>
          <img
            src="/images/coin.png"
            alt="golden coin"
            className="w-20 h-20 mt-2 animate-spin-slow"
          />
        </div>
      </section>
      
      {/* Info Section */}
      <div className="mt-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-medium">💎 Trade and Sell Your Coins 💎</h3>
      </div>

      {/* Market Overview */}
      <div className="mt-12">
        <h2 className="sm:text-2xl md:text-3xl font-semibold mb-4 flex items-center p-4">
          Market Overview <FaArrowTrendDown className="text-fuchsia-500" />
        </h2>
      </div>
      
      {/* Chart */}
      <div className="bg-white p-5 rounded-lg shadow overflow-x-auto">
        <div className="min-w-[600px]">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="time" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#00d09c" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <h2 className=" text-xl md:text-2xl font-semibold mt-4">USD</h2>
        </div>
      </div>

      {/* Top Trade Section */}
      <div className="mt-12">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 p-4 flex items-center ">
          Top Trades <GiBouncingSpring className='inline-block text-fuchsia-500' />
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cryptoData.map((coin, index) => {
          const isUp = coin.change > 0;
          return (
            <div key={index} className="p-4  bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ">
              <div className="space-y-4">
                <div className="flex items-center justify-between ">
                  <div className='flex gap-2'>
                    <img src={coin.icon} alt={coin.name} className="w-6 h-6 flex-shrink-0" loading='lazy' />
                    <h3 className="font-semibold ">{coin.name}</h3> 
                  </div>
                  <div className="ml-2 flex-shrink-0">
                  <p className="text-sm text-muted-foreground">{coin.symbol}</p>
                </div>                  
                </div>                   
               
                </div>                 
                <p className="text-2xl font-bold">{coin.value}</p>
                {/* Chart */}
                <div className="h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={coin.chartData}>
                      <XAxis dataKey="time" hide />
                      <YAxis hide domain={['auto', 'auto']} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={isUp ? "#3b82f6" : "#ef4444"}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                {/* Change Indicator */}
                <div className="flex items-center gap-1 text-sm">
                  {isUp ? (
                    <FaArrowTrendUp className="w-4 h-4 text-blue-500" />
                  ) : (
                    <FaArrowTrendDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={isUp ? "text-blue-500" : "text-red-500"}>
                    {coin.change > 0 ? `+${coin.change}%` : `${coin.change}%`}
                  </span>
                </div>
              </div>
            // </div>
          );
        })}
      </div>
      <div className='bg-white'>
        <Hero2 showHeader={false} />
      </div>

      {/* Exchange Rates */}
      <section className='bg-gradient-to-r from-[#ffffff] to-[#edd0ff]'>
        <div className="mt-12">
        <h2 className="text-2xl md:text-4xl font-medium mb-4">
          Exchange <FaHandHoldingUsd  className='inline-block text-fuchsia-500' />
          <p className='font-normal text-xl'>Change coins into currencies made easy, try it now!</p>
        </h2>
      </div>
      {/* Exchange Rates Display */}
       <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl border border-purple-200">
      {/* Currency display row */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-pink-500 font-semibold">1 {selectedCoin}</span>
          <img
            src={COIN_ICONS[selectedCoin]}
            alt={selectedCoin}
            className="w-5 h-5"
          />
        </div>
        <div className="text-xl">↔️</div>
        <div className="flex items-center space-x-2">
          <span className="text-pink-500 font-semibold">USD</span>
          <span className="text-green-700 text-lg font-bold">$</span>
        </div>
      </div>

      {/* Input fields */}
      <div className="flex justify-between mb-4 space-x-2">
        <input
          type="number"
          placeholder="10.00"
          value={cryptoAmount}
          onChange={(e) => setCryptoAmount(e.target.value)}
          className="w-1/2 p-3 rounded-md text-center bg-purple-50 focus:outline-none"
        />
        <input
          type="text"
          placeholder="0.00"
          value={usdAmount}
          readOnly
          className="w-1/2 p-3 rounded-md text-center bg-purple-50 focus:outline-none"
        />
      </div>

      {/* Exchange button */}
      <button
        onClick={handleExchange}
        className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-90 transition"
      >
        EXCHANGE
      </button>

      {/* Coin switcher */}
      <div className="flex justify-center mt-4 space-x-2">
        {Object.keys(EXCHANGE_RATES).map((coin) => (
          <button
            key={coin}
            onClick={() => {
              setSelectedCoin(coin);
              setCryptoAmount("");
              setUsdAmount("");
            }}
            className={`text-sm px-3 py-1 rounded-full border ${
              selectedCoin === coin
                ? "bg-purple-200 border-purple-400"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            {coin}
          </button>
        ))}
      </div> {/* This closing div was missing */}
    </div>
      </section>      
      <Footer className="mt-6"/>
        
      
    </main>
  );
};

export default Crypto;