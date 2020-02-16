class Entity {
  constructor(
    position,
    velocity,
    acceleration,
    collisionWidth = 0,
    collisionHeight = 0
  ) {
    // Set defaults if not specified.
    if (!this._position) {
      this._position = new CartesianPoint2d();
    }
    if (!this._velocity) {
      this._velocity = new CartesianVelocity2d();
    }
    if (!this._acceleration) {
      this._acceleration = new CartesianAcceleration2d();
    }
    
    // Set other members.
    this._collisionBox = new CollisionRectangle(
      this._position,
      collisionWidth,
      collisionHeight
    );
  }
  
  update() {
    // Update the Cartesian coordinate values.
    this._velocity.accelerate(this._acceleration);
    this._position.move(this._velocity);
  }
  
  // Abstract: override this.
  draw(context) {}
  
  get collisionBox() {
    return this._collisionBox;
  }
  
  isCollidingWidth(entity) {
    return this._collisionBox.isCollidingWidth(entity._collisionBox);
  }
}