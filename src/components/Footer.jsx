import Behance from '../Assets/SVG/Behance.svg';
import Insta from '../Assets/SVG/Instagram.svg';
import LinkedIn from '../Assets/SVG/Linked In.svg';

function Footer() {
    return (
        <div className='flex flex-col md:flex-row justify-between text-center items-center p-2 md:mb-4 max-w-[84%] mx-auto mt-10 md:mt-20'>
            <div className="saperator order-0 md:order-0 text-center md:text-left">
                <div className='font-fam-bold text-lg md:text-[15px] mb-2 md:mb-0'>
                    © Jui Jagtap 2023
                </div>
                <a href='mailto:juijagtap532@gmail.com'>
                    <p className='font-fam-bold underline-effect text-[15px] md:text-[15px]'>juijagtap532@gmail.com</p>
                </a>
            </div>
            <div className='flex flex:row items-center justify-center order-1 md:order-1 md:mr-[-20px]'>
                <a href="https://www.behance.net/juijagtap29" target=' _blank' rel='noopener noreferrer' className="text-black hover:text-gray-700 m-5 md:m-0">
                    <img src={Behance} alt="Behance" className="w-7 h-7 md:w-8 md:h-8 md:ml-4"/>
                </a>
                <a href="https://www.instagram.com/malerin.techne/" target=' _blank' rel='noopener noreferrer' className="text-black hover:text-gray-700 m-5 md:m-0">
                    <img src={Insta} alt="Instagram" className="w-7 h-7 md:w-8 md:h-8 md:ml-4"/>
                </a>
                <a href="https://www.linkedin.com/in/juijagtap/" target=' _blank' rel='noopener noreferrer' className="text-black hover:text-gray-700 m-5 md:m-0">
                    <img src={LinkedIn} alt="Instagram" className="w-7 h-7 md:w-8 md:h-8 md:ml-4"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;