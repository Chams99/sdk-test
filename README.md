<div align="center">

# 🚀 Web SDK

**A simple, lightweight web SDK for OpenRouter AI integration**

*One line of code to get started*

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Chams99/sdk-test)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-ready-ff6b9d.svg)](https://bun.sh/)

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Examples](#-examples)

---

</div>

<br>

## 📋 Table of Contents

<details>
<summary>Click to expand</summary>

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

</details>

<br>

---

<br>

## 🎯 Overview

Web SDK is a **zero-dependency**, **production-ready** JavaScript SDK that enables seamless integration with OpenRouter AI models. 

Inspired by Google Analytics' simplicity, it requires just **one line of code** to get started.

<br>

### Why Web SDK?

<div align="center">

| Feature | Description |
|---------|-------------|
| ⚡ **One-line integration** | No complex setup or configuration |
| 📦 **Zero dependencies** | Pure JavaScript, no frameworks required |
| 🔷 **TypeScript support** | Type-safe source code |
| 🚀 **Production-ready** | Minified and optimized bundle |
| 🔄 **Auto-initialization** | Works immediately after inclusion |
| 📏 **Lightweight** | Minimal bundle size |

</div>

<br>

---

<br>

## ✨ Features

<div align="left">

- 🎯 **One-line integration** - Include the script tag and you're ready to go
- 📦 **Zero dependencies** - Pure JavaScript, no frameworks required
- 🔷 **TypeScript** - Type-safe source code with full type definitions
- 🗜️ **Minified** - Production-ready bundle optimized for performance
- 🎨 **Simple API** - Easy to use, hard to misuse
- 🔄 **Auto-initialization** - Automatically initializes from script tag parameters
- ⚠️ **Error handling** - Comprehensive error messages and validation
- 🌐 **Modern ES6+** - Built with modern JavaScript standards

</div>

<br>

---

<br>

## 📦 Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js** 18+ or **Bun** runtime
- ✅ **OpenRouter API Key** - Get yours at [openrouter.ai/keys](https://openrouter.ai/keys)
- ✅ Modern web browser with ES6+ support

<br>

---

<br>

## 🚀 Quick Start

Get up and running in **2 simple steps**:

<br>

### Step 1: Build the SDK

```bash
# Install dependencies
bun install

# Build the SDK
bun run build
```

> This creates `dist/sdk.min.js` - a single, minified file ready for production.

<br>

### Step 2: Include in Your HTML

Add **ONE LINE** to your HTML:

```html
<!-- ONE LINE: Include and auto-initialize -->
<script src="dist/sdk.min.js?key=your-api-key"></script>
```

**That's it!** The SDK auto-initializes and is ready to use.

<br>

---

<br>

## 📥 Installation

### Option 1: Direct Download

1. Download `dist/sdk.min.js` from the repository
2. Include it in your HTML file
3. Add your API key as a query parameter

<br>

### Option 2: Build from Source

```bash
# Clone the repository
git clone https://github.com/Chams99/sdk-test.git
cd sdk-test

# Install dependencies
bun install

# Build the SDK
bun run build
```

The built file will be available at `dist/sdk.min.js`.

<br>

---

<br>

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

<br>

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

<br>

---

<br>

## 📚 API Reference

### `MySDK.init(apiKey)`

Initialize the SDK with your API key.

> **Note:** If you use the one-line script tag method, auto-initialization happens automatically. You only need to call `init()` manually if you're loading the SDK dynamically.

<br>

#### Parameters

| Parameter | Type   | Required | Description            |
|-----------|--------|----------|------------------------|
| `apiKey`  | string | Yes      | Your OpenRouter API key |

<br>

#### Example

```javascript
// Manual initialization (if not using auto-init)
MySDK.init('your-api-key');
```

<br>

#### Throws

- `Error` - If the API key is invalid or missing

<br>

---

<br>

### `MySDK.chat(message, model?)`

Send a chat message to an AI model.

<br>

#### Parameters

| Parameter | Type   | Required | Default                  | Description      |
|-----------|--------|----------|--------------------------|------------------|
| `message` | string | Yes      | -                        | The message to send |
| `model`   | string | No       | `'openai/gpt-3.5-turbo'` | Model identifier |

<br>

#### Returns

`Promise<any>` - Promise that resolves with the AI response

<br>

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

<br>

#### Throws

- `Error` - If SDK is not initialized or API request fails

<br>

---

<br>

### `MySDK.models()`

List all available AI models from OpenRouter.

<br>

#### Returns

`Promise<any>` - Promise that resolves with the list of available models

<br>

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

<br>

#### Throws

- `Error` - If SDK is not initialized or API request fails

<br>

---

<br>

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

<br>

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

<br>

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

<br>

---

<br>

## 🌐 Browser Compatibility

The SDK is compatible with all modern browsers that support:

- ✅ ES6+ JavaScript features
- ✅ `fetch` API
- ✅ `Promise` API
- ✅ `URL` and `URLSearchParams` APIs

<br>

### Supported Browsers

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 63+            |
| Firefox | 57+            |
| Safari  | 11+            |
| Edge    | 79+            |
| Opera   | 50+            |

<br>

### Polyfills

For older browser support, you may need to include polyfills for:

- `fetch` API
- `Promise` API

<br>

---

<br>

## 🛠️ Development

### Setup

```bash
# Install dependencies
bun install
```

<br>

### Build

```bash
# Build production bundle
bun run build
```

> Creates `dist/sdk.min.js` - the production-ready bundle.

<br>

### Development Mode

```bash
# Watch mode - automatically rebuilds on file changes
bun run dev
```

<br>

### Type Checking

```bash
# Check for TypeScript errors without building
bun run type-check
```

<br>

### Development Server

```bash
# Start development server
bun run dev:server
```

<br>

---

<br>

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

<br>

### Key Files

- **`src/index.ts`** - Core SDK implementation with `WebSDK` class
- **`src/browser.ts`** - Browser-specific entry point that creates the global `MySDK` object
- **`dist/sdk.min.js`** - Production bundle (generated)

<br>

---

<br>

## 🔒 Security

### API Key Security

<div align="left">

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

</div>

<br>

### Content Security Policy (CSP)

If you're using Content Security Policy, ensure your policy allows:

- Inline scripts (if using auto-initialization)
- External script sources (for loading the SDK)
- Fetch requests to `openrouter.ai`

<br>

---

<br>

## 🐛 Troubleshooting

### Common Issues

<br>

#### SDK Not Initialized Error

**Error:** `Call MySDK.init(apiKey) first`

**Solutions:**
- Ensure the script tag includes the `key` parameter: `<script src="dist/sdk.min.js?key=your-api-key"></script>`
- Check that the API key is not a placeholder value
- Verify the script tag is loaded before using `MySDK`
- Try manual initialization: `MySDK.init('your-api-key')`

<br>

#### API Key Not Working

**Error:** `API Error: 401` or `API Error: 403`

**Solutions:**
- Verify your API key is correct at [openrouter.ai/keys](https://openrouter.ai/keys)
- Check that your API key has sufficient credits/quota
- Ensure the API key is not expired or revoked

<br>

#### Network Errors

**Error:** `Failed to fetch` or `Network error`

**Solutions:**
- Check your internet connection
- Verify CORS settings if using a local development server
- Check browser console for detailed error messages
- Ensure `openrouter.ai` is accessible from your network

<br>

#### Script Not Loading

**Solutions:**
- Verify the path to `sdk.min.js` is correct
- Check that the file exists in the `dist/` directory
- Ensure the web server is running and accessible
- Check browser console for 404 errors

<br>

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

<br>

---

<br>

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

<br>

### Development Guidelines

- Follow TypeScript best practices
- Maintain backward compatibility
- Add tests for new features
- Update documentation as needed
- Keep the bundle size minimal

<br>

---

<br>

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

<br>

---

<br>

## 📞 Support

- **Documentation:** See this README and inline code comments
- **Issues:** Open an issue on [GitHub](https://github.com/Chams99/sdk-test/issues)
- **OpenRouter API:** Visit [openrouter.ai/docs](https://openrouter.ai/docs)

<br>

---

<br>

## 🙏 Acknowledgments

- Built with [Bun](https://bun.sh/)
- Powered by [OpenRouter](https://openrouter.ai/)
- Inspired by Google Analytics' one-line integration approach

<br>

---

<br>

<div align="center">

**[⬆ Back to Top](#-table-of-contents)**

Made with ❤️ for developers

</div>
