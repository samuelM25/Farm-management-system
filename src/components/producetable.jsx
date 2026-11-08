function Producetable({ records, onDelete }) {
  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-header bg-dark text-white">
        <i className="bi bi-wallet2 me-2"></i>
        Recent Entered produce
      </div>

      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Item</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((records) => (
              <tr key={records.id}>
                <td>{records.date}</td>

                <td>{records.category}</td>

                <td>{records.item}</td>

                <td>UGX {Number(records.amount).toLocaleString()}</td>

                <td>
                  <button className="btn btn-sm btn-primary me-2">
                    <i className="bi bi-pencil"></i>
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(records.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Producetable;
