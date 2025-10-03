import React from 'react'
import bannerimg from '../../src/assets/images/web2.jpg'
import { services } from '../constents'



export default function Services() {

  return (
    <div className='bg-gray-50'>
    <img src={bannerimg} className="w-full"/>
    <div className="md:container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold">Our Services</h2>
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
