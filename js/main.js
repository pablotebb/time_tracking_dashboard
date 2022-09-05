// Json
import data from "../data.json" assert { type: "json" };

// Colors background cards
const colors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];
// Buttons
const button_daily = document.getElementById("daily");
const button_weekly = document.getElementById("weekly");
const button_monthly = document.getElementById("monthly");
// Card
const section_b = document.querySelector(".section-b");

paintingScreen("daily");
// pointed button
button_daily.classList.toggle("section-a__button--select");
button_weekly.classList.remove("section-a__button--select");
button_monthly.classList.remove("section-a__button--select");

// Daily event
button_daily.addEventListener("click", (e) => {
  e.preventDefault();

  // pointed button
  button_daily.classList.toggle("section-a__button--select");
  button_weekly.classList.remove("section-a__button--select");
  button_monthly.classList.remove("section-a__button--select");

  paintingScreen("daily");
});

// Weekly event
button_weekly.addEventListener("click", (e) => {
  e.preventDefault();

  // pointed button
  button_weekly.classList.toggle("section-a__button--select");
  button_daily.classList.remove("section-a__button--select");
  button_monthly.classList.remove("section-a__button--select");

  paintingScreen("weekly");
});

// Monthly event
button_monthly.addEventListener("click", (e) => {
  e.preventDefault();

  // pointed button
  button_monthly.classList.toggle("section-a__button--select");
  button_weekly.classList.remove("section-a__button--select");
  button_daily.classList.remove("section-a__button--select");

  paintingScreen("monthly");
});

function paintingScreen(frase) {
  let current,
    previous,
    image_background = "";
  section_b.innerHTML = "";

  data.forEach((element, index) => {
    image_background = element.title.toLowerCase();
    if (image_background == "self care") {
      image_background = "self-care";
    }
    if (frase == "daily") {
      current = element.timeframes.daily.current;
      previous = element.timeframes.daily.previous;
    } else if (frase == "weekly") {
      current = element.timeframes.weekly.current;
      previous = element.timeframes.weekly.previous;
    } else if (frase == "monthly") {
      current = element.timeframes.monthly.current;
      previous = element.timeframes.monthly.previous;
    }
    section_b.innerHTML += `
          <div class="section-b-card">
            <div class="section-b-card__back" style="background-color: ${colors[index]}">
              <img src="./images/icon-${image_background}.svg" alt="icon ${image_background}" />
            </div>
            <div class="section-b-card__fore">
              <div>
                <p>${element.title}</p>
                <img src="./images/icon-ellipsis.svg" alt="icon ellipsis" />
              </div>
              <div>
                <p>${current}hrs</p>
                <p>Last Week - ${previous}hrs</p>
              </div>
            </div>
          </div>
    `;
  });
}
