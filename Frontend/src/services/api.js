import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://codedoc-ai-deploy.onrender.com";

const API = axios.create({
  baseURL: API_URL,
});

// Documentation Generator
export const generateDocumentation = async (code) => {
  const response = await API.post("/generate", {
    code: code,
  });

  return response.data;
};

// Code Explorer
export const exploreCode = async (code, mode) => {
  const response = await API.post("/explore", {
    code: code,
    mode: mode,
  });

  return response.data;
};

// AI Follow-up
export const askFollowup = async (code, question) => {
  const response = await API.post("/followup", {
    code: code,
    question: question,
  });

  return response.data;
};