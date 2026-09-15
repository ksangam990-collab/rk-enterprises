import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../../data/products';
import ProductCard from '../products/ProductCard';
import SectionHeading from '../ui/SectionHeading';
import QuickQuoteModal from '../products/QuickQuoteModal';
import Button from '../ui/Button';

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalProduct, setModalProduct] = useState(null);

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS.slice(0, 6)
    : PRODUCTS.filter(p => p.category === selectedCategory).slice(0, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-security-950 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="Surveillance Products"
          badgeVariant="red"
          title="Engineered for"
          highlightText="Total Property Visibility"
          subtitle="Explore our most reliable security cameras, DVR/NVR recorders, and genuine installation accessories. All equipment backed by brand warranties."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/25 border border-brand-red'
                  : 'bg-security-900 text-slate-300 hover:text-white hover:bg-security-850 border border-slate-800'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={gridVariants}
            initial="hidden"
            animate="show"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={cardVariants}>
                <ProductCard
                  product={product}
                  onQuickQuote={(prod) => setModalProduct(prod)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            to="/products"
            variant="outline"
            size="lg"
            icon={ArrowUpRight}
            iconPosition="right"
          >
            View Full Product Catalog ({PRODUCTS.length} Items)
          </Button>
        </motion.div>
      </div>

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        product={modalProduct}
        isOpen={Boolean(modalProduct)}
        onClose={() => setModalProduct(null)}
      />
    </section>
  );
}
