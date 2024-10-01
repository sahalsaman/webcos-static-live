import React from 'react'
import bannerimg from '../../src/images/bg1.jpg'

export default function Services() {
  const services = [
    { icon: 'bi-code-slash', title: 'Web Development', description: 'We build responsive, high-performing websites tailored to your business needs using the latest web technologies.' },
    { icon: 'bi-phone', title: 'Mobile Development', description: 'Create powerful mobile applications that offer great user experiences across all platforms, including iOS and Android.' },
    { icon: 'bi-megaphone', title: 'Digital Marketing', description: 'Boost your online presence with our tailored digital marketing strategies, including SEO, social media, and content marketing.' },
    { icon: 'bi-pencil', title: 'UI/UX Design', description: 'Craft intuitive and visually appealing user interfaces that provide seamless user experiences for web and mobile apps.' },
    { icon: 'bi-palette', title: 'Graphic Design', description: 'Enhance your brand with professional graphic design services, from logos to brochures, ensuring a consistent visual identity.' },
    { icon: 'bi-cloud', title: 'Cloud Services', description: 'Streamline your operations with secure, scalable cloud infrastructure, offering data storage, backup, and computing power.' },
    
    // Additional services
    { icon: 'bi-shield-lock', title: 'Cybersecurity', description: 'Protect your digital assets with top-notch cybersecurity services, including threat monitoring and vulnerability assessments.' },
    { icon: 'bi-bar-chart', title: 'Data Analytics', description: 'Leverage data analytics to gain insights into your business operations, improve decision-making, and optimize performance.' },
    { icon: 'bi-hdd-network', title: 'Network Infrastructure', description: 'Ensure seamless connectivity with our enterprise-grade network infrastructure solutions tailored to your business needs.' },
    { icon: 'bi-server', title: 'DevOps Services', description: 'Automate and streamline your development and operations processes with our expert DevOps services.' },
    { icon: 'bi-diagram-3', title: 'IT Consulting', description: 'Get expert advice on optimizing your IT strategy, infrastructure, and operations for better efficiency and scalability.' },
    { icon: 'bi-cash-stack', title: 'E-Commerce Solutions', description: 'We offer end-to-end e-commerce solutions, from platform development to payment integration and digital storefronts.' },
  ];
  return (
    <div className='bg-gray-50'>
    <img src={bannerimg} className="w-full"/>
    <div className="md:container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {services.map((service, index) => (
              <div key={index} className="service-item bg-white shadow-lg rounded-lg p-8 text-center">
                <i className={`bi ${service.icon} text-4xl text-blue-500 mb-4`}></i>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-4">{service.description}</p>
              </div>
            ))}
          </div>
    </div>
  </div>
  )
}
