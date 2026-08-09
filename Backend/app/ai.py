import requests


OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "qwen2.5-coder:3b"


# ==========================================
# Documentation Generator
# ==========================================

def generate_documentation(code):

    prompt = f"""
You are an expert software engineer.

Generate professional documentation for this code.

Include:

1. Code overview
2. Functions/classes explanation
3. Parameters
4. Return values
5. Example usage
6. Improvements

Code:

{code}
"""

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL,
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()

    return result["response"]


# ==========================================
# Code Explorer
# ==========================================

def explore_code(code, mode):

    prompt = f"""
You are an expert programming teacher.

Explain the following code according to this teaching style:

{mode}

CODE:

{code}

Make the explanation clear, structured and easy to read.

Use Markdown formatting.

Explain:

1. What the code does
2. How it works step by step
3. Important lines
4. Functions and variables
5. A simple example when useful
6. Important concepts the learner should understand

Do not unnecessarily rewrite the entire code.
"""

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL,
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()

    return result["response"]


# ==========================================
# AI Follow-up
# ==========================================

def ask_followup(code, question):

    prompt = f"""
You are a helpful programming mentor.

The user is learning the following code:

CODE:

{code}

The user has a question about this code:

QUESTION:

{question}

Answer only in the context of the provided code.

Rules:

- Explain clearly and simply.
- Use a small example when useful.
- If the question refers to a specific line or concept, explain that part.
- Do not rewrite the entire code unless necessary.
- Keep the answer concise.
- Use Markdown headings and bullet points when useful.
"""

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL,
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()

    return result["response"]