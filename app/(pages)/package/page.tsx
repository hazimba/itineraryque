import Image from "next/image";

const PackagePage = () => {
  const places = [
    {
      country: "Malaysia",
      location: [
        {
          src: "https://images.pexels.com/photos/1173771/pexels-photo-1173771.jpeg",
          name: "Selangor",
        },
        {
          src: "https://images.pexels.com/photos/34315740/pexels-photo-34315740.jpeg",
          name: "Perak",
        },
        {
          src: "https://images.pexels.com/photos/3188623/pexels-photo-3188623.jpeg",
          name: "Sabah",
        },
        {
          src: "https://images.pexels.com/photos/574745/pexels-photo-574745.jpeg",
          name: "Terengganu",
        },
        {
          src: "https://images.pexels.com/photos/33985412/pexels-photo-33985412.jpeg",
          name: "Penang",
        },
      ],
    },
    {
      country: "Thailand",
      location: [
        {
          src: "https://images.pexels.com/photos/4024726/pexels-photo-4024726.jpeg",
          name: "Krabi",
        },
        {
          src: "https://images.pexels.com/photos/3243020/pexels-photo-3243020.jpeg",
          name: "Hatyai",
        },
        {
          src: "https://images.pexels.com/photos/792675/pexels-photo-792675.jpeg",
          name: "Phuket",
        },
      ],
    },
    {
      country: "Indonesia",
      location: [
        {
          src: "https://images.pexels.com/photos/761820/pexels-photo-761820.jpeg",
          name: "Bandung",
        },
        {
          src: "https://images.pexels.com/photos/6819387/pexels-photo-6819387.jpeg",
          name: "Jogjakarta",
        },
        {
          src: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg",
          name: "Bali",
        },
        {
          src: "https://images.pexels.com/photos/1539577/pexels-photo-1539577.jpeg",
          name: "Acheh",
        },
      ],
    },
  ];

  return (
    <div className="p-8 w-full max-w-7xl flex gap-10 flex-col justify-center">
      <div>Discover Our Package</div>
      {places.map((place) => (
        <div key={place.country} className="mb-8">
          <div className="mb-2 text-lg font-semibold">{place.country}</div>
          <div
            className="w-full flex md:flex-row flex-col gap-4 text-center max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400"
            style={{ maxWidth: "100vw" }}
          >
            {place.location.map((i) => (
              <div
                key={i.name}
                className="relative md:min-w-[400px] md:max-w-[400px] md:h-[300px] min-w-[200px] max-w-screen h-[100px] flex items-center justify-center cursor-pointer group"
              >
                <Image
                  src={i.src}
                  alt={i.name}
                  fill
                  className="object-cover rounded-lg group-hover:brightness-75 transition duration-300"
                  style={{ zIndex: 0 }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <span className="text-white text-xl font-bold drop-shadow-lg">
                    {i.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackagePage;
