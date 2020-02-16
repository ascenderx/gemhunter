class Player extends Entity {
  constructor(position, velocity, acceleration) {
    let width = 40;
    let height = -40;
    super(
      position,
      velocity,
      acceleration,
      width,
      height
    );
    this._color = '#0f0';
    this._life = 10;
  }
  
  draw(context) {
    context.fillStyle = this._color;
    context.fillRect(
      this._position.x,
      this._position.y,
      this._collisionBox.width,
      this._collisionBox.height
    );
  }
  
  kill() {
    if (this._life > 0) {
      this._life--;
    }
  }
  
  get life() {
    return this._life;
  }
  
  set life(value) {
    this._life = value;
  }
}