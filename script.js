async function fetchData() {
  try {
    // Show loading indicator
    document.getElementById("loading").style.display = "block";

    // Fetch data from API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const users = await response.json();
    renderData(users);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Failed to fetch data");
  } finally {
    // Hide loading indicator
    document.getElementById("loading").style.display = "none";
  }
}

function renderData(data) {
  const dataBody = document.getElementById("dataBody");
  dataBody.innerHTML = ""; // Clear previous rows

  data.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
    `;
    dataBody.appendChild(row);
  });
}

// Call fetchData when page loads
fetchData();
