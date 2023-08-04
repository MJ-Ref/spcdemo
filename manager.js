import fetchData from './api.js'; // Import fetchData

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetchData(`http://localhost:5001/api/personas/${id}`) // Use fetchData instead of fetch
  .then(manager => {
    const managerDiv = document.getElementById('manager');
    managerDiv.innerHTML = `<h1>${manager.name}</h1><p>${manager.role}</p><button id="showQuestions">Show Interview Questions</button>`;

    document.getElementById('showQuestions').addEventListener('click', () => {
      let questions = '';
      manager.interviewQuestions.forEach(question => {
        questions += `<p>${question.question}</p>`;
      });
      managerDiv.innerHTML += `<div id="questions">${questions}</div>`;
    });
  })
  .catch(error => console.error(error));  // Add error handling



