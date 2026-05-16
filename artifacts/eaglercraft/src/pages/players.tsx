import { useGetServerPlayers, getGetServerPlayersQueryKey, useGetServerStatus, getGetServerStatusQueryKey } from "@workspace/api-client-react";
import { Users, Clock } from "lucide-react";
import { format } from "date-fns";

export default function Players() {
  const { data: players, isLoading: playersLoading } = useGetServerPlayers({
    query: { queryKey: getGetServerPlayersQueryKey(), refetchInterval: 30000 }
  });

  const { data: status } = useGetServerStatus({
    query: { queryKey: getGetServerStatusQueryKey(), refetchInterval: 30000 }
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-pixel text-white pixel-text-shadow mb-4">ONLINE PLAYERS</h1>
          <p className="text-muted-foreground font-pixel text-sm">SEE WHO IS SURVIVING RIGHT NOW.</p>
        </div>
        <div className="pixel-border bg-card px-6 py-4 flex items-center gap-4">
          <Users className="w-6 h-6 text-primary" />
          <span className="font-pixel text-xl">{status?.playerCount || 0} / {status?.maxPlayers || 20}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playersLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="pixel-border bg-card p-4 animate-pulse h-24"></div>
          ))
        ) : players?.length === 0 ? (
          <div className="col-span-full pixel-border bg-card p-12 text-center text-muted-foreground font-pixel">
            NO PLAYERS ONLINE. BE THE FIRST!
          </div>
        ) : (
          players?.map((player) => (
            <div key={player.uuid} className="pixel-border bg-card p-4 flex items-center gap-4 hover:bg-card/80 transition-colors">
              <div className="w-16 h-16 pixel-border bg-background flex-shrink-0 overflow-hidden">
                <img 
                  src={`https://mc-heads.net/avatar/${player.username}/64`} 
                  alt={player.username}
                  className="w-full h-full object-cover pixelated"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div className="space-y-2 overflow-hidden">
                <h3 className="font-pixel text-white truncate text-sm" title={player.username}>
                  {player.username}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-pixel">
                  <Clock className="w-3 h-3" />
                  <span className="truncate">JOINED {format(new Date(player.joinedAt), "HH:mm")}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
