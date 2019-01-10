function ball()
{
  this.posx= width/2;
  this.posy= height/2;
  this.rad=20;
  this.show = function()
  { 
    ellipse(this.posx,this.posy,this.rad,this.rad);
  }
  
}
  