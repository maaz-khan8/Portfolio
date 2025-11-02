import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Use a simple form submission service that actually sends emails
      const response = await fetch('https://formspree.io/f/xwpbyplw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Email sending failed:', err);
      setError('Failed to send message. Please contact me directly at maaz.khan20307@gmail.com or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-blue-700 dark:text-blue-400">Contact</h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8">
          {submitted ? (
            <div className="text-center">
              <div className="text-green-600 dark:text-green-400 font-semibold text-lg mb-2">
                Thank you for reaching out!
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your message has been sent successfully. I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {error && (
                <div className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  {error}
                </div>
              )}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div className="flex gap-4 text-2xl">
              <a 
                href="https://www.linkedin.com/in/maaz-khan-5b9b12240/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-700 transform hover:scale-110 transition-all duration-200"
              >
                {React.createElement(FaLinkedin)}
              </a>
              <a 
                href="https://github.com/maaz-khan8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-900 dark:hover:text-white transform hover:scale-110 transition-all duration-200"
              >
                {React.createElement(FaGithub)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

