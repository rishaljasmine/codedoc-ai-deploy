import json
from google import genai
from app.config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


def analyze_code(code: str):

    prompt = f"""
You are an expert software engineer.

Analyze the following code.

Return ONLY valid JSON in this exact format:

{{
    "summary": "",
    "function_name": "",
    "parameters": [
        {{
            "name": "",
            "description": ""
        }}
    ],
    "return_value": "",
    "time_complexity": "",
    "space_complexity": "",
    "improvements": []
}}

Do not return markdown.
Do not use ```json.
Return only valid JSON.

Code:
{code}
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    data = json.loads(response.text)

    return data