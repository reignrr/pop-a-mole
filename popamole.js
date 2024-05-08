let nonToxicTile;
let toxicTile;
let score = 0;
let gameOver = false;
let frozen = false;
let slowMo = false;
let bigWhack = false;
let bonusHole = false;
let timeWarp = false;
let x2Score = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); 
    setInterval(setToxic, 2000);
    setInterval(checkPowerUps, 1000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
      document.getElementById("again").style.display = "block";
        return;
    }
    if (nonToxicTile) {
        nonToxicTile.innerHTML = "";
    }
    let nontoxic = document.createElement("img");
    nontoxic.src = "./nontoxic.jpg";

    let num = getRandomTile();
    if (toxicTile && toxicTile.id == num) {
        return;
    }
    nonToxicTile = document.getElementById(num);
    nonToxicTile.appendChild(nontoxic);
    
}

function setToxic() {
    if (gameOver) {
      document.getElementById("again").style.display = "block";
        return;
    }
    if (toxicTile) {
        toxicTile.innerHTML = "";
    }
    let toxic = document.createElement("img");
    toxic.src = "./toxic.jpg";

    let num = getRandomTile();
    if (nonToxicTile && nonToxicTile.id == num) {
        return;
    }
    toxicTile = document.getElementById(num);
    toxicTile.appendChild(toxic);
}

function selectTile() {
    if (gameOver) {
      document.getElementById("again").style.display = "block";
        return;
    }
    if (this == nonToxicTile) {
        score += 100;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == toxicTile) {
        document.getElementById("score").innerText = "GAME OVER!\nFinal Score: " + score.toString();
        gameOver = true;
    }
}

function playAgain() {
  score = 0;
  gameOver = false;
  
  document.getElementById("board").innerHTML = "";
  document.getElementById("score").innerText = score.toString();
  document.getElementById("promptPowerUp").innerText = "";
  document.getElementById("again").style.display = "none";

  setGame();
}

//activates the powerup
function activatePowerUp(score) {
    switch (score) {
      case 1000:
        activateFreezePowerUp();
        break;
      case 1500:
        activateSlowMoPowerUp();
        break;
      case 2000:
        activateBigWhackPowerUp();
        break;
      case 2500:
        activateBonusHolePowerUp();
        break;
      case 3000:
        activateTimeWarpPowerUp();
        break;
      case 3500:
        activateX2ScorePowerUp();
        break;
    }
  }
  
  //deactivates or irreturn nya sa normal yung game after a certain score
  function deactivatePowerUp(score) {
    switch (score) {
      case 1500:
        deactivateFreezePowerUp();
        break;
      case 2000:
        deactivateSlowMoPowerUp();
        break;
      case 2500:
        deactivateBigWhackPowerUp();
        break;
      case 3000:
        deactivateBonusHolePowerUp();
        break;
      case 3500:
        deactivateTimeWarpPowerUp();
        break;
      case 4000:
        deactivateX2ScorePowerUp();
        break;
    }
  }
  
  //magwwatch ng score
  function checkPowerUps() {
    if (score == 1000) {
      activatePowerUp(1000);
    } 
    if (score == 1500) {
      deactivatePowerUp(1500)
      activatePowerUp(1500);
    } 
    if (score == 2000) {
      deactivatePowerUp(2000)
      activatePowerUp(2000);
    } 
    if (score == 2500) {
      deactivatePowerUp(2500)
      activatePowerUp(2500);
    } 
    if (score == 3000) {
      deactivatePowerUp(3000)
      activatePowerUp(3000);
    } 
    if (score == 3500) {
      deactivatePowerUp(3500)
      activatePowerUp(3500);
    }
    
  }

  //Freeze (not working!!)
  function activateFreezePowerUp() {
    setInterval(setMole, 1000);
    setInterval(setToxic, 1000);
    document.getElementById("promptPowerUp").style.color = "blue";
    document.getElementById("promptPowerUp").innerHTML = "FREEZE POWER UP!";

}
  function deactivateFreezePowerUp() {
    setInterval(setMole, 1000);
    setInterval(setToxic, 1000);
    document.getElementById("promptPowerUp").style.color = "red";
    document.getElementById("promptPowerUp").innerHTML = "FREEZE POWER UP DEACTIVATED";
}
function activateSlowMoPowerUp(){
  setInterval(setMole, 1000);
    setInterval(setToxic, 1000);
    document.getElementById("promptPowerUp").style.color = "blue";
    document.getElementById("promptPowerUp").innerHTML = "SLOW-MO POWER UP!";
}
function deactivateSlowMoPowerUp(){
    setInterval(setMole, 1000);
    setInterval(setToxic, 1000);

    document.getElementById("promptPowerUp").style.color = "red";
    document.getElementById("promptPowerUp").innerHTML = "SLOW-MO POWER DEACTIVATED";
}

  
//2xPower up
function activateX2ScorePowerUp(){
  if (this == nonToxicTile) {
    score += 2000; //doubles the score per whack
    document.getElementById("score").innerText = score.toString();
    document.getElementById("promptPowerUp").style.color = "blue";
    document.getElementById("promptPowerUp").innerHTML = "x2 SCORE POWER UP!";
  }
}

        // Power-ups
		//ACTIVATE
  function activateBigWhackPowerUp() {
      bigWhack = true;
      setTimeout(deactivateBigWhackPowerUp, 5000);

document.getElementById("promptPowerUp").style.color = "blue";
      document.getElementById("promptPowerUp").innerHTML = "BIG-WHACK POWER UP!";			

setInterval(setMole, 1070); 
      setInterval(setToxic, 2025);
  }

  function activateBonusHolePowerUp() {
      bonusHole = true;
      setTimeout(deactivateBonusHolePowerUp, 5000);

document.getElementById("promptPowerUp").style.color = "blue";
      document.getElementById("promptPowerUp").innerHTML = "BONUS HOLE POWER UP!";

setInterval(setMole, 1070); 
      setInterval(setToxic, 2030);
  }

  function activateX2ScorePowerUp() {
      x2Score = true;
      setTimeout(deactivateX2ScorePowerUp, 5000);

      document.getElementById("promptPowerUp").style.color = "blue";
      document.getElementById("promptPowerUp").innerHTML = "x2 SCORE POWER UP!";

      setInterval(setMole, 1075); 
      setInterval(setToxic, 2110);
  }

//DEACTIVATE
  function deactivateBigWhackPowerUp() {
      bigWhack = false;

document.getElementById("promptPowerUp").style.color = "red";
      document.getElementById("promptPowerUp").innerHTML = "BIG WHACK Power-up DEACTIVATED.";
  }

  function deactivateBonusHolePowerUp() {
      bonusHole = false;

document.getElementById("promptPowerUp").style.color = "red";
      document.getElementById("promptPowerUp").innerHTML = "BONUS HOLE Power-up DEACTIVATED.";
  }

  function deactivateX2ScorePowerUp() {
      x2Score = false;

document.getElementById("promptPowerUp").style.color = "red";
      document.getElementById("promptPowerUp").innerHTML = "x2 SCOREPower-up DEACTIVATED.";
  }
