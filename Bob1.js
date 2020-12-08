class Bob1 {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:1,
          density:5
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.width = width;
      this.height = height;
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){ 
     var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("blue");
    ellipse (0,0,this.radius,this.radius)    
    pop()
    }
}

  