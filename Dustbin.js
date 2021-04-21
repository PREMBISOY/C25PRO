class Dustbin{
    constructor(x,y,width,height){
    var options = {
        isStatic:true
        // density:1.0,
        // friction:1.5
    }
    this.body=Matter.Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/dustbin.png");
    World.add(world,this.body);
    }
    display(){
        //var angle = this.body.angle;
        push();
        fill("red");
        translate(this.body.position.x, this.body.position.y);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        //rotate(angle);
        // imageMode(CENTER);
        // image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}