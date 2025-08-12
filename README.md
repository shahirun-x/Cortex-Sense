# Cortex-Sense
**Real-time Neuroadaptive Learning Interface** — Detects cognitive states (focus, relaxation, drowsiness) from EEG signals and delivers adaptive, personalized micro-interventions to improve engagement and memory retention.  

![EEG Live Graph](./screenshot.png)

---

## Features
- **EEG Signal Streaming** — Real-time processing from OpenBCI or simulated EEG data.
- **State Classification** — Detects focus, relaxation, and drowsiness using band-power analysis + ML.
- **Micro-Interventions** — Personalized learning cues (text, audio, AR).
- **Privacy-First** — Local EEG processing with explicit consent and data deletion options.
- **Simulation Mode** — Judges can run without EEG hardware using a built-in data generator.
- **One-Click Deployment** — Works locally or as a PWA.

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/shahirun-x/Cortex-Sense.git
cd Cortex-Sense
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
