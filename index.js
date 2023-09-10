fetch("./data.json")
  .then((res) => res.json())
  .then(function calculateAverageScore(data) {
    let totalScore = 0;
    data.forEach((item) => {
      totalScore += item.score;
    });

    // Calculate the average by dividing the total score by the number of items
    console.log(Math.floor((totalScore / data.length).toFixed(2)));
    return Math.floor((totalScore / data.length).toFixed(2));
  })
  .then((item) => {
    const numberElement = document.querySelector(".number");
    if (numberElement) {
      numberElement.textContent = item;
    }
  });

fetch("./data.json")
  .then((res) => res.json())
  .then( function populateHTML(data) {
      const secondContainer = document.querySelector(".secondContainer");
      data.forEach((item) => {
        const div = document.createElement("div");
        div.className = "category-data";

        div.innerHTML = `
                <div class="${item.category.toLowerCase()}">
                  <img src="${item.icon}" alt="${item.category}" />
                  <h3>${item.category}</h3>
                  <p><strong>${item.score}</strong>/100</p>
                </div>
              `;

        secondContainer.appendChild(div);
      });
    });
