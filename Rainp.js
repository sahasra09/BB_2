class Rainy{
    constructor(x,y){
        var options={
            isStatic:false,
    //        restitution:20,
 //   restitution:0.4,
          //  friction:200000
        }
       
        this.x=x;
        this.y=y;
        this.r=5;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world, this.body);
        
      
    }
    display(){
       var pos=this.body.position;
    //    var angle = this.body.angle;
    //    push();
        translate(pos.x,pos.y);
    //    rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.r,this.r);
     //   noStroke();
     //   pop();
    }
    positionup(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
};