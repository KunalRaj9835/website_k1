import Link from "next/link";

export default function FooterNewsletter() {
  return (
    <section className="bg-[#0e355d] py-20 px-6 relative overflow-hidden">

      {/* Red diagonal bar */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-red-500 transform rotate-[-2deg] origin-left"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">

        {/* Left text */}
        <div>
          <h2 className="text-3xl font-bold text-red-500 leading-snug">
            Don't Miss Out on Our Monthly  
            <br /> Newsletter
          </h2>
        </div>

        {/* Right form */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email ID"
            className="w-full p-4 rounded-lg bg-white text-gray-700 outline-none"
          />

          <div className="bg-white p-4 rounded-lg">
            <p className="text-gray-500 text-sm">[ reCAPTCHA placeholder ]</p>
          </div>

          <Link 
            href="#" 
            className="inline-flex items-center justify-center bg-[#0e72b5] text-white font-semibold w-full h-12 rounded-md transition-all duration-300 hover:bg-[#095c92]"
          >
            Subscribe
          </Link>

        </div>

      </div>
    </section>
  );
}
