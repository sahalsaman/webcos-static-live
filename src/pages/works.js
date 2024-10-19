import React from 'react';
import bannerimg from '../../src/assets/images/bg1.jpg'


export default function Works() {
  const completedProjects = [
    {
      title: 'E-Commerce Website',
      description: 'Developed a full-featured e-commerce platform using React, Node.js, and MongoDB.Developed a full-featured e-commerce platform using React, Node.js, and MongoDB.',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg',
      tag: 'Web Development',
      link: '#',
    },
    {
      title: 'Mobile Banking App',
      description: 'Created a mobile banking app with Flutter, providing real-time transaction tracking.Developed a full-featured e-commerce platform using React, Node.js, and MongoDB.',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg',
      tag: 'Mobile Development',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Built a responsive portfolio website using HTML, CSS, and JavaScript.Developed a full-featured e-commerce platform using React, Node.js, and MongoDB.',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg',
      tag: 'UI/UX Design',
      link: '#',
    },
  ];

  return (
    <div className="bg-black md:p-20 px-6 py-10 flex justify-center">
  <div className="md:container mx-auto">
    <p className='text-gray-500 mt-10 md:mt-20 text-lg md:text-xl mb-4'>
      Delivering Excellence and Innovation.
    </p>
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-12 text-white ">
      Driving Digital Transformation with Our Impactful Projects and Solutions
    </h2>

    {completedProjects.map((project, index) => (
      <div key={index} className="bg-gradient-to-r from-blue-100 to-blue-400 rounded-lg p-6 md:p-14 mx-auto shadow-lg flex flex-col-reverse sm:flex-row items-center justify-between mb-10 cursor-pointer">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:pr-10">
          <div className='flex justify-between items-center mb-3 md:mb-5' style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">{project.title}</h3>
            <span className="bg-blue-100 text-blue-900 text-xs md:text-sm font-semibold px-2 md:px-3 py-1 rounded-full inline-block mb-3">
              Automotive
            </span>
          </div>

          <p className="text-gray-700 mb-4 text-base md:text-lg sm:leading-10">
            {project.description}
          </p>

          <div className='mb-6 md:mb-10'>
            <button className="text-gray-900 text-sm px-4 py-2 rounded mb-4" style={{ backgroundColor: "rgba(0,0,0,.08)" }}>
              {project.tag}
            </button>
          </div>

          <a href={project.link} className="text-white bg-black px-4 md:px-6 py-2 md:py-3 rounded hover:bg-gray-800 transition duration-200">
            View case study →
          </a>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 md:pl-10 mb-6 md:mb-0 bg-blue-100 pt-8 md:pt-16 rounded-lg">
          <img src={project.image} alt={`${project.title} Screenshot`} className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    ))}

    <div className='flex justify-center'>
      <a href='/works' className="text-gray-50 px-6 py-3 rounded hover:bg-gray-800 transition duration-200">
        View more →
      </a>
    </div>
  </div>
    </div>
  );
}
