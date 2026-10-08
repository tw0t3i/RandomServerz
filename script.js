const btn = document.getElementById("random-btn");
const result = document.getElementById("result");
const icon = document.getElementById("server-icon");
const nameEl = document.getElementById("server-name");
const descEl = document.getElementById("server-desc");
const tagEl = document.getElementById("server-tag");
const joinBtn = document.getElementById("join-btn");

let lastIndex = -1;

function pickRandom() {
  if (servers.length === 0) return;

  // Avoid showing the same server twice in a row
  let index;
  do {
    index = Math.floor(Math.random() * servers.length);
  } while (index === lastIndex && servers.length > 1);
  lastIndex = index;

  const s = servers[index];

  icon.textContent = s.name.charAt(0).toUpperCase();
  nameEl.textContent = s.name;
  descEl.textContent = s.description;
  tagEl.textContent = s.tag;
  joinBtn.href = s.invite;
  window.open(s.invite, "_blank", "noopener");

  // Restart the pop animation each time
  result.classList.remove("hidden");
  result.style.animation = "none";
  result.offsetHeight; // force reflow
  result.style.animation = "";
}

btn.addEventListener("click", pickRandom);
