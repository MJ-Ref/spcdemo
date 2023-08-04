import fetchData from './api.js'; // Import fetchData

window.onload = function() {
  fetchData('/api/personas') // Use fetchData instead of fetch
    .then(data => {
      const managersDiv = document.getElementById('managers');
      data.forEach((persona, index) => {
        const managerDiv = document.createElement('div');
        managerDiv.innerHTML = `
          <h2><a href="/manager.html?id=${index}">${persona.name}</a></h2>
          <p>${persona.role}</p>
        `;
        managersDiv.appendChild(managerDiv);
      });
    })
    .catch(error => console.error(error));  // Add error handling
};


