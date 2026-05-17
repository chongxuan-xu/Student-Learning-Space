import { Link, useLocation } from "wouter";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const isPlay = location === "/play";

  if (isPlay) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col text-foreground">
      <header className="pixel-border border-b bg-card py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-pixel text-primary pixel-text-shadow text-xl hover:text-white transition-colors">
            STUDENT LEARNING SPACE
          </Link>
          
          <nav className="flex items-center gap-6 font-pixel text-xs">
            <Link href="/" className={`${location === "/" ? "text-primary" : "text-muted-foreground"} hover:text-primary transition-colors`}>
              HOME
            </Link>
            <Link href="/players" className={`${location === "/players" ? "text-primary" : "text-muted-foreground"} hover:text-primary transition-colors`}>
              PLAYERS
            </Link>
            <Link href="/about" className={`${location === "/about" ? "text-primary" : "text-muted-foreground"} hover:text-primary transition-colors`}>
              ABOUT
            </Link>
            <Link href="/play" className="pixel-border-primary bg-primary text-primary-foreground px-4 py-2 hover:bg-white transition-colors pixel-text-shadow !text-primary-foreground">
              PLAY NOW
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-6 md:p-12">
        {children}
      </main>

      <footer className="border-t border-border bg-card py-8 text-center text-muted-foreground font-pixel text-[10px]">
        <p>NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</p>
        <p className="mt-2 text-primary/50">POWERED BY EAGLERCRAFT</p>
      </footer>
    </div>
  );
}
