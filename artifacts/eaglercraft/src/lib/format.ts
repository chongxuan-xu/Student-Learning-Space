export function formatUptime(seconds: number): string {
  if (!seconds || seconds < 0) return "0h 0m";
  
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  
  return `${h}h ${m}m`;
}
