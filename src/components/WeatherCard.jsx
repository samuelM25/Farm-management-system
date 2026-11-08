function WeatherCard() {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body text-center">
        <i
          className="bi bi-sun-fill text-warning"
          style={{
            fontSize: "60px",
          }}
        ></i>

        <h2 className="mt-3">28°C</h2>

        <p className="text-muted">Sunny</p>

        <hr />

        <div className="row">
          <div className="col">
            <strong>Humidity</strong>

            <p>75%</p>
          </div>

          <div className="col">
            <strong>Wind</strong>

            <p>12 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
