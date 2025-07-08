export default function ListingsPage() {
  // Mock data for property listings
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      price: "$450,000",
      location: "Downtown",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Family Home with Garden",
      price: "$650,000",
      location: "Suburban Area",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2200,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Luxury Penthouse",
      price: "$1,200,000",
      location: "City Center",
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Cozy Starter Home",
      price: "$320,000",
      location: "Quiet Neighborhood",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 950,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Waterfront Villa",
      price: "$850,000",
      location: "Lake District",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 3500,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 6,
      title: "Investment Property",
      price: "$280,000",
      location: "University Area",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1400,
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=500&h=300&fit=crop",
      featured: false
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Property Listings</h1>
            <p className="text-xl text-blue-100 mb-8">
              Browse featured properties with Carmela Flores-Tan, your trusted local realtor.
            </p>
            
            {/* Search/Filter Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input
                    type="text"
                    placeholder="Location"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900">
                    <option>Price Range</option>
                    <option>$200k - $400k</option>
                    <option>$400k - $600k</option>
                    <option>$600k - $800k</option>
                    <option>$800k+</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900">
                    <option>Bedrooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Available Properties ({properties.length})
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                Grid View
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                List View
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {property.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{property.bedrooms} beds</span>
                    <span>{property.bathrooms} baths</span>
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-md transition-colors duration-200">
              Load More Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 