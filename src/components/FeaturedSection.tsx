import { motion } from "motion/react";

export default function FeaturedSection() {
  return (
    <section className="py-24 bg-luxury-cream text-luxury-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1974&auto=format&fit=crop" 
                alt="Featured Product" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Accent */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white p-8 shadow-xl hidden md:block">
              <span className="text-gold text-[10px] uppercase tracking-widest font-bold block mb-4">Craftsmanship</span>
              <h4 className="font-serif text-xl mb-4">Precision in every detail</h4>
              <p className="text-xs text-luxury-black/60 leading-relaxed">
                Our master artisans spend over 200 hours on each timepiece, ensuring perfection that lasts generations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">The Signature Series</span>
              <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight mb-6">
                Timeless <br />
                <span className="italic">Accessories</span>
              </h2>
              <p className="text-luxury-black/70 text-lg font-light leading-relaxed max-w-lg">
                Discover the S&H Signature Series. A collection where modern innovation meets classic heritage, 
                crafted for those who appreciate the finer things in life—from precision timepieces to artisanal leather goods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-[1px] bg-gold"></div>
                <h5 className="font-bold text-xs uppercase tracking-widest">Exquisite Timepieces</h5>
                <p className="text-xs text-luxury-black/60 leading-relaxed">
                  Swiss-engineered movements housed in 18k gold and platinum cases.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-[1px] bg-gold"></div>
                <h5 className="font-bold text-xs uppercase tracking-widest">Artisanal Leather</h5>
                <p className="text-xs text-luxury-black/60 leading-relaxed">
                  Hand-stitched Italian leather goods that define modern luxury.
                </p>
              </div>
            </div>

            <button className="px-12 py-5 bg-luxury-black text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold transition-all duration-300">
              Discover the Series
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
