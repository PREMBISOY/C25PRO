class paper{
    constructor(x,y,width,height){
        
    var options ={
   isStatic:false,
   restitution:0.3,
   friction:0.5,
   density:1.2
    }
    this.body=Matter.Bodies.circle(100,100,10,options);
    this.width = width;
    this.height = height;
    this.image = loadImage('sprites/paper.png'); 
World.add(world,this.body)
}
display(){
var pos=this.body.position;
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,10,10)
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,40,40);


}

}