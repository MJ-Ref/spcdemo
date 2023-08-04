window.onload = () => {
  console.log(document.getElementById('personas')); // Add this line
  const personasSelect = document.getElementById('personas');
  const questionsDiv = document.getElementById('questions');

  fetchData('/api/personas')  // Use fetchData instead of fetch
    .then(data => {
      data.forEach((persona, index) => {
        const option = document.createElement('option');
        option.text = `${persona.name} - ${persona.role}`; // Include the role in the text
        option.value = index;
        personasSelect.add(option);
      });

      personasSelect.onchange = function() {
        const selectedPersona = data[this.value];
        questionsDiv.innerHTML = '';
        selectedPersona.interviewQuestions.forEach(question => {
          const p = document.createElement('p');
          p.textContent = question.question;
          questionsDiv.appendChild(p);
        });
      };
    })
    .catch(error => console.error(error));  // Add error handling
};

 










