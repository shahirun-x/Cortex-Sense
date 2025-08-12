// Load the WebSocket library
const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log("EEG Simulator running on ws://localhost:8080");

// Example EEG states (here i have taken 4)
const eegStates = ["Focused", "Drowsy", "Relaxed", "Neutral"];

// Send EEG state every second (you can go for every minute also)
wss.on('connection', (ws) => {
    console.log("Client connected");

    const sendData = () => {
        const state = eegStates[Math.floor(Math.random() * eegStates.length)];
        const eegData = {
            timestamp: Date.now(),
            state: state
        };
        ws.send(JSON.stringify(eegData));
    };

    const interval = setInterval(sendData, 1000);

    ws.on('close', () => {
        clearInterval(interval);
        console.log("Client disconnected");
    });
});
