import { useNavigate } from 'react-router-dom'
import p5 from '../../src/assets/images/p5.svg'
import { Check } from 'lucide-react'
import MarqueeLeft from '../components/marqueeLeft'
import MarqueeRight from '../components/marqueeRight'
import { blogs, features, services, words } from '../constents'



export default function Home() {
  const navigate = useNavigate();



  return (
    <div className="index-page">

      <div className="h-screen bg-cover bg-center inset-0 bg-gradient-to-br from-[#0e021a] to-[#25003d]">
        {/* <div className="background-overlay " /> */}
        <div className="md:container mx-auto px-6 text-center md:text-left h-full flex  items-center justify-between ">

          <div className="text-white space-y-6 mb-20 md:mb-0">

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Elevate Your<br /> Business With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">WEBCOS </span>
              Expertise
            </h1>

            <p className="mt-4 text-lg text-gray-400 max-w-lg">
              Innovating Today to Secure Your Business’s Tomorrow — empowering growth with future-ready technology, smart strategies, and lasting digital solutions.
            </p>

            <div className="mt-8 flex flex-col gap-2 sm:flex-row  items-center justify-center md:justify-start">
              <a href='https://wa.me/919947929822' target='_blank' >
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-purple-500/50">
                  Start Your Project
                </button></a>
              <a href='https://wa.me/919947929822' target='_blank' >  <button className="text-white border border-gray-600 hover:border-pink-500 hover:text-pink-500 font-semibold py-3 px-8 rounded-lg transition duration-300">
                Explore Webcos
              </button></a>
            </div>
          </div>
          <div style={{ width: "400px" }} className="hidden sm:block">
            <img src={p5} className="w-full" />
          </div>
        </div>
        <div className='absolute -bottom-10'>
          <MarqueeLeft class="" words={words} />
        </div>
        {/* <div className='absolute bottom-10 block sm:hidden'>
          <MarqueeRight class="" words={words} />
        </div> */}

      </div>

      <section id="services" className="services  md:py-16 py-6 bg-gray-50">
        <div className="md:container mx-auto px-6">
          <p className='text-gray-500  mt-20 text-xl mb-4'>Innovating the Future with Cutting-Edge Technology.</p>
          <h2 className="sm:text-6xl text-3xl font-semibold sm:pb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-6 my-12 justify-items-center">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="cursor-pointer service-item bg-white shadow-lg hover:shadow-2xl rounded-lg p-8">
                <img src={service.icon} className='mb-10 mt-5' style={{ width: "50px" }} />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <div className='card-title-underline'></div>
                <p className="text-gray-600 text-lg mt-4 leadeing-10">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="content" className="about md:py-32 py-6">
        <div className="md:container mx-auto px-6">
          <h2 className="sm:text-8xl text-6xl font-semibold sm:pb-10 
      bg-gradient-to-br from-[#bd3569] to-[#580093] bg-clip-text text-transparent text-center">
            Achieve success
            faster & more efficiently.
          </h2>
        </div>
      </section>

      <section id="about" className="about md: md:pb-32 pb-16">
        <div className="md:container mx-auto px-6">

          <div className='mt-10 flex justify-between'>
            <div className='flex flex-col font-bold'>
              <p className="text-5xl sm:text-9xl font-thin">45+</p>
              <p className="text-gray-500 text-sm sm:text-xl">
                Projects
              </p>
            </div>
            <div className='flex flex-col font-bold'>
              <p className="text-5xl sm:text-9xl font-thin">34+</p>
              <p className="text-gray-500 text-sm sm:text-xl">
                Working <br />
                engagements
              </p>
            </div>
            <div className='flex flex-col font-bold'>
              <p className="text-5xl sm:text-9xl font-thin">16+</p>
              <p className="text-gray-500 text-sm sm:text-xl">
                Happy <br />Customers
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:p-20 py-10 px-6 inset-0 bg-gradient-to-br  from-[#0e021a] to-[#25003d] flex justify-center">
        <div className="md:container mx-auto py-8">
          <div className='grid md:grid-cols-2 gap-10 '>
            <div className="sm:block hidden ">
              <div className="grid grid-cols-2  gap-12">
                {features.map((item, idx) => (
                  <div key={idx} className="flex gap-2 sm:gap-3 items-center text-center">
                    <div className="bg-purple-300 rounded-full p-2 sm:p-4">{item.icon}</div>
                    <h3 className="text-lg text-white font-light">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className='text-white '>
              {/* <p className='text-gray-500 mt-10 md:mt-20 text-lg md:text-xl mb-4'>
            Delivering Excellence and Innovation.
          </p> */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 ">
                Explore the benefits of <br /> our services
              </h2>
              <p className="font-light text-lg mb-5 flex gap-2"><Check className='text-pink-500' /> We are committed to delivering high-quality solutions</p>
              <p className="font-light text-lg mb-5 flex gap-2"><Check className='text-pink-500' />Our team of experts is dedicated to providing innovative solutions</p>
              <p className="font-light text-lg mb-5 flex gap-2"><Check className='text-pink-500' />We prioritize customer satisfaction and strive to exceed expectations</p>
            </div>
            <div className="sm:hidden block ">
              <div className="grid grid-cols-2  gap-12">
                {features.map((item, idx) => (
                  <div key={idx} className="flex gap-2 sm:gap-3 items-center text-center">
                    <div className="bg-slate-300 rounded-full p-2 sm:p-4">{item.icon}</div>
                    <h3 className="text-lg text-white font-light">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='w-full flex justify-center mt-10'>
            <a href='/works' className="text-gray-50 px-6 py-3 rounded bg-purple-800 transition duration-200">
              View more →
            </a></div>
        </div>
      </section>


      <section id="services" className="services  md:py-16 py-6 bg-gray-100 ">
        <div className="md:container mx-auto px-6 py-10">

          <p className='text-gray-500   text-xl mb-4'>Innovating the Future with Cutting-Edge Technology.</p>
          <h2 className="sm:text-6xl text-3xl font-semibold sm:pb-10">Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.map((item, index) => (
              <div key={index} className="" onClick={() => navigate(`/blog-detail/${item._id}`)}>
                <img src={item.image} />
                <p class="mt-4  text-gray-600 dark:text-gray-300">{item.date}</p>
                <h2 class="mt-2 text-2xl font-semibold text-black dark:text-black">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="md:p-20 py-5  flex justify-center w-full">
        <div className="md:container bg-gradient-to-br  from-[#0e021a] to-[#25003d] p-10 sm:mx-20 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-2xl max-md:text-center ">Let’s Build Something Extraordinary Together</p>
          <div className='flex flex-col md:flex-row gap-4 text-lg'>
            <a href='https://wa.me/919947929822' target='_blank' className="border-white border-2 text-white px-6 py-4 rounded-full hover:bg-white hover:text-black" style={{ flexWrap: 'nowrap' }}>Book a Consultation</a>
            <a href='https://wa.me/919947929822' target='_blank' className="bg-white text-black px-6 py-4 rounded-full border-2 hover:border-white hover:text-white hover:bg-black text-center" >Chat with Sales Team</a>
          </div>
        </div>
      </section>

    </div>
  );
}

;
