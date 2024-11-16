let time = new Date().getHours();
let welcome = document.getElementById("Welcome");
let m = "";

if (time < 12) {
  m = "Good Morning !";
} else if (time >= 12 && time < 18) {
  m = "Good Afternoon !";
} else if (time >= 18 && time < 22) {
  m = "Good Evening !";
} else {
  m = "Good Night !";
}
welcome.innerHTML = `<p>${m}</p>`;
