import React,{useState} from 'react'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {Link ,useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    };
  const navigate = useNavigate();
  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) navigate(path);
  };
  return (
    <div className='w-full flex flex-row justify-between items-center font-work-sans dark:*bg-grey-900 navbar-gradient'>
      <div className='flex justify-start items-center ml-4 md:ml-10 gap-2'>
        {/*  This is the logo  */}
        <img src='images/logo.png' alt='Web3 logo image' className='w-[4rem] h-[3.2rem]'/>
        <p className='font-bold gradient-text '> 
          Web 3.0 <br/>
          MarketPlace
        </p>       
      </div>
      {/* This the navigation bar and it only displays on screens from tablets upwards */}
      <div className='lg:mr-10 '>
        <ul className='hidden md:flex flex-row justify-center items-center md:gap-3 lg:gap-10 font-medium font-size-[1.2rem] dark:*text-white'>
            <li className=''><Link to='/'>Home</Link></li>
            <select id='select' className='border-none p-2'onChange={handleSelectChange}> 
              <option value="">Marketplace</option>
              <option value="/nfts">NFTs</option>
              <option value="/crypto">Crypto</option>
              <option value="/tokens">Tokens</option>
              <option value="/collections">Collections</option>
            </select>
            <li><Link to='/portfolio'>My Portfolio</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li>
              <Link to="/signin">
                <button className="w-[7.8rem] h-[3.25rem] border rounded-3xl gradient-bg text-white hover:bg-blue-900 transition-all">
                  Sign in
                </button>
              </Link>
        </li>
          </ul>
      </div>
     
     
      {/* This is the mobile view hamburger menu */}
      <div className='md:hidden block z-20'onClick={handleNav}>
        {nav ?
         <AiOutlineClose size={28} className='gradient-bg'/>:
         <AiOutlineMenu size={28} className='gradient-bg'/>
         }
      </div> 
         {/* Mobile Menu */}
         <ul className={`${nav ? 'fixed flex flex-col z-10 left-[20%] top-24 w-full gap-3 ease-in-out duration-500' : 'fixed left-[-100%] top-24 ease-in-out duration-500'}`}>
            <li className=''><Link to="/" onClick={handleNav}>Home</Link></li>
            <li>
              <select className='border-none p-2' onChange={(e) => { handleSelectChange(e); handleNav(); }}> 
                <option value="" >Marketplace</option>
                <option value="/nfts">NFTs</option>
                <option value="/tokens">Tokens</option>
                <option value="/collections">Collections</option>
              </select>
            </li>
            <li><Link to='/portfolio' onClick={handleNav}>My Portfolio</Link></li>
            <li><Link to="/register" onClick={handleNav}>Register</Link></li>
            <li>
              <Link to='/signin'>
                <button className='w-[7.8rem] h-[3.25rem] py-1 border rounded-3xl gradient-bg text-white hover:bg-blue-900 active:bg-blue-900  transition-all'>
                  Sign in
                </button>
              </Link>
              
            </li>           
        </ul>
               
    </div>
  )
}

export default Navbar
