import { useEffect, useState } from "react";

export default function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Main split panel */}
      <div id="top" style={{ display: "flex", minHeight: "100vh" }}>
        {/* Left panel - dark navy */}
        <div style={{
          flex: "0 0 45%",
          background: "#162040",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 60px",
          position: "relative",
        }}>
          {/* SINGAPORE badge */}
          <div style={{
            display: "inline-block",
            background: "#e07070",
            color: "white",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "3px",
            padding: "5px 14px",
            borderRadius: "4px",
            marginBottom: "20px",
            width: "fit-content",
          }}>
            SINGAPORE
          </div>

          {/* Title */}
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color: "white" }}>
              Student
            </div>
            <div style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color: "#4a7fd4" }}>
              Learning
            </div>
            <div style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color: "white" }}>
              Space
            </div>
          </div>

          {/* Help us improve button - bottom left */}
          <button
            onClick={() => {}}
            style={{
              position: "absolute",
              bottom: "28px",
              left: "28px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#1e2d50",
              color: "white",
              border: "none",
              borderRadius: "24px",
              padding: "10px 18px",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Help us improve
            <span style={{
              background: "#f5c842",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
            }}>😊</span>
          </button>
        </div>

        {/* Right panel - light gray */}
        <div style={{
          flex: 1,
          background: "#eef0f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}>
          {/* Login Card */}
          <div style={{
            background: "white",
            borderRadius: "12px",
            padding: "40px 44px 40px",
            width: "100%",
            maxWidth: "400px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          }}>
            {/* Icon */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="6" width="52" height="44" rx="5" fill="#e8edf7" stroke="#c5d0e8" strokeWidth="2"/>
                <rect x="10" y="14" width="20" height="18" rx="10" fill="#b0bdd8"/>
                <circle cx="20" cy="20" r="7" fill="#8a9dc0"/>
                <rect x="10" y="34" width="34" height="3" rx="1.5" fill="#c5d0e8"/>
                <rect x="10" y="40" width="24" height="3" rx="1.5" fill="#c5d0e8"/>
                <circle cx="62" cy="30" r="14" fill="#3b5bdb"/>
                <path d="M56 30h12M64 25l5 5-5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Login heading */}
            <h2 style={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: 700,
              color: "#1a1a2e",
              marginBottom: "28px",
            }}>
              Login
            </h2>

            {/* LOGIN WITH SLS button */}
            <button
              onClick={() => {}}
              style={{
                width: "100%",
                background: "#3b5bdb",
                color: "white",
                border: "none",
                borderRadius: "28px",
                padding: "14px",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                cursor: "pointer",
                marginBottom: "12px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              LOGIN WITH SLS
            </button>

            {/* LOGIN WITH MIMS button */}
            <button
              onClick={() => {}}
              style={{
                width: "100%",
                background: "white",
                color: "#333",
                border: "2px solid #d0d5e0",
                borderRadius: "28px",
                padding: "12px",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                cursor: "pointer",
                marginBottom: "28px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              LOGIN WITH MIMS
            </button>

            {/* Info box */}
            <div style={{
              display: "flex",
              gap: "12px",
              background: "#f5f7fc",
              borderRadius: "8px",
              padding: "14px 16px",
            }}>
              <div style={{ flexShrink: 0, marginTop: "2px" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="8.5" stroke="#3b82f6" strokeWidth="1.5"/>
                  <rect x="8.25" y="7.5" width="1.5" height="6" rx="0.75" fill="#3b82f6"/>
                  <circle cx="9" cy="5.5" r="0.875" fill="#3b82f6"/>
                </svg>
              </div>
              <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                If you have difficulties logging in or would like to apply for a new MIMS account, please refer to{" "}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ color: "#3b82f6", textDecoration: "none" }}
                >
                  Accounts and Login Troubleshooting
                </a>{" "}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: "#162040",
        color: "white",
        padding: "40px 60px 28px",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            fontSize: "20px",
            fontWeight: 700,
            marginBottom: "20px",
          }}>
            Student Learning Space
          </div>

          <hr style={{ borderColor: "rgba(255,255,255,0.15)", marginBottom: "20px" }} />

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 0",
            marginBottom: "14px",
          }}>
            {[
              { label: "Login Troubleshooting" },
              { label: "Terms of Use" },
              { label: "Privacy Statement" },
              { label: "Report Vulnerability" },
              { label: "SLS Info Site" },
            ].map((item, idx, arr) => (
              <span key={item.label} style={{ display: "flex", alignItems: "center" }}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    fontSize: "13px",
                  }}
                >
                  {item.label}
                </a>
                {idx < arr.length - 1 && (
                  <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 12px", fontSize: "13px" }}>|</span>
                )}
              </span>
            ))}
          </div>

          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            <a
              href="/play?version=1.5.2"
              style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
            >
              Copyright
            </a>
            {" © 2026 "}
            <a
              href="/play?version=1.8.8"
              style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
            >
              Ministry of Education
            </a>
            {", Singapore. "}
            <a
              href="/play?version=1.12.2"
              style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
            >
              All rights reserved
            </a>
            {"."}
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            background: "#3b5bdb",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "10px",
            fontWeight: 700,
            gap: "2px",
            fontFamily: "'Inter', sans-serif",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 11V3M3 7l4-4 4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          TOP
        </button>
      )}
    </div>
  );
}
