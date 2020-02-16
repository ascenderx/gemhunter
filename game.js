class Game {
  constructor(canvas) {
    this._canvas = canvas;
    this._context = canvas.getContext('2d');
    this._width = canvas.width;
    this._height = canvas.height;
    
    this._framerate = 50;
    this._timer = new FramerateTimer({
      callback: this._tick.bind(this),
      framerate: this._framerate,
    });
    
    this._player = new Player(
      new CartesianPoint2d(0, this._canvas.height)
    );
  }
  
  _update() {
    
  }
  
  _draw() {
    // Draw the background.
    this._context.fillStyle = 'black';
    this._context.fillRect(
      0,
      0,
      this._width,
      this._height
    );
    
    // Draw the player.
    this._player.draw(this._context);
  }
  
  _tick() {
    // Handle input.
    // Handle collisions.
    // Update all objects and environment.
    this._update();
    // Draw everything.
    this._draw();
  }
  
  run() {
    this._timer.start();
  }
}
