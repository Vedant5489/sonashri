import { useEffect, useState } from "react";
import {
  fetchTrainingRequests,
  updateTrainingStatus,
} from "../services/adminApi";
import "../styles/trainingRequests.css";

const statuses = ["NEW", "CONTACTED", "REJECTED", "CONVERTED"];

const TrainingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("ALL");

  const filteredRequests =
  statusFilter === "ALL"
    ? requests
    : requests.filter((r) => r.status === statusFilter);

  const loadRequests = async () => {
    setLoading(true);
    const data = await fetchTrainingRequests();
    setRequests(data);
    setLoading(false);
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    await updateTrainingStatus(id, newStatus);
    loadRequests(); // simple + safe
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="training-requests">
      <div className="training-header">
        <div>
          <h1>Training Requests</h1>
          <p className="training-subtitle">
            Track and manage training enquiries
          </p>
        </div>

        <div className="training-header-actions">
          <select
            className="header-status-dropdown"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="ALL">
              All Requests ({requests.length})
            </option>
            <option value="NEW">
              New ({requests.filter(r => r.status === "NEW").length})
            </option>
            <option value="CONTACTED">
              Contacted ({requests.filter(r => r.status === "CONTACTED").length})
            </option>
            <option value="CONVERTED">
              Converted ({requests.filter(r => r.status === "CONVERTED").length})
            </option>
            <option value="REJECTED">
              Rejected ({requests.filter(r => r.status === "REJECTED").length})
            </option>
          </select>
        </div>
      </div>


      <div className="training-table-wrapper">
        <table className="training-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <th>Contact</th>
            </tr>
          </thead>

          <tbody>
            {filteredRequests.map((req) => (
              <tr key={req.id}>
                <td data-label="Name" className="name-cell">{req.name}</td>
                <td data-label="Email">{req.email}</td>
                <td data-label="Phone">{req.phone}</td>
                <td data-label="Role">{req.role || "-"}</td>
                <td data-label="Status">
                  <select
                    className={`status-select status-${req.status.toLowerCase()}`}
                    value={req.status}
                    onChange={(e) =>
                      handleStatusChange(req.id, e.target.value)
                    }
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td data-label="Contact">
                  <a
                    className="gmail-btn"
                    data-tooltip="Compose email to trainee"
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${req.email}&su=Training%20Inquiry&body=Hi%20${req.name},%0D%0A%0D%0AThank%20you%20for%20your%20interest%20in%20our%20training%20program.%0D%0A%0D%0ABest%20regards,%0ASonashri%20Engineering`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ✉ Gmail
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainingRequests;
