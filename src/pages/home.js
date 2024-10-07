import cloud from '../../src/assets/icons/cloud-services-svgrepo-com.svg'
import graphic from '../../src/assets/icons/graphic-design-tool-svgrepo-com.svg'
import mobile from '../../src/assets/icons/mobile-development-coding-code-xcode-svgrepo-com.svg'
import marketing from '../../src/assets/icons/ui-basic-announcement-app-alert-megaphone-svgrepo-com.svg'
import ui from '../../src/assets/icons/ui8-svgrepo-com.svg'
import web from '../../src/assets/icons/web-development (1).svg'

export default function Home() {
  const services = [
    { icon: web, title: 'Web Development', description: 'We build responsive, high-performing websites tailored to your business needs using the latest web technologies.' },
    { icon: mobile, title: 'Mobile Development', description: 'Create powerful mobile applications that offer great user experiences across all platforms, including iOS and Android.' },
    { icon: marketing, title: 'Digital Marketing', description: 'Boost your online presence with our tailored digital marketing strategies, including SEO, social media, and content marketing.' },
    { icon: ui, title: 'UI/UX Design', description: 'Craft intuitive and visually appealing user interfaces that provide seamless user experiences for web and mobile apps.' },
    { icon: graphic, title: 'Graphic Design', description: 'Enhance your brand with professional graphic design services, from logos to brochures, ensuring a consistent visual identity.' },
    { icon: cloud, title: 'Cloud Services', description: 'Streamline your operations with secure, scalable cloud infrastructure, offering data storage, backup, and computing power.' },
  ];
  const words = [
    {
      name: "John Marcante",
      image: "",
      words: "Digital transformation is not about technology, it’s about strategy and new ways of thinking."
    }, {
      name: "Marc Benioff",
      image: "",
      words: "Every digital transformation is going to begin and end with the customer, and I can see that in the minds of every CEO I talk to."
    }, {
      name: "Mark Barrenechea",
      image: "",
      words: "Success in a digital world is about both creating a better experience for customers and improving operational efficiency."
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
            <h2 className="text-7xl font-bold">Elevate Your Business</h2>
            <h2 className="text-7xl font-bold">With WEBCOS Expertise</h2>
        <p className='text-gray-500  text-3xl'>Innovating Today to Secure Your Business’s Tomorrow.</p>
          </div>
        </div>
      </div>
      {/* <section id="about" className="about md: md:py-16 py-6">
        <div className="md:container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 gap-10">
            <div className="lg:w-1/2">
              <img src="https://img.freepik.com/free-vector/app-development-concept-design_23-2148670525.jpg?t=st=1727785332~exp=1727788932~hmac=64fb26b71b3db2f62d4033dc6f418d640c1cea574d795bf6e81122370ac4e273&w=1480" alt="About WEBCOS"  />
            </div>
            <div className="lg:w-1/2 max-md:text-center">
              <h2 className="text-4xl font-bold"><span className="text-6xl font-thin">About </span><br /> WEBCOS</h2>
              <p className="text-gray-700 text-lg mt-4 leading-relaxed">
                Webcos is your trusted partner for comprehensive IT solutions. We specialize in web and mobile development, delivering innovative and user-friendly platforms. Our digital marketing services help you grow your brand online, while our UI/UX designs and graphic design work enhance your business identity.

                We also offer professional video editing and reliable cloud services to keep your operations secure and scalable. At Webcos, we are committed to providing digital solutions that drive success.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section id="services" className="services  md:py-16 py-6 bg-gray-50">
        <div className="md:container mx-auto px-6">
        <p className='text-gray-500  mt-20 text-xl mb-4'>Innovating the Future with Cutting-Edge Technology.</p>
          <h2 className="text-5xl pb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-6 my-12">
            {services.map((service, index) => (
              <div key={index} className="cursor-pointer service-item bg-white shadow-lg hover:shadow-2xl rounded-lg p-8">
                <img src={service.icon} className='mb-10 mt-5' style={{width:"50px"}}/>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <div className='card-title-underline'></div>
                <p className="text-gray-600 text-lg mt-4 leadeing-10">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="md:p-20 p-10 bg-black  flex justify-center">
        <div className="md:container mx-20">
        <p className='text-gray-500  mt-20 text-xl mb-4'>Delivering Excellence and Innovation.</p>
        <h2 className="text-6xl font-bold mb-12 text-white" style={{lineHeight:"80px"}}>Driving Digital Transformation with Our Impactful Projects and Solutions</h2>

        {completedProjects.map((project, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-100 to-blue-400 rounded-lg p-14 mx-auto shadow-lg flex items-center justify-between mb-10 cursor-pointer">
            {/* Left Section */}
            <div className="w-1/2 pr-14">

              <div className='flex justify-between items-center mb-5' style={{borderBottom:"1px solid rgba(0,0,0,.1)"}}>
                <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
                <span className="bg-blue-100 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">Automotive</span>
              </div>

              <p className="text-gray-700 mb-4 text-lg" style={{lineHeight:"35px"}}>{project.description}</p>

              <div className='mb-10'>
                <button className=" text-gray-900  text-sm px-4 py-2 rounded mb-4" style={{backgroundColor:"rgba(0,0,0,.08)"}}>{project.tag}</button>
              </div>

              <a href={project.link} className="text-white bg-black px-6 py-3 rounded hover:bg-gray-800 transition duration-200">
                View case study →
              </a>
            </div>

            {/* Right Section (Image) */}
            <div className="w-1/2 pl-14 bg-blue-100 pt-16 rounded-lg">
              <img src={project.image} alt={`${project.title} Screenshot`} className="rounded-lg shadow-lg" />
            </div>
          </div>
        ))}
      <div className='flex justify-center'>    <a href='/works' className=" text-gray-50 px-6 py-3 rounded hover:bg-gray-800 transition duration-200">
                View more →
              </a>
              </div>
        </div>
      </section>
      <section id="services" className="services  md:py-16 py-6  bg-gray-50">
        <div className="md:container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {words.map((item, index) => (
              /* From Uiverse.io by SouravBandyopadhyay */
              <div class="flex flex-col bg-white shadow-lg items-center justify-center bg-transparent p-8 ">
                  <figure class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-black dark:bg-black">

                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-fill text-white dark:text-indigo-300" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </svg>
                  </figure>
                  <h2 class="mt-4 text-2xl font-semibold text-black dark:text-black">{item.name}</h2>
                  <p class="mt-4  text-gray-600 dark:text-gray-300 max-md:text-center">{item.words}</p>
              </div>

            ))}
          </div>
        </div>
      </section>
      <section className=" md:p-20 py-5 bg-gray-50 flex justify-center">
        <div className="md:container bg-black p-10 mx-20 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-2xl max-md:text-center font-thin">NEED A CONSULTATION ?</p>
          <div className='flex gap-4 text-lg'>
          <a href='https://wa.me/919947929822' target='_blank' className="border-white border-2 text-white px-6 py-4 rounded-full hover:bg-white hover:text-black" >Chat with Sales Team</a>
          <a href='https://wa.me/919947929822'  target='_blank' className="bg-white text-black px-6 py-4 rounded-full border-2 hover:border-white hover:text-white hover:bg-black" >Inquiry Call</a>
          </div>
        </div>
      </section> 
    </div>
  );
}

;
