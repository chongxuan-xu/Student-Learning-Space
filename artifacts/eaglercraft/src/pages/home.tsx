import { useEffect, useState } from "react";

function SmileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="11" fill="#f5c518"/>
      <circle cx="7.5" cy="9.5" r="1.5" fill="#1a1a1a"/>
      <circle cx="14.5" cy="9.5" r="1.5" fill="#1a1a1a"/>
      <path d="M7 13.5c1 2 7 2 8 0" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const TITLE_FONT = "'Nunito', 'Arial Rounded MT Bold', sans-serif";
const BODY_FONT = "'Inter', sans-serif";

export default function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: BODY_FONT, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Main split panel */}
      <div id="top" style={{ display: "flex", minHeight: "100vh" }}>

        {/* Left panel - dark navy */}
        <div style={{
          flex: "0 0 46%",
          background: "#162040",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 64px",
          position: "relative",
          minHeight: "100vh",
        }}>
          {/* SINGAPORE badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#d9534f",
            color: "white",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "3px",
            padding: "6px 14px",
            borderRadius: "6px",
            marginBottom: "12px",
            width: "fit-content",
            fontFamily: TITLE_FONT,
          }}>
            SINGAPORE
          </div>

          {/* Title */}
          <div style={{ lineHeight: 1.05, fontFamily: TITLE_FONT }}>
            <div style={{
              fontSize: "clamp(44px, 5.2vw, 70px)",
              fontWeight: 900,
              color: "white",
            }}>
              Student
            </div>
            <div style={{
              fontSize: "clamp(44px, 5.2vw, 70px)",
              fontWeight: 900,
              color: "#5b8fd4",
            }}>
              Learning
            </div>
            <div style={{
              fontSize: "clamp(44px, 5.2vw, 70px)",
              fontWeight: 900,
              color: "white",
            }}>
              Space
            </div>
          </div>

          {/* Help us improve button */}
          <button
            onClick={() => {}}
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#1d2c4a",
              color: "white",
              border: "none",
              borderRadius: "20px",
              padding: "9px 14px 9px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: BODY_FONT,
            }}
          >
            Help us improve
            <SmileIcon />
          </button>
        </div>

        {/* Right panel - light gray */}
        <div style={{
          flex: 1,
          background: "#edf0f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}>
          {/* Login Card */}
          <div style={{
            background: "white",
            borderRadius: "10px",
            padding: "36px 44px 36px",
            width: "100%",
            maxWidth: "390px",
            boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
          }}>
            {/* Icon - using actual reference image */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
              <img
                src="/login-icon.png"
                alt="Login"
                style={{ width: "90px", height: "auto" }}
              />
            </div>

            {/* Login heading */}
            <h2 style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: 700,
              color: "#1a1a2e",
              marginBottom: "26px",
              marginTop: 0,
              fontFamily: BODY_FONT,
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
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.8px",
                cursor: "pointer",
                marginBottom: "11px",
                fontFamily: BODY_FONT,
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
                color: "#2a2a3a",
                border: "1.5px solid #c8cfe0",
                borderRadius: "28px",
                padding: "13px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.8px",
                cursor: "pointer",
                marginBottom: "26px",
                fontFamily: BODY_FONT,
              }}
            >
              LOGIN WITH MIMS
            </button>

            {/* Info box */}
            <div style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              background: "#f4f6fb",
              borderRadius: "8px",
              padding: "14px 16px",
            }}>
              <div style={{ flexShrink: 0, marginTop: "1px" }}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="8" stroke="#4a7fd4" strokeWidth="1.4"/>
                  <rect x="7.9" y="7" width="1.4" height="5.5" rx="0.7" fill="#4a7fd4"/>
                  <circle cx="8.5" cy="5.2" r="0.85" fill="#4a7fd4"/>
                </svg>
              </div>
              <p style={{ fontSize: "12.5px", color: "#4b5563", lineHeight: 1.65, margin: 0, fontFamily: BODY_FONT }}>
                If you have difficulties logging in or would like to apply for a new MIMS account, please refer to{" "}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{ color: "#4a7fd4", textDecoration: "none" }}
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
        padding: "36px 48px 28px",
      }}>
        <div style={{ maxWidth: "1100px" }}>
          <div style={{
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "18px",
            fontFamily: BODY_FONT,
          }}>
            Student Learning Space
          </div>

          <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.12)", marginBottom: "18px" }} />

          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}>
            {[
              "Login Troubleshooting",
              "Terms of Use",
              "Privacy Statement",
              "Report Vulnerability",
              "SLS Info Site",
            ].map((label, idx, arr) => (
              <span key={label} style={{ display: "flex", alignItems: "center" }}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontFamily: BODY_FONT,
                  }}
                >
                  {label}
                </a>
                {idx < arr.length - 1 && (
                  <span style={{ color: "rgba(255,255,255,0.25)", margin: "0 10px", fontSize: "13px" }}>|</span>
                )}
              </span>
            ))}
          </div>

          <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0, fontFamily: BODY_FONT }}>
            <a href="/play?version=1.5.2" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Copyright</a>
            {" © 2026 "}
            <a href="/play?version=1.8.8" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Ministry of Education</a>
            {", Singapore. "}
            <a href="/play?version=1.12.2" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>All rights reserved</a>
            {"."}
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "#3b5bdb",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "46px",
            height: "46px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "9px",
            fontWeight: 700,
            gap: "1px",
            fontFamily: BODY_FONT,
            boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
            letterSpacing: "0.5px",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M6.5 10.5V2.5M2.5 6.5l4-4 4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          TOP
        </button>
      )}
    </div>
  );
}
