import fetchData from './api.js'; // Import fetchData

const managerIndex = new URLSearchParams(window.location.search).get('id');

window.onload = function() {
  fetchData('/api/personas')  // Use fetchData instead of fetch
    .then(managers => {
      const manager = managers[managerIndex];
      const dataGapsDiv = document.getElementById('dataGaps');
      manager.interviewQuestions
        .filter(question => question.type === 'blindSpot')
        .forEach(question => {
          const questionDiv = document.createElement('div');
          questionDiv.innerHTML = `<p>${question.question}</p>`;
          dataGapsDiv.appendChild(questionDiv);
        });
    })
    .catch(error => console.error(error));  // Add error handling
};
