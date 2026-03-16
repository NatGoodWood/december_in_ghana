import { FaChartLine, FaMoneyBillWave } from "react-icons/fa";

function Investment() {
  return (
    <section className="investment">
      <h2>Investment Opportunities</h2>
      <div className="investment-grid">
        <div className="investment-card">
          <FaChartLine size={40} color="#28a745" />
          <h3>Hospitality</h3>
          <p>Hotels, resorts, and tourism services.</p>
          <button>Learn More</button>
        </div>
        <div className="investment-card">
          <FaMoneyBillWave size={40} color="#ffcc00" />
          <h3>Tech & Innovation</h3>
          <p>Startups, fintech, and creative industries.</p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Investment;