function bullet()
{
  this.posx1= width/2;
  this.posy1= height/2;
  this.velx= 0;
  this.vely= 0;
  this.rad1 = 10;
  this. show = function()
  {
    ellipse(this.posx1, this.posy1, this.rad1, this.rad1);
  }
  this.move = function()
  {
    this.posx1= this.posx1 + this.velx;
    this.posy1= this.posy1 + this.vely;
  }
  this.collide = function(obj)
  {
    if(dist(this.posx1,this.posy1,obj.posx2,obj.posy2)<=10  )
    obj.rad2= obj.rad2*1.5;
    return 1;
   
    
    
  }
  
  
  
}  