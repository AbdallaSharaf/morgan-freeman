import React from 'react'

const Resume = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-28 '>
        <h1 className='text-4xl font-semibold'>
            Resume
        </h1>
        <div className='bg-blue-500 h-1 my-4 w-16'></div>
        <p className='mx-4 text-gray-700 text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className="mx-4 md:mx-16 lg:mx-28 grid grid-cols-1 lg:grid-cols-2 my-20 gap-7">
            <div className=''>
                <h4 className='text-2xl font-bold mb-5'>Summary</h4>
                <div className='border-l-2 border-blue-500 relative pl-6 pb-2'>
                <h5 className='before:absolute before:h-4 before:w-4 before:bg-white before:border-2 before:border-blue-500 before:rounded-full before:-ml-[33px]  text-lg leading-[18px] pb-3  uppercase font-semibold text-gray-500'>BRANDON JOHNSON</h5>
                <p className='italic text-gray-800 mb-4'>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                <ul className='text-base list-disc list-inside space-y-2'>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                </ul>
                </div>
                <h4 className='text-2xl font-bold mt-5 mb-5'>Education</h4>
                <div className='border-l-2 border-blue-500 relative pl-6 '>
                <h5  className='before:absolute before:h-4 before:w-4 before:bg-white before:border-2 before:border-blue-500 before:rounded-full before:-ml-[33px] text-lg leading-[18px] pb-3 uppercase font-semibold text-gray-500'>Master of Fine Arts & Graphic Design</h5>
                <h5 className='text-sm font-semibold pb-3 px-4 py-2'>2015-2016</h5>
                <p className='italic text-gray-600 pb-4'>Rochester Institute of Technology, Rochester, NY</p>
                <p className='mb-6'>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                <h5  className='before:absolute before:h-4 before:w-4 before:bg-white before:border-2 before:border-blue-500 before:rounded-full before:-ml-[33px] text-lg leading-[18px] pb-3 uppercase font-semibold text-gray-500'>Bachelor of Fine Arts & Graphic Design</h5>
                <h5 className='text-sm font-semibold py-2 px-4'>2015-2016</h5>
                <p className='italic text-gray-600 pb-4'>Rochester Institute of Technology, Rochester, NY</p>
                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                </div>
            </div>
            <div>
                <h4 className='text-2xl font-bold mb-5'>Professional Experience</h4>
                <div className='border-l-2 border-blue-500 relative pl-6 pt-6 pb-2'>
                <h5 className='before:absolute before:h-4 before:w-4 before:bg-white before:border-2 before:border-blue-500 before:rounded-full before:-ml-[33px] text-lg leading-[18px] pb-3 absolute top-[-6px] uppercase font-semibold text-gray-500'>Senior graphic design specialist</h5>
                <h5 className='text-sm font-semibold py-2 px-4'>2015-2016</h5>
                <p className='italic text-gray-800 pb-4 '>Experion, New York, NY</p>
                <ul className='text-base list-disc list-outside space-y-2 ml-5 mb-10'>
                    <li className=''>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                </ul>
                
                <h5 className='before:absolute before:h-4 before:w-4 before:bg-white before:border-2 before:border-blue-500 before:rounded-full before:-ml-[33px] text-lg leading-[18px] pb-3 uppercase font-semibold text-gray-500'>graphic design specialist</h5>
                <h5 className='text-sm font-semibold py-2 px-4'>2017 - 2018</h5>
                <p className='italic text-gray-800 pb-4 '>Stepping Stone Advertising, New York, NY</p>
                <ul className='text-base list-disc list-outside space-y-2 ml-5'>
                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                </ul>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume