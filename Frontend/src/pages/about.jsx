import { motion } from "framer-motion";
import "./about.css";

function About() {
  return (
    <div className="about-page">

      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <div className="about-badge">
          ✦ About CodeDoc AI
        </div>

        <h1>
          Understand Code.
          <br />
          <span>Build Better.</span>
        </h1>

        <p>
          CodeDoc AI is an AI-powered developer learning tool designed
          to make understanding code simpler, faster, and more intuitive.
        </p>

      </motion.div>


      <div className="about-cards">

        <motion.div
          className="about-card"
          whileHover={{ y: -6 }}
        >
          <div className="about-icon">📄</div>

          <h2>Documentation</h2>

          <p>
            Turn complex code into clear, structured documentation.
            Understand functions, parameters, return values and
            improvements without manually writing everything.
          </p>
        </motion.div>


        <motion.div
          className="about-card"
          whileHover={{ y: -6 }}
        >
          <div className="about-icon">🧠</div>

          <h2>Code Explorer</h2>

          <p>
            Explore your code from different perspectives.
            Learn the same concept as a beginner, interviewer,
            senior developer or professor.
          </p>
        </motion.div>


        <motion.div
          className="about-card"
          whileHover={{ y: -6 }}
        >
          <div className="about-icon">💬</div>

          <h2>AI Follow-up</h2>

          <p>
            Still confused? Ask questions directly about your code
            and get simple, contextual answers from the AI.
          </p>
        </motion.div>

      </div>


      <motion.div
        className="about-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <h2>
          Built to make programming easier.
        </h2>

        <p>
          Whether you're learning your first programming language,
          preparing for interviews, or working with unfamiliar code,
          CodeDoc AI helps you understand what's happening under the hood.
        </p>

      </motion.div>

    </div>
  );
}

export default About;