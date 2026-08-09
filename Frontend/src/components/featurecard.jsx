import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function FeatureCard({ icon, title, description, path }) {

  const navigate = useNavigate();

  return (

    <motion.div
      className="feature-card"
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(path)}
      style={{ cursor: "pointer" }}
    >

      <div className="feature-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </motion.div>

  );
}

export default FeatureCard;