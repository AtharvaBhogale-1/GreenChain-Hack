  import React from 'react';
  import Card from '../components/Card';
  import P1 from './assets/Images/Joy.png';
  import P2 from './assets/Images/BloomBuddies.png';
  import P3 from './assets/Images/Internship.png';
  import P4 from './assets/Images/Tejaswini.png';
  import P5 from './assets/Images/Valorant.png';
  import P7 from './assets/Images/PuneriBytes.png';
  import P8 from './assets/Images/Squisito.png';
  import P9 from './assets/Images/ADW.png';
  import P10 from './assets/Images/Illustrations.png';
  import { Link } from 'react-router-dom';

  const projects = [
    {
      id:1,
      name: 'Joy - The Mental Health App',
      link: '#',
      imageSrc: P1,
      type: "UX/UI"
    },
    {
      id:2,
      name: 'Bloom Buddies',
      link: '#',
      imageSrc: P2,
      type: "UX/UI"
    },
    {
      id:3,
      name: 'Luxor Trails Internship',
      link: '#',
      imageSrc: P3,
      type: "Internship"
    },
    {
      id:4,
      name: 'Tejaswini',
      link: '#',
      imageSrc: P4,
      type: "UX/UI"
    },
    {
      id:5,
      name: 'Valorant',
      link: '#',
      imageSrc: P5,
      type: "UI"
    },
    {
      id:6,
      name: 'Rewise 2023',
      link: 'https://www.behance.net/gallery/170871269/REWISE-2023',
      imageSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/639481170871269.6465223a466a1.jpg',
      type: "Publication"
    },
    {
      id:7,
      name: 'Puneri Bytes',
      link: '#',
      imageSrc: P7,
      type: "Publication"
    },
    {
      id:8,
      name: 'Squisito - An Italian Restaurant',
      link: '#',
      imageSrc: P8,
      type: "Print"
    },
    {
      id:9,
      name: 'Ahmedabad Design Week',
      link: '#',
      imageSrc: P9,
      type: "Print and Installation"
    },
    {
      id:10,
      name: 'Illustrations',
      link: '#',
      imageSrc: P10,
      type: "Digital Media"
    },
  ];

  function Work() {
    return (
      <div className='text-center mt-[100px] md:mt-[140px]'>
        <div className='font-fam-bold text-[30px] md:text-[60px] text-[#373737] mb-4 md:mb-10'>
          My Projects
        </div>
        <div className={`mx-auto justify-center items-center grid grid-cols-1 md:grid-cols-2 md:gap-[-20px] max-w-[95%]`}>
            {/* Card 1 */}
            <Link to={`/workflow/${projects[0].name}/${projects[0].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[0]} />
              <div className='font-fam-bold text-[15px] md:text-[25px] text-[#373737]'>{projects[0].name}</div>
              <div className='font-fam-bold text-[10px] md:text-[20px] text-[#373737] opacity-50 mt-2 md:mt-1'>{projects[0].type}</div>
            </Link>

            {/* Card 2 */}
            <Link to={`/workflow/${projects[1].name}/${projects[1].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[1]} />
              <div className='font-fam-bold text-[15px] md:text-[25px] text-[#373737]'>{projects[1].name}</div>
              <div className='font-fam-bold text-[10px] md:text-[20px] text-[#373737] opacity-50 mt-2 md:mt-1'>{projects[1].type}</div>
            </Link>

            {/* Card 3 */}
            <Link to={`/workflow/${projects[2].name}/${projects[2].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[2]} />
              <div className='font-fam-bold text-[15px] md:text-[25px] text-[#373737]'>{projects[2].name}</div>
              <div className='font-fam-bold text-[10px] md:text-[20px] text-[#373737] opacity-50 mt-2 md:mt-1'>{projects[2].type}</div>
            </Link>

            {/* Card 4 */}
            <Link to={`/workflow/${projects[3].name}/${projects[3].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[3]} />
              <div className='font-fam-bold text-[15px] md:text-[25px] text-[#373737]'>{projects[3].name}</div>
              <div className='font-fam-bold text-[10px] md:text-[20px] text-[#373737] opacity-50 mt-2 md:mt-1'>{projects[3].type}</div>
            </Link>

            {/* Card 5 */}
            <Link to={`/workflow/${projects[4].name}/${projects[4].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[4]} />
              <div className='font-fam-bold text-[15px] md:text-[25px] text-[#373737]'>{projects[4].name}</div>
              <div className='font-fam-bold text-[10px] md:text-[20px] text-[#373737] opacity-50 mt-2 md:mt-1'>{projects[4].type}</div>
            </Link>

            {/* Card 6 */}
            <a href={`${projects[5].link}`} target='_blank' rel="noopener noreferrer" className='flex-1 mx-auto m-4'>
              <Card {...projects[5]} />
              <div className='font-fam-bold text-[15px] md:text-[25px] text-[#373737]'>{projects[5].name}</div>
              <div className='font-fam-bold text-[10px] md:text-[20px] text-[#373737] opacity-50 mt-2 md:mt-1'>{projects[5].type}</div>
            </a>

            {/* Card 7 */}
            <Link to={`/workflow/${projects[6].name}/${projects[6].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[6]} />
              <div className='font-fam-bold text-[15px] md:text-[25px] text-[#373737]'>{projects[6].name}</div>
              <div className='font-fam-bold text-[10px] md:text-[20px] text-[#373737] opacity-50 mt-2 md:mt-1'>{projects[6].type}</div>
            </Link>

            {/* Card 8 */}
            <Link to={`/workflow/${projects[7].name}/${projects[7].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[7]} />
              <div className='font-fam-bold text-[15px] md:text-[25px] text-[#373737]'>{projects[7].name}</div>
              <div className='font-fam-bold text-[10px] md:text-[20px] text-[#373737] opacity-50 mt-2 md:mt-1'>{projects[7].type}</div>
            </Link>

            {/* Card 9 */}
            <Link to={`/workflow/${projects[8].name}/${projects[8].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[8]} />
              <div className='font-fam-bold text-[15px] md:text-[25px] text-[#373737]'>{projects[8].name}</div>
              <div className='font-fam-bold text-[10px] md:text-[20px] text-[#373737] opacity-50 mt-2 md:mt-1'>{projects[8].type}</div>
            </Link>

            {/* Card 10 */}
            <Link to={`/workflow/${projects[9].name}/${projects[9].id}`} className='flex-1 mx-auto m-4'>
              <Card {...projects[9]} />
              <div className='font-fam-bold text-[15px] md:text-[25px] text-[#373737]'>{projects[9].name}</div>
              <div className='font-fam-bold text-[10px] md:text-[20px] text-[#373737] opacity-50 mt-2 md:mt-1'>{projects[9].type}</div>
            </Link>
        </div>
      </div>
    );
  }

  export default Work;