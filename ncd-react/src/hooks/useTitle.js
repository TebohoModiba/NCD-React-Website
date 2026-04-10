import { useEffect } from 'react';

export default function useTitle(title) {
  useEffect(() => {
    const fullTitle = `${title} | Nako's Creative Design`;
    document.title = fullTitle;
    // Optional: reset title when component unmounts
    return () => {
      document.title = "Nako's Creative Design – Graphic & Web Design Studio | Johannesburg";
    };
  }, [title]);
}