import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const PackagesPage = () => {
  return (
    <>
      <div className="pt-10 w-screen flex gap-12 items-center justify-center">
        <Link href="/dashboard">
          <ArrowLeft size={16} />
        </Link>
        <h1>Packages</h1>
      </div>
    </>
  );
};

export default PackagesPage;
