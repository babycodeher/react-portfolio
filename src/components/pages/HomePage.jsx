import headshot from './../../data/headshot-bw.jpeg';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
        {/* Flex container */}
        <div className="container flex flex-1 flex-col-reverse md:flex-row items-center mx-auto mt-10 space-y-0 md:space-y-0 md:pr-80 md:pl-80">
            {/* left item */}
            <div className="flex flex-col justify-center items-center space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                    Hi I'm Wumi
                </h1>
                <h2 className= "max-w-md text-1xl font-bold text-center md:text-2xl md:text-left">I'm an aspiring Frontend Developer</h2>
                <p className="max-w-sm text-center md:text-left">
                    Come alone with me on my journey as I horn my skills building amazing apps and do check out my portfolio.  
                </p>
                <div className="flex justify-center md:justify-start">
                    <Link to="/contact">
                    <button className="p-3 px-6 text-white bg-blue-800 rounded-full baseline hover:bg-lightWine md:block">Contact Me</button>
                    </Link>
                </div>
            </div>
            {/* right item */} 
            <div className="flex flex-col justify-center items-center space-y-12 md:w-1/2">
            {/* Image */}
                <img src={headshot} className='w-64 h-80 rounded-full md:w-auto' alt="designer's headshot" />
                </div>
        </div>
        
        </>
    );
}

export default HomePage;