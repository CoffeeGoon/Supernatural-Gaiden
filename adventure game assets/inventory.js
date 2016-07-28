
function inventory(){

this.salt = false;

this.shovel = false;

this.zombiepowder = false;

this.bomb = false;

this.book = false;

this.equipped = 0;

this.expanded = false;

this.check = function(inx, iny){

if(this.expanded){

if(this.salt && inx > 300 && inx < 400 && iny < 100){
  this.equipped = 1;
   this.expanded = false;
}

if(this.shovel && inx > 400 && inx < 500 && iny < 100){
this.equipped = 2;
this.expanded = false;
}

if(this.zombiepowder && inx > 500 && inx < 600 && iny < 100){
this.equipped = 3;
this.expanded = false;
}

if(this.bomb && inx > 600 && inx < 700 && iny < 100){
this.equipped = 4;
this.expanded = false;
}
if(this.book && inx > 700 && inx < 800 && iny < 100){
this.equipped = 5;
this.expanded = false;
}

}
this.expanded = false;
 if( inx > 800 && iny < 100){
this.expanded = true;
//alert(inx + " " + iny);

}
 
}

//equip 1 is salt
//equip 2 is shovel
//equip 3 is zombiepowder etc

}






