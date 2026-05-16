import { useGetServerConfig, getGetServerConfigQueryKey } from "@workspace/api-client-react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Play() {
  const { data: config } = useGetServerConfig({
    query: { queryKey: getGetServerConfigQueryKey() }
  });

  const clientUrl = config?.eaglercraftClientUrl || "/client.html";

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-50 flex flex-col">
      <div className="h-12 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 justify-between">
        <Link href="/" className="flex items-center gap-2 font-pixel text-xs text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          RETURN TO PORTAL
        </Link>
        <div className="font-pixel text-[10px] text-zinc-500">
          EAGLERCRAFT CLIENT {config?.websocketUrl ? `- CONNECTING TO ${config.websocketUrl}` : ""}
        </div>
      </div>
      <div className="flex-1 w-full bg-black">
        <iframe 
          src={clientUrl}
          className="w-full h-full border-0"
          title="Eaglercraft Client"
          allow="fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture"
        />
      </div>
    </div>
  );
}
