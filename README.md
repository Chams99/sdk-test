# Web SDK

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)
![Bun](https://img.shields.io/badge/Bun-ready-ff6b9d.svg)

**A simple, lightweight web SDK for OpenRouter AI integration - one line of code to get started.**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Examples](#-examples)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Examples](#-examples)
- [Browser Compatibility](#-browser-compatibility)
- [Development](#-development)
- [Project Structure](#-project-structure)
- [Security](#-security)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

Web SDK is a zero-dependency, production-ready JavaScript SDK that enables seamless integration with OpenRouter AI models. Inspired by Google Analytics' simplicity, it requires just **one line of code** to get started.

### Why Web SDK?

- ✅ **One-line integration** - No complex setup or configuration
- ✅ **Zero dependencies** - Pure JavaScript, no frameworks required
- ✅ **TypeScript support** - Type-safe source code
- ✅ **Production-ready** - Minified and optimized bundle
- ✅ **Auto-initialization** - Works immediately after inclusion
- ✅ **Lightweight** - Minimal bundle size

---

## ✨ Features

- **One-line integration** - Include the script tag and you're ready to go
- **Zero dependencies** - Pure JavaScript, no frameworks required
- **TypeScript** - Type-safe source code with full type definitions
- **Minified** - Production-ready bundle optimized for performance
- **Simple API** - Easy to use, hard to misuse
- **Auto-initialization** - Automatically initializes from script tag parameters
- **Error handling** - Comprehensive error messages and validation
- **Modern ES6+** - Built with modern JavaScript standards

---

## 📦 Prerequisites

- **Node.js** 18+ or **Bun** runtime
- **OpenRouter API Key** - Get yours at [openrouter.ai/keys](https://openrouter.ai/keys)
- Modern web browser with ES6+ support

---

## 🚀 Quick Start

### Step 1: Build the SDK

```bash
# Install dependencies
bun install

# Build the SDK
bun run build
```

This creates `dist/sdk.min.js` - a single, minified file ready for production.

### Step 2: Include in Your HTML

Add **ONE LINE** to your HTML:

```html
<!-- ONE LINE: Include and auto-initialize -->
<script src="dist/sdk.min.js?key=your-api-key"></script>
```

That's it! The SDK auto-initializes and is ready to use.

---

## 📥 Installation

### Option 1: Direct Download

1. Download `dist/sdk.min.js` from the repository
2. Include it in your HTML file
3. Add your API key as a query parameter

### Option 2: Build from Source

```bash
# Clone the repository
git clone <repository-url>
cd test1

# Install dependencies
bun install

# Build the SDK
bun run build
```

The built file will be available at `dist/sdk.min.js`.

---

## 📖 Usage

### Basic Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
</head>
<body>
    <!-- ONE LINE: Include and auto-initialize SDK -->
    <script src="dist/sdk.min.js?key=your-api-key"></script>

    <!-- Use the SDK -->
    <script>
        // Chat with AI
        async function sendMessage() {
            try {
                const response = await MySDK.chat('Hello!');
                console.log(response);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        // List available models
        async function getModels() {
            try {
                const models = await MySDK.models();
                console.log(models);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        // Use with specific model
        async function chatWithModel() {
            const response = await MySDK.chat('Hello!', 'openai/gpt-4');
            console.log(response);
        }
    </script>
</body>
</html>
```

### Manual Initialization

If you're loading the SDK dynamically or prefer manual initialization:

```javascript
// Load the SDK first
const script = document.createElement('script');
script.src = 'dist/sdk.min.js';
document.head.appendChild(script);

// Wait for SDK to load, then initialize
script.onload = () => {
    MySDK.init('your-api-key');
    
    // Now you can use the SDK
    MySDK.chat('Hello!').then(console.log);
};
```

---

## 📚 API Reference

### `MySDK.init(apiKey)`

Initialize the SDK with your API key. **Note:** If you use the one-line script tag method, auto-initialization happens automatically. You only need to call `init()` manually if you're loading the SDK dynamically.

#### Parameters

| Parameter | Type   | Required | Description                    |
|-----------|--------|----------|--------------------------------|
| `apiKey`  | string | Yes      | Your OpenRouter API key         |

#### Example

```javascript
// Manual initialization (if not using auto-init)
MySDK.init('your-api-key');
```

#### Throws

- `Error` - If the API key is invalid or missing

---

### `MySDK.chat(message, model?)`

Send a chat message to an AI model.

#### Parameters

| Parameter | Type   | Required | Default                    | Description                    |
|-----------|--------|----------|----------------------------|--------------------------------|
| `message` | string | Yes      | -                          | The message to send            |
| `model`   | string | No       | `'openai/gpt-3.5-turbo'`   | Model identifier               |

#### Returns

`Promise<any>` - Promise that resolves with the AI response

#### Example

```javascript
// Basic usage with default model
const response = await MySDK.chat('Hello!');

// Specify a custom model
const response = await MySDK.chat('Hello!', 'openai/gpt-4');

// Handle errors
try {
    const response = await MySDK.chat('Hello!');
    console.log(response);
} catch (error) {
    console.error('Chat error:', error.message);
}
```

#### Throws

- `Error` - If SDK is not initialized or API request fails

---

### `MySDK.models()`

List all available AI models from OpenRouter.

#### Returns

`Promise<any>` - Promise that resolves with the list of available models

#### Example

```javascript
// Get all available models
const models = await MySDK.models();

// Handle errors
try {
    const models = await MySDK.models();
    console.log('Available models:', models);
} catch (error) {
    console.error('Error fetching models:', error.message);
}
```

#### Throws

- `Error` - If SDK is not initialized or API request fails

---

## 💡 Examples

### Example 1: Simple Chat Interface

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Chat Example</title>
</head>
<body>
    <input type="text" id="messageInput" placeholder="Type your message...">
    <button onclick="sendChat()">Send</button>
    <div id="response"></div>

    <script src="dist/sdk.min.js?key=your-api-key"></script>
    <script>
        async function sendChat() {
            const input = document.getElementById('messageInput');
            const responseDiv = document.getElementById('response');
            
            responseDiv.textContent = 'Loading...';
            
            try {
                const response = await MySDK.chat(input.value);
                responseDiv.textContent = JSON.stringify(response, null, 2);
            } catch (error) {
                responseDiv.textContent = 'Error: ' + error.message;
            }
        }
    </script>
</body>
</html>
```

### Example 2: Model Selection

```javascript
// Get available models and let user select
async function setupModelSelector() {
    try {
        const models = await MySDK.models();
        const select = document.getElementById('modelSelect');
        
        models.data.forEach(model => {
            const option = document.createElement('option');
            option.value = model.id;
            option.textContent = model.name || model.id;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Failed to load models:', error);
    }
}

// Use selected model
async function chatWithSelectedModel() {
    const model = document.getElementById('modelSelect').value;
    const response = await MySDK.chat('Hello!', model);
    console.log(response);
}
```

### Example 3: Error Handling

```javascript
async function robustChat(message) {
    try {
        // Check if SDK is initialized
        if (!MySDK) {
            throw new Error('SDK not loaded');
        }
        
        const response = await MySDK.chat(message);
        return { success: true, data: response };
    } catch (error) {
        if (error.message.includes('Call MySDK.init')) {
            return { 
                success: false, 
                error: 'SDK not initialized. Please check your API key.' 
            };
        }
        
        return { 
            success: false, 
            error: error.message 
        };
    }
}
```

---

## 🌐 Browser Compatibility

The SDK is compatible with all modern browsers that support:

- ES6+ JavaScript features
- `fetch` API
- `Promise` API
- `URL` and `URLSearchParams` APIs

### Supported Browsers

- Chrome 63+
- Firefox 57+
- Safari 11+
- Edge 79+
- Opera 50+

### Polyfills

For older browser support, you may need to include polyfills for:
- `fetch` API
- `Promise` API

---

## 🛠️ Development

### Setup

```bash
# Install dependencies
bun install
```

### Build

```bash
# Build production bundle
bun run build
```

Creates `dist/sdk.min.js` - the production-ready bundle.

### Development Mode

```bash
# Watch mode - automatically rebuilds on file changes
bun run dev
```

### Type Checking

```bash
# Check for TypeScript errors without building
bun run type-check
```

### Development Server

```bash
# Start development server
bun run dev:server
```

---

## 📁 Project Structure

```
.
├── src/
│   ├── index.ts      # Core SDK class (WebSDK)
│   └── browser.ts    # Browser entry point (creates MySDK global)
├── dist/
│   └── sdk.min.js    # Built SDK (generated after build)
├── example.html      # Example usage demonstration
├── package.json      # Project configuration and dependencies
├── tsconfig.json     # TypeScript compiler settings
├── dev-server.js     # Development server script
├── server.js         # Production server script
└── README.md         # This file
```

### Key Files

- **`src/index.ts`** - Core SDK implementation with `WebSDK` class
- **`src/browser.ts`** - Browser-specific entry point that creates the global `MySDK` object
- **`dist/sdk.min.js`** - Production bundle (generated)

---

## 🔒 Security

### API Key Security

⚠️ **Important Security Considerations:**

1. **Never expose API keys in client-side code** - While this SDK is designed for client-side use, be aware that:
   - API keys in script tags are visible in the page source
   - Anyone can view your API key in the browser's developer tools
   - Consider using a backend proxy for production applications

2. **Best Practices:**
   - Use environment variables for API keys in development
   - Implement rate limiting on your backend
   - Monitor API usage for unusual activity
   - Rotate API keys regularly
   - Use domain restrictions if available from your API provider

3. **Production Recommendations:**
   - Use a backend service to proxy API requests
   - Implement authentication and authorization
   - Add rate limiting and usage quotas
   - Log and monitor API usage

### Content Security Policy (CSP)

If you're using Content Security Policy, ensure your policy allows:
- Inline scripts (if using auto-initialization)
- External script sources (for loading the SDK)
- Fetch requests to `openrouter.ai`

---

## 🐛 Troubleshooting

### Common Issues

#### SDK Not Initialized Error

**Error:** `Call MySDK.init(apiKey) first`

**Solutions:**
- Ensure the script tag includes the `key` parameter: `<script src="dist/sdk.min.js?key=your-api-key"></script>`
- Check that the API key is not a placeholder value
- Verify the script tag is loaded before using `MySDK`
- Try manual initialization: `MySDK.init('your-api-key')`

#### API Key Not Working

**Error:** `API Error: 401` or `API Error: 403`

**Solutions:**
- Verify your API key is correct at [openrouter.ai/keys](https://openrouter.ai/keys)
- Check that your API key has sufficient credits/quota
- Ensure the API key is not expired or revoked

#### Network Errors

**Error:** `Failed to fetch` or `Network error`

**Solutions:**
- Check your internet connection
- Verify CORS settings if using a local development server
- Check browser console for detailed error messages
- Ensure `openrouter.ai` is accessible from your network

#### Script Not Loading

**Solutions:**
- Verify the path to `sdk.min.js` is correct
- Check that the file exists in the `dist/` directory
- Ensure the web server is running and accessible
- Check browser console for 404 errors

### Debug Mode

Enable console logging to debug issues:

```javascript
// Check if SDK is loaded
console.log('MySDK available:', typeof MySDK !== 'undefined');

// Check if initialized
// (Note: SDK doesn't expose initialization state, but you can test with a call)
try {
    await MySDK.chat('test');
    console.log('SDK is initialized');
} catch (error) {
    console.error('SDK error:', error.message);
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Run type checking** (`bun run type-check`)
5. **Test your changes** thoroughly
6. **Commit your changes** (`git commit -m 'Add amazing feature'`)
7. **Push to the branch** (`git push origin feature/amazing-feature`)
8. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain backward compatibility
- Add tests for new features
- Update documentation as needed
- Keep the bundle size minimal

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

- **Documentation:** See this README and inline code comments
- **Issues:** Open an issue on GitHub
- **OpenRouter API:** Visit [openrouter.ai/docs](https://openrouter.ai/docs)

---

## 🙏 Acknowledgments

- Built with [Bun](https://bun.sh/)
- Powered by [OpenRouter](https://openrouter.ai/)
- Inspired by Google Analytics' one-line integration approach

---

<div align="center">

**Made with ❤️ for developers**

[⬆ Back to Top](#-table-of-contents)

</div>
#   s d k - t e s t  
 