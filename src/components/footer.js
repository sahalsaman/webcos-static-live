import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'

function Footer() {
  return (
    <footer className="footer py-6 pt-14 bg-slate-100 text-black">
      <div className="md:container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">WEBCOS</h2>
            <p>Calicut, Kerala, India</p>
            <p>Whatsapp: +91 994 792 9822</p>
            <p>Email: info@webcos.co</p>
          </div>
          <div className="flex flex-col xsm:flex-row gap-5 xsm:gap-16 mt-5">
            <div className="flex gap-16">
              <ul className="space-y-6">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
              </ul>
              <ul className="space-y-6">
                <li><a href="#" className="hover:underline">Works</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p>Follow us</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/webcos-technology" target='_blank'><img className='w-8' src={linkedin} /> </a>
                {/* <a href="#" target='_blank' ><img className='w-6' src={facebook} /> </a> */}
                <a href="https://www.instagram.com/webcos.co/" target='_blank' ><img className='w-8' src={instagram} /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Webcos. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
