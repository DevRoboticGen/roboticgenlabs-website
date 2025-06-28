type ProjectCardProps = {
  title: string;
  desc: string;
  img: string;
};

export default function ProjectCard({ title, desc, img }: ProjectCardProps) {
  return (
    <div
      className="rounded-xl shadow border border-blue-400 border-opacity-40 overflow-hidden group cursor-pointer"
      style={{
        minHeight: 380,
        background: "linear-gradient(to bottom, #0A121C, #213C5D)",
      }}
    >
      <div
        className="flex justify-center items-center w-full"
        style={{ height: 200 }}
      >
        <img
          src={img}
          alt={title}
          width={200}
          height={200}
          className="object-cover transition-transform duration-300 group-hover:scale-105 rounded"
          style={{ width: 200, height: 200 }}
        />
      </div>
      <div className="p-4">
        <span
          style={{
            background: "linear-gradient(to right, #B3CDEF, #FFFFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          <h3 className="inter-medium text-lg text-white">{title}</h3>
        </span>
        <span
          style={{
            background: "linear-gradient(225deg, #B3CDEF, #FFFFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          <p className="inter-light text-sm text-gray-400">{desc}</p>
        </span>
      </div>
    </div>
  );
}
