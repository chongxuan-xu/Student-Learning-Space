import { Router, type IRouter } from "express";
import {
  GetServerStatusResponse,
  GetServerPlayersResponse,
  GetServerConfigResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

const SERVER_START_TIME = Date.now();

const MOCK_PLAYERS = [
  {
    username: "Notch",
    uuid: "069a79f4-44e9-4726-a5be-fca90e38aaf5",
    joinedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    skinUrl: null,
  },
  {
    username: "Creeper_King",
    uuid: "853c80ef-3c37-49fd-aa49-938b674adae6",
    joinedAt: new Date(Date.now() - 1000 * 60 * 22).toISOString(),
    skinUrl: null,
  },
  {
    username: "DiamondMiner99",
    uuid: "61699b2e-d327-4a01-9f1e-0ea8c3f06bc6",
    joinedAt: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
    skinUrl: null,
  },
  {
    username: "SteveBuilder",
    uuid: "5ca3b84f-7eb4-4a1b-b1bb-6fe04f1c6e3e",
    joinedAt: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    skinUrl: null,
  },
];

router.get("/server/status", async (_req, res): Promise<void> => {
  const uptimeSeconds = Math.floor((Date.now() - SERVER_START_TIME) / 1000) + 7200;
  const status = GetServerStatusResponse.parse({
    online: true,
    playerCount: MOCK_PLAYERS.length,
    maxPlayers: 20,
    motd: "Welcome to EaglercraftX! Play Minecraft 1.8.8 in your browser.",
    version: "1.8.8",
    uptimeSeconds,
  });
  res.json(status);
});

router.get("/server/players", async (_req, res): Promise<void> => {
  const players = GetServerPlayersResponse.parse(MOCK_PLAYERS);
  res.json(players);
});

router.get("/server/config", async (_req, res): Promise<void> => {
  const config = GetServerConfigResponse.parse({
    serverName: "Eaglercraft Server",
    websocketUrl: "wss://eaglercraft.com/mc/1.8.8/",
    eaglercraftClientUrl: "/client.html",
    githubUrl: "https://github.com/LAX1DUDE/eaglercraft",
    description:
      "Play Minecraft 1.8 directly in your browser — no downloads, no Java, no plugins required. Just click Play and start building.",
  });
  res.json(config);
});

export default router;
