let cookieCount = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;
let upgradeCost = 50;
let upgradeCount = 0;

function OnClick(updateDisplay()){
    
}

function updateDisplay(){
    document.getElementById('cookieCount').textContent = "Cookies: " + Math.floor(cookieCount);
    document.getElementById('upgradeMessage').textContent = "Upgrades: " + Math.floor(upgradeCount);
    document.getElementById('upgradeButton').textContent = "Buy Upgrade (Cost: " + Math.floor(upgradeCost) + " Cookies)";
}


function saveGameState(){
     localStorage.getItem('cookieCount', cookieCount);
     localStorage.getItem('upgradeCount', upgradeCount);
     localStorage.getItem('upgradeCost', upgradeCost);
     localStorage.getItem('cookiePerSecond', cookiesPerSecond);
}

function loadGamestate(){
    const saveCookieCount = localStorage.getItem('cookieCount')
    const saveUpgradeCount = localStorage.getItem('upgradeCount')
    const saveUpgradeCost = localStorage.getItem('upgradeCost')
    const saveCookiePerSecond = localStorage.getItem('cookiePerSecond')http://127.0.0.1:5500/img/Cookie.png

    if (saveCookieCount !== mull){
        cookieCount = parseFloat(saveCookieCount);
    }
    if (saveUpgradeCount !== null ){
        upgradeCost= parseFloat(saveUpgradeCount);
    }
    if (saveUpgradeCost !== null ){
        upgradeCost= parseFloat(saveUpgradeCost);
    }
    if (saveCookiePerSecond !== null ){
        upgradeCost= parseFloat(saveCookiePerSecond);
    }

    updateDisplay();
}







document.getElementById('cookie').addEventListener('click', function(){
    cookieCount += cookiesPerClick;
    updateDisplay();

    if (cookieCount >= upgradeCost) {
        document.getElementById('upgradeButton').disabled = false;
        
    }
});

document.getElementById('upgradeButton').addEventListener('click', function(){

    if (cookieCount >= upgradeCost){
        cookieCount -= upgradeCost;
        upgradeCount++;
        cookiesPerSecond++;
        upgradeCost *= 1.4;
        updateDisplay();
        saveGameState();
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6}
        });
        
    }

    if (cookieCount < upgradeCost) {
        document.getElementById('upgradeButton').disabled = true;
    }

});

setInterval(function(){
    cookieCount += cookiesPerSecond;
    updateDisplay();
}, 1000);

window.onload = function(){
    loadGamestate();
};