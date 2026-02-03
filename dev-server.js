/**
 * Development test server for the SDK
 * Run with: node dev-server.js
 * 
 * This is optional - the SDK works without it using:
 * - Direct API calls (with API key)
 */

const http = require('http');

const PORT = 3000;

// Simple CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
};

const server = http.createServer((req, res) => {
  // Use modern WHATWG URL API instead of deprecated url.parse()
  const url = new URL(req.url, `http://${req.headers.host || 'localhost:3000'}`);
  const path = url.pathname;

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200, corsHeaders);
    res.end();
    return;
  }

  // API routes
  if (path === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('📨 Chat request:', data);
        
        // Mock response
        const response = {
          id: 'dev-' + Date.now(),
          model: data.model || 'openai/gpt-3.5-turbo',
          choices: [{
            message: {
              role: 'assistant',
              content: `[Dev Server] Mock response to: "${data.messages?.[data.messages.length - 1]?.content || 'Hello'}"`
            },
            finish_reason: 'stop'
          }],
          usage: {
            prompt_tokens: 10,
            completion_tokens: 20,
            total_tokens: 30
          }
        };
        
        res.writeHead(200, corsHeaders);
        res.end(JSON.stringify(response));
      } catch (error) {
        res.writeHead(400, corsHeaders);
        res.end(JSON.stringify({ error: error.message }));
      }
    });
    return;
  }

  if (path === '/api/models' && req.method === 'GET') {
    console.log('📋 Models request');
    const response = {
      data: [
        { id: 'openai/gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
        { id: 'openai/gpt-4', name: 'GPT-4' },
        { id: 'anthropic/claude-3-haiku', name: 'Claude 3 Haiku' }
      ]
    };
    res.writeHead(200, corsHeaders);
    res.end(JSON.stringify(response));
    return;
  }

  // Health check
  if (path === '/api/health' && req.method === 'GET') {
    res.writeHead(200, corsHeaders);
    res.end(JSON.stringify({ status: 'ok', message: 'Dev server running' }));
    return;
  }

  // API root - show available endpoints
  if (path === '/api' && req.method === 'GET') {
    res.writeHead(200, corsHeaders);
    res.end(JSON.stringify({
      message: 'Dev Server API',
      endpoints: {
        'POST /api/chat': 'Send chat messages',
        'GET /api/models': 'List available models',
        'GET /api/health': 'Health check'
      },
      usage: 'Use with SDK: MySDK.init("dev-key", { baseUrl: "http://localhost:3000/api" })'
    }));
    return;
  }

  // 404
  res.writeHead(404, corsHeaders);
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`🚀 Dev server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/api (API info)`);
  console.log(`   POST http://localhost:${PORT}/api/chat`);
  console.log(`   GET  http://localhost:${PORT}/api/models`);
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  console.log(`\n💡 Use in SDK: MySDK.init('dev-key', { baseUrl: 'http://localhost:${PORT}/api' })`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use.`);
    console.error(`💡 Try one of these:`);
    console.error(`   1. Kill the process: netstat -ano | findstr :${PORT} (then taskkill /PID <pid> /F)`);
    console.error(`   2. Use a different port: PORT=3001 node dev-server.js`);
    process.exit(1);
  } else {
    throw err;
  }
});

