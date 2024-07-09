function askInspire() {
  let inspirationFemale = prompt("Who is a female that inspires you?");

  askInspire(inspirationFemale);
  alert("inspirationalFemale");
}

setTimeout(askInspire, 60000);

function changeAffirmation() {
  let h2Element = document.querySelector("#Affirmations1");
  h2Element.textContent = "Cátaleya";
}
let today = moment().format("[Today is] dddd, MMMM D, YYYY h:mm a");
let todayElement = document.querySelector("#current-date");
todayElement.innerHTML = today;
