export const submitTrainingRequest = async (data) => {
    const response = await fetch("http://localhost:5000/api/training", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Submission failed");
    }

    return response.json();
};
