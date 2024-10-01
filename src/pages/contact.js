import React from 'react'
import bannerimg from '../../src/images/bg1.jpg'

export default function Contact() {
  return (
    <div>
      <img src={bannerimg} className="w-full" />
      <div className="md:container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="info space-y-6">
            <div className="info-item">
              <h3 className="text-xl font-semibold">Address</h3>
              <p>Calicut, Kerala, India</p>
            </div>
            <div className="info-item">
              <h3 className="text-xl font-semibold">Whatsapp</h3>
              <p>+91 994 792 9822</p>
            </div>
            <div className="info-item">
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p>webcostechlab@gmail.com</p>
            </div>
          </div>
          <div className="contact-form">
            <form className="space-y-6">
              <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="Your Name" required />
              <input type="email" className="w-full p-3 border border-gray-300 rounded" placeholder="Your Email" required />
              <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="Subject" required />
              <textarea className="w-full p-3 border border-gray-300 rounded" rows="6" placeholder="Message" required></textarea>
              <button type="submit" className="btn bg-black text-white py-3 px-6 rounded hover:bg-blue-600 w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
