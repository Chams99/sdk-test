export class WebSDK {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async request(url: string, options: RequestInit = {}) {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
        'Authorization': `Bearer ${this.apiKey}`
      }
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(`API Error: ${response.status} - ${JSON.stringify(error)}`);
    }

    return response.json();
  }

  async chat(message: string, model: string = 'openai/gpt-3.5-turbo') {
    const referer = typeof window !== 'undefined' && window.location 
      ? window.location.origin 
      : 'https://localhost';
    
    return this.request('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'HTTP-Referer': referer,
        'X-Title': 'Web SDK'
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: message }]
      })
    });
  }

  async models() {
    return this.request('https://openrouter.ai/api/v1/models');
  }
}


