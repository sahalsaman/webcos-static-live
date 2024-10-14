import React, { useState } from 'react';
import bannerimg from '../../src/assets/images/web3.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <img src={bannerimg} className="w-full" />
      <div className="md:container mx-auto px-6 py-16">
        {/* <h2 className="text-3xl font-bold text-center">Contact Us</h2> */}
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
              <input
                type="text"
                name="name"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                className="w-full p-3 border border-gray-300 rounded"
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <a 
                className="btn bg-black text-white py-3 px-6 rounded hover:bg-gray-600 w-full mt-5" 
                href={`mailto:webcostechlab@gmail.com?subject=${formData.subject}&body=${formData.message}`} >
                Send Message
              </a>
            </form>
          </div>
        </div>
      </div> 
      
    </div>
  );
}
