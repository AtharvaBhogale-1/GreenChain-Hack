import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import P1 from '../Assets/1.png';
import P2 from './assets/Images/BloomBuddies.png';
import Asset from './assets/Images/HomepageAssets.png';

function Home() {
  return (
    <div className="home-container font-fam-bold text-left mt-[130px] md:mt-[180px]">
      <div className="img-cont flex ml-[-5%] md:ml-0">
        <div className='fade-in-text-y'>
          <img className='w-[400px] md:w-[500px] -rotate-90' src={Asset} alt="" />
        </div>
        <div className='md:mt-[-25px]'>
          <div className='md:ml-[7.8%] fade-in-text-x'>
            <div className='visual-designer font-playfair-bold font-bold text-4xl md:text-8xl text-[#D1547E] opacity-50'>
              <span className=''> VISUAL </span> <br />
              <span className=''> DESIGNER </span> <br />
            </div>
            <div className='description mt-[10px] md:mt-20 font-arimo text-xs md:text-2xl'>
              A visual wizard with interest in{' '}
              <span className='text-[#D1547E] opacity-50'>
                User experience, User interface
              </span>{' '}
              and{' '}
              <span className='text-[#D1547E] opacity-50'>
                Print.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[40px] md:mt-[90px] m-4 mx-auto grid grid-cols-1 md:grid-cols-2 max-w-[94%] md:gap-0'>
        <Link to={`/workflow/Joy - The Mental Health App/1`} className='flex-1 mx-auto m-4'>
          <Card imageSrc={P1} name={"Joy - The Mental Health App"} />
        </Link>
        <Link to={`/workflow/Bloom Buddies/2`} className='flex-1 mx-auto m-4'>
          <Card imageSrc={P2} name={"Bloom Buddies"} />
        </Link>
      </div>

      <Link to="/work" className='underline-effect-pink hover:text-[#D1547E] text-lg m-10 md:text-2xl mx-auto block text-center w-[214px] md:w-[285px]'>
        <div>
          Click To View All Projects
        </div>
      </Link>
    </div>
  );
}

export default Home;