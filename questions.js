// Load JSON data from the server
fetchData('questions.json')
  .then(data => {
    // Populate personas dropdown
    let personas = document.getElementById('personas');
    for (let persona of data) {
      let option = document.createElement('option');
      option.text = persona.name + " (" + persona.role + ")";
      option.value = persona.name;
      personas.appendChild(option);
    }

    // Generate regular questions when a persona is selected
    personas.addEventListener('change', function() {
      let selectedPersona = data.find(persona => persona.name === this.value);
      generateQuestions('regular', selectedPersona.interviewQuestions.filter(q => q.type === 'regular'));
    });

    // Add a click event listener for the Generate Blind Spot Questions button
    document.getElementById('generateBlindSpotQuestions').addEventListener('click', function() {
      let selectedPersona = data.find(persona => persona.name === personas.value);
      generateQuestions('blindSpot', selectedPersona.interviewQuestions.filter(q => q.type === 'blindSpot'));
    });
  })
  .catch(error => console.error(error));  // Add error handling

// Function to generate questions of a particular type
function generateQuestions(type, questions) {
  let container = document.getElementById(type + 'Questions');
  container.innerHTML = '<h2>' + (type.charAt(0).toUpperCase() + type.slice(1)) + ' Questions</h2>';

  // Add the questions to the container
  for (let question of questions) {
    let p = document.createElement('p');
    p.textContent = question.question;
    container.appendChild(p);
  }
}

