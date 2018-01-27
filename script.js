var play = confirm("Do you want to play?");
if (play === true){
  startGame();
}

function startGame(){
  var username = prompt("What is Your Name?");
  var HP = 40;
  var xHP = 10;
  var xlives = 3;
  while (HP > 0){
    var damage = getRandomInt(3);
    HP -= damage;
    console.log(`Grant attacks and does ${damage} damage, ${username} HP is at ${HP}`)
    damage = getRandomInt(3);
    xHP -= damage;
    console.log(`${username} attacks grant, it does ${damage} damage, his HP is at ${xHP}`)
    if (xHP <= 0 && xlives === 0){
      console.log('YOU HAVE DEFEATED GRANT!');
      break;
    }
    else if (xHP <= 0 ){
      xlives--;
      xHP = 10;
      console.log('GRANT HAS HEALED HIMSELF!');
    } 
    
    
  }
  console.log('GAME OVER')
  
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}