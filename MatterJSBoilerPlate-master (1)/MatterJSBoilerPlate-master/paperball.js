class paperball{
    constructor(x,y){
        var options = {
            restitution: 1.1,
            friction: 2.5,
            density: 0.15
        }

        this.body = Bodies.circle(x,y,50, options);
        this.radius = 200;
        this.x = x;
        this.y = y;
        //this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        push();
        translate(pos.x-200, pos.y-200);
        ellipse(200,250,100,100);
        //imageMode(CENTER);
        //image(this.image, this.x, this.y, this.radius+10, this.radius+10);
        pop();
    }
}