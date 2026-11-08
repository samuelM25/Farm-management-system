function StatCard({ icon, value, title }) {
  return (
    <div className="card shadow-sm border-0 p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6 className="text-muted">{title}</h6>

          <h3 className="fw-bold">{value}</h3>
        </div>

        <div>
          <i className="{`${icon} fs-1 text-success`}"></i>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
