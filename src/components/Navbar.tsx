'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#213555]/90 backdrop-blur-sm shadow-lg' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-[#213555]'
              }`}
            >
              Carmela Flores-Tan
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:underline underline-offset-4 ${
                  isScrolled 
                    ? 'text-white hover:text-white' 
                    : 'text-[#213555] hover:text-[#3E5879]'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/listings" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:underline underline-offset-4 ${
                  isScrolled 
                    ? 'text-white hover:text-white' 
                    : 'text-[#213555] hover:text-[#3E5879]'
                }`}
              >
                Listings
              </Link>
              <Link 
                href="/education" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:underline underline-offset-4 ${
                  isScrolled 
                    ? 'text-white hover:text-white' 
                    : 'text-[#213555] hover:text-[#3E5879]'
                }`}
              >
                Education
              </Link>
              <Link 
                href="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:underline underline-offset-4 ${
                  isScrolled 
                    ? 'text-white hover:text-white' 
                    : 'text-[#213555] hover:text-[#3E5879]'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className={`p-2 transition-colors duration-300 ${
                isScrolled 
                  ? 'text-white hover:text-white' 
                  : 'text-[#213555] hover:text-[#3E5879]'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 