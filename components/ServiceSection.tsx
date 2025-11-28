interface Props {
  image: string;
  title: string;
  text: string;
  index: number;
}

export default function ServiceSection({ image, title, text, index }: Props) {
  const reverse = index % 2 === 1;

  return (
    <div className="grid md:grid-cols-2 gap-10 py-16 max-w-7xl mx-auto px-6">
      
      {/* IMAGE */}
      <div className={`${reverse ? "order-2" : "order-1"}`}>
        <div className="w-full aspect-[4/3]">
          <img
            src={image}
            className="w-full h-full object-cover rounded-xl shadow"
          />
        </div>
      </div>

      {/* TEXT */}
      <div className={`${reverse ? "order-1" : "order-2"}`}>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {text}
        </p>
      </div>
    </div>
  );
}
