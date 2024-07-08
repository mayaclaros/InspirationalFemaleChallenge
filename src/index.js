function askInspire() {
  alert("Who is a female that inspires you?");
}

setTimeout(askInspire, 15000);

function changeAffirmation() {
  let h2Element = document.querySelector("#Affirmations1");
  h2Element.textContent = "Cátaleya";
}
let today = moment().format("[Today is] dddd, MMMM D, YYYY");
let todayElement = document.querySelector("#current-date");
todayElement.innerHTML = today;
