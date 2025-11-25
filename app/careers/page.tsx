"use client";

import ServiceHero from "@/components/ServiceHero";
import YellowButton from "@/components/YellowButton";
import Footer from "@/components/Footer";

export default function CareersPage() {
  const title = "Careers";
  const bg = "/services-bg.jpg";

  return (
    <div>
      {/* HERO */}
      <ServiceHero title={title} bg={bg} />

      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-[#0e355d] mb-6">
          Find Your Path
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          With the mission of providing the best talent solutions to our Clients,
          Keptal has consistently performed the custom of engaging the potential
          talents, who are passionate to learn, grow, and deliver excellence.
        </p>

        <p className="text-gray-700 leading-relaxed">
          If you are interested in a challenging and rewarding career
          opportunity, we would invite you to explore interesting career at
          Keptal. Join a team of experienced and qualified professionals to plan
          an outstanding career.
        </p>
      </section>

      {/* DOMAINS SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <h2 className="text-4xl font-bold text-center text-[#0e355d]">
          Domains
        </h2>

        <div className="h-1 w-20 bg-[#0e355d] mx-auto mt-3 rounded-full" />

        <p className="text-center text-gray-600 mt-6 max-w-xl mx-auto">
          Talent building has been an ongoing business process for many of our
          clients in their organizational pyramid, which range from leadership
          to lateral hiring.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">

          {/* BOX 1 */}
          <div className="flex flex-col items-center cursor-pointer
                        transition-all duration-300 hover:scale-105 
                        hover:shadow-xl p-6 rounded-xl">
            <img src="/icon/c1.svg" className="w-12 mb-4" />
            <p className="text-xl font-semibold text-[#0e355d]">Technology</p>
          </div>

          {/* BOX 2 */}
          <div className="flex flex-col items-center cursor-pointer
                        transition-all duration-300 hover:scale-105 
                        hover:shadow-xl p-6 rounded-xl">
            <img src="/icon/c2.svg" className="w-12 mb-4" />
            <p className="text-xl font-semibold text-[#0e355d]">Functional</p>
          </div>

          {/* BOX 3 */}
          <div className="flex flex-col items-center cursor-pointer
                        transition-all duration-300 hover:scale-105 
                        hover:shadow-xl p-6 rounded-xl">
            <img src="/icon/c3.svg" className="w-12 mb-4" />
            <p className="text-xl font-semibold text-[#0e355d]">Leadership</p>
          </div>

          {/* BOX 4 */}
          <div className="flex flex-col items-center cursor-pointer
                        transition-all duration-300 hover:scale-105 
                        hover:shadow-xl p-6 rounded-xl">
            <img src="/icon/c4.svg" className="w-12 mb-4" />
            <p className="text-xl font-semibold text-[#0e355d]">Fresher</p>
          </div>

        </div>

        {/* KNOW MORE BUTTON */}
        <div className="flex justify-center mt-12">
          <YellowButton text="Know More" href="/contact-us" />
        </div>

        {/* EMAIL BOX */}
        <div className="max-w-xl mx-auto bg-white mt-20 shadow-xl rounded-2xl p-10 text-center">
          <p className="text-xl font-semibold text-[#0e355d] mb-3">
            Share your resume with our Talent Team to explore relevant openings
          </p>
          <a
            href="mailto:jobs@Keptalgroup.com"
            className="text-[#0e355d] underline text-lg font-medium"
          >
            jobs@Keptalgroup.com
          </a>
        </div>
      </section>
        <Footer />
    </div>
  );
}
