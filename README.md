# Cortex-Sense  
*Neuroadaptive learning with real-time EEG state detection and personalized micro-interventions*

---

## Overview  
Cortex-Sense is a neuroadaptive learning demo that uses synthetic EEG data (simulated or real) to detect user states like Focused, Drowsy, Relaxed, or Neutral in real-time. Based on these states, it triggers personalized interventions such as text analogies, audio cues, or AR overlays to help learners stay engaged and improve memory retention.  

All EEG processing and classification run locally with explicit user consent and a privacy-first design.

---

## Features  
- Real-time EEG simulation via WebSocket  
- State classification: Focused, Drowsy, Relaxed, Neutral  
- Modular intervention pipeline (text/audio/AR)  
- Privacy-first: all data processed locally by default  
- Consent modal for user approval  

---

## Getting Started  

### Prerequisites  
- Node.js (v18+) and npm installed  
- Optional: real EEG device (OpenBCI) for live data  

### Installation  
```bash
git clone https://github.com/shahirun-x/cortex-sense.git
cd cortex-sense
npm install
```
## Running the EEG Simulator
Simulates EEG data stream locally without hardware:

```bash
npm run simulate-eeg
```
## Starting the Application
```bash
npm start
```
Open your browser and connect to the UI or WebSocket at ws://localhost:8080.

## Architecture

graph LR
    EEG_Device_or_Simulator --> Preprocessing
    Preprocessing --> Classifier
    Classifier --> Intervention
    Intervention --> UI

EEG Device/Simulator: Streams raw or synthetic EEG states

Preprocessing: Filters & feature extraction (band power, etc.)

Classifier: Lightweight model (rule-based or TFJS) for EEG state

Intervention: Triggers personalized text/audio/AR responses

UI: Displays state, interventions, and consent modal

## Ethics & Privacy

All EEG data processing happens locally on the user’s device by default

No raw EEG data is uploaded externally unless explicitly authorized

Consent modal is presented before any data collection begins

Users can revoke consent and clear stored data at any time

## Contributing

Contributions are welcome! Please open issues or pull requests for bugs, features, or improvements.

## Contact

Developed by Shahirun

Email: shahirun.x.com

GitHub: https://github.com/shahirun-x
