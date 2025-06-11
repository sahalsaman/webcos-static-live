import { useNavigate } from 'react-router-dom'
import cloud from '../../src/assets/icons/cloud-services-svgrepo-com.svg'
import graphic from '../../src/assets/icons/graphic-design-tool-svgrepo-com.svg'
import mobile from '../../src/assets/icons/mobile-development-coding-code-xcode-svgrepo-com.svg'
import marketing from '../../src/assets/icons/ui-basic-announcement-app-alert-megaphone-svgrepo-com.svg'
import ui from '../../src/assets/icons/ui8-svgrepo-com.svg'
import web from '../../src/assets/icons/web-development (1).svg'
import blog1 from '../../src/assets/posts/blog1.png'
import blog2 from '../../src/assets/posts/blog2.png'
import blog3 from '../../src/assets/posts/blog3.png'
import { Briefcase, DollarSign, ShieldCheck, Star } from 'lucide-react'


export default function Home() {
  const navigate = useNavigate();

  const services = [
    { icon: web, title: 'Web Development', description: 'We build responsive, high-performing websites tailored to your business needs using the latest web technologies.' },
    { icon: mobile, title: 'Mobile Development', description: 'Create powerful mobile applications that offer great user experiences across all platforms, including iOS and Android.' },
    { icon: marketing, title: 'Digital Marketing', description: 'Boost your online presence with our tailored digital marketing strategies, including SEO, social media, and content marketing.' },
    { icon: ui, title: 'UI/UX Design', description: 'Craft intuitive and visually appealing user interfaces that provide seamless user experiences for web and mobile apps.' },
    { icon: cloud, title: 'Cloud Services', description: 'Streamline your operations with secure, scalable cloud infrastructure, offering data storage, backup, and computing power.' },
  ];
    const features = [
    {
      icon: <Briefcase className="w-8 h-8 " />,
      title: 'Talents',
      desc: 'A team of ambitious, bright, young professionals expressing themselves.',
    },
    {
      icon: <DollarSign className="w-8 h-8 " />,
      title: 'Commitment',
      desc: 'Commitment is at our heart. We are committed to give you a unique, outstanding experience.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 " />,
      title: 'Transparency',
      desc: 'Transparency is in our brains. We talk honestly and act transparently.',
    },
    {
      icon: <Star className="w-8 h-8 " />,
      title: 'Quality',
      desc: 'Quality is in the air we breathe. We strive for quality is everything we do.',
    },
  ];
  const blogs = [
    {
      _id: 'wb01',
      title: "Building User-Friendly Applications: The Importance of UI/UX Design in Technology",
      image: blog1,
      description: "This post will explore the significance of UI/UX design in web and mobile applications and how it affects user engagement and retention"
    },
    {
      _id: 'wb02',
      title: "Choosing the Right Framework for Your Next Project",
      image: blog2,
      description: "This post will compare frameworks focusing on their unique features, strengths, and ideal use cases."
    },
    {
      _id: 'wb03',
      title: "Harnessing the Power of Cloud Services for Scalable Web and Mobile Applications",
      image: blog3,
      description: "This post will delve into the benefits of using cloud services for web and mobile applications and discuss popular cloud platforms"
    }
  ]
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
    <div className="index-page">

      <div className="h-screen bg-cover bg-center inset-0 bg-black hero">
        <div className="background-overlay" />
        <div className="container mx-auto h-full flex items-center justify-center text-center">
          <div className="text-white space-y-6">

            <h1 className="xsm:text-7xl text-5xl font-bold">Elevate Your Business With WEBCOS Expertise</h1>
            <p className='text-gray-500 text-xl font-light xsm:text-3xl'>Innovating Today to Secure Your Business’s Tomorrow.</p>

          </div>
        </div>
      </div>

      <section id="services" className="services  md:py-16 py-6 bg-gray-50">
        <div className="md:container mx-auto px-6">
          <p className='text-gray-500  mt-20 text-xl mb-4'>Innovating the Future with Cutting-Edge Technology.</p>
          <h2 className="sm:text-6xl text-3xl font-semibold sm:pb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-6 my-12 justify-items-center">
            {services.map((service, index) => (
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
      <section id="about" className="about md: md:py-32 py-6">
        <div className="md:container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 gap-14">
            <div className="lg:w-1/2 max-md:text-center">
              <h2 className="text-6xl font-bold">About Company</h2>
              <p className="text-gray-500 text-lg mt-6 font-light leading-relaxed">
                Webcos is your trusted partner for comprehensive IT solutions. We specialize in web and mobile development, delivering innovative and user-friendly platforms. Our digital marketing services help you grow your brand online, while our UI/UX designs and graphic design work enhance your business identity.

                We also offer professional video editing and reliable cloud services to keep your operations secure and scalable. At Webcos, we are committed to providing digital solutions that drive success.
              </p>
              <div className='mt-10 flex justify-between border-t-2  border-gray-200 pt-6'>
                <div className='flex flex-col font-bold'>
                  <h3 className="text-4xl ">45+</h3>
                  <p className="text-gray-500 text-md">
                    Projects
                  </p>
                </div>
                <div className='flex flex-col font-bold'>
                  <h3 className="text-4xl ">34+</h3>
                  <p className="text-gray-500 text-md">
                    Working <br/>
                    engagements
                  </p>
                </div>
                <div className='flex flex-col font-bold'>
                  <h3 className="text-4xl ">16+</h3>
                  <p className="text-gray-500 text-md">
                    Happy <br/>Customers
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img className='rounded-lg' src="https://www.master-of-finance.org/wp-content/uploads/2020/06/Job-Profile-Applications-Manager-scaled.jpg" alt="About WEBCOS" />
            </div>

          </div>
        </div>
      </section>
      <section className="md:p-20 py-10 px-6  bg-black flex justify-center">
        <div className="md:container mx-auto">
          <p className='text-gray-500 mt-10 md:mt-20 text-lg md:text-xl mb-4'>
            Delivering Excellence and Innovation.
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-12 text-white ">
            Driving Digital Transformation with Our Impactful Projects and Solutions
          </h2>

          {completedProjects.map((project, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-100 to-blue-400 rounded-lg p-6 md:p-14 mx-auto shadow-lg flex flex-col-reverse sm:flex-row items-center justify-between mb-10 cursor-pointer">

              {/* Left Section */}
              <div className="w-full md:w-1/2 md:pr-10">
                <div className='flex justify-between items-center mb-3 md:mb-5' style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">{project.title}</h3>
                  <span className="bg-blue-100 text-blue-900 text-xs md:text-sm font-semibold px-2 md:px-3 py-1 rounded-full inline-block mb-3">
                    Automotive
                  </span>
                </div>

                <p className="text-gray-700 mb-4 text-base md:text-lg sm:leading-10">
                  {project.description}
                </p>

                <div className='mb-6 md:mb-10'>
                  <button className="text-gray-900 text-sm px-4 py-2 rounded mb-4" style={{ backgroundColor: "rgba(0,0,0,.08)" }}>
                    {project.tag}
                  </button>
                </div>

                <a href={project.link} className="text-white bg-black px-4 md:px-6 py-2 md:py-3 rounded hover:bg-gray-800 transition duration-200">
                  View case study →
                </a>
              </div>

              {/* Right Section (Image) */}
              <div className="w-full md:w-1/2 md:pl-10 mb-6 md:mb-0 bg-blue-100 pt-8 md:pt-16 rounded-lg">
                <img src={project.image} alt={`${project.title} Screenshot`} className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          ))}

          <div className='flex justify-center'>
            <a href='/works' className="text-gray-50 px-6 py-3 rounded hover:bg-gray-800 transition duration-200">
              View more →
            </a>
          </div>
        </div>
      </section>
          <section className=" py-24 px-4" style={{backgroundImage: "url('')", backgroundSize: 'cover'}}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section id="services" className="services  md:py-16 py-6 bg-gray-100 ">
        <div className="md:container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.map((item, index) => (
              <div key={index} className="" onClick={() => navigate(`/blog-detail/${item._id}`)}>
                <img src={item.image} />
                <h2 class="mt-4 text-2xl font-semibold text-black dark:text-black">{item.title}</h2>
                <p class="mt-4  text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="md:p-20 py-5  flex justify-center w-full">
        <div className="md:container bg-black p-10 sm:mx-20 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-2xl max-md:text-center ">Need a consultation ?</p>
          <div className='flex flex-col md:flex-row gap-4 text-lg'>
            <a href='https://wa.me/919947929822' target='_blank' className="border-white border-2 text-white px-6 py-4 rounded-full hover:bg-white hover:text-black" style={{ flexWrap: 'nowrap' }}>Chat with Sales Team</a>
            <a href='https://wa.me/919947929822' target='_blank' className="bg-white text-black px-6 py-4 rounded-full border-2 hover:border-white hover:text-white hover:bg-black text-center" >Inquiry Call</a>
          </div>
        </div>
      </section>

    </div>
  );
}

;
