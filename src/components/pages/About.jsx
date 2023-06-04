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
                <h1 className="skills text-3xl font-medium text-center md:4xl">
                    Skills
                </h1>
                <p className="my-4">These are the technologies I've worked with</p>
                {/* <div className="flex flex-row justify-center space-x-8"> */}
                <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8space-y-12 md:flex-row md:space-y-0">
                    <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                        <FontAwesomeIcon icon={faJsSquare} size="4x" className="text-red-500"/>
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                        <FontAwesomeIcon icon={faHtml5} size="4x" className="text-yellow-500"/>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                        <FontAwesomeIcon icon={faCss3Alt} size="4x" className="text-blue-500"/>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                        <FontAwesomeIcon icon={faReact} size="4x" className="text-purple-500"/>
                        <p className='my-4'>React</p>
                    </div>
                    <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                        <FontAwesomeIcon icon={faBootstrap} size="4x" className="text-black-500" />
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className="shadow-md shadow-[#472D30] hover:scale-110 duration-500">
                        <FontAwesomeIcon icon={faNode} size="4x" className="text-green-500" />
                        <p className='my-4'>Node.js</p>
                    </div>
                </div>
                {/* </div> */}

            </section>
        </>
    );
}

export default About;