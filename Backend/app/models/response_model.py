from pydantic import BaseModel


class Parameter(BaseModel):
    name: str
    description: str


class CodeResponse(BaseModel):
    language: str
    summary: str
    function_name: str
    parameters: list[Parameter]
    return_value: str
    time_complexity: str
    space_complexity: str
    improvements: list[str]