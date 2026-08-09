from fastapi import APIRouter
from app.models.request_model import CodeRequest
from app.models.response_model import CodeResponse
from app.services.ollama_service import analyze_code

router = APIRouter()

@router.post("/analyze", response_model=CodeResponse)
def analyze(request: CodeRequest):
    return analyze_code(request.code)