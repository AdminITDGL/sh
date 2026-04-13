/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid, { Product } from "./components/ProductGrid";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import { motion } from "motion/react";
import { useState } from "react";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-luxury-black selection:bg-gold selection:text-luxury-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Featured Products Section */}
        <ProductGrid 
          title="The Essentials" 
          subtitle="Featured Selection" 
          onProductClick={setSelectedProduct}
        />

        {/* Detailed Product Section */}
        <FeaturedSection />

        {/* New Arrivals Section */}
        <ProductGrid 
          title="New Arrivals" 
          subtitle="Just Landed" 
          onProductClick={setSelectedProduct}
        />

        {/* Offers / Promotional Section */}
        <section className="py-24 bg-luxury-black relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop" 
              alt="Luxury Handbags" 
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-luxury-black/60"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto border border-gold/30 p-12 md:p-20 backdrop-blur-sm"
            >
              <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Exclusive Offer</span>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 font-light">
                The <span className="italic">Privilege</span> Club
              </h2>
              <p className="text-white/60 text-lg mb-10 font-light leading-relaxed">
                Join our exclusive membership to receive early access to new collections, 
                private sales, and a 15% welcome gift on your first order.
              </p>
              <button className="px-12 py-5 bg-gold text-luxury-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold-light transition-all duration-300">
                Join Now
              </button>
            </motion.div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <ProductGrid 
          title="Best Sellers" 
          subtitle="Most Coveted" 
          onProductClick={setSelectedProduct}
        />
      </main>

      <Footer />

      {/* Product Detail Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}
