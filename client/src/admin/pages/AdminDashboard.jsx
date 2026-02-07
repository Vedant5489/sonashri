import "../styles/adminDashboard.css"

const AdminDashboard = () => {
  const now = new Date();
  const hour = now.getHours();

  const greeting =
    hour < 12
      ? "Good morning"
      : hour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <div className="admin-dashboard">
      <div className="dashboard-hero">
        <div>
          <h1>{greeting}, Admin 👋</h1>
          <p className="dashboard-subtitle">
            Here’s a quick overview of what’s happening today
          </p>
        </div>

        <div className="dashboard-date">
          {now.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
          <span className="dashboard-time">
            {now.toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-icon">🎓</div>
          <h3>Training Requests</h3>
          <p>Review and respond to new enquiries</p>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📚</div>
          <h3>Case Studies</h3>
          <p>Create, edit and publish content</p>
        </div>

        <div className="dashboard-card muted">
          <div className="card-icon">⚙️</div>
          <h3>System Status</h3>
          <p>All services running smoothly</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

