import Link from "next/link";

const DashboardPage = () => {
  const style =
    "border border-gray-300 rounded-lg text-center py-6 cursor-not-allowed hover:bg-gray-300";

  return (
    <>
      <div className="pt-10 w-screen flex flex-col gap-12 items-center justify-center">
        <h1>Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-4xl px-4">
          <Link
            href="/dashboard/packages"
            className="border border-gray-300 rounded-lg text-center py-6"
          >
            Packages
          </Link>
          <div className={style}>Bookings</div>
          <div className={style}>Users</div>
          <div className={style}>Reports</div>
          <div className={style}>Analytics</div>
          <div className={style}>Settings</div>
          <div className={style}>Support</div>
          <div className={style}>Feedback</div>
          <div className={style}>Help Center</div>
          <div className={style}>API</div>
          <div className={style}>Other</div>
          <div className={style}>More</div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
