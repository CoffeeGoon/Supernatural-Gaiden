var canvas;
var player;
var inventory;
var object;
var wall;
var stage;
var canvas = document.getElementById("scene");
stage = new createjs.Stage(canvas);
var mapindex = 0;
var diaindex = 0;
var dialog;
var bombed = false;
var images= new Array();
images[0] =  new createjs.Bitmap("dean.png");
images[1] = new createjs.Bitmap("deanB.png");
var frame = 0;
var direc;
var x = -300;
var y = -900;
var banished = false;
var quizpassed = false;
var boundariesleft = -200;
var boundariesright = -1000;
var boundariesup = -100;
var boundariesdown = -1700;
var items = new inventory();
var tbox = new createjs.Bitmap("dialogbox.png");
var empty = new createjs.Bitmap("blank.png");
var salt = new createjs.Bitmap("salt.png");
var shovel = new createjs.Bitmap("shovel.png");
var powder = new createjs.Bitmap("zombiepowder.png");
var bomb = new createjs.Bitmap("bomb.png");
var book = new createjs.Bitmap("book.png");
var menu = new createjs.Bitmap("menu.png");
var sam = new createjs.Bitmap("sam.png");
var bobby = new createjs.Bitmap("bobby.png");
var rowena = new createjs.Bitmap("rowena.png");
var ghost = new createjs.Bitmap("ghost.png");
var crowely = new createjs.Bitmap("crowely.png");
var castiel = new createjs.Bitmap("castiel.png");
var map = new createjs.Bitmap("map.png");
var mapB = new createjs.Bitmap("map1.png");
var mapC = new createjs.Bitmap("map3.png");
var other = new createjs.Bitmap("mapX.png");

var mapD = new createjs.Bitmap("map4.png");
var mapE = new createjs.Bitmap("map5.png");
var mapF = new createjs.Bitmap("map6.png");
var mapG = new createjs.Bitmap("map7.png");
var end = new createjs.Bitmap("map8.png");
var mapset = new Array();
mapset[0] = map;
mapset[1] = mapB;
mapset[2] = mapC;
mapset[3] = mapD;
mapset[4] = mapE;
mapset[5] = mapF;
mapset[6] = mapG;
mapset[7] = end;
var mapfocus = map;
stage.addChild(mapfocus);
stage.addChild(empty);
empty.x = 800;
empty.y = 0;
stage.addChild(images[0]);
images[0].x = 535;
images[0].y = 450;
map.x = 0;
map.y = 0;
var moving = 0;
createjs.Ticker.setFPS(10);
createjs.Ticker.addEventListener("tick", tick);

function checkForObstacles( xco, yco, set){
for(i = 0; i < set.length; i++){

set[i].test(images[0].x + 10, images[0].y + 30, direc);
if(set[i].touched && direc == set[i].stopside){
moving = 0;
}
}

}

stage.on("stagemouseup", function(evt){
items.check(evt.stageX, evt.stageY);
  //alert( evt.stageX + " " + evt.stageY);
  stage.removeChild(menu);
   stage.removeChild(salt);
    stage.removeChild(shovel);
    stage.removeChild(powder);
    stage.removeChild(bomb);
     stage.removeChild(book);
if(items.expanded){
//alert(expanded);
 stage.addChild(menu);
if(items.salt){ stage.addChild(salt); salt.x = 300; salt.y = 0; }
if(items.shovel){ stage.addChild(shovel); shovel.x = 400; shovel.y = 0; }
if(items.zombiepowder){ stage.addChild(powder); powder.x = 500; powder.y = 0; }
if(items.bomb){ stage.addChild(bomb); bomb.x = 600; bomb.y = 0; }
if(items.book){stage.addChild(book); book.x = 700; book.y = 0; }
menu.y = 0;
menu.x = 300;
 
}
if(! items.expanded){
if(items.equipped == 0){ 
stage.addChild(empty); 
empty.x = 800; 
empty.y = 0; }
if(items.equipped == 1) {
 stage.addChild(salt);
 salt.x = 800;
 salt.y = 0; }
if(items.equipped == 2) { 
stage.addChild(shovel); 
shovel.x = 800; 
shovel.y = 0; }
if(items.equipped == 3) { 
stage.addChild(powder);
 powder.x = 800; 
powder.y = 0; }
if(items.equipped == 4) { 
stage.addChild(bomb);
 bomb.x = 800; 
bomb.y = 0; }

if(items.equipped == 5) { 
stage.addChild(book);
 book.x = 800; 
book.y = 0; }


}

});

