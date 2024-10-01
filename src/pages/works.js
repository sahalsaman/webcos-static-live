import React from 'react'
import bannerimg from '../../src/images/bg1.jpg'

export default function Works() {
  const completedProjects = [
    {
      title: 'E-Commerce Website',
      description: 'Developed a full-featured e-commerce platform using React, Node.js, and MongoDB.',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg',
      link: '#',
    },
    {
      title: 'Mobile Banking App',
      description: 'Created a mobile banking app with Flutter, providing real-time transaction tracking.',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Built a responsive portfolio website using HTML, CSS, and JavaScript.',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg',
      link: '#',
    },
  ];
  return (
    <div className='bg-gray-50'>
    <img src={bannerimg} className="w-full"/>
    <div className="md:container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center">Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-10">
        {completedProjects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden pointer">
            <img className="w-full h-64 object-cover" src={project.image} alt={project.title} />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
       
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
