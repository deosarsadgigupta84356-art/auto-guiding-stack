# AI App Compiler 🚀

### Natural Language → Executable Application Generator

An AI-powered compiler-inspired platform that transforms natural language requirements into structured, validated, and executable application blueprints. Instead of generating code directly, it follows a deterministic multi-stage pipeline to produce consistent system architectures, database schemas, APIs, UI structures, and validation rules.

Instead of treating prompts as simple LLM inputs, this system converts user instructions into a multi-stage, deterministic pipeline that generates consistent and executable app configurations.

It simulates a real-world software compiler with strict separation of concerns across system design layers.

 Key Idea

Natural Language → Intent Extraction → System Design → Schema Generation → Validation → Structured App Output

## ✨ Features

- ✅ **Intent Extraction Engine** – Converts natural language requirements into structured application goals.
- ✅ **System Design Layer** – Automatically separates the application into UI, API, Database, and Authentication modules.
- ✅ **Schema Generator** – Generates structured JSON schemas for frontend, backend, and database.
- ✅ **Validation Engine** – Checks consistency and correctness across generated components.
- ✅ **Repair Logic** – Detects and fixes missing or inconsistent schema fields.
- ✅ **Deterministic Pipeline** – Produces consistent outputs for similar prompts.
- ✅ **Interactive Frontend** – Allows users to test prompt-to-application generation in a user-friendly interface.

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- JavaScript

### Backend
- FastAPI
- Python

### Data Format
- JSON

### Development Tools
- VS Code
- Git

## 🚀 Installation
## 📂 Project Structure

```
auto-guiding-stack/
│
├── backend/
│   ├── agents/
│   ├── schemas/
│   ├── validators/
│   ├── repair/
│   ├── runtime/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

### Clone the Repository

```bash
git clone https://github.com/deosarsadgigupta84356-art/auto-guiding-stack.git
```

### Navigate to the Project

```bash
cd auto-guiding-stack
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

User Prompt
→ Intent Parser
→ System Architecture Builder
→ Schema Generator (UI / API / DB / Auth)
→ Validation Engine
→ Final Structured JSON Output

 Example Input

Build a CRM system with login, contacts, dashboard, role-based access, and admin analytics.

Output
UI Schema (pages, components, layout)
API Schema (endpoints, methods, validation rules)
Database Schema (tables & relationships)
Auth & Role Permissions
Business Logic Rules
