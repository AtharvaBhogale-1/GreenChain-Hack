import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/Logo.png'

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
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

    return (
        <nav className="bg-white p-6 z-[50] font-fam-bold mx-auto fixed top-0 w-full">
            <div className="container mx-auto flex md:flex-row flex-col items-center">
                <div className="flex justify-between w-full">
                    <Link to="/" className="text-black text-bold text-2xl md:text-4xl font-semibold mb-2 md:mb-0 ml-2 md:ml-4">
                    <img src={Logo} alt="" className='h-16' />
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
                    <Link to="/work" className="underline-effect-pink hover:text-[#79E381] nav-link mb-4 md:mr-2" onClick={handleLinkClick}>Listings</Link>
                    <Link to="/contact" className="underline-effect-pink hover:text-[#79E381] nav-link mb-4 md:mr-2" onClick={handleLinkClick}>Explorer</Link>
                    <Link to="/resume" className="underline-effect-pink hover:text-[#79E381] nav-link mb-4" onClick={handleLinkClick}>Transactions</Link>
                    <Link to="/resume" className="text-white px-4 py-1 bg-[#79E381] nav-link mb-4" onClick={handleLinkClick}>Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;