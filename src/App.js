import './App.css';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const products = [
  { name: 'Retaile.Shop',    tag: 'POS',     year: '2024', des: 'Billing & inventory for retail stores.' },
  { name: 'Compatetion.Pro', tag: 'EVENTS',  year: '2024', des: 'Run competitions end-to-end.' },
  { name: 'Order Manage',    tag: 'OPS',     year: '2025', des: 'Orders, invoices, and dispatch.' },
  { name: 'Estore',          tag: 'COMMERCE',year: '2025', des: 'List, sell, and ship online.' },
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
    const rx = ((y / r.height) - 0.5) * -4;
    const ry = ((x / r.width) - 0.5) * 4;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
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
      className=" p-5 sm:p-6 flex flex-col justify-between cursor-pointer border border-ink rounded-2xl bg-white shadow-sm will-change-transform"
    >
   

      <div className="flex items-end justify-between">
        <div>
          <h3 className="font-display text-xl sm:text-2xl lg:text-[28px] leading-[1] tracking-[-0.04em]">
            {p.name}
          </h3>
          <p className="mt-2 text-[11px] sm:text-xs opacity-70 leading-snug max-w-[18ch]">
            {p.des}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function WordWebcos() {
  const letters = 'WEBCOS'.split('');
  return (
    <h1
      className="word font-display font-bold whitespace-nowrap select-none text-center w-full leading-[0.8] tracking-[-0.07em]"
      style={{ fontSize: 'clamp(4rem, 22vw, 22rem)' }}
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
    <div className="h-screen w-screen overflow-hidden bg-white text-ink flex flex-col justify-between px-6 sm:px-10  relative">
      {/* TOP BAR */}
      <header className="flex justify-center w-full">
      

        <div className="flex justify-center">
          <motion.a
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group inline-flex items-center gap-2 border-brutal bg-white px-5 py-2.5 text-xs font-medium border-2 rounded-full mt-6 mb-12 sm:mt-10 sm:mb-16 hover:bg-ink hover:text-white transition-colors duration-300"
          >
            Contact
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2} />
          </motion.a>
        </div>

      </header>

      {/* PRODUCTS — middle row */}
      <div className="">
        <h2 className="text-4xl mb-4">Its for you</h2>
        <div className="w-full max-w-[1400px] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>


      {/* WEBCOS — bottom */}
      <div className="mt-2 sm:mt-3">
        <WordWebcos />
      </div>
    </div>
  );
}

export default App;
