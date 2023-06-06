import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <>
            <section className="flex-1 flex-row justify-center text-center p-6">
                <div className='flex flex-col justify-center items-center text-center pt-2'>
                    <h1 className="aboutMe text-3xl font-medium text-center md:4xl">
                        About Me
                    </h1>
                    <p className="my-4 text-center md:w-1/2">
                        Hello there! I'm Wumi Afolabi, an aspiring front-end web developer. I recently completed a comprehensive front-end web developer bootcamp that equipped me with the latest skills and knowledge in this exciting field.
                    </p>
                    <p className="my-4 text-center md:w-1/2">
                        During the course of the bootcamp, I immersed myself in various web development technologies including HTML, CSS, JavaScript, JQuery and frameworks like React.js. I am currently sharpening my knowledge of CSS framworks such as Tailwind and UIKit and improving on my experience in building responsive and user-friendly websites and applications.
                    </p>
                </div>
                
                <div className='flex flex-col justify-center items-center text-center pt-16 p-24'>
                    <h1 className="skills text-3xl font-medium text-center md:4xl">
                        Skills
                    </h1>
                    <p className="my-4">These are the technologies I've been learning and working with</p>
                    <div className="container flex flex-col justify-evenly gap-4 px-6 py-10 mx-auto space-y-12 md:flex-row md:space-y-0">
                        <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                            <FontAwesomeIcon icon={faJsSquare} size="4x" className="text-black-500" />
                        </div>
                        <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                            <FontAwesomeIcon icon={faHtml5} size="4x" className="text-black-500" />
                        </div>
                        <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                            <FontAwesomeIcon icon={faCss3Alt} size="4x" className="text-black-500" />
                        </div>
                        <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                            <FontAwesomeIcon icon={faReact} size="4x" className="text-black-500" />
                        </div>
                        <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                            <FontAwesomeIcon icon={faBootstrap} size="4x" className="text-black-500" />
                        </div>
                        <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                            <FontAwesomeIcon icon={faNode} size="4x" className="text-black-500" />

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;