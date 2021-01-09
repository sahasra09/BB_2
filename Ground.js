class Ground{
    constructor(){
        var opt={
            isStatic:true
        }
        this.x=200;
        this.y=380;
        this.body=Bodies.rectangle(this.x,this.y,width,20,opt)
        World.add(world,this.body);
        
    }
    display(){
        rectMode(CENTER);
        rect(this.x,this.y,20,20);
    }
}