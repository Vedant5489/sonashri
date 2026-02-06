const API_BASE = "http://localhost:5000/api/admin";

/* ================= AUTH HEADER ================= */

const getAuthHeaders = () => {
    const token = localStorage.getItem("admin_token");

    return token
        ? { Authorization: `Bearer ${token}` }
        : {};
};

/* ================= RESPONSE HANDLER ================= */

const handleResponse = async (res) => {
    if (res.status === 401) {
        localStorage.removeItem("admin_token");
        window.location.href = "/admin/login";
        throw new Error("Unauthorized");
    }

    return res.json();
};

/* ================= TRAINING ================= */

export const fetchTrainingRequests = async () => {
    const res = await fetch(`${API_BASE}/training`, {
        headers: {
            ...getAuthHeaders(),
        },
    });

    return handleResponse(res);
};

export const updateTrainingStatus = async (id, status) => {
    const res = await fetch(`${API_BASE}/training/${id}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json", // ✅ REQUIRED
            ...getAuthHeaders(),               // 🔐 REQUIRED
        },
        body: JSON.stringify({ status }),
    });

    return handleResponse(res);
};

/* ================= CASE STUDIES ================= */

export const fetchCaseStudies = async () => {
    const res = await fetch(`${API_BASE}/case-studies`, {
        headers: {
            ...getAuthHeaders(), // 🔐 REQUIRED
        },
    });

    return handleResponse(res);
};

export const createCaseStudy = async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("summary", data.summary);
    formData.append("content", data.content);
    formData.append("category", data.category || "");
    formData.append("is_published", data.is_published ? "true" : "false");

    if (data.cover_image) {
        formData.append("cover_image", data.cover_image);
    }

    const res = await fetch(`${API_BASE}/case-studies`, {
        method: "POST",
        headers: {
            ...getAuthHeaders(), // 🔐 REQUIRED (WAS MISSING ❌)
        },
        body: formData,
    });

    return handleResponse(res);
};

export const updateCaseStudy = async (id, data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        if (data[key] !== null) {
            formData.append(key, data[key]);
        }
    });

    const res = await fetch(`${API_BASE}/case-studies/${id}`, {
        method: "PUT",
        headers: {
            ...getAuthHeaders(), // 🔐 REQUIRED (WAS MISSING ❌)
        },
        body: formData,
    });

    return handleResponse(res);
};

export const toggleCaseStudyPublish = async (id) => {
    const res = await fetch(`${API_BASE}/case-studies/${id}/publish`, {
        method: "PATCH",
        headers: {
            ...getAuthHeaders(), // 🔐 REQUIRED (WAS MISSING ❌)
        },
    });

    return handleResponse(res);
};
