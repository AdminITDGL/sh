import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, ShieldCheck, Truck, RotateCcw } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  details: string[];
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-luxury-black/90 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-luxury-black border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-luxury-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-gold transition-colors"
          >
            <X size={20} />
          </button>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-white/5 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <div className="mb-8">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-2 block">
                {product.category}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
                {product.name}
              </h2>
              <span className="text-2xl text-gold font-medium">{product.price}</span>
            </div>

            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-6 mb-10">
              <h4 className="text-white text-xs uppercase tracking-widest font-bold border-b border-white/10 pb-2">
                Product Details
              </h4>
              <ul className="space-y-3">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/50 text-xs">
                    <div className="w-1 h-1 rounded-full bg-gold mt-1.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck size={20} className="text-gold" />
                <span className="text-[10px] uppercase tracking-tighter text-white/40">Authentic</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Truck size={20} className="text-gold" />
                <span className="text-[10px] uppercase tracking-tighter text-white/40">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw size={20} className="text-gold" />
                <span className="text-[10px] uppercase tracking-tighter text-white/40">Easy Returns</span>
              </div>
            </div>

            <button className="w-full py-5 bg-gold text-luxury-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-3 group">
              <ShoppingBag size={18} />
              Add to Boutique Bag
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
