//barrel rendering script
function renderBarrel(x, y, l, w, offset, dir) {
    ctx.beginPath();
    ctx.fillStyle = "#555555";
    ctx.moveTo((offset + w / 2) * Math.cos(dir - Math.PI / 2) + x, (offset + w / 2) * Math.sin(dir - Math.PI / 2) + y);
    ctx.lineTo((offset + w / 2) * Math.cos(dir - Math.PI / 2) - l * Math.sin(dir - Math.PI / 2) + x, (offset + w / 2) * Math.sin(dir - Math.PI / 2) + l * Math.cos(dir - Math.PI / 2) + y);
    ctx.lineTo((offset + w / -2) * Math.cos(dir - Math.PI / 2) - l * Math.sin(dir - Math.PI / 2) + x, (offset + w / -2) * Math.sin(dir - Math.PI / 2) + l * Math.cos(dir - Math.PI / 2) + y);
    ctx.lineTo((offset + w / -2) * Math.cos(dir - Math.PI / 2) + x, (offset + w / -2) * Math.sin(dir - Math.PI / 2) + y);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "#999999";
    ctx.moveTo(((offset - 3) + w / 2) * Math.cos(dir - Math.PI / 2) + x, ((offset - 3) + w / 2) * Math.sin(dir - Math.PI / 2) + y);
    ctx.lineTo(((offset - 3) + w / 2) * Math.cos(dir - Math.PI / 2) - (l - 3) * Math.sin(dir - Math.PI / 2) + x, ((offset - 3) + w / 2) * Math.sin(dir - Math.PI / 2) + (l - 3) * Math.cos(dir - Math.PI / 2) + y);
    ctx.lineTo(((offset + 3) + w / -2) * Math.cos(dir - Math.PI / 2) - (l - 3) * Math.sin(dir - Math.PI / 2) + x, ((offset + 3) + w / -2) * Math.sin(dir - Math.PI / 2) + (l - 3) * Math.cos(dir - Math.PI / 2) + y);
    ctx.lineTo(((offset + 3) + w / -2) * Math.cos(dir - Math.PI / 2) + x, ((offset + 3) + w / -2) * Math.sin(dir - Math.PI / 2) + y);
    ctx.fill();
    ctx.closePath();
}
//shadow barrel rendering script
function renderShadowBarrel(x, y, l, w, offset, dir) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(110, 110, 110)";
    ctx.moveTo((offset + (w / 2) * 1.15) * Math.cos(dir - Math.PI / 2) + (sX / 2) + (x - (sX / 2)) * 1.1, (offset + (w / 2) * 1.15) * Math.sin(dir - Math.PI / 2) + (sY / 2) + (y - (sY / 2)) * 1.1);
    ctx.lineTo((offset + (w / 2) * 1.15) * Math.cos(dir - Math.PI / 2) - (l * 1.15) * Math.sin(dir - Math.PI / 2) + (sX / 2) + (x - (sX / 2)) * 1.1, (offset + (w / 2) * 1.1) * Math.sin(dir - Math.PI / 2) + (l * 1.15) * Math.cos(dir - Math.PI / 2) + (sY / 2) + (y - (sY / 2)) * 1.1);
    ctx.lineTo((offset + (w / -2) * 1.15) * Math.cos(dir - Math.PI / 2) - (l * 1.15) * Math.sin(dir - Math.PI / 2) + (sX / 2) + (x - (sX / 2)) * 1.1, (offset + (w / -2) * 1.1) * Math.sin(dir - Math.PI / 2) + (l * 1.15) * Math.cos(dir - Math.PI / 2) + (sY / 2) + (y - (sY / 2)) * 1.1);
    ctx.lineTo((offset + (w / -2) * 1.15) * Math.cos(dir - Math.PI / 2) + (sX / 2) + (x - (sX / 2)) * 1.1, (offset + (w / -2) * 1.15) * Math.sin(dir - Math.PI / 2) + (sY / 2) + (y - (sY / 2)) * 1.1);
    ctx.fill();
    ctx.closePath();
}
//trapezoid barrel, self explanatory
function renderTrapezoidBarrel(x, y, l, w, offset, dir, outerWidth) {
    ctx.beginPath();
    ctx.fillStyle = "#555555";
    ctx.moveTo((offset + w / 2) * Math.cos(dir - Math.PI / 2) + x, (offset + w / 2) * Math.sin(dir - Math.PI / 2) + y);
    ctx.lineTo((offset + outerWidth / 2) * Math.cos(dir - Math.PI / 2) - l * Math.sin(dir - Math.PI / 2) + x, (offset + outerWidth / 2) * Math.sin(dir - Math.PI / 2) + l * Math.cos(dir - Math.PI / 2) + y);
    ctx.lineTo((offset + outerWidth / -2) * Math.cos(dir - Math.PI / 2) - l * Math.sin(dir - Math.PI / 2) + x, (offset + outerWidth / -2) * Math.sin(dir - Math.PI / 2) + l * Math.cos(dir - Math.PI / 2) + y);
    ctx.lineTo((offset + w / -2) * Math.cos(dir - Math.PI / 2) + x, (offset + w / -2) * Math.sin(dir - Math.PI / 2) + y);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "#999999";
    ctx.moveTo(((offset - 3) + w / 2) * Math.cos(dir - Math.PI / 2) + x, ((offset - 3) + w / 2) * Math.sin(dir - Math.PI / 2) + y);
    ctx.lineTo(((offset - 3) + outerWidth / 2) * Math.cos(dir - Math.PI / 2) - (l - 3) * Math.sin(dir - Math.PI / 2) + x, ((offset - 3) + outerWidth / 2) * Math.sin(dir - Math.PI / 2) + (l - 3) * Math.cos(dir - Math.PI / 2) + y);
    ctx.lineTo(((offset + 3) + outerWidth / -2) * Math.cos(dir - Math.PI / 2) - (l - 3) * Math.sin(dir - Math.PI / 2) + x, ((offset + 3) + outerWidth / -2) * Math.sin(dir - Math.PI / 2) + (l - 3) * Math.cos(dir - Math.PI / 2) + y);
    ctx.lineTo(((offset + 3) + w / -2) * Math.cos(dir - Math.PI / 2) + x, ((offset + 3) + w / -2) * Math.sin(dir - Math.PI / 2) + y);
    ctx.fill();
    ctx.closePath();
}
//i don't need to provide another description, this one is obvious
function renderTrapezoidShadowBarrel(x, y, l, w, offset, dir, outerWidth) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(110, 110, 110)";
    ctx.moveTo((offset + (w / 2) * 1.15) * Math.cos(dir - Math.PI / 2) + (sX / 2) + (x - (sX / 2)) * 1.1, (offset + (w / 2) * 1.15) * Math.sin(dir - Math.PI / 2) + (sY / 2) + (y - (sY / 2)) * 1.1);
    ctx.lineTo((offset + (outerWidth / 2) * 1.15) * Math.cos(dir - Math.PI / 2) - (l * 1.15) * Math.sin(dir - Math.PI / 2) + (sX / 2) + (x - (sX / 2)) * 1.1, (offset + (outerWidth / 2) * 1.1) * Math.sin(dir - Math.PI / 2) + (l * 1.15) * Math.cos(dir - Math.PI / 2) + (sY / 2) + (y - (sY / 2)) * 1.1);
    ctx.lineTo((offset + (outerWidth / -2) * 1.15) * Math.cos(dir - Math.PI / 2) - (l * 1.15) * Math.sin(dir - Math.PI / 2) + (sX / 2) + (x - (sX / 2)) * 1.1, (offset + (outerWidth / -2) * 1.1) * Math.sin(dir - Math.PI / 2) + (l * 1.15) * Math.cos(dir - Math.PI / 2) + (sY / 2) + (y - (sY / 2)) * 1.1);
    ctx.lineTo((offset + (w / -2) * 1.15) * Math.cos(dir - Math.PI / 2) + (sX / 2) + (x - (sX / 2)) * 1.1, (offset + (w / -2) * 1.15) * Math.sin(dir - Math.PI / 2) + (sY / 2) + (y - (sY / 2)) * 1.1);
    ctx.fill();
    ctx.closePath();
}
//adds a bullet
function summonBullet(x, y, dir, lifetime, team, vel, tank, offset) {
    if (offset == undefined) {
        xB.push(x);
        yB.push(y);
    } else {
        xB.push(x + Math.cos(dir + Math.PI / 2) * offset);
        yB.push(y + Math.sin(dir + Math.PI / 2) * offset);
    }
    dB.push(dir);
    lTB.push(lifetime);
    teams.push(team);
    vB.push(vel);
    tB.push(tank);
}
//adds a tower
function summonTower(x, y, type) {
    xS.push(x);
    yS.push(y);
    tS.push(type);
    tMRS.push(0);
    tMRS2.push(0);
    dS.push(0);
    if (type == 8) {
        pW.push(0);
        pW2.push(new Array());
    } else {
        pW.push(new Array());
        pW2.push(0);
    }
    if (type == 0) {
        hPS.push(150);
        mHPS.push(150);
        costS.push(30);
    }
    if (type == 1) {
        hPS.push(225);
        mHPS.push(225);
    }
    if (type == 2) {
        hPS.push(275);
        mHPS.push(275);
    }
    if (type == 3) {
        hPS.push(250);
        mHPS.push(250);
    }
    if (type == 4) {
        hPS.push(80);
        mHPS.push(80);
        costS.push(20);
    }
    if (type == 5) {
        hPS.push(350);
        mHPS.push(350);
    }
    if (type == 6) {
        hPS.push(500);
        mHPS.push(500);
    }
    if (type == 7) {
        hPS.push(50);
        mHPS.push(50);
        costS.push(10);
    }
    if (type == 8) {
        hPS.push(750);
        mHPS.push(750);
        costS.push(50);
    }
}
//adds an enemy
function summonEnemy(x, y, type) {
    xE.push(x);
    yE.push(y);
    tE.push(type);
    tMRE.push(0);
    tMRE2.push(0);
    dE.push(0);
    if (type == 0) {
        hPE.push(30);
        mHPE.push(30);
    } else if (type == 1) {
        hPE.push(40);
        mHPE.push(40);
    } else if (type == 2) {
        hPE.push(50);
        mHPE.push(50);
    } else if (type == 3) {
        hPE.push(35);
        mHPE.push(35);
    } else if (type == 4) {
        hPE.push(55);
        mHPE.push(55);
    } else if (type == 5) {
        hPE.push(15);
        mHPE.push(15);
    }
}
function summonPolygon(x, y, type) {
    xP.push(x);
    yP.push(y);
    tP.push(type);
    if (type == 0) {
        hPP.push(1000);
        mHPP.push(1000);
    } else if (type == 1) {
        hPP.push(2000);
        mHPP.push(2000);
    } else if (type == 2) {
        hPP.push(10000);
        mHPP.push(10000);
    } else if (type == 3) {
        hPP.push(100000);
        mHPP.push(100000);
    }
}
//renders a polygon
function polygon(x, y, sides, size, dir, color) {
    ctr6 = 0;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x + Math.cos(dir) * size, y + Math.sin(dir) * size);
    while (ctr6 < sides) {
        ctx.lineTo(x + Math.cos(dir + ctr6 * (2 * Math.PI) / sides) * size, y + Math.sin(dir + ctr6 * (2 * Math.PI) / sides) * size);
        ctr6++;
    }
    ctx.fill();
    ctx.closePath();
}
//renders a health bar
function healthBar(x, y, hp, maxHp, radius) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(85, 85, 85, " + ((0.35 / maxHp) * (maxHp - hp) + 0.05) + ")";
    ctx.lineWidth = 11
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 5
    ctx.strokeStyle = "rgba(106, " + Math.round((182 / maxHp) * hp) + ", " + Math.round((100 / maxHp) * hp) + ", " + ((0.875 / maxHp) * (maxHp - hp) + 0.125) + ")";
    ctx.arc(x, y, radius, 0, ((Math.PI * 2) / maxHp) * hp);
    ctx.stroke();
    ctx.closePath();
}
//renders a "diep circle" with a border that has the color "#555555"
function diepCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.fillStyle = "#555555";
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius - 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}
//diepcircle without the border. Literally just a circle.
function diepCircle2(x, y, radius, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}
//field of view, the thing that shows how far a tank can shoot/reach
function FOV(x, y, radius, color, color2) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    if (FOVStyle == 0) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = color2;
        ctx.arc(x, y, radius - 2.5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }

}
//a tank icon, which contains info like a tank upgrade
function tankIcon(x, y, color1, color2) {
    ctx.beginPath();
    ctx.fillStyle = color1;
    ctx.lineWidth = 7;
    ctx.fillRect(x, y, 150, 85);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = color2;
    ctx.lineWidth = 7;
    ctx.fillRect(x, y + 85, 150, 65);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = "#555555";
    ctx.lineWidth = 5;
    ctx.strokeRect(x, y, 150, 150);
    ctx.stroke();
    ctx.closePath();
}
function tankIcon3(x, y, color1, color2) {
    ctx.beginPath();
    ctx.fillStyle = color1;
    ctx.lineWidth = 7;
    ctx.fillRect(x - 50, y, 200, (100 / 30) * 17);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = color2;
    ctx.lineWidth = 7;
    ctx.fillRect(x - 50, y + (100 / 30) * 17, 200, (100 / 30) * 13);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = "#555555";
    ctx.lineWidth = 5;
    ctx.strokeRect(x - 50, y, 200, 100);
    ctx.stroke();
    ctx.closePath();
}
//smaller tank icon that is usually used to display text
function tankIcon2(x, y, color1, color2) {
    ctx.beginPath();
    ctx.fillStyle = color1;
    ctx.lineWidth = 7;
    ctx.fillRect(x, y, 150, 17);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = color2;
    ctx.lineWidth = 7;
    ctx.fillRect(x, y + 17, 150, 13);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = "#555555";
    ctx.lineWidth = 5;
    ctx.strokeRect(x, y, 150, 30);
    ctx.stroke();
    ctx.closePath();
}