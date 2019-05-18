window.addEventListener('load', function main() {
  let canvas = byID('game-canvas');
  let game = new Game(canvas);
  game.run();
});
