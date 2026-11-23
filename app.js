const grid = document.getElementById("gameGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const overlay = document.getElementById("playerOverlay");
const frame = document.getElementById("playerFrame");
const playerTitle = document.getElementById("playerTitle");
const closeBtn = document.getElementById("closeBtn");
const blankBtn = document.getElementById("blankBtn");
let currentGame = null;

function render(games) {
  grid.innerHTML = "";
  games.forEach((game) => {
    const card = document.createElement("button");
    card.className = "game-card";
    card.type = "button";
    card.innerHTML = `
      <span class="game-category">${game.category}</span>
      <span class="game-title">${game.title}</span>
    `;
    card.addEventListener("click", () => openGame(game));
    grid.appendChild(card);
  });
  emptyState.classList.toggle("hidden", games.length > 0);
}

function openGame(game) {
  currentGame = game;
  playerTitle.textContent = game.title;
  frame.src = game.url;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  frame.requestFullscreen?.();
}

function openInBlankTab() {
  if (!currentGame) return;
  const win = window.open("about:blank");
  if (!win) return;
  win.document.title = currentGame.title;
  win.document.body.style.margin = "0";
  const iframe = win.document.createElement("iframe");
  iframe.src = currentGame.url;
  iframe.allow = "fullscreen; autoplay; gamepad; pointer-lock";
  iframe.style.cssText = "position:fixed;inset:0;width:100%;height:100%;border:none;";
  win.document.body.appendChild(iframe);
}

function closeGame() {
  overlay.classList.remove("open");
  frame.src = "";
  document.body.style.overflow = "";
  if (document.fullscreenElement) document.exitFullscreen?.();
}

closeBtn.addEventListener("click", closeGame);
blankBtn.addEventListener("click", openInBlankTab);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) closeGame();
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  const filtered = GAMES.filter((g) => g.title.toLowerCase().includes(q) || g.category.toLowerCase().includes(q));
  render(filtered);
});

render(GAMES);
