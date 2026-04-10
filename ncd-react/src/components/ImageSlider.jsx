import { useState, useEffect, useRef } from 'react';

const slides = [
  '/assets/Miss Trans Diva.jpg',
  '/assets/Qhama Birthday Poster.jpg',
  '/assets/Miss Teenable.jpg',
  '/assets/Mdantsane LGBTQIA+ Safe Space And Braai.jpg'
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const totalSlides = slides.length;

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
    resetAutoPlay();
  };

  const nextSlide = () => goToSlide((currentIndex + 1) % totalSlides);
  const prevSlide = () => goToSlide((currentIndex - 1 + totalSlides) % totalSlides);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const resetAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Touch swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => (touchStartX.current = e.changedTouches[0].screenX);
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
  };

  return (
    <div className="preview-of-work">
      <h2>Preview of Our Work</h2>
      <p>Explore some of our recent projects that showcase our design expertise and creativity.</p>

      <div
        className="slider-container"
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={startAutoPlay}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((src, idx) => (
            <div key={idx} className="slide">
              <img src={src} alt={`Slide ${idx + 1}`} />
            </div>
          ))}
        </div>

        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous slide">&lt;</button>
        <button className="slider-btn next" onClick={nextSlide} aria-label="Next slide">&gt;</button>

        <div className="slider-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={idx === currentIndex ? 'active' : ''}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}