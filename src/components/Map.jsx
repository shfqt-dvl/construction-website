import "./Map.css";

function Map() {
  return (
    <section className="map-section fade-in">

      <h2>Find Our Store</h2>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps?q=Mushad+Construction+%26+Hardware+Store+Khodaibagh+Saran+Bihar&output=embed"
          loading="lazy"
          title="Mushad Construction & Hardware Store Location"
        ></iframe>
      </div>

    </section>
  );
}

export default Map;