function speach(box){
//alert("speach");
stage.addChild(tbox);
tbox.x = box.x + 30;
tbox.y = box.y - 20;
dialog = new createjs.Text( box.ttext, "16px Arial", "#000000");
dialog.x = tbox.x + 20;
dialog.y = tbox.y + 40;
stage.addChild(dialog);
diaindex = 1; 
box.touched = false;

}

function transistion(index){
 mapindex = index;
diaindex = 0;
stage.removeChild(mapfocus);
stage.removeChild(empty);
stage.removeChild(images[0]);
items.equipped = 0;
mapfocus = mapset[index];
//alert(index);

stage.addChild(mapfocus);
stage.addChild(empty);
empty.x = 800;
stage.addChild(images[0]);
images[0].x = 400;
images[0].y = 600;
if(index == 1){ stage.addChild(sam); sam.x = boxesB[4].x; sam.y = boxesB[4].y; }

if(index == 2) { if(items.shovel == false){ stage.addChild(shovel); shovel.x = boxesC[6].x; shovel.y = boxesC[6].y;

 }

 }

if(index == 3) { stage.addChild(bobby); bobby.x = boxesD[5].x; bobby.y = boxesD[5].y; 
if(!banished){
stage.addChild(ghost); ghost.x = boxesD[4].x + 10;
ghost.y = boxesD[4].y - 10; 
}

}

if(index == 4){ stage.addChild(rowena); rowena.x = boxesE[5].x; rowena.y = boxesE[5].y; 

}

if(index == 5){ stage.addChild(crowely);  crowely.x = boxesF[6].x; crowely.y = boxesF[6].y;}

if(index == 6) { stage.addChild(castiel); castiel.x = boxesG[4].x; castiel.y = boxesG[4].y; }
}



