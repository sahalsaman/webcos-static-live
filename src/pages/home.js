

export default function Home() {
  const services = [
    { icon: 'bi-code-slash', title: 'Web Development', description: 'We build responsive, high-performing websites tailored to your business needs using the latest web technologies.' },
    { icon: 'bi-phone', title: 'Mobile Development', description: 'Create powerful mobile applications that offer great user experiences across all platforms, including iOS and Android.' },
    { icon: 'bi-megaphone', title: 'Digital Marketing', description: 'Boost your online presence with our tailored digital marketing strategies, including SEO, social media, and content marketing.' },
    { icon: 'bi-pencil', title: 'UI/UX Design', description: 'Craft intuitive and visually appealing user interfaces that provide seamless user experiences for web and mobile apps.' },
    { icon: 'bi-palette', title: 'Graphic Design', description: 'Enhance your brand with professional graphic design services, from logos to brochures, ensuring a consistent visual identity.' },
    { icon: 'bi-cloud', title: 'Cloud Services', description: 'Streamline your operations with secure, scalable cloud infrastructure, offering data storage, backup, and computing power.' },
  ];
  const words = [
    {
      name: "sahal saman",
      image: "",
      words: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate or a typeface without  "
    }, {
      name: "sahal",
      image: "",
      words: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate or a typeface withou "
    }, {
      name: "sahal",
      image: "",
      words: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate  "
    }
  ]

  return (
    <div className="index-page">
      <div className="h-screen bg-cover bg-center inset-0 bg-black hero">
        <div className="background-overlay" />
        <div className="container mx-auto h-full flex items-center justify-center text-center">
          <div className="text-white space-y-6">
            <h2 className="text-7xl ">Powerful IT Solutions <br /> With WEBCOS</h2>
            {/* <p className="text-2xl">We are a team of talented digital marketers</p> */}
          </div>
        </div>
      </div>
      <section id="about" className="about md: md:py-16 py-6">
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
      </section>
      <section id="services" className="services  md:py-16 py-6 bg-gray-50">
        <div className="md:container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-6 mt-12">
            {services.map((service, index) => (
              <div key={index} className="service-item bg-white shadow-lg rounded-lg p-8 text-center">
                <i className={`bi ${service.icon} text-4xl text-blue-500 mb-4`}></i>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-4 ">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="md:p-20 p-10 bg-black  flex justify-center">
        <div className="md:container mx-20 rounded-3xl text-white flex flex-col md:flex-row items-center justify-evenly gap-5">
          <div className="text-center">
            <p className="text-7xl font-thin mb-2">20+</p>
            <p className="text-lg font-bold uppercase">Clients</p>
          </div>
          <div className="text-center">
            <p className="text-8xl font-mono mb-2">100+</p>
            <p className="text-lg font-bold uppercase">Projects Done</p>
          </div>
          <div className="text-center">
            <p className="text-7xl font-thin mb-2">10+</p>
            <p className="text-lg font-bold uppercase">team advisors</p>
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
          <button className="bg-white text-black px-5 py-2 rounded-3xl">Join With me </button>
        </div>
      </section>
    </div>
  );
}

;
