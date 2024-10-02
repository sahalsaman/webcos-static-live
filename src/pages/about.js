import React from 'react'
import bannerimg from '../../src/assets/images/bg1.jpg'

export default function About() {
  return (
    <div>
      <img src={bannerimg} className="w-full"/>
      <div className="md:container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 gap-10">
            <div className="lg:w-1/2">
              <img src="https://img.freepik.com/free-vector/app-development-concept-design_23-2148670525.jpg?t=st=1727785332~exp=1727788932~hmac=64fb26b71b3db2f62d4033dc6f418d640c1cea574d795bf6e81122370ac4e273&w=1480" alt="About WEBCOS"  />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold"><span className="text-6xl font-thin">About </span><br /> WEBCOS</h2>
              <p className="text-gray-700 text-lg mt-4 leading-relaxed">
                Webcos is your trusted partner for comprehensive IT solutions. We specialize in web and mobile development, delivering innovative and user-friendly platforms. Our digital marketing services help you grow your brand online, while our UI/UX designs and graphic design work enhance your business identity.

                We also offer professional video editing and reliable cloud services to keep your operations secure and scalable. At Webcos, we are committed to providing digital solutions that drive success.
              </p>
            </div>
          </div>
        </div>
        <section className="md:p-20 p-10 bg-black  flex justify-center">
        <div className="md:container mx-20 rounded-3xl text-white flex flex-col md:flex-row items-center justify-evenly gap-5">
          <div className="text-center">
            <p className="text-7xl font-thin mb-2">20+</p>
            <p className="text-lg font-bold uppercase">Clients</p>
          </div>
          <div className="text-center">
            <p className="text-8xl font-thin mb-2">100+</p>
            <p className="text-lg font-bold uppercase">Projects Done</p>
          </div>
          <div className="text-center">
            <p className="text-7xl font-thin mb-2">10+</p>
            <p className="text-lg font-bold uppercase">team advisors</p>
          </div>
        </div>
      </section>
    </div>
  )
}
