class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
         }

         this.radius = radius;
         this.image = loadImage("mango.png");
         this.body = Bodies.circle(x,y,radius,options);
         World.add(world, this.body);
     }

display(){
    var mangoPosition=this.body.position;
    push();
    translate(mangoPosition.x, mangoPosition.y);
    rotate(this.body.angle);
    fill(255,0,255);
    imageMode(CENTER);
    image(this.image, 0, 0,this.radius*2,this.radius*2);
    pop();
  }
}