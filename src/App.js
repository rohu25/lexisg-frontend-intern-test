import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {
    if (!query.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const mockResponse = {
        answer:
          'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.',
        citations: [
          {
            text: 'as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.',
            source: 'Dani_Devi_v_Pritam_Singh.pdf',
            link:
              'https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz',
          },
        ],
      };
      setResponse(mockResponse);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="app-container">
      <div className="chat-box">
        <h1 className="header">Lexi Legal Assistant</h1>
        <textarea
          className="query-box"
          rows="6"
          placeholder="Ask your legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Thinking...' : 'Ask'}
        </button>

        {response && (
          <div className="response-card">
            <h3 className="response-title">Answer:</h3>
            <p className="response-text">{response.answer}</p>
            <h4 className="citation-title">Citation:</h4>
            <blockquote className="citation-text">{response.citations[0].text}</blockquote>
            <a
              href={response.citations[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              View PDF - {response.citations[0].source}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
