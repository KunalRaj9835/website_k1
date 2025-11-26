"use client";

export default function ExlTallCard({ title, desc, image, href }) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className="block w-full bg-[#F5F5F5] pb-12 hover:opacity-95 transition min-h-[540px]"
    >
      {/* IMAGE */}
      <div className="w-full h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="px-8 pt-10">
        <h3 className="text-2xl font-semibold text-[#e5170f] leading-snug">
          {title}
        </h3>

        <p className="mt-5 text-gray-700 text-[17px] leading-relaxed">
          {desc}
        </p>

        {/* SHOW ONLY IF href EXISTS */}
        {href && (
          <div className="mt-10 text-[#e5170f] font-medium flex items-center gap-2">
            <span>Explore more</span>
            <span className="text-xl">→</span>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
