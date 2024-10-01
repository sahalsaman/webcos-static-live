function Footer() {
  return (
    <footer className="footer py-6 bg-black text-white">
      <div className="md:container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">WEBCOS</h2>
            <p>Calicut, Kerala, India</p>
            <p>Whatsapp: +91 994 792 9822</p>
            <p>Email: webcostechlab@gmail.com</p>
          </div>
          <div className="flex  gap-16 mt-5">
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
            </ul>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Works</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
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
