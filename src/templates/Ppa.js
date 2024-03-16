import React from 'react';
import img from './assets/Images/PPA.png';
import PPAImage from './assets/Images/ppa-img.png';

function PPA() {
  return (
    <div className='mt-[95px]'>
    <img src={PPAImage} alt="" className='w-full h-40 md:h-80 object-cover text-justify'/>
    <div className='mt-16 max-w-6xl mx-auto'>
      <h1 className='font-bold text-3xl text-center mb-8'>
        Welcome to the Power Purchase Agreement (PPA) Page
      </h1>
      <div className='md:flex items-center justify-between'>
        <div className='md:mr-8'>
          <p className='text-lg text-justify mb-6'>
            A Power Purchase Agreement (PPA) is a crucial contract between renewable energy generators (sellers) and electricity buyers, defining the terms of energy purchase and sale.
          </p>
          <div className='mb-8'>
            <h2 className='font-bold text-xl mb-4'>Introduction to PPAs:</h2>
            <p className='text-lg text-justify mb-4'>
              Understand the fundamentals of Power Purchase Agreements (PPAs) and their significance in the renewable energy sector.
            </p>
            <p className='text-lg text-justify mb-4'>
              Learn about the key parties involved, including renewable energy project developers, utility companies, and commercial/industrial electricity consumers.
            </p>
          </div>
          <div className='mb-8'>
            <h2 className='font-bold text-xl mb-4'>Types of PPAs:</h2>
            <p className='text-lg text-justify mb-4'>
              Explore different types of PPAs, such as utility-scale PPAs, corporate PPAs, and virtual PPAs, tailored to meet diverse energy needs and objectives.
            </p>
            <p className='text-lg text-justify mb-4'>
              Understand the structure, duration, pricing mechanisms, and risk allocation of various PPA models.
            </p>
          </div>
          <div className='mb-8'>
            <h2 className='font-bold text-xl mb-4'>Benefits of PPAs:</h2>
            <p className='text-lg text-justify mb-4'>
              Discover the advantages of entering into a PPA for both renewable energy sellers and buyers.
            </p>
            <p className='text-lg text-justify mb-4'>
              Learn how PPAs contribute to long-term cost savings, energy security, carbon footprint reduction, and sustainability goals.
            </p>
          </div>
          <div className='md:flex mb-8 md: gap-4'>
            <div className='md:w-1/2'>
              <h2 className='font-bold text-xl mb-4'>PPA Process:</h2>
              <p className='text-lg text-justify mb-4'>
                Gain insights into the PPA negotiation, execution, and implementation process.
              </p>
              <p className='text-lg text-justify mb-4'>
                Understand the legal, financial, and technical considerations involved in drafting and finalizing a PPA agreement.
              </p>
            </div>
            <div className='md:w-1/2'>
              <img src={img} alt="PPA" className='w-full' />
            </div>
          </div>
          <div className='mb-8'>
            <h2 className='font-bold text-xl mb-4'>PPA Resources:</h2>
            <p className='text-lg text-justify mb-4'>
              Access helpful resources, templates, and guides for navigating the PPA process effectively.
            </p>
            <p className='text-lg text-justify mb-4'>
              Learn from real-world case studies and success stories of organizations that have leveraged PPAs to advance their renewable energy objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PPA;