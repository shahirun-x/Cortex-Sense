// index.js
// Cortex-Sense backend: Express server + WebSocket EEG simulation

const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

// =========================
// Server Setup
// =========================
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static frontend (index.html)
app.use(express.static(path.join(__dirname, "public")));

// Simple health route
app.get("/health", (req, res) => {
  res.json({ status: "ok", name: "Cortex-Sense" });
});

// =========================
// EEG Simulation Logic
// =========================
function getRandomEEGState() {
  const states = ["focused", "relaxed", "drowsy"];
  return states[Math.floor(Math.random() * states.length)];
}

function generateEEGData() {
  return {
    timestamp: Date.now(),
    state: getRandomEEGState(),
    bands: {
      alpha: Math.random() * 100,
      beta: Math.random() * 100,
      theta: Math.random() * 100
    }
  };
}

// Send EEG data every second to connected clients
wss.on("connection", (ws) => {
  console.log("New WebSocket client connected.");

  const interval = setInterval(() => {
    const data = generateEEGData();
    ws.send(JSON.stringify(data));
  }, 1000);

  ws.on("close", () => {
    console.log("Client disconnected.");
    clearInterval(interval);
  });
});

// =========================
// Start Server
// =========================
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Cortex-Sense server running at http://localhost:${PORT}`);
  console.log(`WebSocket endpoint at ws://localhost:${PORT}`);
});
