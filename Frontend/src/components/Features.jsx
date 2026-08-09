import FeatureCard from "./FeatureCard";
import "./Features.css";

function Features() {

  const features = [
    {
      icon: "📄",
      title: "Documentation Generator",
      description:
        "Turn your code into clear, professional documentation with AI."
    },

    {
      icon: "🧠",
      title: "Code Explorer",
      description:
        "Understand your code from beginner to senior developer perspectives."
    }
  ];

  return (
    <section className="features">

      <div className="features-heading">

        <span className="section-badge">
          ✦ CODE UNDERSTANDING, REIMAGINED
        </span>

        <h2>
          Everything you need to
          <span> understand code.</span>
        </h2>

        <p>
          One intelligent workspace to document, explore and learn from your code.
        </p>

      </div>

      <div className="features-grid">

        {features.map((feature, index) => (

          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />

        ))}

      </div>

    </section>
  );
}

export default Features;