import React from 'react';

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

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Hello Samuel,</h1>
          <p className="text-gray-500">Your balance</p>
          <h2 className="text-4xl font-bold mt-2">$40,206.20</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-6">
            {/* Assets Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Assets</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Asset Cards */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Biteson</p>
                      <p className="text-2xl font-bold mt-1">$38,769.45</p>
                    </div>
                    <span className="text-green-500">↑ 1.8%</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Ethereum</p>
                      <p className="text-2xl font-bold mt-1">$2,769.85</p>
                    </div>
                    <span className="text-green-500">↑ 1.8%</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Litecoin</p>
                      <p className="text-2xl font-bold mt-1">$105,769.45</p>
                    </div>
                    <span className="text-green-500">↑ 10%</span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Charge</p>
                      <p className="text-2xl font-bold mt-1">$12,729</p>
                    </div>
                    <span className="text-red-500">↓ 2.64%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b text-left text-gray-500">
                      <th className="pb-2">Transactions</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Total</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2">Date</th>
                      <th className="pb-2">Account</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-4 font-medium">{tx.name}</td>
                        <td className="py-4">{tx.amount}</td>
                        <td className="py-4">{tx.total}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            tx.status === "Pending" 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-green-100 text-green-800"
                          }`}>
                            {tx.status}
                          </span>
                        </td>
                        <td className="py-4 text-gray-500">{tx.date}</td>
                        <td className="py-4">
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
      </div>
    </div>
  );
};

export default Portfolio;