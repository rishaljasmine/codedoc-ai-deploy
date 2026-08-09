import json
import ollama


def analyze_code(code: str):
    prompt = f"""
You are an expert software engineer.

Analyze the following source code.

Tasks:
1. Detect the programming language.
2. Explain what the code does.
3. Find the function or method name.
4. Explain every parameter.
5. Explain the return value.
6. Estimate time complexity.
7. Estimate space complexity.
8. Suggest improvements.

Return ONLY valid JSON in this format:

{{
  "language": "",
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

Code:
{code}
"""

    response = ollama.chat(
        model="qwen2.5-coder:3b",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    result = response["message"]["content"]

    # Remove markdown if the model returns ```json ... ```
    result = result.replace("```json", "").replace("```", "").strip()

    try:
        return json.loads(result)
    except json.JSONDecodeError:
        return {
            "error": "The AI returned invalid JSON.",
            "raw_response": result
        }