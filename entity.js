class Entity {
  constructor(kwargs) {
    let collisionWidth = 0;
    let collisionHeight = 0;
    
    // Parse all keyword arguments.
    for (let key in kwargs) {
      let value = kwargs[key];
      
      switch (key) {
        case 'position':
          this._position = value;
          break;
        
        case 'velocity':
          this._velocity = value;
          break;
        
        case 'acceleration':
          this._acceleration = value;
          break;
        
        case 'collisionWidth':
          collisionWidth = value;
          break;
        
        case 'collisionHeight':
          collisionHeight = value;
          break;
        
        default:
          throw `Unknown keyword argument "${key}"`;
      }
    }
    
    // Set defaults if not specified.
    if (this._position === undefined) {
      this._position = new CartesianPoint2d();
    }
    if (this._velocity === undefined) {
      this._velocity = new CartesianVelocity2d();
    }
    if (this._acceleration === undefined) {
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