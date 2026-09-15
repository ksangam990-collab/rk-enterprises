import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

/**
 * Server-side render entry point.
 * Called by prerender.mjs for each route during the build step.
 * @param {string} url - The route path to render (e.g. '/products')
 * @returns {{ html: string }} - The rendered HTML string
 */
export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  return { html };
}
