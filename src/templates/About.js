import React from 'react';
import AboutImage from '../templates/assets/Images/renewable-energy-1200-x-627-wallpaper-bhbb2wzq5vqyxmey.jpg';
import ManufacturingExp from '../templates/assets/Images/mission.webp';
import ApplicationAreas from '../templates/assets/Images/whyus.png';

const AboutPage = () => {
  return (
    <>
    <div className="mt-20 p-8 font-fam-bold w-[100%]">
      
      <img src={AboutImage} alt="" className='w-full h-40 md:h-60 object-cover text-justify'/>

      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-[#20AE24] text-center mt-8">GreenChain</h1>
      <div className='w-[95%] mx-auto'>
        <p className="mb-8 text-justify text-sm md:text-xl">
        Welcome to GreenChain, the premier marketplace for renewable energies powered by Ethereum blockchain technology. At GreenChain, we're dedicated to revolutionizing the energy industry by connecting buyers and sellers of renewable energy in a transparent, efficient, and secure manner.
        </p>

        <div className='my-10 md:my-14 w-[90%] h-[1px] bg-[#20AE24] mx-auto'></div>

        <section className='md:flex md:gap-10 my-4 mt-20'>
          <img src={ManufacturingExp} alt="" className='mb-10 md:mb-0 md:h-[300px] md:w-[580px]'/>
          <div className='my-auto'>
            <h2 className='text-xl md:text-2xl font-bold mb-4 text-[#20AE24] text-center'>Our Mission</h2>
            <p className='text-justify'>Our mission at GreenChain is to accelerate the transition to a sustainable energy future by empowering individuals, businesses, and communities to harness the power of renewable energies. We believe that renewable energy is not just the future, but the present, and we're committed to facilitating the widespread adoption of clean, renewable energy sources.</p>
          </div>
        </section>

        <div className='my-10 md:my-14 w-[90%] h-[1px] bg-[#20AE24] mx-auto'></div>

        <section className='md:flex md:gap-20 my-4'>
          <img src={ApplicationAreas} alt="" className='mx-auto h-80 object-cover md:h-[500px] md:order-2 mb-8'/>
          <div className='my-auto md:order-1'>
            <h2 className='text-xl md:text-2xl font-bold mb-4 text-[#20AE24] text-center'>Why Choose us</h2>
            <ul className='text-justify'>
                <li className='mb-4 font-bold'> <span className='font-bold text-[#20AE24]'>Transparency:</span> We prioritize transparency in every aspect of our platform, from pricing and transactions to seller credibility and renewable energy certifications.</li>
                <li className='mb-4 font-bold'> <span className='font-bold text-[#20AE24]'>Efficiency:</span> Our streamlined marketplace makes it easy for buyers and sellers to connect, negotiate, and complete transactions quickly and efficiently.</li>
                <li className='mb-4 font-bold'> <span className='font-bold text-[#20AE24]'>Security:</span> Leveraging the power of Ethereum blockchain technology, we ensure that all transactions are secure, tamper-proof, and immutable.</li>
                <li className='mb-4 font-bold'> <span className='font-bold text-[#20AE24]'>Sustainability: </span>We're passionate about sustainability and are dedicated to promoting renewable energy adoption worldwide. By choosing GreenChain, you're contributing to a cleaner, greener planet for future generations.</li>
            </ul>
          </div>
        </section>        
      </div>      
    </div>
    </>
  );
};

export default AboutPage;