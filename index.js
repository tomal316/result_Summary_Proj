    // Function to populate the HTML elements with JSON data
    const jsonData = [
        {
          "category": "Reaction",
          "score": 80,
          "icon": "./assets/images/icon-reaction.svg"
        },
        {
          "category": "Memory",
          "score": 92,
          "icon": "./assets/images/icon-memory.svg"
        },
        {
          "category": "Verbal",
          "score": 61,
          "icon": "./assets/images/icon-verbal.svg"
        },
        {
          "category": "Visual",
          "score": 72,
          "icon": "./assets/images/icon-visual.svg"
        }
      ]
      
      // Function to calculate the average score from JSON data
    function calculateAverageScore() {
        let totalScore = 0;
        jsonData.forEach(item => {
            totalScore += item.score;
        });

        // Calculate the average by dividing the total score by the number of items
        return Math.floor((totalScore / jsonData.length).toFixed(2));
    }
    
    
    function populateHTML(data) {
        const secondContainer = document.querySelector('.secondContainer');
        const averageScore = calculateAverageScore();

        // Populate the average score in the "number" class element
        const numberElement = document.querySelector('.number');
        if (numberElement) {
            numberElement.textContent = averageScore;
        }
        jsonData.forEach(item => {
          const div = document.createElement('div');
          div.className = 'category-data';
  
          div.innerHTML = `
            <div class="${item.category.toLowerCase()}">
              <img src="${item.icon}" alt="${item.category}" />
              <h3>${item.category}</h3>
              <p><strong>${item.score}</strong>/100</p>
            </div>
          `;
  
          secondContainer.appendChild(div);
        });
      }
  
      // Call the function to populate HTML elements
      populateHTML();