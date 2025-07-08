export default function EducationPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Education</h1>
          <p className="text-xl text-gray-700 mb-8">
            Empowering you with knowledge for every step of your real estate journey.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            As a dedicated realtor, I believe that informed clients make the best decisions. Here you'll find resources, tips, and guides to help you understand the buying, selling, and investing process. Whether you're a first-time homebuyer or a seasoned investor, my goal is to provide you with the education you need to succeed in the real estate market.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Home Buying 101</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              <li>Understanding the buying process</li>
              <li>How to get pre-approved for a mortgage</li>
              <li>What to look for in a home</li>
              <li>Making an offer and negotiating</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Selling Your Home</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              <li>Preparing your home for sale</li>
              <li>Pricing strategies</li>
              <li>Marketing your property</li>
              <li>Navigating offers and closing</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Real Estate Investing</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              <li>Types of investment properties</li>
              <li>Analyzing potential returns</li>
              <li>Managing rental properties</li>
              <li>Long-term wealth building</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Frequently Asked Questions</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              <li>How do I start the buying process?</li>
              <li>What are closing costs?</li>
              <li>How do I choose the right realtor?</li>
              <li>What should I know about the local market?</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 