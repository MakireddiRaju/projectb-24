class Ball {
  constructor(x, y, radius) {
    var options = {
      restitution:1.0,
      friction:1.5,
      density:1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    
    World.add(world, this.body);
}
  display(){
    var pos =this.body.position;
    push()
    translate(pos.x,pos.y)
    ellipseMode(RADIUS)
    fill("white");
    ellipse(0,0,20,20);
    pop();
  }
}
