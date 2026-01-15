"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PackageViewDialog from "./PackageViewDialog";
import { Package } from "@/lib/types";

const PackagesPage = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("/api/packages");
        if (!response.ok) throw new Error("Failed to fetch packages");
        const data = await response.json();
        setPackages(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load packages");
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  return (
    <div className="p-8 w-full max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/dashboard"
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
        >
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold">Packages</h1>
      </div>
      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">{error}</div>
      ) : packages.length === 0 ? (
        <div className="text-center py-8">No packages found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {packages.map((pkg: Package) => (
            <div
              key={pkg.id || pkg.name}
              className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 flex flex-col gap-2 border border-zinc-100 dark:border-zinc-800 cursor-pointer hover:ring-2 hover:ring-blue-400 transition"
              onClick={() => setSelectedPackage(pkg)}
            >
              <div className="font-semibold text-lg">{pkg.name}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                {pkg.country}
              </div>
              {pkg.places_image && (
                <Image
                  src={pkg.places_image}
                  alt={pkg.name}
                  className="w-full h-40 object-cover rounded-md mb-2"
                  width={500}
                  height={300}
                />
              )}
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                {pkg.title || "No description."}
              </div>
            </div>
          ))}
        </div>
      )}
      <PackageViewDialog
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
      />
    </div>
  );
};

export default PackagesPage;
