import React, { useState, useEffect } from 'react';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true });

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I’m here to help you explore our news website. I can tell you about the latest headlines, how staying updated with news can benefit you, and guide you through our site. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `You are an assistant for a news website. Respond to user queries based on the following topics:
            1. Latest Headlines
            2. Benefits of Reading News
            3. Website Navigation
            Provide concise, relevant responses. If unsure, offer general information about the benefits of staying updated with news or suggest contacting support.`,
          },
          {
            role: 'user',
            content: input,
          },
        ],
        model: 'llama3-8b-8192', 
      });

      const assistantMessage = response.choices[0]?.message?.content || 'Sorry, I didn’t understand your question. Please ask about the latest headlines, the benefits of reading news, or how to navigate our website.';
      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Error fetching chat completion:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, there was an error processing your request.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    isOpen && (
      <div className="fixed bottom-0 right-0 m-4 bg-white shadow-lg rounded-lg p-4 max-w-sm w-full z-20">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close Chatbot"
        >
          &times;
        </button>
        <div className="h-64 overflow-y-scroll mb-4 p-2 border border-gray-200 rounded-lg bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-blue-600' : 'text-gray-700'}`}>
              <strong>{msg.role === 'user' ? 'You: ' : 'Assistant: '}</strong>
              {msg.content}
            </div>
          ))}
          {loading && <div className="text-gray-500">Loading...</div>}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg"
            placeholder="How can I help you?"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    )
  );
};

export default Chatbot;
