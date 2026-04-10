import { useState } from 'react';
import useTitle from '../hooks/useTitle';

export default function Portfolio() {
  useTitle('Portfolio');

  const allImages = [
    'MissGamalakhe.jpg',
    'Qhama Birthday Poster.jpg',
    'Miss Teenable.jpg',
    'Mdantsane LGBTQIA+ Safe Space And Braai.jpg',
    'Miss Trans Diva.jpg',
    'LGBTQIA+ Safe Place Picnic.jpg',
    'Lingerie Party.jpg',
    'Mr & Miss Radiant Royal.jpg',
    'Mr & Miss Tsomo.jpg',
    'EFF1.jpg',
    'EFF2.jpg',
    'EFF3.jpg',
    'Template1.png',
    'Template2.png',
    'Template3.png',
    'Template4.png'
  ];

  // Load first 8 images, then "Load More" for the rest
  const [visibleCount, setVisibleCount] = useState(8);
  const visibleImages = allImages.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, allImages.length));
  };

  return (
    <>
      <h1>Our Portfolio</h1>
      <p>Explore our creative journey through a collection of our latest design projects.</p>
      
      <div className="portfolio-grid">
        {visibleImages.map((img, idx) => (
          <div key={idx} className="portfolio-item">
            <img 
              src={`/assets/${img}`} 
              alt={`Portfolio item ${idx + 1}`}
              loading="lazy"  // ← browser lazy loads when near viewport
            />
          </div>
        ))}
      </div>

      {visibleCount < allImages.length && (
        <button onClick={loadMore} className="load-more-btn">
          Load More ({allImages.length - visibleCount} remaining)
        </button>
      )}
    </>
  );
}
