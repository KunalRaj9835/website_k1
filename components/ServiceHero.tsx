interface Props {
  title: string;
  bg: string;
}

export default function ServiceHero({ title, bg }: Props) {
  return (
    <div
      className="w-full h-52 md:h-60 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-red-500 drop-shadow-lg text-center px-4">
        {title}
      </h1>
    </div>
  );
}