window.addEventListener("keydown", function(evt){ 
 //alert(evt.keyCode);
//if(evt.keyCode > 36 && evt.keyCode < 41){
 moving = evt.keyCode;
//}
direc = 0;
if(moving == 65){ direc = 1; }
if(moving == 87){ direc = 2; }
if(moving == 68){ direc = 3; }
if(moving == 83){ direc = 4; }
 //alert(evt.keyCode);

if(mapindex == 0){
for( i = 0; i < 3; i++){
boxesA[i].test(images[0].x + 10, images[0].y + 30, direc);
if(boxesA[i].touched && direc == boxesA[i].stopside  ){
// alert(boxesA[i].stopside); 
moving = 0;
}

if(i == 2 && boxesA[i].touched){
mapindex = 1;
stage.removeChild(mapfocus);
stage.removeChild(empty);
stage.removeChild(images[0]);
mapfocus = mapB;
stage.addChild(mapfocus);
stage.addChild(empty);
stage.addChild(images[0]);
stage.addChild(sam);
sam.x = boxesB[4].x;
sam.y = boxesB[4].y;
images[0].x = 450;
images[0].y = 730;
boxesA[i].touched = false;
}

}
}

if(evt.keyCode == 32 && diaindex != 0){
diaindex = 0; stage.removeChild(tbox);
stage.removeChild(dialog);
}

if(mapindex == 1){
 checkForObstacles(images[0].x, images[0].y, boxesB);
  
 if(boxesB[6].touched){ transistion(2);
  boxesB[6].touched = false; }
 
if(boxesB[7].touched){ transistion(0);
  boxesB[7].touched = false; }

 if(boxesB[5].touched){ transistion(3); boxesB[5].touched = false;}
}

if(mapindex == 2){
  checkForObstacles(images[0].x, images[0].y, boxesC);

   if(boxesC[5].touched){ transistion(1); 
     boxesC[5].touched = false;}
     if(boxesC[4].touched && bombed){ transistion(5); boxesC[4].touched = false; }
     if(boxesC[4].touched && items.equipped == 4 && !bombed){ boxesC[4].touched = false; mapset[2] = other;
 bombed = true; images[0].y = images[0].y + 100; boxesC[4].touched = false;
 transistion(2);} 
}
if( mapindex == 3){
checkForObstacles(images[0].x, images[0].y, boxesD);

if(boxesD[6].touched) { transistion(1); boxesD[6].touched = false; }
if(boxesD[4].touched && banished) {transistion(4); boxesD[4].touched = false; }
if(boxesD[4].touched && !banished){
if(items.equipped == 1){ banished = true; }
transistion(0); boxesD[4].touched = false; }
}

if(mapindex == 4){
checkForObstacles(images[0].x, images[0].y, boxesE);
if( boxesE[4].touched ) { transistion(3); boxesE[4].touched = false; }
}

if(mapindex == 5){
checkForObstacles(images[0].x, images[0].y, boxesF);
if(boxesF[5].touched) { transistion(6); boxesF[5].touched = false; }
if(boxesF[4].touched){ transistion(2); boxesF[4].touched = false; }
}

if(mapindex == 6){
checkForObstacles(images[0].x, images[0].y, boxesG);
if(boxesG[5].touched) { transistion(5); boxesG[5].touched = false; }
}

});
window.addEventListener("keyup", function(evt){ 
moving = 0; 
if(evt.keyCode == 32 && diaindex != 0){diaindex = 0; stage.removeChild(tbox);
stage.removeChild(dialog);}
if(mapindex == 0 && boxesA[0].touched && evt.keyCode == 32){ items.salt = true; }
if(mapindex == 0 && boxesA[1].touched && items.equipped == 2 && evt.keyCode == 32 ){items.zombiepowder = true; }
if(mapindex == 1 && boxesB[4].touched &&  evt.keyCode == 32 && diaindex == 0){
stage.addChild(tbox);
tbox.x = boxesB[4].x + 30;
tbox.y = boxesB[4].y - 20;
dialog = new createjs.Text( boxesB[4].ttext, "16px Arial", "#000000");
dialog.x = tbox.x + 20;
dialog.y = tbox.y + 40;
stage.addChild(dialog);
diaindex = 1; 
boxesB[4].touched = false;

}
if(mapindex == 2 && boxesC[6].touched && evt.keyCode == 32){items.shovel = true; 
stage.removeChild(shovel);
}
if(mapindex == 3 && boxesD[5].touched &&  evt.keyCode == 32 && diaindex == 0){
   speach(boxesD[5]);
}
if(mapindex == 4 && boxesE[5].touched &&  evt.keyCode == 32 && diaindex == 0){
   if(items.equipped != 3){
speach(boxesE[5]);
}
else{
  boxesE[5].ttext = "thanks for the zombie powder \n here is your bombs. ";
  speach(boxesE[5]);
  items.bomb= true;
}
}
if(mapindex == 4 && boxesE[6].touched && evt.keyCode == 32){
   items.book = true;
}
if(mapindex == 5 && !quizpassed){
     speach(boxesF[6]);
   if(evt.keyCode == 49 || evt.keyCode == 50){ transistion(0); boxesC[4].touched = false; }
    if(evt.keyCode == 51){ quizpassed = true; stage.removeChild(dialog); diaindex = 0; transistion(5); }
}
if(mapindex == 6 && boxesG[4].touched && evt.keyCode == 32 && diaindex == 0){
  if(items.equipped == 5 ){
   transistion(7);
}
else{
   speach(boxesG[4]);
}
}

});
var info = document.getElementById("coordinates");




function tick(){

if(mapindex == 0){


if(moving == 65 && images[0].x > 0){
images[0].x = images[0].x - 3;
}

if(moving == 87 && images[0].y > 360 && mapindex == 0){
images[0].y = images[0].y - 3;
}

if(moving == 68 && images[0].x < 870){
images[0].x = images[0].x + 3;
}
if(moving == 83 && images[0].y < 850){
images[0].y = images[0].y + 3;
}



}

if(mapindex != 0 && !(mapindex == 5 && !quizpassed)){
 
if(moving == 65){
images[0].x = images[0].x - 3;
}
if(moving == 87){
   images[0].y = images[0].y - 3;
}
if(moving == 68){
  images[0].x = images[0].x + 3;
}
if(moving == 83){
images[0].y = images[0].y + 3;
}

}

info.innerText = "X" + images[0].x + "Y" + images[0].y;
stage.update();

}