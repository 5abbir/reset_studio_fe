import React, { useState } from 'react';

export default function ContactSection() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message sent — we will be in touch!');
    e.currentTarget.reset();
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Subscribed!');
    setNewsletterEmail('');
  };

  return (
    <section id="contact" className="bg-[#FAF9F6] py-16 md:py-24 text-[#26201A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <p className="text-xs font-bold tracking-wider uppercase text-[#4A5D4E]">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-2 text-[#26201A]">
            Questions before your first class?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EAE7E2] text-xl shrink-0">
                ✆
              </span>
              <div>
                <b className="block text-sm font-semibold tracking-wide uppercase text-[#26201A]">Phone</b>
                <p className="text-stone-600 mt-0.5">+880 1XXX-XXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EAE7E2] text-xl shrink-0">
                ✉
              </span>
              <div>
                <b className="block text-sm font-semibold tracking-wide uppercase text-[#26201A]">Email</b>
                <p className="text-stone-600 mt-0.5">hello@resetstudio.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EAE7E2] text-xl shrink-0">
                ⌖
              </span>
              <div>
                <b className="block text-sm font-semibold tracking-wide uppercase text-[#26201A]">Location</b>
                <p className="text-stone-600 mt-0.5">House XX, Road XX, Gulshan, Dhaka</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="flex flex-col gap-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#EAE7E2]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">Name</label>
                <input 
                  required 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-[#FAF9F6] text-[#26201A] focus:outline-none focus:ring-2 focus:ring-[#4A5D4E] text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">Phone</label>
                <input 
                  required 
                  type="tel" 
                  placeholder="01XXXXXXXXX" 
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-[#FAF9F6] text-[#26201A] focus:outline-none focus:ring-2 focus:ring-[#4A5D4E] text-sm"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">Email</label>
              <input 
                required 
                type="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-[#FAF9F6] text-[#26201A] focus:outline-none focus:ring-2 focus:ring-[#4A5D4E] text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-500">Message</label>
              <textarea 
                required 
                rows={4} 
                placeholder="How can we help?" 
                className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-[#FAF9F6] text-[#26201A] focus:outline-none focus:ring-2 focus:ring-[#4A5D4E] text-sm resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="self-start px-6 py-3 bg-[#4A5D4E] text-white hover:bg-[#3B4A3E] font-medium rounded-lg transition-colors duration-200 text-sm tracking-wide shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-16 p-8 md:p-10 bg-[#4A5D4E] text-white rounded-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-md">
          <div>
            <h3 className="text-xl md:text-2xl font-serif">Stay in the loop</h3>
            <p className="text-[#FAF9F6]/80 text-sm mt-1">Schedules, workshops and news — to your inbox.</p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-stretch sm:items-center">
            <input 
              type="email" 
              required 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Your email address" 
              className="px-4 py-2.5 rounded-lg text-[#26201A] bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#D98353] placeholder-stone-400 text-sm min-w-65 grow"
            />
            <button 
              type="submit" 
              className="px-6 py-2.5 bg-[#FAF9F6] hover:bg-[#EAE7E2] text-[#4A5D4E] font-semibold rounded-lg transition-colors duration-200 text-sm shadow-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}