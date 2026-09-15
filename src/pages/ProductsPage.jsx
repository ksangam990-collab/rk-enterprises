import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, CAMERA_SUBTYPES } from '../data/products';
import SEO from '../components/common/SEO';
import ProductCard from '../components/products/ProductCard';
import SectionHeading from '../components/ui/SectionHeading';
import QuickQuoteModal from '../components/products/QuickQuoteModal';
import Button from '../components/ui/Button';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubType, setSelectedSubType] = useState('All Types');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState(null);

  // Filter products based on search, category and subtype
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSubType = selectedSubType === 'All Types' || item.subType === selectedSubType;
      const matchesSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subType && item.subType.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSubType && matchesSearch;
    });
  }, [selectedCategory, selectedSubType, searchQuery]);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-security-950 min-h-screen">
      <SEO
        title="CCTV Cameras, DVRs, NVRs & Security Equipment"
        description="Browse genuine CCTV cameras, 24/7 color night vision, IP PoE cameras, Wi-Fi 360° cameras, DVRs, and surveillance hard drives at RK ENTERPRISES."
      />
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <SectionHeading
          badgeText="Product Catalog"
          badgeVariant="red"
          title="CCTV Cameras, Recorders &"
          highlightText="Security Accessories"
          subtitle="All equipment is sourced from leading security manufacturers and backed by official brand warranties and professional RK Enterprises installation."
        />

        {/* Search & Category Filter Toolbar */}
        <div className="mb-10 space-y-4 p-4 sm:p-6 rounded-2xl bg-security-900/80 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                id="product-search"
                name="product-search"
                aria-label="Search products by model, type, or resolution"
                type="text"
                placeholder="Search by camera type, resolution (e.g. 5MP, Dome, Wi-Fi, NVR)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-security-950 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Switcher */}
            <div className="md:col-span-5 flex items-center justify-start md:justify-end gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedSubType('All Types');
                  }}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-brand-red text-white border border-brand-red shadow-md'
                      : 'bg-security-950 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Camera Subtypes Filters (shown when CCTV Cameras or All selected) */}
          {(selectedCategory === 'all' || selectedCategory === 'cctv-cameras') && (
            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 overflow-x-auto text-xs pb-1">
              <span className="text-slate-400 font-medium shrink-0 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-brand-red" />
                <span>Camera Subtypes:</span>
              </span>
              {CAMERA_SUBTYPES.map((subType) => (
                <button
                  key={subType}
                  onClick={() => setSelectedSubType(subType)}
                  className={`px-2.5 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                    selectedSubType === subType
                      ? 'bg-slate-200 text-slate-950 font-bold'
                      : 'bg-security-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {subType}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <span>
            Showing <strong className="text-white font-semibold">{filteredProducts.length}</strong> items
            {selectedCategory !== 'all' && ` in ${PRODUCT_CATEGORIES.find(c => c.id === selectedCategory)?.name}`}
            {selectedSubType !== 'All Types' && ` (${selectedSubType})`}
          </span>

          <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Brand Genuine Hardware</span>
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickQuote={(prod) => setModalProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-security-900/50 rounded-2xl border border-slate-800 space-y-3">
            <p className="text-base text-slate-300">No products matched your search or filter criteria.</p>
            <p className="text-xs text-slate-500">Try adjusting keywords or selecting 'All Products'.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedSubType('All Types');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Custom Order Box */}
        <div className="mt-16 p-8 rounded-2xl bg-security-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Looking for a specific CCTV model or bulk order?</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              We supply CP Plus, Hikvision, Dahua, Honeywell, and other major security brands on request.
            </p>
          </div>
          <Button
            to="/quote"
            variant="primary"
            size="md"
          >
            Submit Custom Equipment Request
          </Button>
        </div>
      </div>

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        product={modalProduct}
        isOpen={Boolean(modalProduct)}
        onClose={() => setModalProduct(null)}
      />
    </div>
  );
}
