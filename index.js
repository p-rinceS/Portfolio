// this is my first java script code
let cursor = document.getElementById("cursor");

const REFRESH_INTERVAL = 10;

let div = document.getElementById("X-Value");
let div2 = document.getElementById("Y-Value");

document.addEventListener("mousemove", function (e) {
  var onmousestop = function () {
      console.log("test");
    },
    thread;

  var x = e.x;
  var y = e.y;

  div.textContent = e.clientX;
  div2.textContent = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor.style.opacity = 1;

  setTimeout(() => {
    cursor.style.opacity = 0;
  }, 200);
});

// cursor transparency
// and click audio

// change if you want to change clickSound"
var clickSound = new Audio("old_click_sound.mp3");

addEventListener("click", function (event) {
  clickSound.play();
  cursor.style.opacity = 0;
  setTimeout(() => {
    cursor.style.opacity = 1;
  }, 150);
});

getActivity();

async function getActivity() {
  const api_url = "https://api.lanyard.rest/v1/users/135932078486192128";
  const response = await fetch(api_url);
  const stuff = await response.json();
  const result = JSON.stringify(stuff);
  console.log(stuff.data.discord_status);
  let activityCirc = document.getElementById("activity");
  if (stuff.data.discord_status == "offline") {
    activityCirc.style.backgroundColor = "#727672";
  }
  if (stuff.data.discord_status == "dnd") {
    activityCirc.style.backgroundColor = "#b0251d";
  }
  if (stuff.data.discord_status == "online") {
    activityCirc.style.backgroundColor = "#2ec21d";
  }
  if (stuff.data.discord_status == "idle") {
    activityCirc.style.backgroundColor = "#d3ae19";
  }
}

setInterval(() => {
  // send a request to server every 5 seconds (REFRESH_INTERVAL)
  getActivity();
}, REFRESH_INTERVAL * 1000);
