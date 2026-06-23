from fastapi import FastAPI
from agents.intent_agent import extract_intent
from agents.architect_agent import design_system
from agents.ui_agent import generate_ui_schema
from validators.schema_validator import validate_system
from agents.api_agent import generate_api_schema
from repair.repair_engine import repair_system
from runtime.runtime_simulator import simulate_runtime
from validators.clarification_engine import detect_conflicts
from evaluation.evaluation_runner import run_evaluation
from validators.reliability_engine import calculate_reliability
from fastapi.middleware.cors import CORSMiddleware
from agents.db_agent import generate_db_schema
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate")
def generate(prompt: str):
    clarification = detect_conflicts(prompt)

    intent = extract_intent(prompt)

    architecture = design_system(intent)

    db_schema = generate_db_schema(architecture)

    api_schema = generate_api_schema(architecture)

    ui_schema = generate_ui_schema(architecture)

    validation = validate_system(
     architecture,
     db_schema,
     api_schema
    )

    repair = repair_system(
     architecture,
     db_schema,
     api_schema,
     validation
    )

    runtime = simulate_runtime(
     db_schema,
     api_schema,
     ui_schema
    )

    reliability = calculate_reliability(
     validation,
     repair,
     runtime,
     intent
    )

    return {
     "intent": intent.model_dump(),
     "architecture": architecture.model_dump(),
     "database": db_schema.model_dump(),
     "api": api_schema.model_dump(),
     "ui": ui_schema.model_dump(),
     "validation": validation.model_dump(),
     "repair": repair.model_dump(),
     "runtime": runtime,
     "reliability": reliability.model_dump(),
     "clarification": clarification.model_dump()
    }

@app.get("/evaluate")
def evaluate():

    return run_evaluation()
