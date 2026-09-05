import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useTitle from '../hooks/useTitle';

export default function Portfolio() {
  useTitle('Portfolio');

  const portfolioData = [
    { name: 'EFF1.jpg', category: 'Posters' },
    { name: 'EFF2.jpg', category: 'Posters' },
    { name: 'EFF3.jpg', category: 'Posters' },
    { name: 'LGBTQIA-Safe-Place-Picnic.jpg', category: 'Events' },
    { name: 'Lingerie Party.jpg', category: 'Events' },
    { name: 'Mdantsane-LGBTQIA-Safe-Space-and-Braai.jpg', category: 'Events' },
    { name: 'Miss Teenable.jpg', category: 'Events' },
    { name: 'Miss Trans Diva.jpg', category: 'Events' },
    { name: 'MissGamalakhe.jpg', category: 'Events' },
    { name: 'Mr-and-Miss-Radiant-Royal.jpg', category: 'Events' },
    { name: 'Mr-and-Miss-Tsomo.jpg', category: 'Events' },
    { name: 'Qhama Birthday Poster.jpg', category: 'Posters' },
    { name: 'Template1.png', category: 'Templates' },
    { name: 'Template2.png', category: 'Templates' },
    { name: 'Template3.png', category: 'Templates' },
    { name: 'Template4.png', category: 'Templates' }
  ];

  const categories = ['All', 'Posters', 'Events', 'Templates'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);
  const [activeImage, setActiveImage] = useState(null);

  const filteredImages = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(8);
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, filteredImages.length));
  };

  return (
    <>
      <h1>Our Portfolio</h1>
      <p>Explore our creative journey through a collection of our latest design projects.</p>

      {/* Filter Buttons */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated Portfolio Grid */}
      <motion.div layout className="portfolio-grid">
        <AnimatePresence>
          {visibleImages.map((item) => {
            const cleanAlt = item.name.replace(/\.[^/.]+$/, '');

            return (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="portfolio-item"
                onClick={() => setActiveImage(item)}
              >
                <img 
                  src={`/assets/${encodeURIComponent(item.name)}`} 
                  alt={cleanAlt}
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button */}
      {visibleCount < filteredImages.length && (
        <button onClick={loadMore} className="load-more-btn">
          Load More ({filteredImages.length - visibleCount} remaining)
        </button>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="lightbox-close" 
                onClick={() => setActiveImage(null)}
                aria-label="Close lightbox"
              >
                &times;
              </button>
              <img
                src={`/assets/${encodeURIComponent(activeImage.name)}`}
                alt={activeImage.name.replace(/\.[^/.]+$/, '')}
              />
              <p className="lightbox-caption">
                {activeImage.name.replace(/\.[^/.]+$/, '')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}