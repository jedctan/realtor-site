import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#213555] text-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Carmela Flores-Tan</h3>
            <p className="text-white text-sm">
              Your trusted partner in real estate. I help you find your dream home or sell your property with confidence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-[#D8C4B6] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-white hover:text-[#D8C4B6] transition-colors duration-200">
                  Listings
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-white hover:text-[#D8C4B6] transition-colors duration-200">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-[#D8C4B6] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Me</h3>
            <div className="text-sm text-white space-y-2">
              <p>123 Real Estate Ave</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@realtorpro.com</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-[#3E5879] mt-8 pt-8 text-center">
          <p className="text-sm text-white">
            © 2024 Carmela Flores-Tan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 