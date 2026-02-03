// Simple static file server for testing
// Run with: bun serve.js

const PORT = 8080;

import { existsSync } from 'fs';

Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname === '/' ? '/example.html' : url.pathname;
    
    // Remove leading slash for file system
    if (path.startsWith('/')) path = path.slice(1);
    
    if (existsSync(path)) {
      return new Response(Bun.file(path));
    }
    
    return new Response('Not Found', { status: 404 });
  },
});

console.log(`🌐 Server running at http://localhost:${PORT}`);
console.log(`📄 Open http://localhost:${PORT}/example.html in your browser`);
console.log(`\n💡 Make sure to update the API key in example.html!`);
