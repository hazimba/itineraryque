"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Package } from "@/lib/types";

const PackagePage = () => {
  const fetchPackages = async () => {
    const response = await fetch("/api/packages");
    if (!response.ok) {
      throw new Error("Failed to fetch packages");
    }
    return response.json();
  };

  const [packages, setPackages] = useState<Package[]>([]);

  console.log("Fetched packages:", packages);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        const data = await fetchPackages();
        setPackages(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadPackages();
  }, []);

  return (
    <div className="p-8 w-full max-w-7xl flex gap-10 flex-col justify-center">
      <div>Discover Our Package</div>
      {Object.values(
        packages.reduce((acc, curr) => {
          if (!acc[curr.country]) acc[curr.country] = [];
          acc[curr.country].push(curr);
          return acc;
        }, {} as Record<string, typeof packages>)
      ).map((countryPackages) => (
        <div key={countryPackages[0].country} className="mb-8">
          <div className="mb-2 text-lg font-semibold">
            {countryPackages[0].country}
          </div>
          <div
            className="w-full flex md:flex-row flex-col gap-4 text-center max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400"
            style={{ maxWidth: "100vw" }}
          >
            {countryPackages.map((i) => (
              <div
                key={i.name}
                className="relative md:min-w-[400px] md:max-w-[400px] md:h-[300px] min-w-[200px] max-w-screen h-[100px] flex items-center justify-center cursor-pointer group"
              >
                <Image
                  src={i.places_image}
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
