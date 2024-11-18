import jobRecords from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const jobContainer = document.getElementById("job-container");
  jobRecords.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
            <div class="job-title">${job.Title}</div>
            <div><strong>Sol#:</strong> ${job.SolNum}</div>
            <div><strong>Department:</strong> ${job.Department}</div>
            <div><strong>Office:</strong> ${job.Office}</div>
            <div><strong>Posted Date:</strong> ${job.PostedDate}</div>
            <div><strong>Contact:</strong> ${job.PrimaryContactTitle} ${job.PrimaryContactFirstName} ${job.PrimaryContactLastName}</div>
            <div><strong>Email:</strong> ${job.PrimaryContactEmail}</div>
            <div><strong>Phone:</strong> ${job.PrimaryContactPhone}</div>
            <p><strong>Description:</strong> ${job.Description}</p>
        `;
    jobContainer.appendChild(jobCard);
  });
});
