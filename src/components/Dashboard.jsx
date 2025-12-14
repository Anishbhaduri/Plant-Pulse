function Dashboard() {
  function handleLogout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;