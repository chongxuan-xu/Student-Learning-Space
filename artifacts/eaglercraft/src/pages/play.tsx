import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const VERSION_CLIENTS: Record<string, { label: string; client: string }> = {
  "1.5.2": { label: "1.5.2", client: "/client_1.5.2.html" },
  "1.8.8": { label: "1.8.8", client: "/client.html" },
  "1.12.2": { label: "1.12.2", client: "/client_1.12.2.html" },
};

export default function Play() {
  const params = new URLSearchParams(window.location.search);
  const versionId = params.get("version") || "1.8.8";
  const version = VERSION_CLIENTS[versionId] || VERSION_CLIENTS["1.8.8"];

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-50 flex flex-col">
      <div className="h-12 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 justify-between">
        <Link href="/" className="flex items-center gap-2 font-pixel text-xs text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          RETURN TO PORTAL
        </Link>
        <div className="font-pixel text-[10px] text-zinc-500">
          EAGLERCRAFT {version.label}
        </div>
      </div>
      <div className="flex-1 w-full bg-black">
        <iframe
          src={version.client}
          className="w-full h-full border-0"
          title={`Eaglercraft ${version.label}`}
          allow="fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture"
        />
      </div>
    </div>
  );
}
