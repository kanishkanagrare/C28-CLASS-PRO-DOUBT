class Grounds {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  

const World= Matter.World;
const Bodies = Matter.Bodies;
