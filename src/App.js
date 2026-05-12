import './App.css';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const products = [
  { name: 'Retaile.Shop',   des: 'Billing & inventory for retail stores.' },
  { name: 'Compatetion.Pro',  des: 'Run competitions end-to-end.' },
  { name: 'Order Manage',  des: 'Orders, invoices, and dispatch.' },
  { name: 'Estore',         des: 'List, sell, and ship online.' },
];

function ProductCard({ p, i }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    const rx = ((y / r.height) - 0.5) * -5;
    const ry = ((x / r.width) - 0.5) * 5;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="spotlight card-shadow group p-4 sm:p-5 md:p-6 flex flex-col justify-between cursor-pointer border border-ink/20 rounded-2xl bg-white will-change-transform aspect-[3/4] sm:aspect-auto sm:min-h-[160px] md:min-h-[160px] lg:min-h-[160px]"
    >


      <div className="flex items-end justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-[1.05] tracking-[-0.04em] truncate">
            {p.name}
          </h3>
          <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] md:text-xs opacity-65 leading-snug max-w-[20ch]">
            {p.des}
          </p>
        </div>
        <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-ink/30 transition-all duration-300 group-hover:bg-ink group-hover:text-white group-hover:border-ink group-hover:rotate-45">
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.7} />
        </span>
      </div>
    </motion.div>
  );
}

function WordWebcos() {
  const letters = 'WEBCOS.TECH'.split('');
  return (
    <h1
      className="word font-display font-bold whitespace-nowrap select-none text-center w-full leading-[0.82] tracking-[-0.07em]"
      style={{ fontSize: 'clamp(2rem, 14vw, 14rem)' }}
      aria-label="WEBCOS"
    >
      {letters.map((ch, idx) => (
        <motion.span
          key={idx}
          className="letter"
          initial={{ opacity: 0, y: '40%' }}
          animate={{ opacity: 1, y: '0%' }}
          transition={{ duration: 0.7, delay: 0.4 + idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch}
        </motion.span>
      ))}
    </h1>
  );
}

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white text-ink flex flex-col justify-center px-4 sm:px-8 md:px-20 relative">
      {/* Subtle dot pattern backdrop */}
      <div className="dotgrid absolute inset-0 opacity-50 pointer-events-none" />


      {/* BOTTOM — WEBCOS */}
      {/* <div className="relative mt-2 sm:mt-3">
        <WordWebcos />
      </div> */}

      {/* MIDDLE — heading + products */}
      <div className="relative">
      
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.04em] mb-4 md:mb-10 text-center">
            WEBCOS <span className=" opacity-60 font-normal">Applications</span>
          </h2>

        <div className="w-full max-w-[1400px] grid grid-cols-2 sm:grid-cols-2  gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
      <header className="relative flex justify-center w-full">
        <div className="flex justify-center">
          <motion.a
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group inline-flex items-center gap-2 bg-white px-4 sm:px-10 py-4 sm:py-4 text-md font-medium border-2 border-ink rounded-full mt-5 mb-8 sm:mt-8 sm:mb-12 lg:mt-10 lg:mb-16 hover:bg-ink hover:text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[3px_3px_0_0_#0a0a0a]"
          >
            Contact
            <ArrowUpRight className="w-8 h-6 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2} />
          </motion.a>
        </div>
      </header>
    </div>
  );
}

export default App;
