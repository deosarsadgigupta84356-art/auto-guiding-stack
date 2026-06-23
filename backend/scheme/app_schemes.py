from pydantic import BaseModel
from typing import List

class IntentIR(BaseModel):
    app_type: str
    modules: List[str]
    roles: List[str]
    assumptions: List[str]
class ArchitectureIR(BaseModel):
    entities: List[str]
    pages: List[str]
    roles: List[str]
class DatabaseSchema(BaseModel):
    tables: list
class APISchema(BaseModel):
    endpoints: list    
class UISchema(BaseModel):
    pages: list  
class ValidationReport(BaseModel):
    passed: bool
    issues: list  
class RepairReport(BaseModel):
    repaired: bool
    actions: list 
class ReliabilityReport(BaseModel):
    score: int
    confidence: str
class ClarificationReport(BaseModel):
    clarification_required: bool
    questions: list
