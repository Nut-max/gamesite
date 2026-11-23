# 🎮 Hunter Games

A bare-bones static game hub. Pick a game, it opens fullscreen. No accounts, no backend.

**Live site:** [logdegret.github.io/HunterGames](https://logdegret.github.io/HunterGames/)

---

## File structure

```
HunterGames/
├── index.html   # Page shell
├── styles.css   # All styles
├── games.js     # Game list (title, category, url)
├── app.js       # Grid rendering, search, fullscreen player
└── favicon.png  # Site icon
```

## Adding a game

Add an entry to the `GAMES` array in [games.js](games.js):

```js
{ title: "Game Name", category: "Arcade", url: "https://example.com/game" },
```

---

## Credits

Built by [Logdegret](https://github.com/Logdegret). Game assets belong to their respective creators.
