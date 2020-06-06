class Rectangle {
    constructor(x,y,width,height){
    
    
    this.body=Bodies.Rectangle(x,y,width,height)
    this.width=width
    this.height=height
    
    World.add(this.body,world)
}
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    rotate(angle)
    rectMode(CENTER)
    }
}