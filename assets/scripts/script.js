//read data
let data = await getData("data.json");

//get summary data element to append childs to
let summaryData = document.getElementById(
  "result-summary-component__summary-data"
);
//get score data element to show total score
let scoreData = document.getElementById("result-summary-component__score-data");

let innerHTML = "";
let scoreSum = 0;
//loop through data and add the li element for each item and increase the scoreSum by that item's score
data.forEach((item) => {
  innerHTML += `<li class="result-summary-component__${item.category.toLowerCase()}">
  <div class="result-summary-component__summary-title">
    <img
      src="${item.icon}"
      alt="Reaction"
      aria-hidden="true"
    />
    <p>${item.category}</p>
  </div>
  <div class="result-summary-component__summary-score">
  ${item.score} <span>/ 100</span>
  </div>
</li>`;
  scoreSum += item.score;
});

//set elements
summaryData.innerHTML = innerHTML;
let totalScore = Math.round(scoreSum / data.length);
scoreData.textContent = totalScore;

/* function declarations */

//reads the json file and returns it as json
async function getData(url) {
  let response = await fetch(url);
  return JSON.parse(await response.text());
}
