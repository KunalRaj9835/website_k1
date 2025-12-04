export default function CallToAction() {
  const logos: string[] = [
    "/client/amazon.svg",
    "/client/cocacola.svg",
    "/client/imax.svg",
    "/client/Mercedesbenz.svg",
    "/client/samsung.svg",
    "/client/visa.svg",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-8xl mx-auto text-center px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-[#0e355d]">
            Our Clients
          </h2>
          <div className="h-1 w-20 bg-red-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Infinite Logo Carousel — same logos on ALL screens */}
        <div className="w-full overflow-hidden py-6">
          <div className="flex gap-12 animate-scroll whitespace-nowrap">

            {/* Repeat the full array twice for infinite effect */}
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client Logo"
                className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
