// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL || "https://codedoc-ai-deploy.onrender.com";

// const API = axios.create({
//   baseURL: API_URL,
// });

// // Documentation Generator
// export const generateDocumentation = async (code) => {
//   const response = await API.post("/generate", {
//     code: code,
//   });

//   return response.data;
// };

// // Code Explorer
// export const exploreCode = async (code, mode) => {
//   const response = await API.post("/explore", {
//     code: code,
//     mode: mode,
//   });

//   return response.data;
// };

// // AI Follow-up
// export const askFollowup = async (code, question) => {
//   const response = await API.post("/followup", {
//     code: code,
//     question: question,
//   });

//   return response.data;
// };

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://codedoc-ai-deploy.onrender.com";


// ==========================================
// Documentation Generator
// ==========================================

export async function generateDocumentation(code) {
  const response = await fetch(`${API_URL}/generate`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      code: code,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `generateDocumentation failed: ${response.status}`
    );
  }

  const data = await response.json();

  return data;
}


// ==========================================
// Code Explorer
// ==========================================

export async function exploreCode(code, mode) {
  const response = await fetch(`${API_URL}/explore`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      code: code,
      mode: mode,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `exploreCode failed: ${response.status}`
    );
  }

  const data = await response.json();

  return data;
}


// ==========================================
// AI Follow-up
// ==========================================

export async function askFollowup(code, question) {
  const response = await fetch(`${API_URL}/followup`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      code: code,
      question: question,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `askFollowup failed: ${response.status}`
    );
  }

  const data = await response.json();

  return data;
}