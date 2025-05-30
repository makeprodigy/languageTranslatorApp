import React, { useState } from 'react'
import './App.css'

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'hi', name: 'Hindi' },
  { code: 'zh-Hans', name: 'Chinese (Simplified)' },
  { code: 'ar', name: 'Arabic' },
  // Add more as needed
];

function App() {
  const [input, setInput] = useState('');
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('es');
  const [translated, setTranslated] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const translate = async () => {
    setLoading(true);
    setError('');
    setTranslated('');
    try {
      const apiKey = import.meta.env.VITE_TRANSLATOR_KEY;
      const endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';
      const url = `${endpoint}&from=${from}&to=${to}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey,
          'Ocp-Apim-Subscription-Region': import.meta.env.VITE_TRANSLATOR_REGION || 'global',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ Text: input }]),
      });
      if (!res.ok) throw new Error('Translation failed');
      const data = await res.json();
      setTranslated(data[0]?.translations[0]?.text || '');
    } catch (err) {
      setError(err.message || 'Error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="translator-container">
      <h2>Language Translator</h2>
      <div className="textarea-wrapper">
        <textarea
          rows={4}
          placeholder="Enter text to translate..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </div>
      <div className="lang-row">
        <select value={from} onChange={e => setFrom(e.target.value)}>
          {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
        </select>
        <span className="arrow">→</span>
        <select value={to} onChange={e => setTo(e.target.value)}>
          {LANGUAGES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
        </select>
      </div>
      <button onClick={translate} disabled={loading || !input.trim()}>
        {loading ? 'Translating...' : 'Translate'}
      </button>
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      {translated && (
        <div className="result">
          <strong>Translation:</strong>
          <div>{translated}</div>
        </div>
      )}
    </div>
  );
}

export default App
