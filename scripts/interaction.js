//mouse crap
ctr = 0;
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    mP = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
    if (mID == 1) {
        //allows you to drag the screen
        x = x + (pMX - mP.x);
        y = y + (pMY - mP.y);
    }
}
function mouseDown(e) {
    mID = 1;
    if (iR == 1) {
        //how towers are placed. It summons them if the mouse is down and you are in the correct area.
        if (pT == 1 && cash >= 30) {
            summonTower(x + mP.x - (sX / 2), y + mP.y - (sY / 2), 0);
            cash -= 30;
            pT = 0;
        }
        if (pT == 2 && cash >= 20) {
            summonTower(x + mP.x - (sX / 2), y + mP.y - (sY / 2), 4);
            cash -= 20;
            pT = 0;
        }
        if (pT == 3 && cash >= 10) {
            summonTower(x + mP.x - (sX / 2), y + mP.y - (sY / 2), 7);
            cash -= 10;
            pT = 0;
        }
        if (pT == 4 && cash >= 50) {
            summonTower(x + mP.x - (sX / 2), y + mP.y - (sY / 2), 8);
            cash -= 50;
            pT = 0;
        }
    }
    ctr4 = 0;
    sT2 = 0;
    while (ctr4 < xS.length) {
        //detects if your mouse is near a tower when clicking. if it is, then that tower is selected.
        if (Math.sqrt(Math.pow(xS[ctr4] - (mP.x + x - (sX / 2)), 2) + Math.pow(yS[ctr4] - (mP.y + y - (sY / 2)), 2)) < 20) {
            sT = 1;
            sT2 = 1;
            sTV = ctr4;
        }
        //} else if (Math.sqrt(Math.pow(xS[ctr4] - (mP.x + x - 512), 2) + Math.pow(yS[ctr4] - (mP.y + y - 512), 2)) > 20 && sT2 == 0) {
        //    sT = 0;
        //}
        ctr4++;
    }
    //detects if you are pressing a button for spawning a new tower.
    if (mP.x > (sX - 200) && mP.y > (sY - 70) && mP.x < (sX - 50) && mP.y < (sY - 40)) {
        pT = 1
    }
    if (mP.x > (sX - 200) && mP.y > (sY - 110) && mP.x < (sX - 50) && mP.y < (sY - 80)) {
        pT = 2
    }
    if (mP.x > (sX - 200) && mP.y > (sY - 150) && mP.x < (sX - 50) && mP.y < (sY - 120)) {
        pT = 3
    }
    if (mP.x > (sX - 200) && mP.y > (sY - 190) && mP.x < (sX - 50) && mP.y < (sY - 160)) {
        pT = 4
    }
    //detects if you are pressing a button for upgrading a tower
    if (sT == 1) {
        if (mP.x > 50 && mP.y > (sY - 240) && mP.x < 200 && mP.y < (sY - 210)) {
            xS.splice(sTV, 1);
            yS.splice(sTV, 1);
            dS.splice(sTV, 1);
            hPS.splice(sTV, 1);
            mHPS.splice(sTV, 1);
            tMRS.splice(sTV, 1);
            tMRS2.splice(sTV, 1);
            tS.splice(sTV, 1);
            pW.splice(sTV, 1);
            pW2.splice(sTV, 1);
            cash = cash + costS[sTV];
            costS.splice(sTV, 1);
            sT = 0;
        }
        if (mP.x > 50 && mP.y > (sY - 200) && mP.x < 200 && mP.y < (sY - 50)) {
            if (tS[sTV] == 0 && cash >= 25) {
                costS[sTV] = costS[sTV] + 25
                cash = cash - 25;
                mHPS[sTV] = mHPS[sTV] + 125;
                hPS[sTV] = hPS[sTV] + 125;
                tS[sTV] = 2;
                aRCV = 1;
            }
            if (tS[sTV] == 2 && aRCV == 0 && cash >= 25) {
                costS[sTV] = costS[sTV] + 25
                cash = cash - 25;
                mHPS[sTV] = mHPS[sTV] + 75;
                hPS[sTV] = hPS[sTV] + 75;
                tS[sTV] = 5;
                aRCV = 1;
            }
            if (tS[sTV] == 5 && aRCV == 0 && cash >= 75) {
                costS[sTV] = costS[sTV] + 75
                cash = cash - 75;
                mHPS[sTV] = mHPS[sTV] + 150;
                hPS[sTV] = hPS[sTV] + 150;
                tS[sTV] = 6;
                aRCV = 1;
            }
            if (tS[sTV] == 1 && aRCV == 0 && cash >= 40) {
                costS[sTV] = costS[sTV] + 40
                cash = cash - 40;
                mHPS[sTV] = mHPS[sTV] + 100;
                hPS[sTV] = hPS[sTV] + 100;
                tS[sTV] = 9;
                aRCV = 1;
            }
        }
        if (mP.x > 250 && mP.y > (sY - 200) && mP.x < 400 && mP.y < (sY - 50)) {
            if (tS[sTV] == 0 && cash >= 20) {
                costS[sTV] = costS[sTV] + 20
                cash = cash - 20;
                mHPS[sTV] = mHPS[sTV] + 100;
                hPS[sTV] = hPS[sTV] + 100;
                tS[sTV] = 3;
            }
        }
        if (mP.x > 450 && mP.y > (sY - 200) && mP.x < 600 && mP.y < (sY - 50)) {
            if (tS[sTV] == 0 && cash >= 15) {
                costS[sTV] = costS[sTV] + 15
                cash = cash - 15;
                mHPS[sTV] = mHPS[sTV] + 75;
                hPS[sTV] = hPS[sTV] + 75;
                tS[sTV] = 1;
            }
        }
    }
    if (lVA == 0) {
        //if (mP.x > -50 - x + 512 && mP.y > 0 - y + 512 && mP.x < 150 - x + 512 && mP.y < 100 - y + 512) {
        //    lVA = 1;
        //    level = 0;
        //    lctr = 0;
        //    startLevel(0);
        //}
        if (lvlMouseBox(0, 0) == true) {
            lVA = 1;
            level = 0;
            lctr = 0;
            startLevel(0);
        }
        if (lvlMouseBox(200, -200) == true && levelC[0] == 1) {
            lVA = 1;
            level = 1;
            lctr = 0;
            startLevel(1);
        }
        if (lvlMouseBox(-200, -200) == true && levelC[0] == 1) {
            ctr13 = 0;
            eData[2] = [{ type: 0, x: 4000, y: -3000, time: 1500, count: 3, pattern: 1, ySpacing: 2000, xSpacing: 0 }]
            lVA = 1;
            level = 2;
            lctr = 0;
            startLevel(2);
        }
        if (lvlMouseBox(-200, -400) == true && levelC[2] == 1) {
            lVA = 1;
            level = 3;
            lctr = 0;
            startLevel(3);
        }
    }
}
//mouse and keyboard listeners and stuff
function mouseUp(e) {
    mID = 0;
    aRCV = 0;
}
function keyDown(e) {
    keys[e.keyCode] = true;
    if (keys2[e.keyCode] == 0) {
        keys2[e.keyCode] = 1;
    }
}
function keyUp(e) {
    keys[e.keyCode] = false;
    keys2[e.keyCode] = 0;
}
window.addEventListener("keydown", keyDown, false);
window.addEventListener("keyup", keyUp, false);
c.addEventListener('mousemove', function (evt) {
    pMX = mP.x;
    pMY = mP.y;
    getMousePos(c, evt);
}, false);
c.addEventListener("mousedown", mouseDown, false);
window.addEventListener("mouseup", mouseUp, false);
//changes the style of fov, determined by an html button element
function changeFOVStyle() {
    if (FOVStyle == 0) {
    	FOVStyle = 1;
    } else {
    	FOVStyle = 0;
    }
}
function canvasResize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    sX = window.innerWidth;
    sY = window.innerHeight;
}
window.addEventListener("resize", canvasResize, false);