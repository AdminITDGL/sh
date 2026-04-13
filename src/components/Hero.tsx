import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-luxury-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1974&auto=format&fit=crop" 
          alt="Luxury Timepieces and Accessories" 
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-transparent to-luxury-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-gold text-xs md:text-sm uppercase tracking-[0.5em] font-medium">Collection Beyond Imagination</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-8 text-white"
        >
          Define Your <br />
          <span className="italic gold-gradient font-medium">Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl mx-auto text-white/60 text-sm md:text-base font-light tracking-wide mb-10 text-balance"
        >
          Experience the pinnacle of luxury with our curated selection of high-end fashion, 
          exquisite timepieces, and artisanal jewelry designed for the discerning individual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-4 bg-gold text-luxury-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold-light transition-all duration-300 flex items-center gap-2 group">
            Explore Collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-luxury-black transition-all duration-300">
            View Lookbook
          </button>
        </motion.div>
      </div>

      {/* Vertical Text Accent */}
      <div className="absolute right-10 bottom-20 hidden lg:block">
        <span className="vertical-text text-[10px] uppercase tracking-[0.8em] text-white/20 font-medium">
          ESTABLISHED MMXXIV
        </span>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
}
