class Looper {
  constructor(kwargs) {
    // default keyword arguments
    this._window = window;
    // prep other keyword arguments (no defaults)
    this._callback = null;
    this._interval = null;
    
    // parse keyword arguments
    for (let key in kwargs) {
      let value = kwargs[key];
      
      switch (key) {
        case 'callback':
          this._callback = value;
          break;
        
        case 'interval':
          this._interval = value;
          break;
        
        case 'framerate':
          this._interval = Math.floor(1000 / value);
          break;
        
        case 'window':
          this._window = value;
          break;
        
        default:
          throw `Invalid keyword argument "${key}"`;
      }
    }
    
    // enforce some keyword arguments
    if (this._callback === null || this._callback === undefined) {
      throw 'Callback is undefined';
    } else if (this._interval === null || this._interval === undefined) {
      throw 'Interval is undefined';
    } else if (this._window === null || this._window === undefined) {
      throw 'Window is undefined';
    }
    
    // intialize the rest of the values
    this._handle = null;
  }
  
  start() {
    // only start if we haven't already
    if (this._handle !== null) {
      return false;
    }
    
    let previous = null;
    
    // recursive callback function
    let tick = (timestamp) => {
      if (previous === null) {
        previous = timestamp;
      }
      
      // enforce a framerate-based animation
      let elapsed = timestamp - previous;
      if (elapsed >= this._interval) {
        previous = timestamp;
        this._callback();
      }
      
      // continue the recursion
      this._handle = this._window.requestAnimationFrame(tick);
    };
    
    // start the recursion
    this._handle = this._window.requestAnimationFrame(tick);
    
    return true;
  }
  
  stop() {
    // only stop if we've already started and haven't stopped yet
    if (this._handle === null) {
      return false;
    }
    
    // stop the recursion
    this._window.cancelAnimationFrame(this._handle);
    this._handle = null;
    
    return true;
  }
  
  isRunning() {
    return this._handle !== null;
  }
}
