import { Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-black pt-24 pb-12 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-[0.1em] gold-gradient font-semibold">S&H</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold-light/80 -mt-1">Boutique</span>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              A collection beyond imagination. We redefine luxury through artisanal craftsmanship and timeless design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-8">Shop</h5>
            <ul className="space-y-4 text-white/40 text-sm font-light">
              <li><a href="#" className="hover:text-gold transition-colors">All Collections</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-8">Customer Care</h5>
            <ul className="space-y-4 text-white/40 text-sm font-light">
              <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-8">Newsletter</h5>
            <p className="text-white/40 text-sm font-light mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-0 bottom-3 text-gold text-xs uppercase tracking-widest font-bold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2024 S&H Boutique. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest hover:text-gold transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
          <div className="flex gap-6 text-white/20 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
