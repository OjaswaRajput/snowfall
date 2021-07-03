class snowflake {
    constructor(x,y){
        var options = {
            friction: 0.9,
            restitution:0.9           
        }
        this.img = loadImage("snowflake1.png");
        this.body = Bodies.circle(x,y,40,40,20,options);
        this.radius = 45;
        this.lifetime = 100;
        World.add(world, this.body);
    }
    changePosition(){
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,1536),y:random(0,719)});
      }
      }
    display(){
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}
