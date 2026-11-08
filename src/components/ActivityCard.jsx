function ActivityCard() {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5>Recent Activities</h5>

        <hr />

        <ul className="list-group list-group-flush">
          <li className="list-group-item">🐄 Added 5 Cows</li>

          <li className="list-group-item">🌽 Harvested Maize</li>

          <li className="list-group-item">💰 Sold 3 Goats</li>

          <li className="list-group-item">💉 Vaccinated Chickens</li>
        </ul>
      </div>
    </div>
  );
}

export default ActivityCard;
