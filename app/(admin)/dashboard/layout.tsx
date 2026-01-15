import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navOptions = [
    { label: "Packages", href: "/dashboard/packages", enabled: true },
    { label: "Bookings", enabled: false },
    { label: "Users", enabled: false },
    { label: "Reports", enabled: false },
    { label: "Analytics", enabled: false },
    { label: "Settings", enabled: false },
    { label: "Support", enabled: false },
    { label: "Feedback", enabled: false },
    { label: "Help Center", enabled: false },
    { label: "API", enabled: false },
    { label: "Other", enabled: false },
    { label: "More", enabled: false },
  ];
  return (
    <div className="w-screen">
      <aside
        style={{
          width: "220px",
          background: "#1a202c",
          color: "#fff",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 100,
        }}
      >
        <div className="flex flex-col items-start mb-8">
          <h2 style={{ marginBottom: "2rem", fontWeight: "bold" }}>
            Admin Panel
          </h2>
          <Link href="/">Mainpage</Link>
        </div>
        <nav>
          {navOptions.map((option) => (
            <div
              key={option.label}
              style={{
                marginBottom: "1rem",
                opacity: option.enabled ? 1 : 0.5,
                cursor: option.enabled ? "pointer" : "not-allowed",
              }}
            >
              {option.enabled ? (
                <a
                  href={option.href}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {option.label}
                </a>
              ) : (
                <span>{option.label}</span>
              )}
            </div>
          ))}
        </nav>
      </aside>
      <Toaster position="top-center" />
      <main
        style={{
          flex: 1,
          background: "#f7fafc",
          padding: "2rem",
          marginLeft: "220px",
          minHeight: "100vh",
        }}
      >
        {children}
      </main>
    </div>
  );
}
