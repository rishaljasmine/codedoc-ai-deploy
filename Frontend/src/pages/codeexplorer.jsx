import { useState } from "react";
import { exploreCode, askFollowup } from "../services/api";
import "./CodeExplorer.css";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";


function CodeExplorer() {

  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("");

  // Follow-up states
  const [question, setQuestion] = useState("");
  const [followupAnswer, setFollowupAnswer] = useState("");
  const [followupLoading, setFollowupLoading] = useState(false);


  const explanationModes = [
    "Explain Like I'm 5",
    "Explain Like a Beginner",
    "Explain Like an Interviewer",
    "Explain Like a Senior Developer",
    "Explain Like a Professor"
  ];


  const handleExplain = async () => {

    if (!code.trim()) {
      alert("Please paste some code first.");
      return;
    }

    if (!mode) {
      alert("Please select an explanation style.");
      return;
    }

    setLoading(true);
    setExplanation("");
    setFollowupAnswer("");

    try {

      const response = await exploreCode(code, mode);

      setExplanation(response.explanation);

    } catch (error) {

      console.error(error);
      setExplanation("Failed to analyze the code.");

    }

    setLoading(false);
  };


  const handleFollowup = async () => {

    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    setFollowupLoading(true);
    setFollowupAnswer("");

    try {

      const response = await askFollowup(code, question);

      setFollowupAnswer(response.answer);

    } catch (error) {

      console.error(error);
      setFollowupAnswer("Failed to get an answer.");

    }

    setFollowupLoading(false);
  };


  return (

    <div className="explorer-page">

      <div className="explorer-header">

        <span className="explorer-badge">
          🧠 Code Explorer
        </span>

        <h1>Understand Your Code</h1>

        <p>
          Explore your code from different perspectives.
        </p>

      </div>


      <div className="explorer-workspace">

        <div className="code-panel">

          <h2>Paste Your Code</h2>

          <textarea
            placeholder="Paste your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

        </div>


        <div className="explanation-panel">

          <h2>Choose How You Want to Learn</h2>

          <div className="explanation-modes">

            {explanationModes.map((item) => (

              <button
                key={item}
                className={mode === item ? "mode active" : "mode"}
                onClick={() => setMode(item)}
              >
                {item}
              </button>

            ))}

          </div>


          <button
            className="explain-button"
            onClick={handleExplain}
          >
            {loading ? "Analyzing..." : "Explain My Code →"}
          </button>

        </div>

      </div>


      {/* Explanation */}

      {explanation && (

        <div className="explorer-result">

          <h2>💡 Explanation</h2>

          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {

                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (

                  <SyntaxHighlighter
                    style={tomorrow}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>

                ) : (

                  <code
                    className={className}
                    {...props}
                  >
                    {children}
                  </code>

                );
              }
            }}
          >
            {explanation}
          </ReactMarkdown>


          {/* AI Follow-up */}

          <div className="followup-box">

            <h3>💬 Still confused?</h3>

            <p>
              Ask a question about the code or explanation.
            </p>


            <div className="followup-input">

              <input
                type="text"
                placeholder="e.g. Why is % used here?"
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
                {followupLoading ? "Thinking..." : "Ask →"}
              </button>

            </div>


            <div className="suggested-questions">

              <button
                onClick={() =>
                  setQuestion("Explain the most important line in this code.")
                }
              >
                Explain the important line
              </button>

              <button
                onClick={() =>
                  setQuestion("Give me a simple example of how this code works.")
                }
              >
                Give me an example
              </button>

              <button
                onClick={() =>
                  setQuestion("What could go wrong with this code?")
                }
              >
                What could go wrong?
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

        </div>

      )}

    </div>

  );
}


export default CodeExplorer;