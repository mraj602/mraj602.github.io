// Bakes the rendered page into dist/index.html so crawlers and link previews see real content.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { render } from '../dist-ssr/entry-server.js';

const file = 'dist/index.html';
const html = readFileSync(file, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found');
writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerendered', file);
