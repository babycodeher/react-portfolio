import React from 'react'
import project from '../../data/project.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects() {

    return (
        <div className='flex-1'>
            <section className="flex flex-row justify-center text-center p-4">
                <h1 className="project text-4xl font-medium text-center pb-6 pt-6 md:text-5xl">
                    Recent Projects
                </h1>
            </section>
            <div className="container mx-auto flex flex-col gap-8 pb-8 md:grid grid-cols-3">
                {/* Weather App */}
                <div className="col-span-1 p-3 shadow shadow-[#472D30] hover:drop-shadow-2xl rounded">
                    <img className="object-cover w-full h-48 md:h-72" src={project[2].image} alt="" />
                    <br></br>
                    <div className='flex flex-row justify-center gap-4'>
                        <a href={project[3].livesite} target='_blank' rel="noreferrer" className='text-xl font-medium text-center md:text-2xl'>{project[2].name}</a>
                        <a href={project[2].livesite} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xl' /></a>
                        <a href={project[2].github} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='xl' /></a>
                    </div>
                </div>
                {/* Team builder */}
                <div className="col-span-1 p-3 shadow shadow-[#472D30] hover:drop-shadow-2xl rounded">
                    <img className="object-cover w-full h-48 md:h-72" src={project[5].image} alt="" />
                    <br></br>
                    <div className='flex flex-row justify-center gap-4'>
                        <p className='text-xl font-medium text-center md:text-2xl'>{project[5].name}</p>
                        <a href={project[5].github} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='xl' /></a>
                        <i></i>
                    </div>
                </div>
                {/* Work day planner */}
                <div className="col-span-1 p-3 shadow shadow-[#472D30] hover:drop-shadow-2xl rounded">
                    <img className="object-cover w-full h-48 md:h-72" src={project[3].image} alt="" />
                    <br></br>
                    <div className='flex flex-row justify-center gap-4'>
                        <p className='text-xl font-medium text-center md:text-2xl'>{project[3].name}</p>
                        <a href={project[3].livesite} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xl' /></a>
                        <a href={project[3].github} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='xl' /></a>
                    </div>
                </div>
                {/* Food recipe */}
                <div className="col-span-1 p-3 shadow shadow-[#472D30] hover:drop-shadow-2xl rounded">
                    <img className="object-cover w-full h-48 md:h-72" src={project[0].image} alt="" />
                    <br></br>
                    <div className='flex flex-row justify-center gap-4'>
                        <p className='text-xl font-medium text-center md:text-2xl'>{project[0].name}</p>
                        <a href={project[0].livesite} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xl' /></a>
                        <a href={project[0].github} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='xl' /></a>
                    </div>
                </div>
                {/* Music playlist */}
                <div className="col-span-1 p-3 shadow shadow-[#472D30] hover:drop-shadow-2xl rounded">
                    <img className="object-cover w-full h-48 md:h-72" src={project[1].image} alt="" />
                    <br></br>
                    <div className='flex flex-row justify-center gap-4'>
                        <p className='text-xl font-medium text-center md:text-2xl'>{project[1].name}</p>
                        <a href={project[1].livesite} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xl' /></a>
                        <a href={project[1].github} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='xl' /></a>
                    </div>
                </div>
                {/* Password generator */}
                <div className="col-span-1 p-3 shadow shadow-[#472D30] hover:drop-shadow-2xl rounded">
                    <img className="object-cover w-full h-48 md:h-72" src={project[4].image} alt="" />
                    <br></br>
                    <div className='flex flex-row justify-center gap-4'>
                        <p className='text-xl font-medium text-center md:text-2xl'>{project[4].name}</p>
                        <a href={project[4].livesite} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xl' /></a>
                        <a href={project[4].github} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='xl' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects