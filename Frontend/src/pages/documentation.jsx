// import { generateDocumentation, askFollowup } from "../api/api";
// import { useState } from "react";

// import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

// import "./documentation.css";

// function Documentation() {

//   const [code, setCode] = useState("");
//   const [result, setResult] = useState("");

//   const [question, setQuestion] = useState("");
//   const [followupAnswer, setFollowupAnswer] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [followupLoading, setFollowupLoading] = useState(false);


//   async function generateDocs() {

//     if (!code.trim()) {
//       alert("Please paste some code first.");
//       return;
//     }

//     setLoading(true);
//     setResult("");
//     setFollowupAnswer("");

//     try {

//       const data = await generateDocumentation(code);

//       setResult(data.documentation);

//     }
//     catch (error) {

//       console.log(error);

//       setResult("Error generating documentation.");

//     }

//     setLoading(false);
//   }


//   function copyDocumentation() {

//     navigator.clipboard.writeText(result);

//     alert("Documentation copied!");
//   }


//   async function handleFollowup() {

//     if (!question.trim()) {
//       alert("Please enter a question.");
//       return;
//     }

//     setFollowupLoading(true);
//     setFollowupAnswer("");

//     try {

//       const data = await askFollowup(code, question);

//       setFollowupAnswer(data.answer);

//     }
//     catch (error) {

//       console.log(error);

//       setFollowupAnswer("Failed to get an answer.");

//     }

//     setFollowupLoading(false);
//   }


//   return (

//     <div className="documentation-page">

//       <h1>CodeDoc AI</h1>

//       <p>
//         AI-Powered Code Documentation Generator
//       </p>


//       <textarea
//         placeholder="Paste your code here..."
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//       />


//       <button onClick={generateDocs}>
//         {loading ? "Generating..." : "Generate Documentation"}
//       </button>


//       {result && (

//         <>

//           <hr />

//           <h2>📄 Documentation</h2>


//           <button onClick={copyDocumentation}>
//             Copy Documentation
//           </button>


//           <div className="result">

//             <ReactMarkdown
//               components={{
//                 code({ node, inline, className, children, ...props }) {

//                   const match =
//                     /language-(\w+)/.exec(className || "");

//                   return !inline && match ? (

//                     <SyntaxHighlighter
//                       style={tomorrow}
//                       language={match[1]}
//                       PreTag="div"
//                       {...props}
//                     >
//                       {String(children).replace(/\n$/, "")}
//                     </SyntaxHighlighter>

//                   ) : (

//                     <code
//                       className={className}
//                       {...props}
//                     >
//                       {children}
//                     </code>

//                   );
//                 }
//               }}
//             >
//               {result}
//             </ReactMarkdown>

//           </div>


//           {/* AI Follow-up */}

//           <div className="documentation-followup">

//             <h3>💬 Want to understand something better?</h3>

//             <p>
//               Ask AI a question about this documentation or your code.
//             </p>


//             <div className="followup-input">

//               <input
//                 type="text"
//                 placeholder="Ask something about your code..."
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     handleFollowup();
//                   }
//                 }}
//               />


//               <button
//                 onClick={handleFollowup}
//                 disabled={followupLoading}
//               >
//                 {followupLoading ? "Thinking..." : "Ask AI →"}
//               </button>

//             </div>


//             {followupAnswer && (

//               <div className="followup-answer">

//                 <h3>🤖 AI Answer</h3>

//                 <ReactMarkdown>
//                   {followupAnswer}
//                 </ReactMarkdown>

//               </div>

//             )}

//           </div>

//         </>

//       )}

//     </div>

//   );
// }

// export default Documentation;



import { generateDocumentation, askFollowup } from "../api/api";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./documentation.css";

function Documentation() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const [question, setQuestion] = useState("");
  const [followupAnswer, setFollowupAnswer] = useState("");

  const [loading, setLoading] = useState(false);
  const [followupLoading, setFollowupLoading] = useState(false);

  // ==============================
  // Generate Documentation
  // ==============================

  async function generateDocs() {
    if (!code.trim()) {
      alert("Please paste some code first.");
      return;
    }

    setLoading(true);
    setResult("");
    setFollowupAnswer("");

    try {
      const data = await generateDocumentation(code);

      setResult(data.documentation || data.response || "");
    } catch (error) {
      console.error(error);
      setResult("Error generating documentation.");
    }

    setLoading(false);
  }

  // ==============================
  // Copy Documentation
  // ==============================

  function copyDocumentation() {
    navigator.clipboard.writeText(result);
    alert("Documentation copied!");
  }

  // ==============================
  // AI Follow-up
  // ==============================

  async function handleFollowup() {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    setFollowupLoading(true);
    setFollowupAnswer("");

    try {
      const data = await askFollowup(code, question);

      setFollowupAnswer(data.answer || data.response || "");
    } catch (error) {
      console.error(error);
      setFollowupAnswer("Failed to get an answer.");
    }

    setFollowupLoading(false);
  }

  return (
    <div className="documentation-page">
      <h1>CodeDoc AI</h1>

      <p>AI-Powered Code Documentation Generator</p>

      <textarea
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={generateDocs}>
        {loading ? "Generating..." : "Generate Documentation"}
      </button>

      {result && (
        <>
          <hr />

          <h2>📄 Documentation</h2>

          <button onClick={copyDocumentation}>
            Copy Documentation
          </button>

          <div className="result">
            <ReactMarkdown
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");

                  return match ? (
                    <SyntaxHighlighter
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {result}
            </ReactMarkdown>
          </div>

          {/* AI Follow-up */}

          <div className="documentation-followup">
            <h3>💬 Want to understand something better?</h3>

            <p>
              Ask AI a question about this documentation or your code.
            </p>

            <div className="followup-input">
              <input
                type="text"
                placeholder="Ask something about your code..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleFollowup();
                  }
                }}
              />

              <button
                onClick={handleFollowup}
                disabled={followupLoading}
              >
                {followupLoading ? "Thinking..." : "Ask AI →"}
              </button>
            </div>

            {followupAnswer && (
              <div className="followup-answer">
                <h3>🤖 AI Answer</h3>

                <ReactMarkdown>
                  {followupAnswer}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Documentation;