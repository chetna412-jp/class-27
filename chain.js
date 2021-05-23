class Chain{
   constructor(bodyA,bodyB){
    var option={
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness:0.04,
        length:5

               
    }
this.bodyA=bodyA
this.bodyB=bodyB
this.chain=Constraint.create(option);
World.add(world,this.chain); 



   }
   display(){
       var pointA=this.chain.bodyA.position
       var pointB=this.chain.bodyB.position
       line(pointA.x,pointA.y,pointB.x,pointB.y)
   }
}

