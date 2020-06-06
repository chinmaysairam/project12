class Circle {
constructor(x,y,width,height){


this.body=Bodies.Circle(x,y,radius)
this.width=width
this.height=height


World.add(this.body,world)
}
display(){
var pos=this.body.position
var angle=this.body.angle
rotate(angle)
ellipseMode(RADIUS)
}
}