import React from 'react';

const Footer = () => {
  return (
    <div className='footer-gradient text-black w-full px-4 md:px-16 py-10'>
      <div className='flex flex-col md:flex-row flex-wrap justify-between gap-10 text-center md:text-left'>

        {/* Logo + Language + Socials */}
        <div className='flex flex-col items-center md:items-start gap-4 md:w-1/5'>
          <div className='flex items-center gap-2'>
            <img src='images/logo.png' alt='Web3 logo image' className='w-16 h-14' />
            <p className='font-bold gradient-text leading-tight'>
              Web 3.0 <br />
              MarketPlace
            </p>
          </div>

          <select id='select' className='border-none p-2 rounded-md bg-white shadow'>
            <option value="">English</option>
            <option value="/nfts">Spanish</option>
            <option value="/tokens">French</option>
            <option value="/collections">Greek</option>
          </select>

          <p className='font-semibold mt-2'>Get Social with Us!</p>
          <div className='flex gap-4'>
            <img src='images/instagram.png' alt='Instagram logo' className='w-8 h-8' />
            <img src='images/twitter.png' alt='Twitter logo' className='w-8 h-8' />
            <img src='images/facebook.png' alt='Facebook logo' className='w-8 h-8' />
          </div>
        </div>

        {/* Link Columns */}
        <div className='flex flex-col gap-2 md:w-1/6'>
          <p className='font-bold'>Company</p>
          <ul className='flex flex-col gap-1'>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Affiliates</a></li>
            <li><a href='#'>Company</a></li>
          </ul>
        </div>

        <div className='flex flex-col gap-2 md:w-1/6'>
          <p className='font-bold'>Products</p>
          <ul className='flex flex-col gap-1'>
            <li><a href='#'>Exchange</a></li>
            <li><a href='#'>NFT</a></li>
            <li><a href='#'>Crypto Exchange</a></li>
          </ul>
        </div>

        <div className='flex flex-col gap-2 md:w-1/6'>
          <p className='font-bold'>Individuals</p>
          <ul className='flex flex-col gap-1'>
            <li><a href='#'>Buy & Sell</a></li>
            <li><a href='#'>NFT</a></li>
            <li><a href='#'>Earn From Crypto</a></li>
          </ul>
        </div>

        <div className='flex flex-col gap-2 md:w-1/6'>
          <p className='font-bold'>Privacy</p>
          <ul className='flex flex-col gap-1'>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Terms & Conditions</a></li>
          </ul>
        </div>

        <div className='flex flex-col gap-2 md:w-1/6'>
          <p className='font-bold'>Support</p>
          <ul className='flex flex-col gap-1'>
            <li><a href='#'>Help Center</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>ID Verification</a></li>
            <li><a href='#'>Account Information</a></li>
            <li><a href='#'>Payment Methods</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
