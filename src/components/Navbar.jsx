import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png';

function Navbar() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const hamburgerStyle = {
        transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)',
        transition: 'transform 0.3s ease-in-out',
    };

    const handleLinkClick = () => {
        if (window.innerWidth >= 768) {
            setMobileMenuOpen(isMobileMenuOpen);
        }
        if (window.innerWidth < 768) {
            setMobileMenuOpen(!isMobileMenuOpen);
        }
        // Use history to navigate and scroll to the top
        if (window.location.pathname === '/work') {
            navigate('/work');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleLoginClick = () => {
        // Implement your custom scrolling functionality here
        const loginSection = document.getElementById('login');
        if (loginSection) {
            loginSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate("/buyer"); // Redirect to the home page if loginSection is not found
            const loginSection = document.getElementById('login');
        }
    };

    return (
        <nav className={`md:py-2 z-[40] font-fam-bold mx-auto w-full  md:bg-transparent md:p-0 mb-[-60px] ${isMobileMenuOpen ? 'bg-green-700 p-1' : 'bg-transparent p-1'}`} style={{ position: 'relative' }}>
            <div className="container mx-auto flex md:flex-row flex-col items-center max-w-[95%] overflow-hidde my-auto">
                <div className="flex justify-between w-full mt-2">
                    <Link to="/" className="text-black text-bold text-2xl md:text-4xl font-semibold mb-2 md:mb-0 ml-2 md:ml-4">
                        <img src={Logo} alt="" className='h-8 md:h-16' />
                    </Link>
                    {/* Hamburger Menu Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={toggleMobileMenu}
                        style={hamburgerStyle}
                    >
                        ☰
                    </button>
                </div>
                {/* Mobile Menu Links */}
                <div className={`md:mr-[12px] text-xl md:text-lg text-center justify-center md:flex md:gap-6 items-center ${isMobileMenuOpen ? 'flex flex-col open' : 'hidden'}`}>
                    <Link to="/" className="underline-effect-pink hover:text-[#79E381] nav-link mb-4 md:mr-2" onClick={handleLinkClick}>Marketplace</Link>
                    <Link to="/listings" className="underline-effect-pink hover:text-[#79E381] nav-link mb-4 md:mr-2" onClick={handleLinkClick}>Listings</Link>
                    <Link to="/ppa-index" className="underline-effect-pink hover:text-[#79E381] nav-link mb-4 md:mr-2" onClick={handleLinkClick}>PPA</Link>
                    <Link to="/learn" className="underline-effect-pink hover:text-[#79E381] nav-link mb-4 md:mr-2" onClick={handleLinkClick}>Learn</Link>
                    <Link to="/about" className="underline-effect-pink hover:text-[#79E381] nav-link mb-4" onClick={handleLinkClick}>About</Link>
                    {/* Use handleLoginClick to handle scrolling */}
                    <button className="text-white px-4 py-1 bg-[#79E381] nav-link mb-4" onClick={handleLoginClick}>Login</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;