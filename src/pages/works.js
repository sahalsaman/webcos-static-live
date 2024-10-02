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
    <div className="bg-black">
      <div className="md:container mx-auto px-6 py-16">
        <p className='text-gray-500  mt-20 text-xl mb-4'>Delivering Excellence and Innovation.</p>
        <h2 className="text-6xl font-bold mb-12 text-white" style={{lineHeight:"80px"}}>Driving Digital Transformation with Our Impactful Projects and Solutions</h2>

        {completedProjects.map((project, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-100 to-blue-400 rounded-lg p-14 mx-auto shadow-lg flex items-center justify-between mb-10">
            {/* Left Section */}
            <div className="w-1/2 pr-14">

              <div className='flex justify-between items-center mb-5' style={{borderBottom:"1px solid rgba(0,0,0,.1)"}}>
                <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
                <span className="bg-blue-100 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">Automotive</span>
              </div>

              <p className="text-gray-700 mb-4 text-lg" style={{lineHeight:"35px"}}>{project.description}</p>

              <div className='mb-10'>
                <button className=" text-gray-900  text-sm px-4 py-2 rounded mb-4" style={{backgroundColor:"rgba(0,0,0,.08)"}}>{project.tag}</button>
              </div>

              <a href={project.link} className="text-white bg-black px-6 py-3 rounded hover:bg-gray-800 transition duration-200">
                View case study →
              </a>
            </div>

            {/* Right Section (Image) */}
            <div className="w-1/2 pl-14 bg-blue-100 pt-16 rounded-lg">
              <img src={project.image} alt={`${project.title} Screenshot`} className="rounded-lg shadow-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
