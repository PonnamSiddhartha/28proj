class Tree{
    constructor(x,y) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,400,400,options);
        this.width = 400;
        this.height = 400;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        var position = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, position.x,position.y,this.width,this.height);
        pop();
      }
}