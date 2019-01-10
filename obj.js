function obj()
{
  this.posx2= random(width);
  this.posy2= random(height/2,height);
  this.rad2= 30;
  this.velx= random(-3,3);
  this.vely= random(-3,3);
  this.show = function()
  { ellipse(this.posx2,this.posy2,this.rad2, this.rad2);
  }
    
    
  this.move = function()
  {
    this.posx2 += this.velx;
  this.posy2 += this.vely;
  
    if(this.posx2<0||this.posx2>width)
  this.velx= this.velx*-1;
  if(this.posy2<0||this.posy2>height)
  this.vely= this.vely*-1;
  
 
  }
  
  
  
}
    
  