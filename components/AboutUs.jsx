import YellowButton from "./YellowButton";

export default function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

  {/* Center Heading With Yellow Line */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-[#0e355d]">
      About Us
    </h2>
    <div className="h-1 w-20 bg-red-400 mx-auto mt-3 rounded-full"></div>
  </div>

  {/* Content Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Image */}
    <div className="flex justify-center md:justify-start">
      <img 
        src="/about-us.png"
        alt="About"
        className="w-full max-w-md"
      />
    </div>

    {/* Right Text */}
    <div>
      <p className="text-gray-500 leading-relaxed mb-6">
        Keptel was born out of an insatiable quest to cater to the assorted 
        organisational requirements by mapping the talent pool with the current 
        organizational opportunities and challenges thereby providing the best in 
        class and tallor made Human resources that aptly and instantly fit into the 
        job role thus bridging the gap between the Employer and the potential 
        candidate.
      </p>

      <p className="text-gray-500 leading-relaxed mb-6">
        Being equipped with market insights and talent mapping expertise, research 
        on talent landscape by location, skill and organisation are our exceptional 
        competence always put into motion. Our indigenously developed talent concepts 
        defines our passion for “Talent Mobility”, a key elixir for business success.
      </p>

      <YellowButton text="Know More" href="/about" />
    </div>
  </div>

</section>

  );
}
