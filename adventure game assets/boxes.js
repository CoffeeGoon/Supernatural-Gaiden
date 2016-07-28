
function box(xco, yco, width, height){

this.x = xco;
this.y = yco;
this.wid = width;
this.hei = height;
this.centx = this.x + this.wid/2;
this.centy = this.y + this.hei/2;
this.touched = false;
this.talkative = false;
this.ttext = "";
this.stopside = 0;
this.inside = function(xin, yin){
if(xin >= this.x && xin <= this.x + this.wid && yin >= this.y && yin <= this.y + this.hei){
 return true;
}
return false;
}
this.test = function(xint, yint, direction){
touched = false;
this.stopside = 0;
if(xint >= this.x && xint <= this.x + this.wid && yint >= this.y && yint <= this.y + this.hei){
this.touched = true;
//alert(touched);
//alert(direction);
//alert(direction);
if(direction == 1 && this.inside(xint - 15, yint)){
this.stopside = 1;
}

if(direction == 3 && this.inside(xint  + 15, yint)){
 this.stopside = 3;
}

if(direction == 2 && this.inside(xint , yint - 15)){
 this.stopside = 2;
}

if(direction == 4 && this.inside(xint , yint + 15)){
 this.stopside = 4;
}

}


}


}

var boxesA = new Array();
var boxesB = new Array();
var boxesC = new Array();
var boxesD = new Array();
var boxesE = new Array();
var boxesF = new Array();
var boxesG = new Array();

boxesA[0] = new box(159,695,166,80);
boxesA[1] = new box(535,570,80,35);
boxesA[2] = new box(320, 360,115, 60);

boxesB[0] =  new box(56, 780,800, 20);
boxesB[1] = new box(830,375, 20, 420);
boxesB[2] = new box(40, 375, 20, 420);
boxesB[3] = new box(40, 360, 800, 20);
// sam
boxesB[4] = new box(520, 540,20, 60);
boxesB[4].talkative = true;
boxesB[4].ttext = "Dean we are trapped in some kind of \n alternate reality where we look lame and \n  blocky. we got to find a way out.";
boxesB[5] = new box(340, 385,85, 30);
boxesB[6] = new box(820, 500,25, 335);
boxesB[7] = new box(310, 820, 335, 60);

boxesC[0] =  new box(56, 780,800, 20);
boxesC[1] = new box(830,375, 20, 420);
boxesC[2] = new box(40, 375, 20, 420);
boxesC[3] = new box(40, 360, 800, 20);
//bombdoor
boxesC[4] = new box(414, 370, 140, 60);
boxesC[5] = new box(70, 510, 25, 335);
boxesC[6] = new box(500, 500, 100, 100);

boxesD[0] =  new box(56, 780,800, 20);
boxesD[1] = new box(830,375, 20, 420);
boxesD[2] = new box(40, 375, 20, 420);
boxesD[3] = new box(40, 360, 800, 20);
boxesD[4] = new box(70, 510, 25, 335);
boxesD[5] = new box(520, 540, 20,60);
//bobby
boxesD[5].talkative = true;
boxesD[5].ttext = "I dont know how in the hell I got here.\n As a Hunter you have to be ready for anything \n salt will banish the hostile ghost blocking you";
boxesD[6] = new box(310, 820, 335, 60);

boxesE[0] =  new box(56, 780,800, 20);
boxesE[1] = new box(830,375, 20, 420);
boxesE[2] = new box(40, 375, 20, 420);
boxesE[3] = new box(40, 360, 800, 20);
boxesE[4] = new box(820, 500, 25, 335);
//rowena
boxesE[5] = new box(520, 540, 20,60);

boxesE[5].talkative = true;
boxesE[5].ttext ="Ahh Dean, you wretched boyscout, I \n believe you can be of some support all \n I need is some zombie powder and \n I can make you bombs";

boxesE[6] = new box(45, 675,40, 40, 125);

boxesF[0] =  new box(56, 780,800, 20);
boxesF[1] = new box(830,375, 20, 420);
boxesF[2] = new box(40, 375, 20, 420);
boxesF[3] = new box(40, 360, 800, 20);
boxesF[4] = new box(310, 820, 335, 60);
// door
boxesF[5] = new box(330, 370, 150, 60);
boxesF[6] = new box(440, 460, 20, 60);
boxesF[6].talkative = true;
boxesF[6].ttext = "Ah squirrel, you chumpy hunk. \n you have arrived at a marvelous time \n answer me this who's dagger \n is your deus ex machina  \n 1. lucy, \n 2. annie \n 3. ruby";

boxesG[0] =  new box(56, 780,800, 20);
boxesG[1] = new box(830,375, 20, 420);
boxesG[2] = new box(40, 375, 20, 420);
boxesG[3] = new box(40, 360, 800, 20);
boxesG[4] = new box(440, 460, 20, 60);
boxesG[4].talkative = true;
boxesG[4].ttext ="Castiel: please Dean tell me you brought  \n  metatron's cipher book, It will \n help us escape this prison reality"; 
boxesG[5] = new box(310, 820, 335, 60);