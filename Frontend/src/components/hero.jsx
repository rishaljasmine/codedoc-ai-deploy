import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (

    <section className="hero">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <span className="badge">
          🚀 AI Powered Developer Toolkit
        </span>

        <h1>

          <span className="brand-name">
            CodeDoc AI
          </span>

          <br />

          Understand Code
          <br />

          <span className="gradient-text">
            Like Never Before.
          </span>

        </h1>

        <p>
          Generate professional documentation, explore your code
          from different perspectives, and learn programming faster with AI.
        </p>

        <div className="hero-buttons">

          <Link
            to="/documentation"
            className="primary-btn"
          >
            📄 Documentation
          </Link>

          <Link
            to="/explorer"
            className="secondary-btn"
          >
            🧠 Code Explorer
          </Link>

        </div>

      </motion.div>


      <motion.div
        className="code-window"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="window-header">

          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>

        </div>

        <pre>
{`function understand(code) {

  const ai = new CodeDocAI();

  return ai.explain({
    documentation: true,
    perspectives: true,
    learning: true
  });

}`}
        </pre>

      </motion.div>

    </section>

  );
}

export default Hero;