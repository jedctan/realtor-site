import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      {/* Hero Section */}
      <section className="relative py-0 px-0 sm:px-0 lg:px-0">
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <Image
            src="/home-pic.jpg"
            alt="Carmela Flores-Tan - Home Hero"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center bottom" }}
            sizes="100vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              FIND YOUR DREAM HOME
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/listings"
                className="bg-[#213555] hover:bg-[#3E5879] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Browse Listings
              </Link>

              <Link
                href="/contact"
                className="border border-[#213555] text-[#213555] hover:bg-[#D8C4B6] font-semibold py-3 px-8 rounded-lg transition-colors duration-200 bg-[#F5EFE7] bg-opacity-90"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#213555] mb-12">
            Why Work With Me?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#D8C4B6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#213555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#213555]">Expert Guidance</h3>
              <p className="text-[#3E5879]">Personalized guidance throughout your real estate journey, tailored to your needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#D8C4B6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#213555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#213555]">Local Knowledge</h3>
              <p className="text-[#3E5879]">Deep understanding of the local market to help you make informed decisions.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#D8C4B6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#213555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#213555]">Responsive Service</h3>
              <p className="text-[#3E5879]">Prompt, attentive support to answer your questions and assist with your real estate needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#213555]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            Let me help you find the perfect property or sell your current home for maximum value.
          </p>
          <button className="bg-[#F5EFE7] text-[#213555] hover:bg-[#D8C4B6] font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
