import { motion } from "motion/react";
import { Plus } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  details: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Aurelius Gold Chronograph",
    category: "Watches",
    price: "₹1,85,000",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a1b?q=80&w=2026&auto=format&fit=crop",
    description: "A masterpiece of horological engineering. The Aurelius features an 18k gold-plated case with a precision automatic movement and a scratch-resistant sapphire crystal.",
    details: [
      "18k Yellow Gold Plating",
      "Swiss Automatic Movement",
      "42mm Case Diameter",
      "Water Resistant to 100m",
      "Genuine Alligator Leather Strap"
    ]
  },
  {
    id: 2,
    name: "Midnight Suede Handbag",
    category: "Handbags",
    price: "₹74,500",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
    description: "Crafted from the finest Italian suede, this handbag combines timeless elegance with modern functionality. Perfect for the sophisticated urban professional.",
    details: [
      "Premium Italian Suede",
      "Gold-Tone Hardware",
      "Internal Zip Compartment",
      "Adjustable Shoulder Strap",
      "Hand-Painted Edges"
    ]
  },
  {
    id: 3,
    name: "Eternity Diamond Band",
    category: "Rings",
    price: "₹3,12,000",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
    description: "A symbol of everlasting love. This eternity band features a continuous circle of brilliant-cut diamonds, each meticulously set in a platinum band.",
    details: [
      "2.5 Carat Total Weight",
      "VS1 Clarity Diamonds",
      "950 Platinum Setting",
      "Conflict-Free Sourcing",
      "Custom Sizing Available"
    ]
  },
  {
    id: 4,
    name: "Heritage Leather Tote",
    category: "Handbags",
    price: "₹92,000",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop",
    description: "The ultimate everyday companion. Our Heritage Tote is constructed from full-grain vegetable-tanned leather that develops a beautiful patina over time.",
    details: [
      "Full-Grain Vachetta Leather",
      "Reinforced Base",
      "Laptop Sleeve (up to 15\")",
      "Magnetic Snap Closure",
      "Made in Italy"
    ]
  }
];

export default function ProductGrid({ 
  title, 
  subtitle, 
  onProductClick 
}: { 
  title: string, 
  subtitle: string,
  onProductClick: (product: Product) => void
}) {
  return (
    <section className="py-24 bg-luxury-black px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-2 block">{subtitle}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-light">{title}</h2>
          </div>
          <button className="text-white/60 text-xs uppercase tracking-[0.2em] hover:text-gold transition-colors border-b border-white/20 pb-1">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-white/5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-luxury-black text-[10px] font-bold px-6 py-3 uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </div>
                </div>
                {index === 0 && (
                  <div className="absolute top-4 left-4 bg-gold text-luxury-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    Best Seller
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">{product.category}</span>
                    <h3 className="text-white text-lg font-serif group-hover:text-gold transition-colors">{product.name}</h3>
                  </div>
                  <span className="text-gold font-medium">{product.price}</span>
                </div>
                <p className="text-white/40 text-xs line-clamp-2 font-light leading-relaxed">
                  {product.description}
                </p>
                <button 
                  className="w-full mt-4 py-3 border border-white/10 text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold hover:border-gold hover:text-luxury-black transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    onProductClick(product);
                  }}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
