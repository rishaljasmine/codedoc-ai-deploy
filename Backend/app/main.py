# from app.ai import generate_documentation, explore_code, ask_followup

# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel


# app = FastAPI()

# allowed_origins = [
#     "http://localhost:5173",
#     "http://127.0.0.1:5173",
#     "http://localhost:3000",
#     "https://codedoc-ai-deploy.vercel.app",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=allowed_origins,
#     allow_origin_regex=r"https://.*\.vercel\.app",
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# # -----------------------------
# # Request Models
# # -----------------------------

# class CodeRequest(BaseModel):
#     code: str


# class ExploreRequest(BaseModel):
#     code: str
#     mode: str


# class FollowupRequest(BaseModel):
#     code: str
#     question: str


# # -----------------------------
# # Home
# # -----------------------------

# @app.get("/")
# def home():

#     return {
#         "message": "CodeDoc AI Backend Running"
#     }


# # -----------------------------
# # Documentation Generator
# # -----------------------------

# @app.post("/generate")
# def generate_documentation_api(request: CodeRequest):

#     result = generate_documentation(request.code)

#     return {
#         "documentation": result
#     }


# # -----------------------------
# # Code Explorer
# # -----------------------------

# @app.post("/explore")
# def explore_code_api(request: ExploreRequest):

#     result = explore_code(
#         request.code,
#         request.mode
#     )

#     return {
#         "explanation": result
#     }


# # -----------------------------
# # AI Follow-up
# # -----------------------------

# @app.post("/followup")
# def followup_api(request: FollowupRequest):

#     result = ask_followup(
#         request.code,
#         request.question
#     )

#     return {
#         "answer": result
#     }


# # -----------------------------
# # Request Models
# # -----------------------------

# class CodeRequest(BaseModel):
#     code: str


# class ExploreRequest(BaseModel):
#     code: str
#     mode: str


# # -----------------------------
# # Home
# # -----------------------------

# @app.get("/")
# def home():
#     return {
#         "message": "CodeDoc AI Backend Running"
#     }


# # -----------------------------
# # Documentation Generator
# # -----------------------------

# @app.post("/generate")
# def generate_documentation_api(request: CodeRequest):

#     result = generate_documentation(request.code)

#     return {
#         "documentation": result
#     }


# # -----------------------------
# # Code Explorer
# # -----------------------------

# @app.post("/explore")
# def explore_code_api(request: ExploreRequest):

#     result = explore_code(
#         request.code,
#         request.mode
#     )

#     return {
#         "explanation": result
#     }

# class CodeRequest(BaseModel):
#     code: str



# @app.get("/")
# def home():
#     return {
#         "message": "CodeDoc AI Backend Running"
#     }



# @app.post("/generate")
# def generate_documentation_api(request: CodeRequest):

#     code = request.code

#     result = generate_documentation(code)

#     return {
#         "documentation": result
#     }






from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.ai import (
    generate_documentation,
    explore_code,
    ask_followup
)


app = FastAPI()


# ==========================================
# CORS Configuration
# ==========================================

allowed_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "https://codedoc-ai-deploy.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================================
# Request Models
# ==========================================

class CodeRequest(BaseModel):
    code: str


class ExploreRequest(BaseModel):
    code: str
    mode: str


class FollowupRequest(BaseModel):
    code: str
    question: str


# ==========================================
# Home
# ==========================================

@app.get("/")
def home():
    return {
        "message": "CodeDoc AI Backend Running"
    }


# ==========================================
# Documentation Generator
# ==========================================

@app.post("/generate")
def generate_documentation_api(request: CodeRequest):

    result = generate_documentation(request.code)

    return {
        "documentation": result
    }


# ==========================================
# Code Explorer
# ==========================================

@app.post("/explore")
def explore_code_api(request: ExploreRequest):

    result = explore_code(
        request.code,
        request.mode
    )

    return {
        "explanation": result
    }


# ==========================================
# AI Follow-up
# ==========================================

@app.post("/followup")
def followup_api(request: FollowupRequest):

    result = ask_followup(
        request.code,
        request.question
    )

    return {
        "answer": result
    }