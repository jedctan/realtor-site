export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#213555] to-[#3E5879] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Carmela Flores-Tan</h1>
            <p className="text-xl text-white">
              Get in touch with your trusted local real estate expert
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#213555] mb-6">Send me a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#213555] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border border-[#D8C4B6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#213555] text-[#213555]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#213555] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 border border-[#D8C4B6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#213555] text-[#213555]"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#213555] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-[#D8C4B6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#213555] text-[#213555]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#213555] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-[#D8C4B6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#213555] text-[#213555]"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#213555] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-[#D8C4B6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#213555] text-[#213555]"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="renting">Renting a Property</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#213555] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-[#D8C4B6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#213555] text-[#213555]"
                    placeholder="Tell me about your real estate needs..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#213555] hover:bg-[#3E5879] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-[#213555] mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#D8C4B6] p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-[#213555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#213555]">Office Address</h3>
                      <p className="text-[#213555]">123 Real Estate Ave<br />City, State 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#D8C4B6] p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-[#213555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#213555]">Phone</h3>
                      <p className="text-[#213555]">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#D8C4B6] p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-[#213555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#213555]">Email</h3>
                      <p className="text-[#213555]">info@realtorpro.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#D8C4B6] p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-[#213555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#213555]">Business Hours</h3>
                      <p className="text-[#213555]">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-[#213555] mb-6">Visit My Office</h2>
                <div className="bg-[#D8C4B6] h-64 rounded-lg flex items-center justify-center">
                  <p className="text-[#213555]">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 