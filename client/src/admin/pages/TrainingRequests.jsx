import { useEffect, useState } from "react";
import {
  fetchTrainingRequests,
  updateTrainingStatus,
} from "../services/adminApi";

const statuses = ["NEW", "CONTACTED", "REJECTED", "CONVERTED"];

const TrainingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <>
      <h1>Training Requests</h1>

      <table style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <td>{req.name}</td>
              <td>{req.email}</td>
              <td>{req.phone}</td>
              <td>{req.role || "-"}</td>
              <td>
                <select
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TrainingRequests;
