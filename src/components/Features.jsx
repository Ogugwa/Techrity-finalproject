import React from 'react';

const steps = [
  {
    title: "Create an account",
    image: "/images/account logo.png",
    description: `Visit our website and click on the "Register" button. Fill in the required information,
    including your name, email address, and password. We take your privacy seriously, so rest assured your information is secure.`,
  },
  {
    title: "Verify your email",
    image: "/images/mail logo.png",
    description: `Check your inbox for a verification email from us. Click on the link to activate your account. 
    If you don't see the email, check your spam folder.`,
  },
  {
    title: "Create your profile",
    image: "/images/profile logo.png",
    description: `After verifying your email, personalize your profile with a picture, bio, and settings. This helps others know you in our community.`,
  },
  {
    title: "Secure your account",
    image: "/images/padlock icon.png",
    description: `Enable two-factor authentication (2FA) to protect your account and assets from unauthorized access.`,
  },
  {
    title: "Connect your wallet",
    image: "/images/wallet icon.png",
    description: `To start buying and selling, connect a compatible crypto wallet by following our secure linking process.`,
  },
  {
    title: "Explore, discover & start trading",
    image: "/images/explore icon.png",
    description: `You're ready to go! Browse products, add to cart, or list your own. Enjoy the freedom of peer-to-peer Web3 trading.`,
  },
];

const Features = () => {
  return (
    <div className='flex flex-col items-center justify-center font-work-sans w-full mt-10 px-4 md:px-20'>
      <h2 className='font-medium text-3xl sm:text-5xl text-black text-center mb-16'>Get Started in 5 Steps</h2>

      <section className='w-full space-y-16'>
        {steps.map((step, idx) => (
          <div
            key={idx}
            className='w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-16 max-w-6xl mx-auto'
          >
            {/* Image and Title */}
            <div className='flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3'>
              <img src={step.image} alt={step.title} className='h-20 w-20 mb-3 object-contain' />
              <p className='text-2xl font-semibold text-black'>{step.title}</p>
            </div>

            {/* Description */}
            <div className='w-full md:w-2/3'>
              <p className='text-lg text-black leading-relaxed text-center md:text-left'>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Features;
