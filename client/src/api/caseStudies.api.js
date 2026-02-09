const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCaseStudies = async () => {
    const res = await fetch(`${BASE_URL}/api/case-studies`);
    if (!res.ok) throw new Error("Failed to fetch case studies");
    return res.json();
};

export const fetchCaseStudyById = async (id) => {
    const res = await fetch(`${BASE_URL}/api/case-studies/${id}`);
    if (!res.ok) throw new Error("Failed to fetch case study");
    return res.json();
};
