var bullet1 = [];
var ball1;
var noofBullets = 50;
var flag=0;
var ta;
var obj1 = [];
var noofObj = 20;


function setup() {
  createCanvas(500,500);
  ball1 = new ball();
  for(i=0;i<noofBullets;i++)
  bullet1[i] = new bullet();
  for(i=0;i<noofObj;i++)
  obj1[i] = new obj();

}

function draw() 
{ noStroke();
  background(51);
  ball1.show();
  for(i=0;i<noofObj;i++)
  {
    obj1[i].show();
    obj1[i].move();
    
  }
  for(i=0;i<noofBullets;i++)
  {
  bullet1[i].show();
  bullet1[i].move();
  }
  for(i=0;i<noofObj;i++)
  if(bullet1[flag].collide(obj1[i])==1)
  { }
  
  
  
  
  
}

function mousePressed()
{  flag++;
  flag// is also flag for current
 ta = (mouseY-height/2)/(mouseX-width/2);
 if((mouseX-width/2)<0)
 { bullet1[flag].velx= -5/sqrt(1+sq(ta));
  if((mouseY-height/2)>0)
  bullet1[flag].vely= -5*ta/sqrt(1+sq(ta));
  else
  bullet1[flag].vely= 5*ta/sqrt(1+sq(ta));
  
 }
 
 else
 {bullet1[flag].velx= 5/sqrt(1+sq(ta));
  if((mouseY-height/2)<0)
  bullet1[flag].vely= -5*ta/sqrt(1+sq(ta));
  else
  bullet1[flag].vely= 5*ta/sqrt(1+sq(ta));
 
 
 
 }
  


}




  
  
 
  
 
  



