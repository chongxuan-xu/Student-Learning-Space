import { useLocation } from "wouter";

const VERSION_CLIENTS: Record<string, { label: string; client: string }> = {
  "1.5.2": { label: "1.5.2", client: "/client_1.5.2.html" },
  "1.8.8": { label: "1.8.8", client: "/client.html" },
  "1.12.2": { label: "1.12.2", client: "/client_1.12.2.html" },
};

export default function Play() {
  const [, navigate] = useLocation();
  const params = new URLSearchParams(window.location.search);
  const versionId = params.get("version") || "1.8.8";
  const version = VERSION_CLIENTS[versionId] || VERSION_CLIENTS["1.8.8"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .play-bar {
          font-family: 'Press Start 2P', 'Courier New', monospace;
        }
        .return-btn:hover {
          color: #ffffff !important;
        }
      `}</style>
      <div style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        background: "black",
        display: "flex",
        flexDirection: "column",
        zIndex: 50,
      }}>
        {/* Header bar */}
        <div
          className="play-bar"
          style={{
            height: "48px",
            background: "#1a1a1a",
            borderBottom: "1px solid #2a2a2a",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            flexShrink: 0,
          }}
        >
          <button
            className="return-btn"
            onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "none",
              border: "none",
              color: "#888888",
              fontSize: "10px",
              fontFamily: "inherit",
              cursor: "pointer",
              letterSpacing: "1px",
              padding: 0,
              transition: "color 0.15s",
            }}
          >
            ← RETURN TO PORTAL
          </button>

          <span style={{
            color: "#888888",
            fontSize: "10px",
            letterSpacing: "1px",
          }}>
            EAGLERCRAFT {version.label}
          </span>
        </div>

        {/* Game iframe */}
        <div style={{ flex: 1, width: "100%", background: "black" }}>
          <iframe
            src={version.client}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
            }}
            title={`Eaglercraft ${version.label}`}
            allow="fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          />
        </div>
      </div>
    </>
  );
}
