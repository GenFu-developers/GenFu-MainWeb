import React from 'react'
import Button from '../Button/Button'

const RoadmapItems = [
    {
        time: 'Februar 2022',
        title: 'This is a new Roadmap Point',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsum non sed pariatur rerum autem excepturi, porro doloribus laudantium facilis aut eum libero eius temporibus ut praesentium quibusdam repellat iusto?',
        link: 'https://google.com',
    }, {
        time: 'Februar 2022',
        title: 'This is a new Roadmap Point',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsum non sed pariatur rerum autem excepturi, porro doloribus laudantium facilis aut eum libero eius temporibus ut praesentium quibusdam repellat iusto?',
        link: 'https://google.com',
    }, {
        time: 'Februar 2022',
        title: 'This is a new Roadmap Point',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsum non sed pariatur rerum autem excepturi, porro doloribus laudantium facilis aut eum libero eius temporibus ut praesentium quibusdam repellat iusto?',
        link: 'https://google.com',
    }, {
        time: 'Februar 2022',
        title: 'This is a new Roadmap Point',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsum non sed pariatur rerum autem excepturi, porro doloribus laudantium facilis aut eum libero eius temporibus ut praesentium quibusdam repellat iusto?',
        link: 'https://google.com',
    }, {
        time: 'Februar 2022',
        title: 'This is a new Roadmap Point',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsum non sed pariatur rerum autem excepturi, porro doloribus laudantium facilis aut eum libero eius temporibus ut praesentium quibusdam repellat iusto?',
        link: 'https://google.com',
    }, {
        time: 'Februar 2022',
        title: 'This is a new Roadmap Point',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ipsum non sed pariatur rerum autem excepturi, porro doloribus laudantium facilis aut eum libero eius temporibus ut praesentium quibusdam repellat iusto?',
        link: 'https://google.com',
    },

]

function index() {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">

            {
                RoadmapItems.map((item) => (
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.time}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                        <Button type="link" href={item.link} buttonStyle="primary" className='px-2 py-1'>
                            <span className='flex text-xs'>
                                Mehr...
                                <svg className="ml-2 w-3 h-3 my-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </Button>
                    </li>
                ))
            }
        </ol>
    )
}

export default index