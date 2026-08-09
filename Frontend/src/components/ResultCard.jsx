import "./ResultCard.css";

export default function ResultCard({ title, value, icon }) {
  return (
    <div className="result-card">
      <div className="card-title">
        <span>{icon}</span>
        <h3>{title}</h3>
      </div>

      <p>{value}</p>
    </div>
  );
}