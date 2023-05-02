import React from 'react';
import project from '../../data/project.json'
// import weather from '../images/weather-dashboard.png';




function Projects() {

    return (
        <div className='flex-1'>
            <section className="flex flex-row justify-center text-center p-4">
                <h1 className="project text-3xl font-medium text-center md:text-4xl">
                    My Projects
                </h1>
            </section>
            <div className="container mx-auto flex flex-col gap-3 pb-8 md:grid grid-cols-3">
                {/* Weather App */}
                <div className="col-span-1 bg-red-200 p-2 drop-shadow-2xl rounded-lg">{project[2].name}
                    <img className="object-cover w-full h-48 md:h-72" src={project[2].image} alt="" />
                    <div className='pt-4'>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Live site
                        </button>
                    </div>
                </div>
                {/* Team builder */}
                <div className="col-span-1 bg-purple-200 hover:bg-purple-800 p-2 drop-shadow-2xl rounded-lg">{project[5].name}
                    <img className="object-cover w-full h-48 md:h-72" src={project[5].image} alt="" />
                </div>
                {/* Work day planner */}
                <div className="col-span-1 bg-gray-200 p-2 drop-shadow-2xl rounded-lg">{project[3].name}
                    <img className="object-cover w-full h-48 md:h-72" src={project[3].image} alt="" />
                </div>
                {/* Food recipe */}
                <div className="col-span-1 bg-yellow-200 p-2 drop-shadow-2xl rounded-lg">{project[0].name}
                    <img className="object-cover w-full h-48 md:h-72" src={project[0].image} alt="" />
                </div>
                {/* Music playlist */}
                <div className="col-span-1 bg-green-200 p-2 drop-shadow-2xl rounded-lg">{project[1].name}
                    <img className="object-cover w-full h-48 md:h-72" src={project[1].image} alt="" />
                </div>
                {/* Password generator */}
                <div className="col-span-1 bg-blue-200 p-2 drop-shadow-2xl rounded-lg">{project[4].name}
                    <img className="object-cover w-full h-48 md:h-72" src={project[4].image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects