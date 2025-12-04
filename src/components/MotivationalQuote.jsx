import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

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
    <div className="glass-panel p-8 h-full flex flex-col justify-center relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <Quote size={80} />
      </div>
      
      <div className="relative z-10">
        <Quote size={24} className="text-primary mb-4 opacity-50" />
        <p className="font-heading font-medium text-lg md:text-xl text-slate-700 dark:text-slate-200 italic leading-relaxed mb-6">
          "{quote.text}"
        </p>
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-primary/50"></div>
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {quote.author}
          </p>
        </div>
      </div>
    </div>
  );
}
