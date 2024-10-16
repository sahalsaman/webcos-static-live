import React from 'react'
import bannerimg from '../../src/assets/images/web04.png'
import ul_icon from '../../src/assets/icons/list-icon.svg'

export default function About() {
  return (
    <div className='bg-black text-white'>
      <img src={bannerimg} className="w-full" alt="Banner" />
      <div className="md:container mx-auto px-6 pb-20 space-y-6">
         <div className=" pb-10">
          {/* <h2 className="text-8xl font-bold"><span className="text-6xl font-thin">W </span></h2> */}
          <p className="text-white font-light text-2xl leading-20">
            At <strong>WEBCOS</strong>, we are passionate about empowering businesses and individuals
            through cutting-edge web and mobile app development. As a leading provider of digital solutions,
            we specialize in creating custom-built applications that cater to the unique needs of each client.
            Our expertise lies in delivering scalable, secure, and user-friendly products that drive success in today's digital landscape.
            <br />
          </p>
        </div>
         <div className=" py-10">
          <h2 className="text-6xl font-bold">Who We Are </h2>
          <p className=" text-xl mt-6 leading-8 ">
            Founded with a vision to innovate and transform ideas into impactful digital experiences,
            WEBCOS is a team of experienced developers, designers, and strategists. We work closely with
            our clients to understand their goals, offering tailor-made solutions that help businesses grow and thrive.
            <br />
          </p>
        </div>
         <div className=" py-10">
          <h2 className="text-6xl font-bold mb-5">What WE Do </h2>
          <div className=" font-light text-xl space-y-6 ">
            <div className='flex items-start gap-3'>
              <img src={ul_icon} />
              <p>Web Development: We build responsive, fast-loading websites that offer seamless user experiences.</p>
            </div>
            <div className='flex items-start gap-3'>
              <img src={ul_icon} />
              <p>Mobile App Development: Our apps are designed to work flawlessly across platforms, ensuring maximum reach and impact.</p>
            </div>
            <div className='flex items-start gap-3'>
              <img src={ul_icon} />
              <p>Custom Solutions: From enterprise applications to tailored digital platforms, we provide solutions that meet your specific needs.</p>
            </div>
            <div className='flex items-start gap-3'>
              <img src={ul_icon} />
              <p>UI/UX Design: We craft intuitive, visually appealing interfaces that enhance user engagement and satisfaction.</p>
            </div>
            <div className='flex items-start gap-3'>
              <img src={ul_icon} />
              <p>Digital Marketing: Our comprehensive strategies help you reach your target audience and grow your business.</p>
            </div>
            <div className='flex items-start gap-3'>
              <img src={ul_icon} />
              <p>Cloud Services: We offer reliable and scalable cloud solutions to ensure your business runs smoothly online.</p>
            </div>
            <br />
          </div>
          <p className=" text-xl leading-8">
            Let <strong>WEBCOS</strong> be your partner in digital transformation. Together, we’ll create solutions that not only meet your current needs but set you up for future success.
          </p>
        </div>

       <div className=" py-10">
        <h2 className="text-6xl font-bold">Our Mission</h2>
        <p className=" text-2xl mt-6 leading-10 ">
          Our mission is simple: to deliver high-quality, customized digital solutions that help our clients achieve
          their objectives. We believe in the power of technology to drive business success and are committed to
          providing top-tier services that combine innovation, reliability, and efficiency.
          <br />
        </p>
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
    </div >
    </div>
  )
}
