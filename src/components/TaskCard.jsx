function TaskCard() {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5>Upcoming Tasks</h5>

        <hr />

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Feed Chickens</li>

          <li className="list-group-item">Water Tomatoes</li>

          <li className="list-group-item">Repair Water Pump</li>

          <li className="list-group-item">Vaccinate Goats</li>
        </ul>
      </div>
    </div>
  );
}

export default TaskCard;
