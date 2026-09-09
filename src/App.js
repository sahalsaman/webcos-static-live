import './App.css';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, House, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const caseStudies = [
  { slug:'travel-portal', number:'01', category:'Travel Solution', title:'Managing every trip from one simple portal', excerpt:'A complete workspace for travel teams to create packages, prepare itineraries and quotations, manage bookings, and follow every payment without switching between tools.', date:'Faster operations', readTime:'Fewer manual tasks', clients:['Packages','Itineraries & quotations','Bookings & payments'] },
  { slug:'rental-property-management', number:'02', category:'Property Solution', title:'Making rental property management effortless', excerpt:'One organized system gives property owners a clear view of tenants, rent payments, maintenance requests, and important documents across every property.', date:'Clear rent tracking', readTime:'Better tenant service', clients:['Tenant records','Rent reminders','Maintenance requests'] },
  { slug:'retail-shop-billing', number:'03', category:'Retail Solution', title:'Faster billing with stock always under control', excerpt:'A straightforward billing system helps shop teams serve customers quickly, monitor inventory in real time, and understand daily sales at a glance.', date:'Quick checkout', readTime:'Live stock visibility', clients:['Fast billing','Stock management','Sales reports'] },
  { slug:'fest-competition-management', number:'04', category:'Event Solution', title:'Running competitions without spreadsheet confusion', excerpt:'From online registration to schedules, scoring, and final results, organizers can manage the complete event through one dependable application.', date:'Smooth coordination', readTime:'Instant results', clients:['Registration','Score management','Results publishing'] }
];

const products = [
  { number:'01', name:'Travels Portal App', label:'For travel businesses', description:'Manage tour packages, bookings, customers, payments, and daily travel operations in one simple place.', features:['Package management','Itinary & Qutation management','Online bookings','Payment tracking'] },
  { number:'02', name:'Rental Property Management App', label:'For property owners', description:'Keep properties, tenants, rent payments, maintenance requests, and documents organized without spreadsheets.', features:['Tenant records','Rent reminders','Maintenance tracking'] },
  { number:'03', name:'Retail Shop Billing Software', label:'For retail stores', description:'Create bills quickly, track stock, understand sales, and manage your shop from an easy-to-use app.', features:['Fast billing','Stock management','Sales reports'] },
  { number:'04', name:'Fest & Competition Management App', label:'For events and institutions', description:'Run registrations, participant lists, schedules, scoring, and results for festivals and competitions.', features:['Online registration','Score management','Instant results'] }
];

const solutionImages = [
  '/solution-travel-portal.png',
  '/solution-property-management.png',
  '/solution-retail-billing.png',
  '/solution-fest-management.png'
];

function Layout({children}) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: '-30% 0px -50% 0px', threshold: [0, .2, .5] });
    document.querySelectorAll('.page-section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navClass = section => activeSection === section ? 'active' : '';
  return <div className="site-shell"><main>{children}</main><footer className="site-footer"><span>© 2026 Webcos Technologies</span><span>Ideas, made useful.</span></footer><nav className="floating-nav" aria-label="Main navigation"><a className={navClass('home')} onClick={() => setActiveSection('home')} href="#home" aria-label="Home"><House size={17} strokeWidth={1.8}/></a><a className={navClass('solutions')} onClick={() => setActiveSection('solutions')} href="#solutions">Solutions</a>
  {/* <a className={navClass('case-studies')} onClick={() => setActiveSection('case-studies')} href="#case-studies">Case Studies</a> */}
  <a className={navClass('contact')} onClick={() => setActiveSection('contact')} href="#contact">Contact</a></nav></div>
}

function Home(){ return <>
  <section className="home-hero page-section" id="home">
    <div className="hero-orb hero-orb-one" aria-hidden="true"/>
    <div className="hero-orb hero-orb-two" aria-hidden="true"/>
    <div className="hero-copy">
      <span className="hero-welcome"><i/>Welcome to</span>
      <h1>WEBCOS</h1>
      <p>We turn your ideas into simple,<br/>useful digital products.</p>
      <div className="hero-actions">
        <a className="hero-cta" href="#contact">Start a project <ArrowUpRight size={18}/></a>
        <a className="hero-secondary" href="#solutions">View our solutions</a>
      </div>
    </div>
    <div className="hero-note"><span>Plan</span><i/><span>Build</span><i/><span>Support</span></div>
  </section>
</> }

// function CaseStudies(){ return <section className="page-section" id="case-studies"><div className="page-intro"><span className="kicker">Solutions in action</span><h1>Case Studies<span>.</span></h1><p>See how our solutions simplify daily work, reduce manual tasks, and help businesses serve people better.</p></div><div className="case-study-grid" aria-label="Case studies">{caseStudies.map(x=><article className="case-study-card" key={x.slug}><div className="card-top"><span>{x.number}</span><span>{x.category}</span><ArrowUpRight size={24} strokeWidth={1.5}/></div><div className="card-copy"><h2>{x.title}</h2><p>{x.excerpt}</p></div><div className="card-meta"><span>{x.date}</span><span>{x.readTime}</span></div><div className="case-clients"><span>Key features</span><strong>{x.clients.join(' · ')}</strong></div></article>)}</div></section> }

function Solutions(){ return <section className="page-section solutions-section" id="solutions"><div className="product-intro"><span className="kicker">Ready for your business</span><h1>Solutions<span>.</span></h1><div><p>Practical software that makes everyday work faster, clearer, and easier to manage.</p><a href="#contact">Ask about a solution <ArrowRight size={18}/></a></div></div><div className="solution-showcase" aria-label="Webcos solutions">{products.map((product,index)=><article className="solution-row" key={product.name}><div className="solution-content"><span className="solution-number">{product.number} / {product.label}</span><h2>{product.name}</h2><h3>{index === 0 ? 'Run Your Travel Business With Ease' : index === 1 ? 'Everything About Your Properties, Organized' : index === 2 ? 'Faster Billing. Better Stock Control.' : 'Plan, Score, and Publish With Confidence'}</h3><p>{product.description}</p><ul>{product.features.map(feature=><li key={feature}><Check size={17}/>{feature}</li>)}</ul><a className="solution-action" href={`https://wa.me/919947929822?text=${encodeURIComponent(`Hi Webcos, I would like to book a demo for ${product.name}.`)}`} target="_blank" rel="noreferrer">Book a Demo <ArrowRight size={18}/></a></div><figure><img src={solutionImages[index]} alt={`${product.name} interface preview`} loading="lazy"/></figure></article>)}</div></section> }

function Contact(){ return <section className="contact-page page-section" id="contact"><div className="contact-intro"><span className="kicker">Start a conversation</span><h1>Let’s make<br/>something <em>useful.</em></h1></div><div className="contact-links"><a href="https://wa.me/919947929822?text=Hi%20Webcos%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer"><span><FontAwesomeIcon icon={faWhatsapp}/> WhatsApp</span><strong>+91 99479 29822</strong><ArrowUpRight/></a><a href="tel:+918547929822"><span><Phone size={20}/> Phone</span><strong>+91 85479 29822</strong><ArrowUpRight/></a><a href="mailto:sahalsamankc@gmail.com"><span><Mail size={20}/> Email</span><strong>sahalsamankc@gmail.com</strong><ArrowUpRight/></a></div><div className="social-row"><p>Follow what we’re working on.</p><div><a href="https://www.linkedin.com/company/webcos-techlab" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={23}/></a><a href="https://www.instagram.com/webcos.co/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={23}/></a></div></div></section> }

function App(){ return <Layout><Home/><Solutions/>
{/* <CaseStudies/> */}<Contact/></Layout> }
export default App;
