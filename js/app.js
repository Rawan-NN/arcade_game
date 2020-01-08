// Enemies our player must avoid
var Enemy = function(x,y,speed) { 
  // speed for every enemy to run in diffrent speed
  this.speed=speed;
  // x coordinate
  this.x=x,
  //y coordinate
  this.y=y,
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x>500) {
   this.x=this.speed*dt*10;
  }
  else
   this.x+=this.speed*dt*10;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player class
class Player{
  // the constructer will set the x,y coordinate for the player
  constructor(){
    // x coordinate
    this.player_x=200;
    //y coordinate
    this. player_y=300;
    // the image of character
    this.charcaterimg='images/char-pink-girl.png';
  }
  // this method used when the player is moving to check 
  //if the player collides with an enemy through use teh distance low.
  iscollide(){
   if(Math.sqrt(Math.pow((this.player_x-allEnemies[0].x),2)+Math.pow((this.player_y-allEnemies[0].y),2))<=30)
      {document.location.reload();
      }
    else if (Math.sqrt(Math.pow((this.player_x-allEnemies[1].x),2)+Math.pow((this.player_y-allEnemies[1].y),2))<=50) 
      {document.location.reload();
      }
    else if (Math.sqrt(Math.pow((this.player_x-allEnemies[2].x),2)+Math.pow((this.player_y-allEnemies[2].y),2))<=50) 
      {document.location.reload();
      }     
    }
    // to show the message when the player reach the water.
  checkwin(){
    if(this.player_y<=-20){
      document.querySelector(".modal").classList.toggle("show-modal");
      setTimeout
      setTimeout(function(){
       document.location.reload();},1500);  
     }
    }

    //Player.handleInput() method to handle the the user input;
  handleInput(key) {
  if(key==='left')
    {  
     if(this.player_x-40>=0)
        this.player_x-=40;
    }
  else if(key==='right')
    {   
      if(this.player_x+40<=430)
       this.player_x+=40;
    }
  else  if(key==='up')
    {   
      if(this.player_y-40>=-50)
       this.player_y-=40;
    }
  else if(key==='down')
    {   
      if(this.player_y+40<460)
       this.player_y+=40;
    }
    
  this.checkwin();
  }

// Draw the player on the screen, required method for game
  render() {

    ctx.drawImage(Resources.get(this.charcaterimg), this.player_x, this.player_y);
  }

 };


// Place all enemy objects in an array called allEnemies
var allEnemies=[new Enemy(115,210,20),new Enemy(250,145,32),new Enemy(5,45,54)];
// Place the player object in a variable called player
var player= new Player() ;



// This listens for key presses and sends the keys to your
document.addEventListener('keyup', function(e) {
 var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
    };

  player.handleInput(allowedKeys[e.keyCode]);
});
