import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
const Footer = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();
    return (
        <>
           <footer className='relative left-0 top-0 h-[10vh] py-5 flex items-center justify-between text-white bg-gray-800 sm:flex-row sm:px-20'>
                <section className='text-lg'>
                    Copyright {currentYear} | All Rights Reserved
                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'> 
                        <BsFacebook/>
                    </a>
                    <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'> 
                        <BsInstagram/>
                    </a>
                    <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'> 
                        <BsLinkedin/>
                    </a>
                    <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'> 
                        <BsTwitter/>
                    </a>
                </section>
           </footer>
        </>
    )
}

export default Footer;