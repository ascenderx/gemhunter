class Game {
  constructor(canvas, win = window) {
    this._canvas = canvas;
    this._context = this._canvas.getContext('2d');
    this._window = win;
    
    this._framerate = 50;
    this._looper = new Looper({
      callback: this._tick.bind(this),
      framerate: this._framerate,
    });
  }
  
  _drawAll() {
    this._context.fillStyle = 'black';
    this._context.fillRect(
      0, 0,
      this._canvas.width,
      this._canvas.height
    );
  }
  
  _tick() {
    // handle input
    // handle collisions
    // update all objects and environment
    // draw
    this._drawAll();
  }
  
  run() {
    this._looper.start();
  }
}
