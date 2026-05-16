import { useGetServerStatus, getGetServerStatusQueryKey, useGetServerConfig, getGetServerConfigQueryKey } from "@workspace/api-client-react";
import { Link } from "wouter";
import { formatUptime } from "../lib/format";
import { Server, Users, Activity, Clock } from "lucide-react";

export default function Home() {
  const { data: status, isLoading: statusLoading } = useGetServerStatus({
    query: {
      queryKey: getGetServerStatusQueryKey(),
      refetchInterval: 30000, // auto-refresh every 30s
    }
  });

  const { data: config, isLoading: configLoading } = useGetServerConfig({
    query: {
      queryKey: getGetServerConfigQueryKey()
    }
  });

  return (
    <div className="space-y-16 animate-in fade-in zoom-in duration-500">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16">
        <h1 className="text-5xl md:text-7xl font-pixel text-white pixel-text-shadow leading-tight">
          {configLoading ? "LOADING..." : config?.serverName || "EAGLERCRAFT SERVER"}
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-pixel leading-relaxed max-w-3xl mx-auto pixel-text-shadow">
          {config?.description || "THE ULTIMATE BROWSER-BASED SURVIVAL EXPERIENCE."}
        </p>

        <div className="pt-8">
          <Link 
            href="/play" 
            className="inline-block pixel-border-primary bg-primary text-primary-foreground font-pixel text-2xl md:text-4xl px-12 py-6 hover:bg-white transition-all transform hover:scale-105 pixel-text-shadow !text-primary-foreground shadow-2xl"
          >
            START PLAYING
          </Link>
        </div>
      </section>

      {/* Server Status Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="pixel-border bg-card p-8 space-y-6">
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <Server className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-pixel pixel-text-shadow">SERVER STATUS</h2>
          </div>
          
          {statusLoading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-8 bg-muted w-1/2"></div>
              <div className="h-8 bg-muted w-3/4"></div>
            </div>
          ) : status ? (
            <div className="space-y-6 font-pixel text-sm md:text-base">
              <div className="flex justify-between items-center bg-background p-4 border border-border">
                <span className="text-muted-foreground">STATUS</span>
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 ${status.online ? 'bg-primary' : 'bg-destructive'} border-2 border-black`} />
                  <span className={status.online ? 'text-primary' : 'text-destructive'}>
                    {status.online ? 'ONLINE' : 'OFFLINE'}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-center bg-background p-4 border border-border">
                <span className="text-muted-foreground">PLAYERS</span>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-white">{status.playerCount} / {status.maxPlayers}</span>
                </div>
              </div>

              <div className="flex justify-between items-center bg-background p-4 border border-border">
                <span className="text-muted-foreground">VERSION</span>
                <span className="text-white">{status.version}</span>
              </div>

              <div className="flex justify-between items-center bg-background p-4 border border-border">
                <span className="text-muted-foreground">UPTIME</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-white">{formatUptime(status.uptimeSeconds)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-destructive font-pixel">FAILED TO FETCH STATUS</div>
          )}
        </div>

        <div className="pixel-border bg-card p-8 space-y-6 flex flex-col">
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <Activity className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-pixel pixel-text-shadow">MOTD</h2>
          </div>
          
          <div className="flex-1 bg-background border border-border p-6 font-pixel text-lg text-center flex items-center justify-center pixel-text-shadow leading-loose whitespace-pre-wrap">
            {statusLoading ? "LOADING MOTD..." : (status?.motd || "NO MOTD SET")}
          </div>

          <Link href="/players" className="w-full block text-center pixel-border bg-secondary text-secondary-foreground font-pixel py-4 hover:bg-secondary/80 transition-colors">
            VIEW ONLINE PLAYERS
          </Link>
        </div>
      </section>
    </div>
  );
}
