import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [history, setHistory] = useState([]);

  const generateApp = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/generate?prompt=${encodeURIComponent(prompt)}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      setResult(data);

      setHistory((prev) => [
        prompt,
        ...prev.slice(0, 4),
      ]);
    } catch (error) {
      console.error(error);
      alert("Failed to connect to backend");
    }
  };

  const loadEvaluation = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/evaluate"
      );

      const data = await response.json();

      setEvaluation(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load evaluation metrics");
    }
  };

  const downloadSpecification = () => {
    if (!result) return;

    const blob = new Blob(
      [JSON.stringify(result, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "generated_application.json";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white"
      }}
      
    >
      <h1>🚀 Auto-Guiding Stack</h1>
      <p>AI Compiler for Reliable Software Generation</p>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h2>Application Prompt</h2>

        <h2>Compiler Pipeline</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <div>🧠 Intent Agent</div>
          <div>🏗 Architect Agent</div>
          <div>🗄 DB Agent</div>

          <div>🔌 API Agent</div>
          <div>🎨 UI Agent</div>
          <div>✅ Validator</div>

          <div>🔧 Repair Engine</div>
          <div>⚡ Runtime Simulator</div>
          <div>📊 Reliability Engine</div>
        </div>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Build a CRM with login, contacts, dashboard and premium payments..."
          rows="6"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
          }}
        />

        <div style={{ marginTop: "15px" }}>
          <button
            onClick={generateApp}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
            }}
          ><div
  style={{
    background: "#fff3cd",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
  }}
>
  <h2>⚙️ Compiler Status</h2>

  <p>🧠 Intent Agent → Completed</p>
  <p>🏗 Architect Agent → Completed</p>
  <p>🗄 Database Agent → Completed</p>
  <p>🔌 API Agent → Completed</p>
  <p>🎨 UI Agent → Completed</p>
  <p>✅ Validation Engine → Passed</p>
  <p>🔧 Repair Engine → {result.repair?.repaired ? "Applied" : "Not Required"}</p>
  <p>⚡ Runtime Simulation → {result.runtime?.executable ? "Success" : "Failed"}</p>
</div>

<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
  }}
>
  <h2>🏗 Generated Architecture</h2>

  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
    }}
  >
    <div
      style={{
        padding: "15px",
        border: "2px solid #2196f3",
        borderRadius: "10px",
      }}
    >
      User Prompt
    </div>

    ➜

    <div
      style={{
        padding: "15px",
        border: "2px solid #4caf50",
        borderRadius: "10px",
      }}
    >
      AI Compiler
    </div>

    ➜

    <div
      style={{
        padding: "15px",
        border: "2px solid #ff9800",
        borderRadius: "10px",
      }}
    >
      {result.intent?.app_type}
    </div>
  </div>
</div>
            Generate Application
          </button>

          <button
            onClick={loadEvaluation}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Load Metrics
          </button>

          <button
            onClick={downloadSpecification}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            📄 Download Specification
          </button>
        </div>
      </div>

      {evaluation && (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        >
          <h2>📊 System Evaluation</h2>

          <p>
            <strong>Total Prompts:</strong>{" "}
            {evaluation.total_prompts}
          </p>

          <p>
            <strong>Success Rate:</strong>{" "}
            {evaluation.success_rate}%
          </p>

          <p>
            <strong>Average Reliability:</strong>{" "}
            {evaluation.average_reliability}%
          </p>

          <p>
            <strong>Failure Count:</strong>{" "}
            {evaluation.failure_count}
          </p>
        </div>
      )}

      {history.length > 0 && (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        >
          <h2>📝 Prompt History</h2>

          {history.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                marginBottom: "8px",
                background: "#f5f5f5",
                borderRadius: "8px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {result && (
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }}
>
  <h3>📦 Modules</h3>
  <h1>{result.intent?.modules?.length || 0}</h1>
</div>

<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }}
>
  <h3>🗄 Tables</h3>
  <h1>{result.database?.tables?.length || 0}</h1>
</div>

<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }}
>
  <h3>🔌 APIs</h3>
  <h1>{result.api?.endpoints?.length || 0}</h1>
</div>

<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  }}
>
  <h3>🎨 Pages</h3>
  <h1>{result.ui?.pages?.length || 0}</h1>
</div>
          </div>

          <div
            style={{
              background: "#e8f5e9",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "20px",
              border: "2px solid #4caf50",
            }}
          >
            <h2>🎯 Generated Application Overview</h2>

            <p>
              <strong>Application:</strong>{" "}
              {result.intent?.app_type}
            </p>

            <p>
              <strong>Modules:</strong>{" "}
              {result.intent?.modules?.length}
            </p>

            <p>
              <strong>Database Tables:</strong>{" "}
              {result.database?.tables?.length}
            </p>

            <p>
              <strong>API Endpoints:</strong>{" "}
              {result.api?.endpoints?.length}
            </p>

            <p>
              <strong>UI Pages:</strong>{" "}
              {result.ui?.pages?.length}
            </p>

            <p>
              <strong>Confidence:</strong>{" "}
              {result.reliability?.confidence}
            </p>
          </div>

          {result.reliability && (
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <h2>Reliability Score</h2>

              <h1
                style={{
                  fontSize: "60px",
                  color:
                    result.reliability.score >= 90
                      ? "green"
                      : result.reliability.score >= 70
                      ? "orange"
                      : "red",
                }}
              >
                {result.reliability.score}%
              </h1>

              <h3>{result.reliability.confidence}</h3>
            </div>
          )}

          <pre
            style={{
              overflowX: "auto",
              background: "#f4f4f4",
              padding: "15px",
              borderRadius: "5px",
            }}
          >
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
