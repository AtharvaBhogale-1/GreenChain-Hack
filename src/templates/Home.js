import React from 'react';
import BG from '../Assets/Bg-img.png';
import By from '../Assets/buyer.png';
import Sr from '../Assets/seller.png';
import { Link } from 'react-router-dom';
import hydro from '../Assets/images/1.png'
import biomass from '../Assets/images/2.png'
import wind from '../Assets/images/3.png'
import solar from '../Assets/images/4.png'
import thermal from '../Assets/images/5.png'

function Home() {
  return (
    <div>
      <div className="font-fam-bold text-left relative overflow-hidden">
        <img src={BG} alt="" className='w-full h-full md:h-full object-cover md:mt-[-120px] brightness-50'/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-6xl font-bold mb-8 text-[#20AE24] text-center justify-center">
          <h1 className='my-5 md:my-20'>
            GreenChain
          </h1>
          <h2 className='text-white mt-2 md:mt-10 text-center text-[10px] md:text-[30px] '>
            Renewable transaction infrastructure to accelerate the clean energy transition
          </h2>
          <p className='mx-auto mt-2 md:mt-[200px] text-[10px] md:text-[30px] text-white w-[880px]'>Greenchain helps renewable energy buyers and sellers get better deals done, faster</p>
        </div>
      </div>
      <div className='flex gap-[130px] justify-center m-10 font-fam-bold '>
        <div className='justify-center text-center items-center'>
          <img src={biomass} alt="" className='h-[140px]'/>
          <h1 className='text-2xl p-5'>Biomass<br/>Energy</h1>
        </div>
        <div className='justify-center text-center items-center'>
          <img src={thermal} alt="" className='h-[140px]'/>
          <h1 className='text-2xl p-5'>Thermal<br/>Energy</h1>
        </div>
        <div className='justify-center text-center items-center'>
          <img src={wind} alt="" className='h-[140px]'/>
          <h1 className='text-2xl p-5'>Wind<br/>Energy</h1>
        </div>
        <div className='justify-center text-center items-center'>
          <img src={solar} alt="" className='h-[140px]'/>
          <h1 className='text-2xl p-5'>Solar<br/>Energy</h1>
        </div>
        <div className='justify-center text-center items-center'>
          <img src={hydro} alt="" className='h-[140px]'/>
          <h1 className='text-2xl p-5'>Hydro<br/>Energy</h1>
        </div>
      </div>
      <div className='bg-[#83D485] h-[1080px] md:h-[600px] mx-auto w-[100%] flex flex-col justify-center items-center relative'>
      <div className="absolute inset-0 bg-black opacity-40" id="login"></div> {/* Overlay */}
        <p className='text-white text-[15px] md:text-4xl font-bold w-[80%] text-center mb-10 md:mb-20 relative z-10'>
          The GreenChain Marketplace is where India's leading energy advisors and buyers source the best PPAs
        </p>
        <div className='md:flex md:gap-20 mx-auto'>
          <div className='w-[300px] md:w-[550px] h-[400px] md:h-[350px] py-2 bg-white relative mx-auto mb-10 md:mb-0'>
            <img src={By} alt="" className='h-14 mx-auto mt-4 mb-6'/>
            <h1 className='text-[#20AE24] text-3xl font-bold text-center mb-4'>Energy Buyers</h1>
            <div className='w-[60%] h-[1px] bg-[#212121] text-center mx-auto'></div>
            <div className='w-[90%] mx-auto text-center mt-6'>
              Showcase your renewable energy offerings to India's leading energy advisors and buyers, securing lucrative PPAs and fostering sustainable partnerships
            </div>
            <Link to="/buyer">
              <p className='mt-6 text-base font-bold py-2 px-4 rounded-full bg-[#20AE24] text-center w-[130px] mx-auto'>Learn More</p>
            </Link>
          </div>
          <div className='w-[300px] md:w-[550px] h-[400px] md:h-[350px] py-2 bg-white relative mx-auto'>
            <img src={Sr} alt="" className='h-14 mx-auto mt-4 mb-6'/>
            <h1 className='text-[#20AE24] text-3xl font-bold text-center mb-4'>Energy Sellers</h1>
            <div className='w-[60%] h-[1px] bg-[#212121] text-center mx-auto'></div>
            <div className='w-[90%] mx-auto text-center mt-6'>
              Access top-tier renewable energy PPAs tailored to your needs, sourced from trusted providers nationwide
            </div>
            <Link to="/buyer">
              <p className='mt-6 text-base font-bold py-2 px-4 rounded-full bg-[#20AE24] text-center w-[130px] mx-auto'>Learn More</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='mx-auto text-center w-[80%]'>
        <h1 className='text-4xl text-[#20AE24] font-bold my-20'>
          GreenChain Marketplace
        </h1>
        <h3 className='text-xl md:text-2xl text-[#212121] font-bold my-20 text-justify md:text-center'>
        Your gateway to sourcing and securing the most advantageous Power Purchase Agreements (PPAs) in India's renewable energy sector.
        </h3>
        <h4 className='font-fam text-xl md:text-3xl mt-10 mb-20 text-justify md:text-center'>
        A PPA (Power Purchase Agreement) is a long-term agreement between a renewable developer and a consumer for the purchase of energy. Explore our curated selection of PPA opportunities tailored to meet your sustainable energy needs.
        </h4>
      </div>

    </div>
  );
}

export default Home;