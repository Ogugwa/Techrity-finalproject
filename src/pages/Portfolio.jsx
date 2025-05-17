import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaArrowTrendUp, FaArrowTrendDown, FaArrowUp, FaArrowDown } from "react-icons/fa6";

const Portfolio = () => {
  const transactions = [
    {
      name: "Ethereum Purchased",
      amount: "0.0154 ETH",
      total: "$10.00",
      status: "Pending",
      date: "February 21, 2021",
      account: "WSA",
      card: "Visa 1234"
    },
    {
      name: "Bitcoin Purchased",
      amount: "0.3 BTC",
      total: "$140.00",
      status: "Done",
      date: "February 14, 2021",
      account: "WSA",
      card: "Visa 1234"
    },
    {
      name: "Bitcoin Purchased",
      amount: "0.025 BTC",
      total: "$80.50",
      status: "Done",
      date: "January 14, 2021",
      account: "WSA",
      card: "Visa 1234"
    },
    {
      name: "Expiry 06/2024",
      account: ""
    }
  ];
  
  const cryptoData = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      icon: "/images/bitcoinimg.png",
      value: "$65,320",      
      change: 2.35,
      updated: "Updated 2 minutes ago",
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
      updated: "Updated 1 minute ago",
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
      updated: "Updated 3 minutes ago",
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
      updated: "Updated 1 minute ago",
      chartData: [
        { time: "Jan", value: 0.09 },
        { time: "Feb", value: 0.085 },
        { time: "Mar", value: 0.08 },
        { time: "Apr", value: 0.078 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4'>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Hello Samuel,</h1>
            <p className="text-gray-500">Your balance</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 flex items-center">
              <img src='/images/uslogo.png' alt='USD Logo' className='w-6 h-6 mr-2' />
              $40,206.20
            </h2>
          </div>
        </div>

        {/* Crypto Prices Section */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-8 overflow-x-auto">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">Crypto Prices %</h2>     
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100 text-xs uppercase tracking-wide text-gray-600">
                <th className="px-4 py-2 text-left">Cryptocoin</th>
                <th className="px-4 py-2 text-left">Updated</th>
                <th className="px-4 py-2 text-left">Change</th>
                <th className="px-4 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{crypto.name}</td>
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{crypto.updated}</td>
                  <td className={`px-4 py-3 font-medium whitespace-nowrap ${
                    crypto.change < 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    <span className="flex items-center">
                      {crypto.change < 0 ? <FaArrowDown className="mr-1" /> : <FaArrowUp className="mr-1" />} 
                      {Math.abs(crypto.change)}%
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {crypto.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>      
        </div>

        {/* Assets Section */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Assets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cryptoData.map((coin, index) => {
              const isUp = coin.change > 0;
              return (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className='flex gap-2 items-center'>
                        <img 
                          src={coin.icon} 
                          alt={coin.name} 
                          className="w-6 h-6 flex-shrink-0" 
                          loading='lazy' 
                        />
                        <h3 className="font-semibold">{coin.name}</h3> 
                      </div>
                      <div className="ml-2 flex-shrink-0">
                        <p className="text-sm text-gray-500">{coin.symbol}</p>
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
          <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="pb-3">Transactions</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Total</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Account</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 font-medium whitespace-nowrap">{tx.name}</td>
                    <td className="py-3 whitespace-nowrap">{tx.amount}</td>
                    <td className="py-3 whitespace-nowrap">{tx.total}</td>
                    <td className="py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        tx.status === "Pending" 
                          ? "bg-yellow-100 text-yellow-800" 
                          : "bg-green-100 text-green-800"
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="py-3 text-gray-500 whitespace-nowrap">{tx.date}</td>
                    <td className="py-3 whitespace-nowrap">
                      <div>
                        <span className="font-medium">{tx.account}</span>
                        {tx.card && <p className="text-xs text-gray-500">{tx.card}</p>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;