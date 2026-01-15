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
      {/* Sidebar */}
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
        <h2 style={{ marginBottom: "2rem", fontWeight: "bold" }}>
          Admin Panel
        </h2>
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
          {/* <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "1rem" }}>
              <a
                href="/dashboard"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Dashboard
              </a>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <a
                href="/dashboard/users"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Users
              </a>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Settings
              </a>
            </li>
          </ul> */}
        </nav>
      </aside>
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
