# 🚀 AI Resume Matcher

An intelligent, context-aware resume screening platform built with the **MERN stack**. The application uses **Azure AI Document Intelligence** for accurate resume parsing, **Vector Cosine Similarity** for semantic matching, and **Google Gemini AI** for advanced candidate analysis and skill-gap detection.

---

## ✨ Features

### 🎯 Context-Aware Resume Matching

Matches candidates based on semantic understanding rather than simple keyword matching.

**Example:** A candidate with **React.js** experience can still align strongly with a **MERN Stack** requirement.

### 📊 Intelligent Candidate Scoring

Ranks resumes using vector-based similarity scoring to identify the most relevant candidates.

### 💡 Skill Gap Analysis

Highlights missing skills, tools, technologies, and keywords required for a specific role.

### 🔍 Resume Quality Insights

Provides detailed feedback on:

* Resume strengths
* Areas for improvement
* Content quality
* Formatting issues

### 📄 AI-Powered Resume Parsing

Extracts structured information from PDF and DOCX resumes using Azure AI Document Intelligence.

---

## 🏗️ Architecture

```text
ai-resume-matcher/
├── frontEnd/      # React + Vite Client
└── backEnd/       # Node.js + Express API
```

> **Note:** The project follows a MERN-style architecture but currently operates entirely in memory and does not require a MongoDB connection.

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### AI & Processing

* Azure AI Document Intelligence
* Google Gemini API
* Vector Cosine Similarity

---

## ⚙️ Environment Variables

### Frontend (`frontEnd/.env`)

```env
VITE_API_URL=http://localhost:5000
```

### Backend (`backEnd/.env`)

```env
PORT=5000
FRONTEND_URL=your_url

FORM_RECOGNIZER_ENDPOINT=your_azure_endpoint
FORM_RECOGNIZER_API_KEY=your_azure_api_key

GEMINI_API_KEY=your_gemini_api_key
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-resume-matcher.git
cd ai-resume-matcher
```

### 2. Backend Setup

```bash
cd backEnd

npm install

npm run dev
```

### 3. Frontend Setup

```bash
cd frontEnd

npm install

npm run dev
```

---
