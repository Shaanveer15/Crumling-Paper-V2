class Ball{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false

        }
       
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image=loadImage("paper.png");
        this.body = Bodies.circle(this.x, this.y,this.radius, options);
        World.add(world, this.body);
      }
      display(){
    
        push();
        //translate(this.body.position.x, this.body.position.y);
        fill ("white");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2)
        pop();
      }
}