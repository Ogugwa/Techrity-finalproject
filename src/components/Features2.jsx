import React from 'react'

const Features2 = () => {
  return (
    <div className='flex flex-col items-center justify-center font-work-sans w-full mt-10 px-4 md:px-16'>
      <div className='mb-6'>
        <h3 className='font-medium text-4xl text-black text-center'>Top Collections</h3>
      </div>

      <section className='flex flex-col md:flex-row items-center justify-between w-full gap-8'>
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
    </div>
  )
}

export default Features2
