"use client";

interface SideBySideCardProps {
  title: string;
  text: string;
  image: string;
  color: string; // hex or rgb or tailwind hex
  href?: string;
}

export default function SideBySideCard({
  title,
  text,
  image,
  color,
  href,
}: SideBySideCardProps) {
  return (
    <div className="flex flex-col h-full">
      {/* IMAGE */}
      <div className="h-60 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT AREA WITH CUSTOM COLOR */}
      <div
        className="p-10 flex flex-col flex-1"
        style={{ backgroundColor: color }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-[#e5170f] mt-4">
          {title}
        </h3>

        <p className="text-base leading-relaxed flex-1 mt-4">
          {text}
        </p>

        {href && (
          <a
            href={href}
            className="mt-8 inline-flex items-center font-medium mt-4"
          >
            Read more →
          </a>
        )}
      </div>
    </div>
  );
}
