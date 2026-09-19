import { useEffect } from 'react';

const SITE_NAME = "Nako's Creative Design";
const SITE_URL = 'https://www.nakocreativedesigns.co.za';
const DEFAULT_IMAGE = `${SITE_URL}/assets/NCD.jpg`;
const DEFAULT_TITLE = "Nako's Creative Design – Graphic & Web Design Studio | Johannesburg";

function upsertMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets per-page title, meta description, canonical link, and Open Graph /
 * Twitter tags. Same imperative pattern as the original useTitle hook, so it
 * plays well with client-side routing (updates on every page change) without
 * needing an extra dependency like react-helmet.
 *
 * Note: because this runs client-side, JS-executing crawlers (Googlebot) see
 * these tags fine, but non-JS social preview bots (WhatsApp, Facebook,
 * Twitter/X link unfurling) do NOT run this — they only ever see whatever is
 * static in index.html. This hook covers search indexing and the browser
 * tab/title; it does not change link-preview cards for these pages.
 */
export default function useSEO({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
      upsertMeta('name', 'twitter:description', description);
    }

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', `${SITE_URL}${path}`);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:image', image);

    upsertLink('canonical', `${SITE_URL}${path}`);

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, path, image]);
}