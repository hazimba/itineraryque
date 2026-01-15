import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Package } from "@/lib/types";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type PackageViewDialogProps = {
  selectedPackage: Package | null;
  setSelectedPackage: (pkg: Package | null) => void;
  onDelete: (pkg: Package) => void;
};

const PackageViewDialog = ({
  selectedPackage,
  setSelectedPackage,
  onDelete,
}: PackageViewDialogProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  if (!selectedPackage) return null;

  return (
    <Dialog
      open={!!selectedPackage}
      onOpenChange={() => setSelectedPackage(null)}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex justify-between items-center">
            <div>{selectedPackage.name}</div>
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Trash2 className="cursor-pointer text-red-600 hover:text-red-800" />
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="flex flex-col gap-3">
                  <span className="font-semibold text-red-700">
                    Sumpah ah nak delete ni?
                  </span>
                  <span className="text-sm text-gray-600">Takleh undo ye.</span>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="destructive"
                      className="flex-1"
                      onClick={() => {
                        setPopoverOpen(false);
                        if (onDelete) onDelete(selectedPackage);
                        setSelectedPackage(null);
                      }}
                    >
                      Buang laluh
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setPopoverOpen(false)}
                    >
                      kencel
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </DialogTitle>
          <DialogDescription className="text-lg">
            {selectedPackage.country} • {selectedPackage.loc}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {selectedPackage.places_image && (
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={selectedPackage.places_image}
                alt={selectedPackage.name}
                className="w-full h-full object-cover"
                width={800}
                height={400}
              />
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold">{selectedPackage.title}</h3>
            <div className="text-gray-600 mt-1">{selectedPackage.subtitle}</div>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <span className="font-semibold">Mode:</span>{" "}
              {selectedPackage.mode}
            </div>
            <div>
              <span className="font-semibold">Season:</span>{" "}
              {selectedPackage.season}
            </div>
            <div>
              <span className="font-semibold">Type:</span>{" "}
              {selectedPackage.type}
            </div>
            <div>
              <span className="font-semibold">Meal:</span>{" "}
              {selectedPackage.meal}
            </div>
            <div>
              <span className="font-semibold">Appearance:</span>{" "}
              {selectedPackage.appearance}
            </div>
            <div>
              <span className="font-semibold">Route:</span>{" "}
              {selectedPackage.route}
            </div>
          </div>

          {selectedPackage.features && selectedPackage.features.length > 0 && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Features</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPackage.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedPackage.highlights && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Highlights</h4>
              <div className="text-gray-700 whitespace-pre-line">
                {selectedPackage.highlights}
              </div>
            </div>
          )}

          {selectedPackage.itinerary && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Itinerary</h4>
              <div className="text-gray-700 whitespace-pre-line">
                {selectedPackage.itinerary}
              </div>
            </div>
          )}

          {selectedPackage.other_itinerary && (
            <div>
              <h4 className="font-semibold text-lg mb-2">
                Additional Itinerary
              </h4>
              <div className="text-gray-700 whitespace-pre-line">
                {selectedPackage.other_itinerary}
              </div>
            </div>
          )}

          {selectedPackage.inclusions && (
            <div>
              <h4 className="font-semibold text-lg mb-2 text-green-700">
                ✓ Inclusions
              </h4>
              <div className="text-gray-700 whitespace-pre-line bg-green-50 p-4 rounded-lg">
                {selectedPackage.inclusions}
              </div>
            </div>
          )}

          {selectedPackage.exclusions && (
            <div>
              <h4 className="font-semibold text-lg mb-2 text-red-700">
                ✗ Exclusions
              </h4>
              <div className="text-gray-700 whitespace-pre-line bg-red-50 p-4 rounded-lg">
                {selectedPackage.exclusions}
              </div>
            </div>
          )}

          {selectedPackage.terms && (
            <div>
              <h4 className="font-semibold text-lg mb-2">Terms & Conditions</h4>
              <div className="text-gray-600 text-sm whitespace-pre-line bg-gray-50 p-4 rounded-lg">
                {selectedPackage.terms}
              </div>
            </div>
          )}
        </div>

        <DialogClose asChild>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full">
            Close
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default PackageViewDialog;
