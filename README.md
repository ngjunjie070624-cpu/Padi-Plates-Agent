# Padi-Plates Agent: Agriculture AI

## 🌾 Project Overview
**Track:** Agriculture & Food Security
Padi-Plates Agent is an AI-driven tool designed to help Malaysian farmers identify rice crop diseases (e.g., Rice Blast) instantly using Google Gemini AI. [cite_start]This supports Malaysia’s national digital agenda for food security[cite: 40, 41, 42].

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- [cite_start]**AI Engine:** Google Gemini 1.5 Flash (Multimodal) [cite: 9, 36]
- **Frontend:** HTML5, CSS3, JavaScript

## 🏗️ Architecture Diagram
[User Uploads Photo] -> [Express Server] -> [Gemini API Analysis] -> [Localized Diagnosis & Treatment]

## 🚀 Setup Instructions
1. Clone the repository.
2. Run `npm install`.
3. Create a `.env` file and add your `GEMINI_API_KEY`.
4. Run `node src/server.js`.
5. Open `localhost:3000` in your browser.

## 🤖 AI Tools & Ethics
- [cite_start]**AI Tooling:** Developed with assistance from Gemini for code optimization[cite: 22, 58].
- [cite_start]**Safety:** Implements API key protection via environment variables.

- ## 🏗️ System Architecture
  The following diagram illustrates the serverless multimodal data flow of PadiGuard Pro:

```mermaid
graph TD
    A[User/Farmer] -->|Uploads Image| B(Web Frontend)
    B -->|Base64 Encoding| C{Gemini AI Engine}
    C -->|Multimodal Vision| D[Disease Identification]
    C -->|Reasoning| E[7-Day Agri-Plan]
    C -->|TTS Synthesis| F[Audio Report]
    D --> G(Responsive UI)
    E --> G
    F --> G
    G -->|Feedback/Action| A
- 
Security Note: This project uses environment variables for API safety. The GEMINI_API_KEY is managed via a .env file which is excluded from version control using .gitignore. Users must provide their own API key to run the diagnostic agent locally.
