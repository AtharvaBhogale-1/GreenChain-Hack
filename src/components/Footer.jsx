function Footer() {
    return (
        <div className='flex flex-col md:flex-row justify-between text-center items-center p-4 md:mb-4 mx-auto mt-10 md:mt-5 bg-[#79E381]'>
            <div className="saperator mx-auto order-0 md:order-0 text-center">
                <div className='font-fam-bold text-base md:text-[15px] pb-10 md:mb-0 mt-4'>
                Privacy Policy | Terms of Service | 
                <a href="mailto:vedangpaithankar19@gmail.com">
                <span>Contact Us</span>
                </a>
                <br /><br />
                © 2024 GreenChain Marketplace. All rights reserved. 
                </div>
            </div>
        </div>
    );
}

export default Footer;