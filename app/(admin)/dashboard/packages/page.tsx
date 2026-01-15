"use client";
import { Button } from "@/components/ui/button";
import { Package } from "@/lib/types";
import { ArrowLeft, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PackageCreateEditDialog } from "./PackageCreateEditDialog";
import PackageViewDialog from "./PackageViewDialog";
import { toast } from "sonner";

const PackagesPage = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchPackages = async () => {
    if (!loading) setIsRefreshing(true); // only set refreshing if not initial load
    try {
      const response = await fetch("/api/packages");
      if (!response.ok) throw new Error("Failed to fetch packages");
      const data = await response.json();
      setPackages(data);
      setError("");
    } catch (err) {
      setError("Failed to load packages");
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
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
        <div className="flex items-center gap-2 justify-between w-full">
          <h1 className="text-2xl font-bold">Packages</h1>
          <Button variant="outline" onClick={() => setIsCreateDialogOpen(true)}>
            Create new <PlusIcon size={16} className="text-zinc-500 mt-1" />
          </Button>
        </div>
      </div>
      {loading && packages.length === 0 ? (
        <div className="text-center py-8">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">{error}</div>
      ) : packages.length === 0 ? (
        <div className="text-center py-8">No packages found.</div>
      ) : (
        <>
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
          {isRefreshing && (
            <div className="text-center mt-4 text-sm text-gray-500">
              Refreshing packages...
            </div>
          )}
        </>
      )}

      <PackageCreateEditDialog
        setIsCreateDialogOpen={setIsCreateDialogOpen}
        isCreateDialogOpen={isCreateDialogOpen}
        // onClose={() => setIsCreateDialogOpen(false)}
        onSubmit={async (data) => {
          // Handle package creation logic here
          console.log("Creating package:", data);

          try {
            const response = await fetch("/api/packages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            fetchPackages();
            console.log("Response:", response);
            if (!response.ok) throw new Error("Failed to create package");
            // Optionally, refresh the package list or add the new package to state
          } catch (error) {
            console.error(error);
          }
          toast.success("Package created successfully!");

          setIsCreateDialogOpen(false);
        }}
      />
      <PackageViewDialog
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
        onDelete={async (pkg: Package) => {
          try {
            const response = await fetch(`/api/packages?id=${pkg.id}`, {
              method: "DELETE",
            });
            if (!response.ok) throw new Error("Failed to delete package");
            toast.success("Package deleted successfully!");
            setSelectedPackage(null);
            fetchPackages(); // Refetch after delete
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </div>
  );
};

export default PackagesPage;
