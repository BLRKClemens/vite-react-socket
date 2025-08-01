import express from "express";
import http from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Hilfsfunktionen um __dirname in ESM zu simulieren
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// Statischer Ordner für HTML-Dateien
app.use(express.static(join(__dirname, "dist")));

function initState() {
  const state = {};
  return state;
}

const state = initState();

function updateState() {
  io.sockets.emit("updateState", state);
}

io.on("connection", (socket) => {
  console.log("✅ Neue Verbindung:", socket.id);
  updateState();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});
