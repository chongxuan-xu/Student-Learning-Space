import { useGetServerConfig, getGetServerConfigQueryKey } from "@workspace/api-client-react";
import { Github, Globe, HelpCircle } from "lucide-react";

export default function About() {
  const { data: config } = useGetServerConfig({
    query: { queryKey: getGetServerConfigQueryKey() }
  });

  return (
    <div className="space-y-12 animate-in fade-in duration-500 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-pixel text-white pixel-text-shadow">ABOUT THE SERVER</h1>
        <p className="text-muted-foreground font-pixel leading-relaxed">EVERYTHING YOU NEED TO KNOW TO GET STARTED.</p>
      </div>

      <div className="space-y-8">
        <section className="pixel-border bg-card p-8 space-y-6">
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <Globe className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-pixel pixel-text-shadow">CONNECTION INFO</h2>
          </div>
          
          <div className="space-y-4 font-pixel text-sm leading-loose">
            <p className="text-muted-foreground">TO CONNECT MANUALLY FROM ANY EAGLERCRAFT CLIENT, USE THIS WEBSOCKET URL:</p>
            <div className="bg-background border border-border p-4 text-primary break-all select-all">
              {config?.websocketUrl || "wss://play.example.com"}
            </div>
          </div>
        </section>

        <section className="pixel-border bg-card p-8 space-y-6">
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-pixel pixel-text-shadow">FAQ</h2>
          </div>
          
          <div className="space-y-8 font-sans">
            <div className="space-y-2">
              <h3 className="font-pixel text-white text-sm">WHAT IS EAGLERCRAFT?</h3>
              <p className="text-muted-foreground">Eaglercraft is real Minecraft 1.8.8 compiled to WebAssembly and WebGL so it can run in any modern web browser. No downloads or installations required.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-pixel text-white text-sm">HOW DO I PLAY?</h3>
              <p className="text-muted-foreground">Just click the big "PLAY NOW" button on the home page. You'll be taken to the web client, where you can configure your username and skin before joining the server.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-pixel text-white text-sm">DO I NEED A MOJANG ACCOUNT?</h3>
              <p className="text-muted-foreground">No. This server uses offline mode authentication. Your inventory and stats are tied to the username you choose, so pick a secure password in-game if prompted.</p>
            </div>
          </div>
        </section>

        {config?.githubUrl && (
          <section className="pixel-border bg-card p-8 space-y-6">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <Github className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-pixel pixel-text-shadow">SOURCE CODE</h2>
            </div>
            
            <p className="font-sans text-muted-foreground">
              Interested in how this portal works? The source code is open source and available on GitHub.
            </p>
            <a 
              href={config.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block pixel-border bg-secondary text-secondary-foreground font-pixel py-3 px-6 hover:bg-secondary/80 transition-colors text-sm"
            >
              VIEW ON GITHUB
            </a>
          </section>
        )}
      </div>
    </div>
  );
}
