import React, { useState, useEffect } from 'react';

const quotes = [
  {
    text: "A different language is a different vision of life.",
    author: "Federico Fellini"
  },
  {
    text: "To have another language is to possess a second soul.",
    author: "Charlemagne"
  },
  {
    text: "One language sets you in a corridor for life. Two languages open every door along the way.",
    author: "Frank Smith"
  },
  {
    text: "The limits of my language mean the limits of my world.",
    author: "Ludwig Wittgenstein"
  },
  {
    text: "Learning is a treasure that will follow its owner everywhere.",
    author: "Chinese Proverb"
  },
  {
    text: "Every day is a new beginning. Take a deep breath and start again.",
    author: "Unknown"
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  }
];

export default function MotivationalQuote() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    // Get quote of the day based on current date
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const quoteIndex = dayOfYear % quotes.length;
    setQuote(quotes[quoteIndex]);
  }, []);

  return (
    <div className="quote-card">
      <div className="quote-icon">💭</div>
      <div className="quote-content">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">— {quote.author}</p>
      </div>

      <style>{`
        .quote-card {
          background: linear-gradient(135deg, rgba(139, 157, 124, 0.08), rgba(139, 157, 124, 0.03));
          border-radius: var(--radius-lg);
          padding: var(--spacing-sm) var(--spacing-md);
          border: 1px solid rgba(139, 157, 124, 0.2);
          box-shadow: var(--shadow-page);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        .quote-card::before {
          content: '"';
          position: absolute;
          top: -15px;
          left: 10px;
          font-size: 80px;
          font-family: Georgia, serif;
          color: rgba(139, 157, 124, 0.1);
          line-height: 1;
          pointer-events: none;
        }

        .quote-icon {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-xs);
          position: relative;
          z-index: 1;
        }

        .quote-content {
          position: relative;
          z-index: 1;
        }

        .quote-text {
          font-size: 0.95rem;
          font-style: italic;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xs);
          font-family: 'Crimson Text', Georgia, serif;
        }

        .quote-author {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
          text-align: right;
        }
      `}</style>
    </div>
  );
}
