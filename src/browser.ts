import { WebSDK } from './index';

declare global {
  interface Window {
    MySDK: {
      init: (apiKey: string) => void;
      chat: (message: string, model?: string) => Promise<any>;
      models: () => Promise<any>;
    };
  }
}

let sdk: WebSDK | null = null;

const MySDK = {
  init(apiKey: string) {
    sdk = new WebSDK(apiKey);
  },
  async chat(message: string, model?: string) {
    if (!sdk) throw new Error('Call MySDK.init(apiKey) first');
    return sdk.chat(message, model);
  },
  async models() {
    if (!sdk) throw new Error('Call MySDK.init(apiKey) first');
    return sdk.models();
  }
};

if (typeof window !== 'undefined') {
  window.MySDK = MySDK;
  
  // Auto-initialize from script tag: <script src="sdk.min.js?key=API_KEY"></script>
  (function() {
    // Try currentScript first (most reliable)
    let script = document.currentScript as HTMLScriptElement;
    
    // Fallback: find script tag that loaded this file
    if (!script || !script.src) {
      const scripts = document.getElementsByTagName('script');
      for (let i = scripts.length - 1; i >= 0; i--) {
        if (scripts[i].src && scripts[i].src.includes('sdk.min.js')) {
          script = scripts[i] as HTMLScriptElement;
          break;
        }
      }
    }
    
    if (script && script.src) {
      try {
        const url = new URL(script.src, window.location.href);
        const key = url.searchParams.get('key');
        if (key) {
          // Check if it's a placeholder
          const isPlaceholder = key === 'your-api-key' || 
                               key === 'YOUR_OPENROUTER_API_KEY' ||
                               key.toLowerCase().includes('your') ||
                               key.toLowerCase().includes('api-key');
          
          if (isPlaceholder) {
            console.warn('⚠️ MySDK: Please replace the placeholder API key with your actual OpenRouter API key!');
            console.warn('   Get your key at: https://openrouter.ai/keys');
          } else {
            MySDK.init(key);
          }
        }
      } catch (e) {
        // URL parsing failed, skip auto-init
      }
    }
  })();
}

export default MySDK;

