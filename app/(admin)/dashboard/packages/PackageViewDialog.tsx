import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Package } from "@/lib/types";

interface PackageViewDialogProps {
  selectedPackage: Package | null;
  setSelectedPackage: (pkg: Package | null) => void;
}

const PackageViewDialog = ({
  selectedPackage,
  setSelectedPackage,
}: PackageViewDialogProps) => {
  return (
    <Dialog
      open={!!selectedPackage}
      onOpenChange={() => setSelectedPackage(null)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{selectedPackage?.name}</DialogTitle>
          <DialogDescription>{selectedPackage?.country}</DialogDescription>
        </DialogHeader>
        {selectedPackage?.places_image && (
          <Image
            src={selectedPackage.places_image}
            alt={selectedPackage.name}
            className="w-full h-60 object-cover rounded-md mb-4"
            width={500}
            height={300}
          />
        )}
        <div className="space-y-2 text-zinc-700 dark:text-zinc-300 mb-2">
          {selectedPackage?.title && (
            <div>
              <span className="font-semibold">Title:</span>{" "}
              {selectedPackage.title}
            </div>
          )}
          {selectedPackage?.country && (
            <div>
              <span className="font-semibold">Country:</span>{" "}
              {selectedPackage.country}
            </div>
          )}
          {selectedPackage?.exclusions && (
            <div>
              <span className="font-semibold">Exclusions:</span>{" "}
              {selectedPackage.exclusions}
            </div>
          )}
          {selectedPackage?.features && (
            <div>
              <span className="font-semibold">Feature:</span>{" "}
              {selectedPackage.features}
            </div>
          )}
          {selectedPackage?.highlights && (
            <div>
              <span className="font-semibold">Highlights:</span>{" "}
              {selectedPackage.highlights}
            </div>
          )}
          {/* {selectedPackage?. && (
            <div>
              <span className="font-semibold">Hotel:</span>{" "}
              {selectedPackage.hotel}
            </div>
          )}
          {selectedPackage?.flight && (
            <div>
              <span className="font-semibold">Flight:</span>{" "}
              {selectedPackage.flight}
            </div>
          )}
          {selectedPackage?.transport && (
            <div>
              <span className="font-semibold">Transport:</span>{" "}
              {selectedPackage.transport}
            </div>
          )} */}
          {selectedPackage?.itinerary && (
            <div>
              <span className="font-semibold">Itinerary:</span>
              <ul className="list-disc list-inside ml-4">
                {Array.isArray(selectedPackage.itinerary) ? (
                  selectedPackage.itinerary.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))
                ) : (
                  <li>{selectedPackage.itinerary}</li>
                )}
              </ul>
            </div>
          )}
          {/* {selectedPackage?.contact && (
            <div>
              <span className="font-semibold">Contact:</span>{" "}
              {selectedPackage.contact}
            </div>
          )} */}
        </div>
        <DialogClose asChild>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full">
            Close
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
export default PackageViewDialog;
