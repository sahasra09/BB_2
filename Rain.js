class Rain{
    constructor(x,y){
        var options={
            isStatic:false,
    //        restitution:20,
    restitution:0.1,
            friction:0.1
        }
       
      //  this.x=x;
    //    this.y=y;
        
        this.body = Bodies.circle(x,y,5,options);
        this.r=5;
        World.add(world, this.body);
        
      
    }
    display(){
       var pos=this.body.position;
    //    var angle = this.body.angle;
    //    push();
        //translate(pos.x,pos.y);
    //    rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.r,this.r);
     //   noStroke();
     //   pop();
    }
    positionup(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
};