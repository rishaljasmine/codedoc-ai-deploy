# import json
# from google import genai
# from app.config import GEMINI_API_KEY

# client = genai.Client(api_key=GEMINI_API_KEY)


# def analyze_code(code: str):

#     prompt = f"""
# You are an expert software engineer.

# Analyze the following code.

# Return ONLY valid JSON in this exact format:

# {{
#     "summary": "",
#     "function_name": "",
#     "parameters": [
#         {{
#             "name": "",
#             "description": ""
#         }}
#     ],
#     "return_value": "",
#     "time_complexity": "",
#     "space_complexity": "",
#     "improvements": []
# }}

# Do not return markdown.
# Do not use ```json.
# Return only valid JSON.

# Code:
# {code}
# """

#     response = client.models.generate_content(
#         model="gemini-3.6-flash",
#         contents=prompt
#     )

#     data = json.loads(response.text)

#     return data
from google import genai
from app.config import GEMINI_API_KEY


# ==========================================
# Gemini Client
# ==========================================

client = genai.Client(api_key=GEMINI_API_KEY)

MODEL = "gemini-3.6-flash"


# ==========================================
# Documentation Generator
# ==========================================

def generate_documentation(code: str):

    prompt = f"""
You are an expert software engineer.

Generate professional documentation for the following code.

Include:

1. Code overview
2. Functions/classes explanation
3. Parameters
4. Return values
5. Example usage
6. Improvements

Use clear Markdown formatting.

Code:

{code}
"""

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt
    )

    return response.text


# ==========================================
# Code Explorer
# ==========================================

def explore_code(code: str, mode: str):

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

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt
    )

    return response.text


# ==========================================
# AI Follow-up
# ==========================================

def ask_followup(code: str, question: str):

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

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt
    )

    return response.text