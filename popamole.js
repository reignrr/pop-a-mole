let nonToxicTile;
let toxicTile;
let score = 0;
let gameOver = false;

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
    setInterval(setPlant, 2000); 
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
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

function setPlant() {
    if (gameOver) {
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
        return;
    }
    if (this == nonToxicTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == toxicTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}


function activatePowerUp(powerUp) {
    switch(powerUp) {
        case "freeze":
            if (!freezePowerUpActive) {
                freezePowerUpActive = true;
                setTimeout(deactivateFreezePowerUp, 5000); 
            }
            break;
        case "slowMo":
            if (!slowMoPowerUpActive) {
                slowMoPowerUpActive = true;
                // Slow down the game here
                setTimeout(deactivateSlowMoPowerUp, 5000); 
            }
            break;
        case "bigWhack":
            if (!bigWhackPowerUpActive) {
                bigWhackPowerUpActive = true;
                // Increase score for hitting moles here
                setTimeout(deactivateBigWhackPowerUp, 5000); 
            }
            break;
        case "bonusHole":
            if (!bonusHolePowerUpActive) {
                bonusHolePowerUpActive = true;
                // Add bonus hole to the game
                setTimeout(deactivateBonusHolePowerUp, 5000); 
            }
            break;
        case "timeWarp":
            if (!timeWarpPowerUpActive) {
                timeWarpPowerUpActive = true;
                // Speed up the game here
                setTimeout(deactivateTimeWarpPowerUp, 5000); 
            }
            break;
        case "x2Score":
            if (!x2ScorePowerUpActive) {
                x2ScorePowerUpActive = true;
                // Double the score here
                setTimeout(deactivateX2ScorePowerUp, 5000); 
            }
            break;
    }
}

function deactivateFreezePowerUp() {
    freezePowerUpActive = false;
}

function deactivateSlowMoPowerUp() {
    slowMoPowerUpActive = false;
    // Reset game speed to normal
}

function deactivateBigWhackPowerUp() {
    bigWhackPowerUpActive = false;
    // Reset score modifier
}

function deactivateBonusHolePowerUp() {
    bonusHolePowerUpActive = false;
    // Remove bonus hole from the game
}

function deactivateTimeWarpPowerUp() {
    timeWarpPowerUpActive = false;
    // Reset game speed to normal
}

function deactivateX2ScorePowerUp() {
    x2ScorePowerUpActive = false;
    // Reset score modifier
}