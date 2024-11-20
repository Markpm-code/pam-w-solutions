// FILE: generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from 'sitemap';

// Define your routes here
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
];

const hostname = 'https://pamwebsolutions.com/';
const sitemapStream = new SitemapStream({ hostname });

routes.forEach(route => {
  sitemapStream.write({ url: route, changefreq: 'weekly', priority: 0.8 });
});

sitemapStream.end();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

streamToPromise(sitemapStream).then(data => {
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), data.toString());
  console.log('Sitemap generated successfully!');
});