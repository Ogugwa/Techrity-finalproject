import React from 'react'

const Hero2 = ({ showHeader = true }) => {
  return (
    <div className='flex flex-col items-center justify-center hero-gradient w-full font-work-sans px-4'>
      {showHeader && <h2 className='font-medium text-black text-3xl sm:text-5xl text-center'>Popular Currencies</h2>}

  <div className='w-full mt-10 overflow-x-auto'>
    <table className='min-w-[600px] w-full text-[1rem] text-left border-separate border-spacing-y-3'>
      <thead className='bg-[#1D2939] text-white'>
        <tr>
          <th className='p-3'>#</th>
          <th className='p-3'>Name</th>
          <th className='p-3'>Price</th>
          <th className='p-3'>Change</th>
          <th className='p-3'>Market Cap</th>
        </tr>
      </thead>
      <tbody className='bg-white text-black'>
        {[
          { name: "Bitcoin", price: "$33,592.99", change: "+4.3%", cap: "$635.148", logo: "bitcoinimg.png" },
          { name: "Ethereum", price: "$23,892.99", change: "+21%", cap: "$235.148", logo: "etherum img.png" },
          { name: "Zestcoin", price: "$13,892.99", change: "-7.4%", cap: "$235.148", logo: "zestcoin img.png" },
          { name: "Zelle", price: "$5,892.99", change: "-5.5%", cap: "$135.148", logo: "zelle img.png" },
          { name: "Ebay", price: "$13,892.99", change: "-7.4%", cap: "$235.148", logo: "ebay img.png" },
        ].map((coin, idx) => (
          <tr key={idx} className='border-b'>
            <td className='p-3'>{idx + 1}</td>
            <td className='flex items-center gap-3 p-3'>
              <img src={`/images/${coin.logo}`} alt={`${coin.name} logo`} className='h-10 w-10' />
              <span>{coin.name}</span>
            </td>
            <td className='p-3'>{coin.price}</td>
            <td className='p-3'>{coin.change}</td>
            <td className='p-3'>{coin.cap}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


  )
}

export default Hero2
