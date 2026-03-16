import { FaGlobeAfrica, FaUmbrellaBeach, FaMapMarkedAlt } from "react-icons/fa";

function Tourism() {
  return (
    <section className="tourism">
      <h2>Tourism Highlights</h2>
      <div className="tourism-grid">
        <div className="tourism-card">
          <FaUmbrellaBeach size={40} color="#006400" />
          <h3>Beaches</h3>
          <p>Relax at Labadi, Kokrobite, and more.</p>
        </div>
        <div className="tourism-card">
          <FaGlobeAfrica size={40} color="#ff0000" />
          <h3>Heritage</h3>
          <p>Explore Cape Coast Castle and cultural sites.</p>
        </div>
        <div className="tourism-card">
          <FaMapMarkedAlt size={40} color="#ffcc00" />
          <h3>Adventures</h3>
          <p>Safari parks and eco-tourism trails.</p>
        </div>
      </div>
    </section>
  );
}

export default Tourism;