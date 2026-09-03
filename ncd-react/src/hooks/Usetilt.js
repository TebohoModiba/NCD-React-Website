import { useRef, useState } from 'react';

// Tracks pointer position over an element and returns a small rotation
// so the card can tilt toward the cursor. Disabled for reduced-motion users.
export default function useTilt(maxDegrees = 10) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateY: (x - 0.5) * maxDegrees * 2,
      rotateX: (0.5 - y) * maxDegrees * 2,
    });
  };

  const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0 });

  return { ref, tilt, handleMouseMove, resetTilt };
}
