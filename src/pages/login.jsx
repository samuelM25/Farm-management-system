function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="text-center mb-4">
          <h1 className="farm-title">LINAH FARM</h1>
          <p className="text-muted">Login to Linah Farm</p>
        </div>

        <form action="">
          <div className="form-email">
            <label htmlFor="">Email</label>
            <input type="text" className="email" placeholder="Enter Email" />
          </div>

          <div className="form password">
            <label htmlFor="">Password</label>
            <input
              type="text"
              className="password"
              placeholder="Enter Password"
            />
          </div>

          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
