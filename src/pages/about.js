import React from 'react'
import bannerimg from '../../src/assets/images/web4.jpg'
import a1 from '../../src/assets/images/a1.jpg'
import a2 from '../../src/assets/images/a2.jpg'
import a3 from '../../src/assets/images/a3.png'
import a4 from '../../src/assets/images/a4.avif'

export default function About() {
  return (
    <div>
      <img src={bannerimg} className="w-full" alt="Banner" />
      <div className="md:container mx-auto px-6 py-10 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 gap-10">
          <div className="lg:w-1/2">
            <img
              src={a1}
              alt="About WEBCOS"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold"><span className="text-6xl font-thin">About </span></h2>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              At <strong>WEBCOS</strong>, we are passionate about empowering businesses and individuals
              through cutting-edge web and mobile app development. As a leading provider of digital solutions,
              we specialize in creating custom-built applications that cater to the unique needs of each client.
              Our expertise lies in delivering scalable, secure, and user-friendly products that drive success in today's digital landscape.
              <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center space-y-8 lg:space-y-0 gap-10">
          <div className="lg:w-1/2">
          <img
              src={a2}
              alt="About WEBCOS"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold"><span className="text-6xl font-thin">Who We Are </span><br /></h2>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Founded with a vision to innovate and transform ideas into impactful digital experiences,
              WEBCOS is a team of experienced developers, designers, and strategists. We work closely with
              our clients to understand their goals, offering tailor-made solutions that help businesses grow and thrive.
              <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 gap-10">
          <div className="lg:w-1/2">
          <img
              src={a3}
              alt="About WEBCOS"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold"><span className="text-6xl font-thin">Our Mission </span></h2>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Our mission is simple: to deliver high-quality, customized digital solutions that help our clients achieve
              their objectives. We believe in the power of technology to drive business success and are committed to
              providing top-tier services that combine innovation, reliability, and efficiency.
              <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center space-y-8 lg:space-y-0 gap-10">
          <div className="lg:w-1/2">
          <img
              src={a4}
              alt="About WEBCOS"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold"><span className="text-6xl font-thin">What We Do </span></h2>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              - Web Development: We build responsive, fast-loading websites that offer seamless user experiences.<br />
              - Mobile App Development: Our apps are designed to work flawlessly across platforms, ensuring maximum reach and impact.<br />
              - Custom Solutions: From enterprise applications to tailored digital platforms, we provide solutions that meet your specific needs.
              <br /><br />
              Let WEBCOS be your partner in digital transformation. Together, we’ll create solutions that not only meet your current needs but set you up for future success.
            </p>
          </div>
        </div>
      </div>
      {/* <section className="md:p-20 p-10 bg-black flex justify-center">
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
            <p className="text-lg font-bold uppercase">Team Advisors</p>
          </div>
        </div>
      </section> */}
    </div>
  )
}
