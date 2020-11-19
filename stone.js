class Stone{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution:0.4,
            friction:1,
            density:1.5
        }

        this.radius = radius;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x,y,radius/2,options);
        World.add(world, this.body);
  }

  display(){
    var position = this.body.position;
    push();
    translate(position.x,position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0,0,this.radius*2,this.radius*2);
    pop();
  }

}