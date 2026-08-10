//  //const API_URL = "http://127.0.0.1:8000";


// const API_URL = "https://codedoc-ai-deploy.onrender.com/";
// export async function generateDocumentation(code) {
//"https://codedoc-ai-deploy.onrender.com"
//   const response = await fetch(`${API_URL}/generate`, {

//     method: "POST",

//     headers: {
//       "Content-Type": "application/json"
//     },

//     body: JSON.stringify({
//       code: code
//     })
//   });

//   const data = await response.json();

//   return data;
// }


// export async function exploreCode(code, mode) {

//   const response = await fetch(`${API_URL}/explore`, {

//     method: "POST",

//     headers: {
//       "Content-Type": "application/json"
//     },

//     body: JSON.stringify({
//       code: code,
//       mode: mode
//     })
//   });

//   const data = await response.json();

//   return data;
// }


// // ==============================
// // AI Follow-up
// // ==============================

// export async function askFollowup(code, question) {

//   const response = await fetch(`${API_URL}/followup`, {

//     method: "POST",

//     headers: {
//       "Content-Type": "application/json"
//     },

//     body: JSON.stringify({
//       code: code,
//       question: question
//     })
//   });

//   const data = await response.json();

//   return data;
// }


const API_URL ="https://codedoc-ai-deploy.onrender.com" ;

export async function generateDocumentation(code) {
  const response = await fetch(`${API_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      code: code
    })
  });

  const data = await response.json();

  return data;
}

export async function exploreCode(code, mode) {
  const response = await fetch(`${API_URL}/explore`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      code: code,
      mode: mode
    })
  });

  const data = await response.json();

  return data;
}

// ==============================
// AI Follow-up
// ==============================

export async function askFollowup(code, question) {
  const response = await fetch(`${API_URL}/followup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      code: code,
      question: question
    })
  });

  const data = await response.json();

  return data;
}