  import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-luxury-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-8">
        <button className="text-white hover:text-gold transition-colors">
          <Menu size={20} />
        </button>
        <div className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
          <a href="#" className="hover:text-gold transition-colors">Collections</a>
          <a href="#" className="hover:text-gold transition-colors">New Arrivals</a>
          <a href="#" className="hover:text-gold transition-colors">Boutique</a>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="font-serif text-2xl tracking-[0.1em] gold-gradient font-semibold">S&H</span>
        <span className="text-[8px] uppercase tracking-[0.4em] text-gold-light/80 -mt-1">Boutique</span>
        {/* <img src="/sh_logo.png" alt="" srcset="" width="80px" /> */}

      </div>

      <div className="flex items-center gap-6">
        <button className="text-white/60 hover:text-gold transition-colors">
          <Search size={18} />
        </button>
        <button className="text-white/60 hover:text-gold transition-colors">
          <User size={18} />
        </button>
        <button className="text-white/60 hover:text-gold transition-colors relative">
          <ShoppingBag size={18} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full text-[8px] flex items-center justify-center text-luxury-black font-bold">2</span>
        </button>
      </div>
    </motion.nav>
  );
}
