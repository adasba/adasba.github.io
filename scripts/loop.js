//TREMBLE BEFORE THE ALMIGHTY LOOP FUNCTION! IT LOOPS OVER AND OVER AND OVER AND OVER AGAIN IN AN INFINITE LOOP, CALLING ITSELF OVER AND OVER AGAIN!
//Basically this is just a game loop, it keeps on repeating and stuff, every time it repeats, everything is re-rendered and all that. You get the point.
function loop() {
    if (xS.length == 0 && lVA == 1) {
        endLevel();
        deathMsg();
    }
    //creates the grid of lines that you see in the background.
    ctx.fillStyle = "#CBCBCB";
    ctx.fillRect(0, 0, sX, sY);
    ctr = 0;
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(40, 40, 40, 0.23)";
    while (ctr < Math.ceil(sX / 128)) {
        ctx.moveTo((128 * ctr - 64 - x + 64 * Math.floor(x / 64)) * 1.1, 0);
        ctx.lineTo((128 * ctr - 64 - x + 64 * Math.floor(x / 64)) * 1.1, sY + 3);
        ctx.lineTo((128 * ctr - x + 64 * Math.floor(x / 64)) * 1.1, sY + 3);
        ctx.lineTo((128 * ctr - x + 64 * Math.floor(x / 64)) * 1.1, 0);
        ctr++
    }
    ctx.stroke();
    ctx.closePath();
    ctr = 0;
    ctx.beginPath();
    while (ctr < Math.ceil(sY / 128)) {
        ctx.moveTo(0, (128 * ctr - 64 - y + 64 * Math.floor(y / 64)) * 1.1);
        ctx.lineTo(sX + 3, (128 * ctr - 64 - y + 64 * Math.floor(y / 64)) * 1.1);
        ctx.lineTo(sX + 3, (128 * ctr - y + 64 * Math.floor(y / 64)) * 1.1);
        ctx.lineTo(0, (128 * ctr - y + 64 * Math.floor(y / 64)) * 1.1);
        ctr++
    }
    ctx.stroke();
    ctx.closePath();
    if (lVA == 1) {
        if (lctr > 19500 && level == 0) {
            levelC[0] = 1;
            endLevel();
        }
        if (lctr > 23001 && level == 1 && xE.length == 0) {
            message("Level 2 Complete!", "We haven't added the next level yet :(")
            levelC[1] = 1;
            endLevel();
        }
        if (lctr > 1 && level == 2 && tP.indexOf(0) == -1) {
            message("Level 3 Complete!", "Level 4 Unlocked!")
            levelC[2] = 1;
            endLevel();
        }
        if (level == 2) {
            if (lctr % 6000 == 1) {
                eData[2].push({ type: 0, x: -3000, y: 4000, time: 3000 + 6000 * ctr13, count: 6 + 12 * ctr13, pattern: 1, ySpacing: 0, xSpacing: 6000 / (6 + 12 * ctr13) });
                eData[2].push({ type: 0, x: -4000, y: -3000, time: 4500 + 6000 * ctr13, count: 9 + 12 * ctr13, pattern: 1, ySpacing: 6000 / (9 + 12 * ctr13), xSpacing: 0 });
                eData[2].push({ type: 0, x: -3000, y: -4000, time: 6000 + 6000 * ctr13, count: 12 + 12 * ctr13, pattern: 1, ySpacing: 0, xSpacing: 6000 / (12 + 12 * ctr13) });
                eData[2].push({ type: 0, x: 4000, y: -3000, time: 7500 + 6000 * ctr13, count: 15 + 12 * ctr13, pattern: 1, ySpacing: 6000 / (15 + 12 * ctr13), xSpacing: 0 });
                ctr13++;
            }
        }
        if (level != -1) {
            ctr10 = 0;
            if (lctr == eData[level][ctr9].time) {
                if (eData[level][ctr9].pattern == 0) {
                    summonEnemy(eData[level][ctr9].x, eData[level][ctr9].y, eData[level][ctr9].type);
                } else if (eData[level][ctr9].pattern == 1) {
                    while (ctr10 < eData[level][ctr9].count) {
                        summonEnemy(eData[level][ctr9].x + eData[level][ctr9].xSpacing * ctr10, eData[level][ctr9].y + eData[level][ctr9].ySpacing * ctr10, eData[level][ctr9].type);
                        ctr10++;
                    }
                } else if (eData[level][ctr9].pattern == 2) {
                    while (ctr10 < eData[level][ctr9].count) {
                        summonEnemy(eData[level][ctr9].x + Math.cos(eData[level][ctr9].startDir + ctr10 * eData[level][ctr9].dirSpacing) * eData[level][ctr9].radius, eData[level][ctr9].y + Math.sin(eData[level][ctr9].startDir + ctr10 * eData[level][ctr9].dirSpacing) * eData[level][ctr9].radius, eData[level][ctr9].type);
                        ctr10++;
                    }
                }
                if (ctr9 < eData[level].length - 1) {
                    ctr9++;
                }
            }
            if (lctr == msgS[level][ctr12].time) {
                message(msgS[level][ctr12].message, msgS[level][ctr12].message2);
                msgD = msgS[level][ctr12].duration;
                if (ctr12 < msgS[level].length - 1) {
                    ctr12++;
                }
            }
        }
        //calculations for whether a tank can be placed in that location or not
        mPower = 0;
        iR = 0;
        ctr6 = 0;
        while (ctr6 < xS.length) {
            if (Math.sqrt(Math.pow((x + mP.x - (sX / 2)) - xS[ctr6], 2) + Math.pow((y + mP.y - (sY / 2)) - yS[ctr6], 2)) < 175 && tS[ctr6] == 7) {
                iR = 1;
            }
            if (Math.sqrt(Math.pow((x + mP.x - (sX / 2)) - xS[ctr6], 2) + Math.pow((y + mP.y - (sY / 2)) - yS[ctr6], 2)) < 175 && tS[ctr6] == 8) {
                iR = 1;
            }
            ctr6++;
        }
        ctr6 = 0;
        while (ctr6 < xS.length && iR == 1) {
            if (Math.sqrt(Math.pow((x + mP.x - (sX / 2)) - xS[ctr6], 2) + Math.pow((y + mP.y - (sY / 2)) - yS[ctr6], 2)) < 40) {
                iR = 0;
            }
            ctr6++;
        }
        //detects if keys are being pressed so tanks can be spawned and all that. some of these are cheat-y and are for debug purposes.
        if (keys2[32] == 1) {
            pT = 1;
            keys2[32] == 2;
        }
        //DEBUG STUFF:
        //if (keys2[65] == 1) {
        //    summonEnemy(x + mP.x - 512, y + mP.y - 512, 0);
        //    keys2[65] = 2;
        //}
        //if (keys2[68] == 1) {
        //    summonEnemy(x + mP.x - 512, y + mP.y - 512, 1);
        //    keys2[68] = 2;
        //}
        //if (keys2[67] == 1) {
        //    summonEnemy(x + mP.x - 512, y + mP.y - 512, 2);
        //    keys2[67] = 2;
        //}
        //END DEBUG STUFF
        if (keys2[77] == 1) {
            pT = 2;
            keys2[77] = 2;
        }
        if (keys2[69] == 1) {
            pT = 4;
            keys2[69] = 2;
        }
        //DEBUG STUFF:
        //if (keys2[87] == 1) {
        //    summonEnemy(x + mP.x - 512, y + mP.y - 512, 3);
        //    keys2[87] = 2;
        //}
        //if (keys2[83] == 1) {
        //    summonEnemy(x + mP.x - 512, y + mP.y - 512, 2);
        //    keys2[83] = 2;
        //}
        //if (keys2[81] == 1) {
        //    summonEnemy(x + mP.x - 512, y + mP.y - 512, 4);
        //    keys2[81] = 2;
        //}
        //END DEBUG STUFF
        if (keys2[67] == 1) {
            pT = 3;
            keys2[67] = 2
        }
        //i forgot
        if (keys2[82] == 1 && sT == 1) {
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
            keys2[82] = 2;
        }
        //de-selects stuff and cancels tank placement
        if (keys2[88] == 1 || keys2[27] == 1) {
            sT = 0;
            pT = 0;
            keys2[88] = 2;
            keys2[27] = 2;
        }
        ctr = 0;
        //turns the fov of certain tanks green so you know where you can place something.
        while (pT != 0 && ctr < xS.length) {
            if (tS[ctr] == 7 || tS[ctr] == 8) {
                if (FOVStyle == 0) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 175, "rgba(0, 110, 30, 0.14)", "rgba(0, 110, 30, 0.63)");
                } else if (FOVStyle == 1) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 175, "rgba(0, 110, 30, 0.3)", "rgba(0, 110, 30, 0.63)");
                }
            }
            ctr++;
        }
        ctr = 0;
        //updates and renders bullets. does damage calculations as well.
        while (ctr < xB.length) {
            xB[ctr] = xB[ctr] + Math.cos(dB[ctr]) * vB[ctr];
            yB[ctr] = yB[ctr] + Math.sin(dB[ctr]) * vB[ctr];
            lTB[ctr]--;
            if (teams[ctr] == 0) {
                ctx.beginPath();
                ctx.fillStyle = "rgb(110, 110, 110)";
                ctx.arc((xB[ctr] - x) * 1.1 + (sX / 2), (yB[ctr] - y) * 1.1 + (sY / 2), 15, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                diepCircle(xB[ctr] - x + (sX / 2), yB[ctr] - y + (sY / 2), 12, "#00B2E1");
                ctr2 = 0
                while (ctr2 < xE.length) {
                    if (Math.sqrt(Math.pow(xB[ctr] - xE[ctr2], 2) + Math.pow(yB[ctr] - yE[ctr2], 2)) < 15) {
                        hPE[ctr2] = hPE[ctr2] - 10
                        xB.splice(ctr, 1);
                        yB.splice(ctr, 1);
                        dB.splice(ctr, 1);
                        teams.splice(ctr, 1);
                        vB.splice(ctr, 1);
                        lTB.splice(ctr, 1);
                        tB.splice(ctr, 1);
                    }
                    ctr2++;
                }
            } else if (teams[ctr] == 1) {
                ctx.beginPath();
                ctx.fillStyle = "rgb(110, 110, 110)";
                ctx.arc((xB[ctr] - x) * 1.1 + (sX / 2), (yB[ctr] - y) * 1.1 + (sY / 2), 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                diepCircle(xB[ctr] - x + (sX / 2), yB[ctr] - y + (sY / 2), 8, "#F14E54");
                ctr2 = 0
                while (ctr2 < xS.length) {
                    if (Math.sqrt(Math.pow(xB[ctr] - xS[ctr2], 2) + Math.pow(yB[ctr] - yS[ctr2], 2)) < 20) {
                        hPS[ctr2] = hPS[ctr2] - 10
                        xB.splice(ctr, 1);
                        yB.splice(ctr, 1);
                        dB.splice(ctr, 1);
                        teams.splice(ctr, 1);
                        vB.splice(ctr, 1);
                        lTB.splice(ctr, 1);
                        tB.splice(ctr, 1);
                    }
                    ctr2++;
                }
            } else if (teams[ctr] == 2) {
                ctx.beginPath();
                ctx.fillStyle = "rgb(110, 110, 110)";
                ctx.arc((xB[ctr] - x) * 1.1 + (sX / 2), (yB[ctr] - y) * 1.1 + (sY / 2), 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                diepCircle(xB[ctr] - x + (sX / 2), yB[ctr] - y + (sY / 2), 8, "#999999");
                ctr2 = 0
                while (ctr2 < xP.length) {
                    if (Math.sqrt(Math.pow(xB[ctr] - xP[ctr2], 2) + Math.pow(yB[ctr] - yP[ctr2], 2)) < 20) {
                        hPP[ctr2]--;
                        cash++;
                        xB.splice(ctr, 1);
                        yB.splice(ctr, 1);
                        dB.splice(ctr, 1);
                        teams.splice(ctr, 1);
                        vB.splice(ctr, 1);
                        lTB.splice(ctr, 1);
                        tB.splice(ctr, 1);
                    }
                    ctr2++;
                }
            } else if (teams[ctr] == 3) {
                ctx.beginPath();
                ctx.fillStyle = "rgb(110, 110, 110)";
                ctx.arc((xB[ctr] - x) * 1.1 + (sX / 2), (yB[ctr] - y) * 1.1 + (sY / 2), 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                diepCircle(xB[ctr] - x + (sX / 2), yB[ctr] - y + (sY / 2), 14, "#00E16E");
                ctr2 = 0
                while (ctr2 < xP.length) {
                    if (Math.sqrt(Math.pow(xB[ctr] - xP[ctr2], 2) + Math.pow(yB[ctr] - yP[ctr2], 2)) < 20) {
                        //pW[tB[ctr]]++;
                        xB.splice(ctr, 1);
                        yB.splice(ctr, 1);
                        dB.splice(ctr, 1);
                        teams.splice(ctr, 1);
                        vB.splice(ctr, 1);
                        lTB.splice(ctr, 1);
                        tB.splice(ctr, 1);
                    }
                    ctr2++;
                }
            } else if (teams[ctr] == 4) {
                ctx.beginPath();
                ctx.fillStyle = "rgb(110, 110, 110)";
                ctx.arc((xB[ctr] - x) * 1.1 + (sX / 2), (yB[ctr] - y) * 1.1 + (sY / 2), 15, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                diepCircle(xB[ctr] - x + (sX / 2), yB[ctr] - y + (sY / 2), 12, "#00B2E1");
                ctr2 = 0
                while (ctr2 < xE.length) {
                    if (Math.sqrt(Math.pow(xB[ctr] - xE[ctr2], 2) + Math.pow(yB[ctr] - yE[ctr2], 2)) < 15) {
                        hPE[ctr2] = hPE[ctr2] - 25;
                        ctr3 = 0;
                        while (20 > ctr3) {
                            summonBullet(xB[ctr], yB[ctr], (Math.PI / 10) * ctr3, 18, 0, 15, 0, 0);
                            ctr3++;
                        }
                        xB.splice(ctr, 1);
                        yB.splice(ctr, 1);
                        dB.splice(ctr, 1);
                        teams.splice(ctr, 1);
                        vB.splice(ctr, 1);
                        lTB.splice(ctr, 1);
                        tB.splice(ctr, 1);
                    }
                    ctr2++;
                }
            } else if (teams[ctr] == 5) {
                ctx.beginPath();
                ctx.fillStyle = "rgb(110, 110, 110)";
                ctx.arc((xB[ctr] - x) * 1.1 + (sX / 2), (yB[ctr] - y) * 1.1 + (sY / 2), 31, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                diepCircle(xB[ctr] - x + (sX / 2), yB[ctr] - y + (sY / 2), 27, "#00B2E1");
                ctr2 = 0
                while (ctr2 < xE.length) {
                    if (Math.sqrt(Math.pow(xB[ctr] - xE[ctr2], 2) + Math.pow(yB[ctr] - yE[ctr2], 2)) < 30) {
                        hPE[ctr2] = hPE[ctr2] - 4;
                        tB[ctr] = tB[ctr] - 4;
                    }
                    ctr2++;
                }
                if (lTB[ctr] % 4 == 0) {
                    summonBullet(xB[ctr], yB[ctr], dB[ctr] + 0.6 + Math.PI, 30, 0, 10);
                    summonBullet(xB[ctr], yB[ctr], dB[ctr] - 0.6 + Math.PI, 30, 0, 10);
                }
                if (tB[ctr] < 0) {
                    xB.splice(ctr, 1);
                    yB.splice(ctr, 1);
                    dB.splice(ctr, 1);
                    vB.splice(ctr, 1);
                    teams.splice(ctr, 1);
                    lTB.splice(ctr, 1);
                    tB.splice(ctr, 1);
                }
            }
            if (lTB[ctr] < 0) {
                xB.splice(ctr, 1);
                yB.splice(ctr, 1);
                dB.splice(ctr, 1);
                vB.splice(ctr, 1);
                teams.splice(ctr, 1);
                lTB.splice(ctr, 1);
                tB.splice(ctr, 1);
            }
            ctr++;
        }
        ctr = 0;
        //some power related stuff, all of the towers' shadow rendering, and then their default FOVs.
        while (ctr < xS.length) {
            if (tS[ctr] == 8) {
                pWL.push(ctr);
                if (pW[ctr] > 10) {
                    pW[ctr] = 10;
                }
            }
            if (tS[ctr] == 0) {
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 43, 21, 0, dS[ctr]);
                polygon((xS[ctr] - x) * 1.1 + (sX / 2), (yS[ctr] - y) * 1.1 + (sY / 2), 6, 30, 0, "rgb(110, 110, 110)");
            }
            if (tS[ctr] == 1) {
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 55, 21, 0, dS[ctr]);
                polygon((xS[ctr] - x) * 1.1 + (sX / 2), (yS[ctr] - y) * 1.1 + (sY / 2), 6, 35, 0, "rgb(110, 110, 110)");
            }
            if (tS[ctr] == 2) {
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 43, 21, 14, dS[ctr]);
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 43, 21, -14, dS[ctr]);
                polygon((xS[ctr] - x) * 1.1 + (sX / 2), (yS[ctr] - y) * 1.1 + (sY / 2), 6, 35, 0, "rgb(110, 110, 110)");
            }
            if (tS[ctr] == 3) {
                renderTrapezoidShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 48, 24, 0, dS[ctr], 42);
                polygon((xS[ctr] - x) * 1.1 + (sX / 2), (yS[ctr] - y) * 1.1 + (sY / 2), 6, 35, 0, "rgb(110, 110, 110)");
            }
            if (tS[ctr] == 4) {
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 44, 21, 0, dS[ctr]);
                diepCircle2((xS[ctr] - x) * 1.1 + (sX / 2), (yS[ctr] - y) * 1.1 + (sY / 2), 34, "rgb(110, 110, 110)");
            }
            if (tS[ctr] == 5) {
                polygon((xS[ctr] - x) * 1.1 + (sX / 2), (yS[ctr] - y) * 1.1 + (sY / 2), 6, 42, 0, "rgb(110, 110, 110)");
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 56, 27, 0, dS[ctr]);
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 56, 27, 0, dS[ctr] + Math.PI / 4);
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 56, 27, 0, dS[ctr] - Math.PI / 4);
            }
            if (tS[ctr] == 6) {
                polygon((xS[ctr] - x) * 1.1 + (sX / 2), (yS[ctr] - y) * 1.1 + (sY / 2), 6, 45, 0, "rgb(110, 110, 110)");
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 55, 29, 0, dS[ctr] + Math.PI / 4);
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 55, 29, 0, dS[ctr] - Math.PI / 4);
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 66, 29, 0, dS[ctr] + Math.PI / 8);
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 66, 29, 0, dS[ctr] - Math.PI / 8);
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 77, 29, 0, dS[ctr]);
            }
            if (tS[ctr] == 7) {
                polygon((xS[ctr] - x) * 1.1 + (sX / 2), (yS[ctr] - y) * 1.1 + (sY / 2), 5, 23, lctr / 30, "rgb(110, 110, 110)");
            }
            if (tS[ctr] == 8) {
                diepCircle2((xS[ctr] - x) * 1.1 + (sX / 2), (yS[ctr] - y) * 1.1 + (sY / 2), 45, "rgb(110, 110, 110)");
                renderShadowBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 55, 28, 0, dS[ctr]);
            }
            if (FOVStyle == 0) {
                if (tS[ctr] == 0 || tS[ctr] == 2 || tS[ctr] == 3 || tS[ctr] == 6) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 200, "rgba(0, 60, 110, 0.02)", "rgba(0, 60, 110, 0.09)");
                }
                if (tS[ctr] == 1) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 350, "rgba(0, 60, 110, 0.02)", "rgba(0, 60, 110, 0.09)");
                }
                if (tS[ctr] == 4) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 240, "rgba(110, 110, 110, 0.02)", "rgba(110, 110, 110, 0.09)");
                }
                if (tS[ctr] == 7) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 175, "rgba(110, 110, 110, 0.02)", "rgba(110, 110, 110, 0.09)");
                }
                if (tS[ctr] == 8) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 240, "rgba(0, 110, 30, 0.02)", "rgba(0, 110, 30, 0.09)");
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 175, "rgba(110, 110, 110, 0.03)", "rgba(110, 110, 110, 0.14)");
                }
            } else if (FOVStyle == 1) {
                if (tS[ctr] == 0 || tS[ctr] == 2 || tS[ctr] == 3 || tS[ctr] == 6) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 200, "rgba(0, 60, 110, 0.07)", "rgba(0, 60, 110, 0.45)");
                }
                if (tS[ctr] == 1) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 350, "rgba(0, 60, 110, 0.07)", "rgba(0, 60, 110, 0.45)");
                }
                if (tS[ctr] == 4) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 240, "rgba(110, 110, 110, 0.07)", "rgba(110, 110, 110, 0.45)");
                }
                if (tS[ctr] == 7) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 175, "rgba(110, 110, 110, 0.07)", "rgba(110, 110, 110, 0.45)");
                }
                if (tS[ctr] == 8) {
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 240, "rgba(0, 110, 30, 0.07)", "rgba(0, 110, 30, 0.45)");
                    FOV(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 175, "rgba(110, 110, 110, 0.11)", "rgba(110, 110, 110, 0.45)");
                }
            }
            ctr++;
        }
        ctr = 0;
        while (ctr < xP.length) {
            if (tP[ctr] == 0) {
                polygon((xP[ctr] - x) * 1.1 + (sX/ 2), (yP[ctr] - y) * 1.1 + (sY / 2), 4, 28, lctr / 100, "rgb(110, 110, 110)");
                polygon((xP[ctr] - x) + (sX/ 2), (yP[ctr] - y) + (sY / 2), 4, 24, lctr / 100, "#555555");
                polygon((xP[ctr] - x) + (sX/ 2), (yP[ctr] - y) + (sY / 2), 4, 20, lctr / 100, "#FFE95E");
                healthBar(xP[ctr] - x + (sX/ 2), yP[ctr] - y + (sY / 2), hPP[ctr], mHPP[ctr], 40);
            }
            if (tP[ctr] == 1) {
                polygon((xP[ctr] - x) * 1.1 + (sX/ 2), (yP[ctr] - y) * 1.1 + (sY / 2), 3, 26, lctr / 100, "rgb(110, 110, 110)");
                polygon((xP[ctr] - x) + (sX/ 2), (yP[ctr] - y) + (sY / 2), 3, 22, lctr / 100, "#555555");
                polygon((xP[ctr] - x) + (sX/ 2), (yP[ctr] - y) + (sY / 2), 3, 17, lctr / 100, "#FC7677");
                healthBar(xP[ctr] - x + (sX/ 2), yP[ctr] - y + (sY / 2), hPP[ctr], mHPP[ctr], 40);
            }
            if (tP[ctr] == 2) {
                polygon((xP[ctr] - x) * 1.1 + (sX/ 2), (yP[ctr] - y) * 1.1 + (sY / 2), 5, 35, lctr / 100, "rgb(110, 110, 110)");
                polygon((xP[ctr] - x) + (sX/ 2), (yP[ctr] - y) + (sY / 2), 5, 31, lctr / 100, "#555555");
                polygon((xP[ctr] - x) + (sX/ 2), (yP[ctr] - y) + (sY / 2), 5, 27, lctr / 100, "#768DFC");
                healthBar(xP[ctr] - x + (sX/ 2), yP[ctr] - y + (sY / 2), hPP[ctr], mHPP[ctr], 50);
            }
            if (tP[ctr] == 3) {
                polygon((xP[ctr] - x) * 1.1 + (sX/ 2), (yP[ctr] - y) * 1.1 + (sY / 2), 5, 100, lctr / 100, "rgb(110, 110, 110)");
                polygon((xP[ctr] - x) + (sX/ 2), (yP[ctr] - y) + (sY / 2), 5, 96, lctr / 100, "#555555");
                polygon((xP[ctr] - x) + (sX/ 2), (yP[ctr] - y) + (sY / 2), 5, 92, lctr / 100, "#768DFC");
                healthBar(xP[ctr] - x + (sX/ 2), yP[ctr] - y + (sY / 2), hPP[ctr], mHPP[ctr], 120);
            }
            if (hPP[ctr] < 0) {
                xP.splice(ctr, 1);
                yP.splice(ctr, 1);
                hPP.splice(ctr, 1);
                mHPP.splice(ctr, 1);
                tP.splice(ctr, 1);
            }
            ctr++;
        }
        ctr = 0;
        while (ctr < xE.length) {
            if (tE[ctr] == 0) {
                renderShadowBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 26, 12, 0, dE[ctr]);
                diepCircle2((xE[ctr] - x) * 1.1 + (sX / 2), (yE[ctr] - y) * 1.1 + (sY / 2), 17, "rgb(110, 110, 110)");
            }
            if (tE[ctr] == 1) {
                renderShadowBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 34, 14, 0, dE[ctr]);
                diepCircle2((xE[ctr] - x) * 1.1 + (sX / 2), (yE[ctr] - y) * 1.1 + (sY / 2), 20, "rgb(110, 110, 110)");
            }
            if (tE[ctr] == 2) {
                renderShadowBarrel(xE[ctr] - x + Math.cos(dE[ctr]) * 9 + (sX / 2), yE[ctr] - y + Math.sin(dE[ctr]) * 9 + (sY / 2), 34, 14, 0, dE[ctr]);
                renderShadowBarrel(xE[ctr] - x - Math.cos(dE[ctr]) * 9 + (sX / 2), yE[ctr] - y - Math.sin(dE[ctr]) * 9 + (sY / 2), 34, 14, 0, dE[ctr]);
                diepCircle2((xE[ctr] - x) * 1.1 + (sX / 2), (yE[ctr] - y) * 1.1 + (sY / 2), 20, "rgb(110, 110, 110)");
            }
            ctr++;
        }
        ctr = 0;
        while (ctr < xS.length) {
            if (tS[ctr] == 0) {
                ctr2 = 0;
                cED = 200;
                while (ctr2 < xE.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < cED && Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < 200) {
                        cEV = ctr2;
                        dS[ctr] = Math.atan2(yE[cEV] - yS[ctr], xE[cEV] - xS[ctr]);
                        cED = Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2));
                    }
                    ctr2++
                }
                if (tMRS[ctr] > 60 && cED < 200 && usableTankPower(ctr) > 0.2) {
                    tMRS[ctr] = 0;
                    summonBullet(xS[ctr], yS[ctr], dS[ctr], 30, 5, 15, 150);
                    powerTank(ctr, 0.2);
                }
                polygon(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 6, 27, 0, "#555555");
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 43, 21, 0, dS[ctr]);
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 22, "#00B2E1");
                healthBar(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), hPS[ctr], mHPS[ctr], 55);
            }
            if (tS[ctr] == 1) {
                ctr2 = 0;
                cED = 350;
                while (ctr2 < xE.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < cED && Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < 350) {
                        cEV = ctr2;
                        dS[ctr] = Math.atan2(yE[cEV] - yS[ctr], xE[cEV] - xS[ctr]);
                        cED = Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2));
                    }
                    ctr2++
                }
                if (tMRS[ctr] > 100 && cED < 350 && usableTankPower(ctr) > 0.2) {
                    tMRS[ctr] = 0;
                    summonBullet(xS[ctr], yS[ctr], dS[ctr], 30, 0, 15);
                    powerTank(ctr, 0.2);
                }
                polygon(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 6, 32, 0, "#555555");
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 50, 21, 0, dS[ctr]);
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 25, "#00B2E1");
                healthBar(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), hPS[ctr], mHPS[ctr], 55);
            }
            if (tS[ctr] == 2) {
                ctr2 = 0;
                cED = 200;
                while (ctr2 < xE.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < cED && Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < 200) {
                        cEV = ctr2;
                        dS[ctr] = Math.atan2(yE[cEV] - yS[ctr], xE[cEV] - xS[ctr]);
                        cED = Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2));
                    }
                    ctr2++
                }
                if (tMRS[ctr] == 27 && cED < 200 && usableTankPower(ctr) > 0.15) {
                    summonBullet(xS[ctr], yS[ctr], dS[ctr], 30, 0, 15, ctr, 12);
                    powerTank(ctr, 0.15);
                }
                if (tMRS[ctr] > 54 && cED < 200 && usableTankPower(ctr) > 0.15) {
                    tMRS[ctr] = 0;
                    summonBullet(xS[ctr], yS[ctr], dS[ctr], 30, 0, 15, ctr, -12);
                    powerTank(ctr, 0.15);
                }
                polygon(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 6, 32, 0, "#555555");
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 45, 21, 12, dS[ctr]);
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 45, 21, -12, dS[ctr]);
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 25, "#00B2E1");
                healthBar(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), hPS[ctr], mHPS[ctr], 55);
            }
            if (tS[ctr] == 3) {
                ctr2 = 0;
                cED = 200;
                while (ctr2 < xE.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < cED && Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < 200) {
                        cEV = ctr2;
                        dS[ctr] = Math.atan2(yE[cEV] - yS[ctr], xE[cEV] - xS[ctr]);
                        cED = Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2));
                    }
                    ctr2++
                }
                if (tMRS[ctr] == 16 && cED < 200 && usableTankPower(ctr) > 0.15) {
                    summonBullet(xS[ctr] + Math.cos(dS[ctr]) * 10, yS[ctr] + Math.sin(dS[ctr]) * 10, dS[ctr] + 0.25, 30, 0, 15);
                    powerTank(ctr, 0.15);
                }
                if (tMRS[ctr] == 32 && cED < 200 && usableTankPower(ctr) > 0.15) {
                    summonBullet(xS[ctr] + Math.cos(dS[ctr]) * 10, yS[ctr] + Math.sin(dS[ctr]) * 10, dS[ctr], 30, 0, 15);
                    powerTank(ctr, 0.15);
                }
                if (tMRS[ctr] == 48 && cED < 200 && usableTankPower(ctr) > 0.15) {
                    summonBullet(xS[ctr] + Math.cos(dS[ctr]) * 10, yS[ctr] + Math.sin(dS[ctr]) * 10, dS[ctr] - 0.25, 30, 0, 15);
                    powerTank(ctr, 0.15);
                }
                if (tMRS[ctr] > 64 && cED < 200 && usableTankPower(ctr) > 0.15) {
                    tMRS[ctr] = 0;
                    summonBullet(xS[ctr] - Math.cos(dS[ctr]) * 10, yS[ctr] - Math.sin(dS[ctr]) * 10, dS[ctr], 30, 0, 15);
                    powerTank(ctr, 0.15);
                }
                polygon(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 6, 32, 0, "#555555");
                renderTrapezoidBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 45, 21, 0, dS[ctr], 38);
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 25, "#00B2E1");
                healthBar(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), hPS[ctr], mHPS[ctr], 55);
            }
            if (tS[ctr] == 4) {
                ctr2 = 0;
                cED = 240;
                while (ctr2 < xP.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xP[ctr2], 2) + Math.pow(yS[ctr] - yP[ctr2], 2)) < cED && Math.sqrt(Math.pow(xS[ctr] - xP[ctr2], 2) + Math.pow(yS[ctr] - yP[ctr2], 2)) < 240) {
                        cEV = ctr2;
                        dS[ctr] = Math.atan2(yP[cEV] - yS[ctr], xP[cEV] - xS[ctr]);
                        cED = Math.sqrt(Math.pow(xS[ctr] - xP[ctr2], 2) + Math.pow(yS[ctr] - yP[ctr2], 2));
                    }
                    ctr2++
                }
                if (tMRS[ctr] > 120 && cED < 240 && usableTankPower(ctr) > 0.02) {
                    tMRS[ctr] = 0;
                    summonBullet(xS[ctr], yS[ctr], dS[ctr], 30, 2, 25);
                    powerTank(ctr, 0.02);
                }
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 30, "#555555");
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 39, 18, 0, dS[ctr]);
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 22, "#999999");
                healthBar(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), hPS[ctr], mHPS[ctr], 55);
            }
            if (tS[ctr] == 5) {
                ctr2 = 0;
                cED = 200;
                while (ctr2 < xE.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < cED && Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < 200) {
                        cEV = ctr2;
                        dS[ctr] = Math.atan2(yE[cEV] - yS[ctr], xE[cEV] - xS[ctr]);
                        cED = Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2));
                    }
                    ctr2++
                }
                if (tMRS[ctr] > 50 && cED < 200 && usableTankPower(ctr) > 0.45) {
                    tMRS[ctr] = 0;
                    summonBullet(xS[ctr], yS[ctr], dS[ctr], 30, 0, 15);
                    summonBullet(xS[ctr], yS[ctr], dS[ctr] + Math.PI / 4, 30, 0, 15);
                    summonBullet(xS[ctr], yS[ctr], dS[ctr] - Math.PI / 4, 30, 0, 15);
                    powerTank(ctr, 0.45);
                }
                polygon(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 6, 35, 0, "#555555");
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 50, 24, 0, dS[ctr]);
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 50, 24, 0, dS[ctr] + Math.PI / 4);
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 50, 24, 0, dS[ctr] - Math.PI / 4);
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 27, "#00B2E1");
                healthBar(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), hPS[ctr], mHPS[ctr], 60);
            }
            if (tS[ctr] == 6) {
                ctr2 = 0;
                cED = 200;
                while (ctr2 < xE.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < cED && Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < 200) {
                        cEV = ctr2;
                        dS[ctr] = Math.atan2(yE[cEV] - yS[ctr], xE[cEV] - xS[ctr]);
                        cED = Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2));
                    }
                    ctr2++
                }
                if (tMRS[ctr] == 15 && cED < 200 && usableTankPower(ctr) > 0.1) {
                    summonBullet(xS[ctr], yS[ctr], dS[ctr], 75, 0, 5);
                    powerTank(ctr, 0.1);
                }
                if (tMRS[ctr] == 30 && cED < 200 && usableTankPower(ctr) > 0.2) {
                    summonBullet(xS[ctr], yS[ctr], dS[ctr] + Math.PI / 8, 75, 0, 5);
                    summonBullet(xS[ctr], yS[ctr], dS[ctr] - Math.PI / 8, 75, 0, 5);
                    powerTank(ctr, 0.2);
                }
                if (tMRS[ctr] > 45 && cED < 200 && usableTankPower(ctr) > 0.2) {
                    tMRS[ctr] = 0;
                    summonBullet(xS[ctr], yS[ctr], dS[ctr] + Math.PI / 4, 75, 0, 5);
                    summonBullet(xS[ctr], yS[ctr], dS[ctr] - Math.PI / 4, 75, 0, 5);
                    powerTank(ctr, 0.2);
                }
                polygon(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 6, 39, 0, "#555555");
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 50, 26, 0, dS[ctr] + Math.PI / 4);
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 50, 26, 0, dS[ctr] - Math.PI / 4);
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 60, 26, 0, dS[ctr] + Math.PI / 8);
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 60, 26, 0, dS[ctr] - Math.PI / 8);
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 70, 26, 0, dS[ctr]);
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 30, "#00B2E1");
                healthBar(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), hPS[ctr], mHPS[ctr], 70);
            }
            if (tS[ctr] == 7) {
                ctr6 = 0;
                ctx.strokeStyle = "rgba(0, 60, 110, 0.25)";
                ctx.lineWidth = 5;
                while (ctr6 < xS.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xS[ctr6], 2) + Math.pow(yS[ctr] - yS[ctr6], 2)) < 175 && ctr != ctr6) {
                        if (tS[ctr6] == 7 || tS[ctr6] == 8) {
                            if (ctr6 > ctr) {
                                ctx.beginPath();
                                ctx.moveTo(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2));
                                ctx.lineTo(xS[ctr6] - x + (sX / 2), yS[ctr6] - y + (sY / 2));
                                ctx.stroke();
                                ctx.closePath();
                            }
                        } else {
                            ctx.beginPath();
                            ctx.moveTo(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2));
                            ctx.lineTo(xS[ctr6] - x + (sX / 2), yS[ctr6] - y + (sY / 2));
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                    ctr6++
                }
                polygon(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 5, 20, lctr / 30, "#555555");
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 12, "#999999");
                healthBar(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), hPS[ctr], mHPS[ctr], 30);
            }
            if (tS[ctr] == 8) {
                mPower = mPower + 10;
                ctr2 = 0;
                cED = 240;
                while (ctr2 < xP.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xP[ctr2], 2) + Math.pow(yS[ctr] - yP[ctr2], 2)) < cED && Math.sqrt(Math.pow(xS[ctr] - xP[ctr2], 2) + Math.pow(yS[ctr] - yP[ctr2], 2)) < 240) {
                        cEV = ctr2;
                        dS[ctr] = Math.atan2(yP[cEV] - yS[ctr], xP[cEV] - xS[ctr]);
                        cED = Math.sqrt(Math.pow(xS[ctr] - xP[ctr2], 2) + Math.pow(yS[ctr] - yP[ctr2], 2));
                    }
                    ctr2++
                }
                if (tMRS[ctr] > 100 && cED < 240) {
                    tMRS[ctr] = 0;
                    pW[ctr]++;
                    summonBullet(xS[ctr], yS[ctr], dS[ctr], 30, 3, 25, ctr);
                }
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 40, "#555555");
                renderBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 50, 25, 0, dS[ctr]);
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 32, "#00E16E");
                healthBar(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), hPS[ctr], mHPS[ctr], 55);
                ctx.fillStyle = "White";
                ctx.strokeStyle = "rgb(40, 40, 40)";
                ctx.font = "Bold 18px Ubuntu";
                ctx.textAlign = "center";
                ctx.strokeText(Math.round(pW[ctr] * 100) / 100 + "/" + 10, xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2) + 6);
                ctx.fillText(Math.round(pW[ctr] * 100) / 100 + "/" + 10, xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2) + 6);
                ctr6 = 0;
                ctx.strokeStyle = "rgba(0, 60, 110, 0.25)";
                ctx.lineWidth = 5;
                pW2[ctr] = [];
                while (ctr6 < xS.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xS[ctr6], 2) + Math.pow(yS[ctr] - yS[ctr6], 2)) < 175 && ctr != ctr6) {
                        if (tS[ctr6] == 7 || tS[ctr6] == 8) {
                            if (ctr6 > ctr) {
                                ctx.beginPath();
                                ctx.moveTo(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2));
                                ctx.lineTo(xS[ctr6] - x + (sX / 2), yS[ctr6] - y + (sY / 2));
                                ctx.stroke();
                                ctx.closePath();
                            }
                        } else {
                            ctx.beginPath();
                            ctx.moveTo(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2));
                            ctx.lineTo(xS[ctr6] - x + (sX / 2), yS[ctr6] - y + (sY / 2));
                            ctx.stroke();
                            ctx.closePath();
                        }
                        if (tS[ctr] == 8) {
                            pW2[ctr].push(ctr6);
                        }
                    }
                    ctr6++
                }
            }
            if (tS[ctr] == 9) {
                ctr2 = 0;
                cED = 425;
                while (ctr2 < xE.length) {
                    if (Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < cED && Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2)) < 425) {
                        cEV = ctr2;
                        dS[ctr] = Math.atan2(yE[cEV] - yS[ctr], xE[cEV] - xS[ctr]);
                        cED = Math.sqrt(Math.pow(xS[ctr] - xE[ctr2], 2) + Math.pow(yS[ctr] - yE[ctr2], 2));
                    }
                    ctr2++
                }
                if (tMRS[ctr] > 140 && cED < 425 && usableTankPower(ctr) > 0.4) {
                    tMRS[ctr] = 0;
                    summonBullet(xS[ctr], yS[ctr], dS[ctr], 30, 4, 15);
                    powerTank(ctr, 0.4);
                }
                polygon(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 6, 35, 0, "#555555");
                renderTrapezoidBarrel(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 60, 15, 0, dS[ctr], 27);
                diepCircle(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), 27, "#00B2E1");
                healthBar(xS[ctr] - x + (sX / 2), yS[ctr] - y + (sY / 2), hPS[ctr], mHPS[ctr], 55);
            }
            ctr6 = 0;
            ctr5 = 0;
            if (tS[ctr] != 8) {
                pW[ctr] = [];
                while (ctr5 < pWL.length) {
                    pWC = 0;
                    ctr6 = 0;
                    while (ctr6 < xS.length) {
                        if (Math.sqrt(Math.pow(xS[ctr] - xS[ctr6], 2) + Math.pow(yS[ctr] - yS[ctr6], 2)) < 175 && tS[ctr6] == 7 && pW[ctr6].indexOf(pWL[ctr5]) != -1) {
                            pWC = 1;
                        }
                        if (ctr6 == pWL[ctr5] && Math.sqrt(Math.pow(xS[ctr] - xS[ctr6], 2) + Math.pow(yS[ctr] - yS[ctr6], 2)) < 175 && tS[ctr6] == 8) {
                            pWC = 1;
                        }
                        if (Math.sqrt(Math.pow(xS[ctr] - xS[ctr6], 2) + Math.pow(yS[ctr] - yS[ctr6], 2)) < 175 && tS[ctr6] == 8 && pW2[ctr6].indexOf(pWL[ctr5]) != -1) {
                            pWC = 1;
                        }
                        ctr6++;
                    }
                    if (pWC == 1) {
                        pW[ctr].push(pWL[ctr5]);
                    }
                    ctr5++;
                }
            }
            if (hPS[ctr] < mHPS[ctr] && tMRS2[ctr] % 50 == 0 && usableTankPower(ctr) > mHPS[ctr] / 10000 && tS[ctr] != 8) {
                hPS[ctr] = hPS[ctr] + mHPS[ctr] / 100;
                powerTank(ctr, mHPS[ctr] / 10000);
            }
            if (tS[ctr] == 8 && hPS[ctr] < mHPS[ctr] && tMRS2[ctr] % 50 == 0) {
                hPS[ctr] = hPS[ctr] + mHPS[ctr] / 200;
            }
            tMRS[ctr]++
            tMRS2[ctr]++
            if (hPS[ctr] <= 0) {
                xS.splice(ctr, 1);
                yS.splice(ctr, 1);
                dS.splice(ctr, 1);
                hPS.splice(ctr, 1);
                mHPS.splice(ctr, 1);
                tMRS.splice(ctr, 1);
                tMRS2.splice(ctr, 1);
                tS.splice(ctr, 1);
                pW.splice(ctr, 1);
                pW2.splice(ctr, 1);
                costS.splice(sTV, 1);
            }
            ctr++;
        }
        ctr = 0;
        while (ctr < xE.length) {
            if (tE[ctr] == 0) {
                ctr2 = 0;
                cED = 120;
                cED2 = 99999;
                while (ctr2 < xS.length) {
                    if (Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < cED2) {
                        cEV2 = ctr2;
                        cED2 = Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2));
                        dE[ctr] = Math.atan2(yS[cEV2] - yE[ctr], xS[cEV2] - xE[ctr]);
                    }
                    if (Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < cED && Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < 120) {
                        cEV = ctr2;
                        cED = Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2));
                    }
                    ctr2++
                }
                if (Math.sqrt(Math.pow(xE[ctr] - xS[cEV2], 2) + Math.pow(yE[ctr] - yS[cEV2], 2)) > 100) {
                    xE[ctr] = xE[ctr] + Math.cos(dE[ctr]);
                    yE[ctr] = yE[ctr] + Math.sin(dE[ctr]);
                }
                if (cED < 120) {
                    if (tMRE[ctr] > 90) {
                        tMRE[ctr] = 0;
                        summonBullet(xE[ctr], yE[ctr], dE[ctr], 50, 1, 5);
                    }
                }
                if (FOVStyle == 0) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 120, "rgba(116, 0, 0, 0.02)", "rgba(116, 0, 0, 0.09)");
                } else if (FOVStyle == 1) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 120, "rgba(116, 0, 0, 0.07)", "rgba(116, 0, 0, 0.09)");
                }
                renderBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 26, 12, 0, dE[ctr]);
                diepCircle(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 15, "#F14E54");
                healthBar(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), hPE[ctr], mHPE[ctr], 40);
            }
            if (tE[ctr] == 1) {
                ctr2 = 0;
                cED = 200;
                cED2 = 99999;
                while (ctr2 < xS.length) {
                    if (Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < cED2) {
                        cEV2 = ctr2;
                        cED2 = Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2));
                        dE[ctr] = Math.atan2(yS[cEV2] - yE[ctr], xS[cEV2] - xE[ctr]);
                    }
                    if (Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < cED && Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < 200) {
                        cEV = ctr2;
                        cED = Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2));
                    }
                    ctr2++
                }
                if (Math.sqrt(Math.pow(xE[ctr] - xS[cEV2], 2) + Math.pow(yE[ctr] - yS[cEV2], 2)) > 180) {
                    xE[ctr] = xE[ctr] + Math.cos(dE[ctr]) / 1.4;
                    yE[ctr] = yE[ctr] + Math.sin(dE[ctr]) / 1.4;
                }
                if (cED < 200) {
                    if (tMRE[ctr] > 150) {
                        tMRE[ctr] = 0;
                        summonBullet(xE[ctr], yE[ctr], dE[ctr], 50, 1, 15);
                    }
                }
                if (FOVStyle == 0) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 200, "rgba(116, 0, 0, 0.02)", "rgba(116, 0, 0, 0.09)");
                } else if (FOVStyle == 1) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 200, "rgba(116, 0, 0, 0.07)", "rgba(116, 0, 0, 0.09)");
                }
                renderBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 34, 14, 0, dE[ctr]);
                diepCircle(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 17, "#F14E54");
                healthBar(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), hPE[ctr], mHPE[ctr], 40);
            }
            if (tE[ctr] == 2) {
                ctr2 = 0;
                cED = 120;
                cED2 = 99999;
                while (ctr2 < xS.length) {
                    if (Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < cED2) {
                        cEV2 = ctr2;
                        cED2 = Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2));
                        dE[ctr] = Math.atan2(yS[cEV2] - yE[ctr], xS[cEV2] - xE[ctr]);
                    }
                    if (Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < cED && Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < 120) {
                        cEV = ctr2;
                        cED = Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2));
                    }
                    ctr2++
                }
                if (Math.sqrt(Math.pow(xE[ctr] - xS[cEV2], 2) + Math.pow(yE[ctr] - yS[cEV2], 2)) > 100) {
                    xE[ctr] = xE[ctr] + Math.cos(dE[ctr]) / 1.7;
                    yE[ctr] = yE[ctr] + Math.sin(dE[ctr]) / 1.7;
                }
                if (cED < 120) {
                    if (tMRE[ctr] == 40) {
                        summonBullet(xE[ctr] + Math.cos(dE[ctr]) * 8, yE[ctr] + Math.sin(dE[ctr]) * 8, dE[ctr], 50, 1, 5, ctr, 8);
                    }
                    if (tMRE[ctr] > 80) {
                        tMRE[ctr] = 0;
                        summonBullet(xE[ctr] - Math.cos(dE[ctr]) * 8, yE[ctr] - Math.sin(dE[ctr]) * 8, dE[ctr], 50, 1, 5, ctr, -8);
                    }
                }
                if (FOVStyle == 0) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 120, "rgba(116, 0, 0, 0.02)", "rgba(116, 0, 0, 0.09)");
                } else if (FOVStyle == 1) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 120, "rgba(116, 0, 0, 0.07)", "rgba(116, 0, 0, 0.09)");
                }
                renderBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 30, 14, 8, dE[ctr]);
                renderBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 30, 14, -8, dE[ctr]);
                diepCircle(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 17, "#F14E54");
                healthBar(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), hPE[ctr], mHPE[ctr], 40);
            }
            if (tE[ctr] == 3) {
                ctr2 = 0;
                cED = 120;
                cED2 = 99999;
                cEV3 = -1;
                ctr3 = 0;
                ctr4 = 0;
                ctr5 = 0;
                while (ctr3 < xS.length) {
                    while (ctr4 < xS.length) {
                        if (Math.sqrt(Math.pow(xS[ctr3] - xS[ctr4], 2) + Math.pow(yS[ctr3] - yS[ctr4], 2)) < 239 && Math.sqrt(Math.pow(xE[ctr] - (xS[ctr3] + xS[ctr4]) / 2, 2) + Math.pow(yE[ctr] - (yS[ctr3] + yS[ctr4]) / 2, 2)) < cED2) {
                            if (ctr5 == 0 || ctr3 != ctr4) {
                                cEV2 = ctr3;
                                cEV3 = ctr4;
                                cED2 = Math.sqrt(Math.pow(xE[ctr] - (xS[ctr3] + xS[ctr4]) / 2, 2) + Math.pow(yE[ctr] - (yS[ctr3] + yS[ctr4]) / 2, 2));
                                if (ctr3 != ctr4) {
                                    ctr5++;
                                }
                            }

                        }
                        ctr4++;
                    }
                    ctr4 = 0;
                    ctr3++;
                }
                dE[ctr] = Math.atan2((yS[cEV2] + yS[cEV3]) / 2 - yE[ctr], (xS[cEV2] + xS[cEV3]) / 2 - xE[ctr]);
                if (Math.sqrt(Math.pow(xE[ctr] - (xS[cEV2] + xS[cEV3]) / 2, 2) + Math.pow(yE[ctr] - (yS[cEV2] + yS[cEV3]) / 2, 2)) > 5) {
                    xE[ctr] = xE[ctr] + Math.cos(dE[ctr]);
                    yE[ctr] = yE[ctr] + Math.sin(dE[ctr]);
                } else {
                    dE[ctr] = Math.atan2(yS[cEV2] - yE[ctr], xS[cEV2] - xE[ctr]);
                }
                if (xS.length == 0) {
                    dE[ctr] = 0;
                }
                //}
                if (cED2 < 120) {
                    if (tMRE[ctr] > 90) {
                        tMRE[ctr] = 0;
                        summonBullet(xE[ctr], yE[ctr], dE[ctr] + Math.PI, 50, 1, 5);
                        summonBullet(xE[ctr], yE[ctr], dE[ctr], 50, 1, 5);
                    }
                }
                if (FOVStyle == 0) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 120, "rgba(116, 0, 0, 0.02)", "rgba(116, 0, 0, 0.09)");
                } else if (FOVStyle == 1) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 120, "rgba(116, 0, 0, 0.07)", "rgba(116, 0, 0, 0.09)");
                }
                renderBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 30, 14, 0, dE[ctr]);
                renderBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 30, 14, 0, dE[ctr] + Math.PI);
                diepCircle(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 17, "#F14E54");
                healthBar(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), hPE[ctr], mHPE[ctr], 40);
            }
            if (tE[ctr] == 4) {
                ctr2 = 0;
                cED = 120;
                cED2 = 99999;
                while (ctr2 < xS.length) {
                    if (Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < cED2) {
                        cEV2 = ctr2;
                        cED2 = Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2));
                        dE[ctr] = Math.atan2(yS[cEV2] - yE[ctr], xS[cEV2] - xE[ctr]);
                    }
                    if (Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < cED && Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < 120) {
                        cEV = ctr2;
                        cED = Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2));
                    }
                    ctr2++
                }
                if (Math.sqrt(Math.pow(xE[ctr] - xS[cEV2], 2) + Math.pow(yE[ctr] - yS[cEV2], 2)) > 100) {
                    xE[ctr] = xE[ctr] + Math.cos(dE[ctr]) * 1.5;
                    yE[ctr] = yE[ctr] + Math.sin(dE[ctr]) * 1.5;
                }
                if (cED < 120) {
                    if (tMRE[ctr] > 70) {
                        tMRE[ctr] = 0;
                        summonBullet(xE[ctr] - Math.cos(dE[ctr]) * 8, yE[ctr] - Math.sin(dE[ctr]) * 8, dE[ctr], 50, 1, 5);
                    }
                } else {
                    if (tMRE2[ctr] > 90) {
                        tMRE2[ctr] = 0;
                        summonBullet(xE[ctr] - Math.cos(dE[ctr] + Math.PI * (7 / 6)) * 8, yE[ctr] - Math.sin(dE[ctr] + Math.PI * (7 / 6)) * 8, dE[ctr] + Math.PI * (7 / 6), 50, 1, 5);
                        summonBullet(xE[ctr] - Math.cos(dE[ctr] + Math.PI * (5 / 6)) * 8, yE[ctr] - Math.sin(dE[ctr] + Math.PI * (5 / 6)) * 8, dE[ctr] + Math.PI * (5 / 6), 50, 1, 5);
                    }
                    if (tMRE2[ctr] < 30) {
                        xE[ctr] = xE[ctr] + Math.cos(dE[ctr]) * (6 - tMRE2[ctr] / 5);
                        yE[ctr] = yE[ctr] + Math.sin(dE[ctr]) * (6 - tMRE2[ctr] / 5);
                    }
                }
                if (FOVStyle == 0) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 120, "rgba(116, 0, 0, 0.02)", "rgba(116, 0, 0, 0.09)");
                } else if (FOVStyle == 1) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 120, "rgba(116, 0, 0, 0.07)", "rgba(116, 0, 0, 0.09)");
                }
                renderBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 30, 14, 0, dE[ctr]);
                renderBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 25, 14, 0, dE[ctr] + Math.PI * (7 / 6));
                renderBarrel(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 25, 14, 0, dE[ctr] + Math.PI * (5 / 6));
                diepCircle(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 17, "#F14E54");
                healthBar(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), hPE[ctr], mHPE[ctr], 40);
            }
            if (tE[ctr] == 5) {
                ctr2 = 0;
                cED = 120;
                cED2 = 99999;
                while (ctr2 < xS.length) {
                    if (Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < cED2) {
                        cEV2 = ctr2;
                        cED2 = Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2));
                        dE[ctr] = Math.atan2(yS[cEV2] - yE[ctr], xS[cEV2] - xE[ctr]);
                    }
                    if (Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < cED && Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2)) < 30) {
                        cEV = ctr2;
                        cED = Math.sqrt(Math.pow(xE[ctr] - xS[ctr2], 2) + Math.pow(yE[ctr] - yS[ctr2], 2));
                    }
                    ctr2++
                }
                if (Math.sqrt(Math.pow(xE[ctr] - xS[cEV2], 2) + Math.pow(yE[ctr] - yS[cEV2], 2)) > 25) {
                    xE[ctr] = xE[ctr] + Math.cos(dE[ctr]) * 2.5;
                    yE[ctr] = yE[ctr] + Math.sin(dE[ctr]) * 2.5;
                }
                if (cED < 30 && tMRE[ctr] > 6) {
                    hPS[cEV2]--;
                    tMRE[ctr] = 0;
                }
                if (FOVStyle == 0) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 30, "rgba(255, 180, 180, 0.02)", "rgba(255, 180, 180, 0.09)");
                } else if (FOVStyle == 1) {
                    FOV(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), 30, "rgba(255, 180, 180, 0.07)", "rgba(255, 180, 180, 0.09)");
                }
                healthBar(xE[ctr] - x + (sX / 2), yE[ctr] - y + (sY / 2), hPE[ctr], mHPE[ctr], 40);
                polygon((xE[ctr] - x) * 1.1 + (sX / 2), (yE[ctr] - y) * 1.1 + (sY / 2), 3, 26, dE[ctr], "rgb(110, 110, 110)");
                polygon((xE[ctr] - x) + (sX / 2), (yE[ctr] - y) + (sY / 2), 3, 22, dE[ctr], "#555555");
                polygon((xE[ctr] - x) + (sX / 2), (yE[ctr] - y) + (sY / 2), 3, 17, dE[ctr], "#F177DD");
            }
            if (Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2)) > 512) {
                ctx.beginPath();
                ctx.strokeStyle = "rgba(116, 0, 0, " + (511 / Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2))) + ")";
                ctx.lineWidth = 10;
                ctx.moveTo((Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2)) / 30 + 360) * Math.cos(Math.atan2(yE[ctr] - y, xE[ctr] - x)) + (sX / 2), (Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2)) / 30 + 360) * Math.sin(Math.atan2(yE[ctr] - y, xE[ctr] - x)) + 512);
                ctx.lineTo((Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2)) / 30 + 380) * Math.cos(Math.atan2(yE[ctr] - y, xE[ctr] - x)) + (sX / 2), (Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2)) / 30 + 380) * Math.sin(Math.atan2(yE[ctr] - y, xE[ctr] - x)) + 512);
                ctx.stroke();
                ctx.textAlign = "center";
                ctx.font = "Bold 10px Ubuntu";
                ctx.fillStyle = "White";
                ctx.lineWidth = 4;
                ctx.strokeStyle = "rgb(40, 40, 40)";
                ctx.strokeText(Math.round(Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2))), (Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2)) / 30 + 360) * Math.cos(Math.atan2(yE[ctr] - y, xE[ctr] - x)) + (sX / 2), (Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2)) / 30 + 360) * Math.sin(Math.atan2(yE[ctr] - y, xE[ctr] - x)) + 512);
                ctx.fillText(Math.round(Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2))), (Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2)) / 30 + 360) * Math.cos(Math.atan2(yE[ctr] - y, xE[ctr] - x)) + (sX / 2), (Math.sqrt(Math.pow(x - xE[ctr], 2) + Math.pow(y - yE[ctr], 2)) / 30 + 360) * Math.sin(Math.atan2(yE[ctr] - y, xE[ctr] - x)) + 512);
            }
            tMRE[ctr]++
            tMRE2[ctr]++
            if (hPE[ctr] <= 0) {
                xE.splice(ctr, 1);
                yE.splice(ctr, 1);
                dE.splice(ctr, 1);
                hPE.splice(ctr, 1);
                mHPE.splice(ctr, 1);
                tMRE.splice(ctr, 1);
                tMRE2.splice(ctr, 1);
                tE.splice(ctr, 1);
            }
            ctr++;
        }
        //ctr = 0;
        //while (ctr < xS.length) {
        //fov stuff was here before
        //    ctr++
        //}
        ctx.fillStyle = "#555555";
        //ctx.font = "24px Consolas";
        ctx.font = "15px Ubuntu";
        ctx.textAlign = "left";
        ctx.fillText("Drag mouse to move around.", 10, 15);
        ctx.fillText("Use the key names in square brackets to summon towers or upgrade.", 10, 30);
        ctx.fillText("Click a tower to select it.", 10, 45);
        ctx.fillText("Press [ESC] or [X] to deselect a tower or to stop tower placement.", 10, 60);
        ctx.fillText("Tanks defend you from enemies.", 10, 75);
        ctx.fillText("Extractors collect power from polygons to fuel your towers.", 10, 90);
        ctx.fillText("Miners mine polygons so you can build towers.", 10, 105);
        ctx.fillText("Connectors allow things to be placed far away from power sources.", 10, 120);
        ctx.fillText("Game made by adasba, though it is heavily inspired by the following:", 10, 135);
        ctx.fillText("Diep.io", 10, 150);
        ctx.fillText("The Space Game (Casual Collective)", 10, 165);
        ctx.fillText("I did a bit of digging on google, and I found out that The Space Game", 10, 180);
        ctx.fillText("was based off of this other game called Harvest: Massive Encounter, so I'll give credit to that too.", 10, 195);
        ctx.font = "Bold 20px Ubuntu";
        ctx.fillText("HUGE shoutout to Aplet123 for making a rewrite of this. Thank you!", 10, 215);
        //ctx.fillText("Drag mouse to move around.", 10, 24);
        //ctx.fillText("Press [SPACE] to spawn a tower.", 10, 48);
        //ctx.fillText("Press [B] to spawn a polygon miner tower [WIP]. (Temporary Change)", 10, 72);
        //ctx.fillText("Press [E] to spawn a penta shot tower.", 10, 96);
        //ctx.fillText("Press [A] to spawn an enemy tank.", 10, 120);
        //ctx.fillText("Press [D] to spawn an enemy sniper.", 10, 144);
        //ctx.fillText("Press [C] to spawn an enemy twin tank.", 10, 168);
        //ctx.fillText("Press [W] to spawn an enemy flank guard.", 10, 192);
        //ctx.fillText("Press [S] to spawn a machine gun tower [WIP].", 10, 216);
        //ctx.fillText("Press [Q] to spawn an enemy tri-angle. [WIP].", 10, 240);
        //ctx.fillText("Click a tower, and press a number key to upgrade (only works with basic tank).", 10, 264);
        //ctx.fillText("Sniper can still be spawned from upgrade menu.", 10, 288);
        //ctx.fillText("Made by adasba.", 10, 312);
        //ctx.fillRect(xE[0] - x + 512, yE[0] - y + 512, 15, 15)
        if (sT == 1) {
            ctx.beginPath();
            if (tS[sTV] != 4) {
                ctx.strokeStyle = "rgba(0, 60, 110, 0.4)";
            } else {
                ctx.strokeStyle = "rgba(110, 110, 110, 0.4)";
            }
            ctx.lineWidth = 10;
            ctx.arc(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 40, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
            if (FOVStyle == 0) {
                if (tS[sTV] == 0 || tS[sTV] == 2 || tS[sTV] == 3 || tS[sTV] == 6) {
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 200, "rgba(0, 60, 110, 0.10)", "rgba(0, 60, 110, 0.45)");
                }
                if (tS[sTV] == 1) {
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 350, "rgba(0, 60, 110, 0.10)", "rgba(0, 60, 110, 0.45)");
                }
                if (tS[sTV] == 4) {
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 240, "rgba(110, 110, 110, 0.10)", "rgba(110, 110, 110, 0.45)");
                }
                if (tS[sTV] == 7) {
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 175, "rgba(110, 110, 110, 0.10)", "rgba(110, 110, 110, 0.45)");
                }
                if (tS[sTV] == 8) {
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 240, "rgba(0, 110, 30, 0.10)", "rgba(0, 110, 30, 0.45)");
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 175, "rgba(110, 110, 110, 0.15)", "rgba(110, 110, 110, 0.45)");
                }
            } else if (FOVStyle == 1) {
                if (tS[sTV] == 0 || tS[sTV] == 2 || tS[sTV] == 3 || tS[sTV] == 6) {
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 200, "rgba(0, 60, 110, 0.20)", "rgba(0, 60, 110, 0.45)");
                }
                if (tS[sTV] == 1) {
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 350, "rgba(0, 60, 110, 0.20)", "rgba(0, 60, 110, 0.45)");
                }
                if (tS[sTV] == 4) {
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 240, "rgba(110, 110, 110, 0.20)", "rgba(110, 110, 110, 0.45)");
                }
                if (tS[sTV] == 7) {
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 175, "rgba(110, 110, 110, 0.20)", "rgba(110, 110, 110, 0.45)");
                }
                if (tS[sTV] == 8) {
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 240, "rgba(0, 110, 30, 0.20)", "rgba(0, 110, 30, 0.45)");
                    FOV(xS[sTV] - x + (sX / 2), yS[sTV] - y + (sY / 2), 175, "rgba(110, 110, 110, 0.30)", "rgba(110, 110, 110, 0.45)");
                }
            }
            if (tS[sTV] == 0) {
                if (keys2[49] == 1 && cash >= 25) {
                    costS[sTV] = costS[sTV] + 25
                    cash = cash - 25;
                    mHPS[sTV] = mHPS[sTV] + 125;
                    hPS[sTV] = hPS[sTV] + 125;
                    tS[sTV] = 2;
                    keys2[49] = 2;
                }
                if (keys2[50] == 1 && cash >= 20) {
                    costS[sTV] = costS[sTV] + 20
                    cash = cash - 20;
                    mHPS[sTV] = mHPS[sTV] + 100;
                    hPS[sTV] = hPS[sTV] + 100;
                    tS[sTV] = 3;
                    keys2[50] = 2;
                }
                if (keys2[51] == 1 && cash >= 15) {
                    costS[sTV] = costS[sTV] + 15
                    cash = cash - 15;
                    mHPS[sTV] = mHPS[sTV] + 75;
                    hPS[sTV] = hPS[sTV] + 75;
                    tS[sTV] = 1;
                    keys2[51] = 2;
                }
            }
            if (tS[sTV] == 2) {
                if (keys2[49] == 1 && cash >= 25) {
                    costS[sTV] = costS[sTV] + 25
                    cash = cash - 25;
                    mHPS[sTV] = mHPS[sTV] + 75;
                    hPS[sTV] = hPS[sTV] + 75;
                    tS[sTV] = 5;
                    keys2[49] = 2;
                }
            }
            if (tS[sTV] == 1) {
                if (keys2[49] == 1 && cash >= 40) {
                    costS[sTV] = costS[sTV] + 40
                    cash = cash - 40;
                    mHPS[sTV] = mHPS[sTV] + 100;
                    hPS[sTV] = hPS[sTV] + 100;
                    tS[sTV] = 9;
                    keys2[49] = 2;
                }
            }
            if (tS[sTV] == 5) {
                if (keys2[49] == 1 && cash >= 75) {
                    costS[sTV] = costS[sTV] + 75
                    cash = cash - 75;
                    mHPS[sTV] = mHPS[sTV] + 150;
                    hPS[sTV] = hPS[sTV] + 150;
                    tS[sTV] = 6;
                    keys2[49] = 2;
                }
            }
            if (keys2[82] == 1) { 
                xS.splice(sTV, 1)
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
                keys2[82] == 2;
            }
        }
        if (ctrS[0] > 0) {
            aN = 400 / (ctrS[0] + 1);
            ctx.textAlign = "center";
            tankIcon(50, sY - 200 + aN, "#75C6C3", "#60A2A0");
            polygon(125, sY - 125 + aN, 6, 40, 0, "#555555");
            renderBarrel(125, sY - 125 + aN, 56.25, 26.25, 15, lctr / 100);
            renderBarrel(125, sY - 125 + aN, 56.25, 26.25, -15, lctr / 100);
            diepCircle(125, sY - 125 + aN, 31.25, "#00B2E1");
            tankIcon(250, sY - 200 + aN, "#8BCA7A", "#72A466");
            polygon(325, sY - 125 + aN, 6, 40, 0, "#555555");
            renderTrapezoidBarrel(325, sY - 125 + aN, 56.25, 26.25, 0, lctr / 100, 47.5);
            diepCircle(325, sY - 125 + aN, 31.25, "#00B2E1");
            tankIcon(450, sY - 200 + aN, "#CA7676", "#A56262");
            polygon(525, sY - 125 + aN, 6, 40, 0, "#555555");
            renderBarrel(525, sY - 125 + aN, 62.5, 26.25, 0, lctr / 100);
            diepCircle(525, sY - 125 + aN, 31.25, "#00B2E1");
            ctx.fillStyle = "White";
            ctx.lineWidth = 6;
            ctx.strokeStyle = "rgb(40, 40, 40)";
            ctx.font = "Bold 18px Ubuntu";
            ctx.strokeText("Twin - 25", 125, sY - 64 + aN);
            ctx.fillText("Twin - 25", 125, sY - 64 + aN);
            ctx.strokeText("Machine Gun - 20", 325, sY - 64 + aN);
            ctx.fillText("Machine Gun - 20", 325, sY - 64 + aN);
            ctx.strokeText("Sniper - 15", 525, sY - 64 + aN);
            ctx.fillText("Sniper - 15", 525, sY - 64 + aN);
            ctx.strokeText("[1]", 125, sY - 171 + aN);
            ctx.fillText("[1]", 125, sY - 171 + aN);
            ctx.strokeText("[2]", 325, sY - 171 + aN);
            ctx.fillText("[2]", 325, sY - 171 + aN);
            ctx.strokeText("[3]", 525, sY - 171 + aN);
            ctx.fillText("[3]", 525, sY - 171 + aN);
        }
        if (ctrS[1] > 0) {
            aN = 400 / (ctrS[1] + 1);
            ctx.textAlign = "center";
            tankIcon(50, sY - 200 + aN, "#75C6C3", "#60A2A0");
            polygon(125, sY - 125 + aN, 6, 43.75, 0, "#555555");
            renderBarrel(125, sY - 125 + aN, 62.5, 30, 0, lctr / 100);
            renderBarrel(125, sY - 125 + aN, 62.5, 30, 0, lctr / 100 + Math.PI / 4);
            renderBarrel(125, sY - 125 + aN, 62.5, 30, 0, lctr / 100 - Math.PI / 4);
            diepCircle(125, sY - 125 + aN, 33.75, "#00B2E1");
            ctx.fillStyle = "White";
            ctx.lineWidth = 6;
            ctx.strokeStyle = "rgb(40, 40, 40)";
            ctx.font = "Bold 18px Ubuntu";
            ctx.strokeText("Triple Shot - 25", 125, sY - 64 + aN);
            ctx.fillText("Triple Shot - 25", 125, sY - 64 + aN);
            ctx.strokeText("[1]", 125, sY - 171 + aN);
            ctx.fillText("[1]", 125, sY - 171 + aN);
        }
        if (ctrS[2] > 0) {
            aN = 400 / (ctrS[2] + 1);
            ctx.textAlign = "center";
            tankIcon(50, sY - 200 + aN, "#75C6C3", "#60A2A0");
            //polygon(125, 899 + aN, 6, 43.75, 0, "#555555");
            //renderBarrel(125, 899 + aN, 62.5, 30, 0, lctr / 100);
            //renderBarrel(125, 899 + aN, 62.5, 30, 0, lctr / 100 + Math.PI / 4);
            //renderBarrel(125, 899 + aN, 62.5, 30, 0, lctr / 100 - Math.PI / 4);
            //diepCircle(125, 899 + aN, 33.75, "#00B2E1");
            polygon(125, sY - 125 + aN, 6, 39, 0, "#555555");
            renderBarrel(125, sY - 125 + aN, 50, 26, 0, Math.PI / 4 + lctr / 100);
            renderBarrel(125, sY - 125 + aN, 50, 26, 0, Math.PI / -4 + lctr / 100);
            renderBarrel(125, sY - 125 + aN, 60, 26, 0, Math.PI / 8 + lctr / 100);
            renderBarrel(125, sY - 125 + aN, 60, 26, 0, Math.PI / -8 + lctr / 100);
            renderBarrel(125, sY - 125 + aN, 70, 26, 0, lctr / 100);
            diepCircle(125, sY - 125 + aN, 30, "#00B2E1");
            ctx.fillStyle = "White";
            ctx.lineWidth = 6;
            ctx.strokeStyle = "rgb(40, 40, 40)";
            ctx.font = "Bold 18px Ubuntu";
            ctx.strokeText("Penta Shot - 75", 125, sY - 64 + aN);
            ctx.fillText("Penta Shot - 75", 125, sY - 64 + aN);
            ctx.strokeText("[1]", 125, sY - 171 + aN);
            ctx.fillText("[1]", 125, sY - 171 + aN);
        }
        if (ctrS[4] > 0) {
            aN = 400 / (ctrS[4] + 1);
            ctx.textAlign = "center";
            tankIcon(50, sY - 200 + aN, "#75C6C3", "#60A2A0");
            //polygon(125, sY - 125 + aN, 6, 43.75, 0, "#555555");
            //renderBarrel(125, sY - 125 + aN, 62.5, 30, 0, lctr / 100);
            //renderBarrel(125, sY - 125 + aN, 62.5, 30, 0, lctr / 100 + Math.PI / 4);
            //renderBarrel(125, sY - 125 + aN, 62.5, 30, 0, lctr / 100 - Math.PI / 4);
            //diepCircle(125, sY - 125 + aN, 33.75, "#00B2E1");
            polygon(125, sY - 125 + aN, 6, 35, 0, "#555555");
            renderTrapezoidBarrel(125, sY - 125 + aN, 60, 15, 0, dS[ctr], 27);
            diepCircle(125, sY - 125 + aN, 27, "#00B2E1");
            ctx.fillStyle = "White";
            ctx.lineWidth = 6;
            ctx.strokeStyle = "rgb(40, 40, 40)";
            ctx.font = "Bold 18px Ubuntu";
            ctx.strokeText("Lit AF Bomber - 40", 125, sY - 64 + aN);
            ctx.fillText("Lit AF Bomber - 40", 125, sY - 64 + aN);
            ctx.strokeText("[1]", 125, sY - 171 + aN);
            ctx.fillText("[1]", 125, sY - 171 + aN);
        }
        if (ctrS[3] > 0) {
            recycle(400 / (ctrS[3] + 1));
        }
        ctr7 = 0;
        totalPower = 0;
        while (ctr7 < pWL.length) {
            totalPower = totalPower + pW[pWL[ctr7]];
            ctr7++
        }
        ctx.lineWidth = 6;
        ctx.fillStyle = "White";
        ctx.strokeStyle = "rgb(40, 40, 40)";
        ctx.textAlign = "right";
        ctx.font = "Bold 36px Ubuntu";
        ctx.strokeText("Resources: " + cash, sX - 4, 36);
        ctx.fillText("Resources: " + cash, sX - 4, 36);
        ctx.strokeText("Power: " + Math.round(100 * totalPower) / 100 + " / " + pWL.length * 10, sX - 4, 72);
        ctx.fillText("Power: " + Math.round(100 * totalPower) / 100 + " / " + pWL.length * 10, sX - 4, 72);
        if (ctrS[0] < 40 && sT == 1 && tS[sTV] == 0) {
            ctrS[0]++;
        }
        if (tS[sTV] != 0 && ctrS[0] > 0) {
            ctrS[0]--;
        }
        if (ctrS[0] > 0 && sT == 0 && tS[sTV] == 0) {
            ctrS[0]--;
        }
        if (ctrS[1] < 40 && sT == 1 && tS[sTV] == 2) {
            ctrS[1]++;
        }
        if (tS[sTV] != 2 && ctrS[1] > 0) {
            ctrS[1]--;
        }
        if (ctrS[1] > 0 && sT == 0 && tS[sTV] == 2) {
            ctrS[1]--;
        }
        if (ctrS[2] < 40 && sT == 1 && tS[sTV] == 5) {
            ctrS[2]++;
        }
        if (tS[sTV] != 5 && ctrS[2] > 0) {
            ctrS[2]--;
        }
        if (ctrS[2] > 0 && sT == 0 && tS[sTV] == 5) {
            ctrS[2]--;
        }
        if (ctrS[3] < 40 && sT == 1) {
            ctrS[3]++
        }
        if (ctrS[3] > 0 && sT == 0) {
            ctrS[3]--;
        }
        if (ctrS[4] < 40 && sT == 1 && tS[sTV] == 1) {
            ctrS[4]++;
        }
        if (tS[sTV] != 1 && ctrS[4] > 0) {
            ctrS[4]--;
        }
        if (ctrS[4] > 0 && sT == 0 && tS[sTV] == 1) {
            ctrS[4]--;
        }
        if (pT == 1) {
            polygon(mP.x, mP.y, 6, 27, 0, "#555555");
            renderBarrel(mP.x, mP.y, 43, 21, 0, 0);
            diepCircle(mP.x, mP.y, 22, "#00B2E1");
            healthBar(mP.x, mP.y, 1, 1, 55);
            if (iR == 1) {
                if (FOVStyle == 0) {
                    FOV(mP.x, mP.y, 200, "rgba(0, 60, 110, 0.10)", "rgba(0, 60, 110, 0.45)");
                } else if (FOVStyle == 1) {
                    FOV(mP.x, mP.y, 200, "rgba(0, 60, 110, 0.20)", "rgba(0, 60, 110, 0.45)");
                }
            } else {
                if (FOVStyle == 0) {
                    FOV(mP.x, mP.y, 200, "rgba(116, 0, 0, 0.10)", "rgba(116, 0, 0, 0.45)");
                } else if (FOVStyle == 1) {
                    FOV(mP.x, mP.y, 200, "rgba(116, 0, 0, 0.20)", "rgba(116, 0, 0, 0.45)");
                }
            }
            ctr6 = 0;
            ctx.strokeStyle = "rgba(0, 60, 110, 0.5)";
            ctx.lineWidth = 5;
            while (ctr6 < xS.length) {
                if (Math.sqrt(Math.pow(mP.x + x - (sX / 2) - xS[ctr6], 2) + Math.pow(mP.y + y - (sY / 2) - yS[ctr6], 2)) < 175 && tS[ctr6] == 7) {
                    ctx.beginPath();
                    ctx.moveTo(mP.x, mP.y);
                    ctx.lineTo(xS[ctr6] - x + (sX / 2), yS[ctr6] - y + (sY / 2));
                    ctx.stroke();
                    ctx.closePath();
                }
                ctr6++
            }
        }
        if (pT == 2) {
            diepCircle(mP.x, mP.y, 30, "#555555");
            renderBarrel(mP.x, mP.y, 39, 18, 0, 0);
            diepCircle(mP.x, mP.y, 22, "#999999");
            healthBar(mP.x, mP.y, 1, 1, 55);
            if (iR == 1) {
                if (FOVStyle == 0) {
                    FOV(mP.x, mP.y, 240, "rgba(110, 110, 110, 0.10)", "rgba(110, 110, 110, 0.45)");
                } else if (FOVStyle == 1) {
                    FOV(mP.x, mP.y, 240, "rgba(110, 110, 110, 0.20)", "rgba(110, 110, 110, 0.45)");
                }
            } else {
                if (FOVStyle == 0) {
                    FOV(mP.x, mP.y, 240, "rgba(116, 0, 0, 0.10)", "rgba(116, 0, 0, 0.45)");
                } else if (FOVStyle == 1) {
                    FOV(mP.x, mP.y, 240, "rgba(116, 0, 0, 0.20)", "rgba(116, 0, 0, 0.45)");
                }
            }
            ctr6 = 0;
            ctx.strokeStyle = "rgba(0, 60, 110, 0.5)";
            ctx.lineWidth = 5;
            while (ctr6 < xS.length) {
                if (Math.sqrt(Math.pow(mP.x + x - (sX / 2) - xS[ctr6], 2) + Math.pow(mP.y + y - (sY / 2) - yS[ctr6], 2)) < 175 && tS[ctr6] == 7) {
                    ctx.beginPath();
                    ctx.moveTo(mP.x, mP.y);
                    ctx.lineTo(xS[ctr6] - x + (sX / 2), yS[ctr6] - y + (sY / 2));
                    ctx.stroke();
                    ctx.closePath();
                }
                ctr6++
            }
        }
        if (pT == 3) {
            polygon(mP.x, mP.y, 5, 20, lctr / 30, "#555555");
            diepCircle(mP.x, mP.y, 12, "#999999");
            healthBar(mP.x, mP.y, 1, 1, 30);
            if (iR == 1) {
                if (FOVStyle == 0) {
                    FOV(mP.x, mP.y, 175, "rgba(110, 110, 110, 0.10)", "rgba(110, 110, 110, 0.45)");
                } else if (FOVStyle == 1) {
                    FOV(mP.x, mP.y, 175, "rgba(110, 110, 110, 0.20)", "rgba(110, 110, 110, 0.45)");
                }
            } else {
                if (FOVStyle == 0) {
                    FOV(mP.x, mP.y, 175, "rgba(116, 0, 0, 0.10)", "rgba(116, 0, 0, 0.45)");
                } else if (FOVStyle == 1) {
                    FOV(mP.x, mP.y, 175, "rgba(116, 0, 0, 0.20)", "rgba(116, 0, 0, 0.45)");
                }
            }
            ctr6 = 0;
            ctx.strokeStyle = "rgba(0, 60, 110, 0.5)";
            ctx.lineWidth = 5;
            while (ctr6 < xS.length) {
                if (Math.sqrt(Math.pow(mP.x + x - (sX / 2) - xS[ctr6], 2) + Math.pow(mP.y + y - (sY / 2) - yS[ctr6], 2)) < 175) {
                    ctx.beginPath();
                    ctx.moveTo(mP.x, mP.y);
                    ctx.lineTo(xS[ctr6] - x + (sX / 2), yS[ctr6] - y + (sY / 2));
                    ctx.stroke();
                    ctx.closePath();
                }
                ctr6++
            }
        }
        if (pT == 4) {
            diepCircle(mP.x, mP.y, 40, "#555555");
            renderBarrel(mP.x, mP.y, 50, 25, 0, dS[ctr]);
            diepCircle(mP.x, mP.y, 32, "#00E16E");
            healthBar(mP.x, mP.y, 1, 1, 55);
            if (iR == 1) {
                if (FOVStyle == 0) {
                    FOV(mP.x, mP.y, 240, "rgba(0, 110, 30, 0.10)", "rgba(0, 110, 30, 0.45)");
                    FOV(mP.x, mP.y, 175, "rgba(110, 110, 110, 0.15)", "rgba(110, 110, 110, 0.68)");
                } else if (FOVStyle == 1) {
                    FOV(mP.x, mP.y, 240, "rgba(0, 110, 30, 0.20)", "rgba(0, 110, 30, 0.45)");
                    FOV(mP.x, mP.y, 175, "rgba(110, 110, 110, 0.30)", "rgba(110, 110, 110, 0.45)");
                }
            } else {
                if (FOVStyle == 0) {
                    FOV(mP.x, mP.y, 240, "rgba(116, 0, 0, 0.10)", "rgba(116, 0, 0, 0.45)");
                    FOV(mP.x, mP.y, 175, "rgba(116, 0, 0, 0.10)", "rgba(116, 0, 0, 0.45)");
                } else if (FOVStyle == 1) {
                    FOV(mP.x, mP.y, 240, "rgba(116, 0, 0, 0.20)", "rgba(116, 0, 0, 0.45)");
                    FOV(mP.x, mP.y, 175, "rgba(116, 0, 0, 0.20)", "rgba(116, 0, 0, 0.45)");
                }
            }
            ctr6 = 0;
            ctx.strokeStyle = "rgba(0, 60, 110, 0.5)";
            ctx.lineWidth = 5;
            while (ctr6 < xS.length) {
                if (Math.sqrt(Math.pow(mP.x + x - (sX / 2) - xS[ctr6], 2) + Math.pow(mP.y + y - (sY / 2) - yS[ctr6], 2)) < 175) {
                    ctx.beginPath();
                    ctx.moveTo(mP.x, mP.y);
                    ctx.lineTo(xS[ctr6] - x + (sX / 2), yS[ctr6] - y + (sY / 2));
                    ctx.stroke();
                    ctx.closePath();
                }
                ctr6++
            }
        }
        tankIcon2(sX - 200, sY - 70, "#75C6C3", "#60A2A0");
        tankIcon2(sX - 200, sY - 110, "#A5A5A5", "#808080");
        tankIcon2(sX - 200, sY - 150, "#777777", "#444444");
        tankIcon2(sX - 200, sY - 190, "#8BCA7A", "#72A466");
        ctx.fillStyle = "White";
        ctx.lineWidth = 6;
        ctx.strokeStyle = "rgb(40, 40, 40)";
        ctx.font = "Bold 14px Ubuntu";
        ctx.textAlign = "center";
        ctx.strokeText("Tank - 30 [SPACE]", sX - 125, sY - 49);
        ctx.fillText("Tank - 30 [SPACE]", sX - 125, sY - 49);
        ctx.strokeText("Miner - 20 [M]", sX - 125, sY - 89);
        ctx.fillText("Miner - 20 [M]", sX - 125, sY - 89);
        ctx.strokeText("Connector - 10 [C]", sX - 125, sY - 129);
        ctx.fillText("Connector - 10 [C]", sX - 125, sY - 129);
        ctx.strokeText("Extractor - 50 [E]", sX - 125, sY - 169);
        ctx.fillText("Extractor - 50 [E]", sX - 125, sY - 169);
        pWL = [];
    }
    if (lVA == 0) {
        levelIcon(0, "The First Level", "Very Easy", 0, 0);
        if (levelC[0] == 1) {
            levelIcon(1, "The Enemy Approaches", "Very Easy", 200, -200);
            levelIcon(2, "Mine the Squares", "Easy", -200, -200);
        }
        if (levelC[2] == 1) {
            levelIcon(3, "Crashers!", "Medium-Hard", -200, -400);
        }
    }
    if (ctr8 > 0) {
        ctx.fillStyle = "rgba(255, 255, 255, " + (1 - Math.abs((ctr8 / 200) - 1)) + ")";
        ctx.lineWidth = 6;
        ctx.font = "Bold 72px Ubuntu";
        ctx.strokeStyle = "rgba(40, 40, 40, " + (1 - Math.abs((ctr8 / 200) - 1)) + ")";
        ctx.strokeText("You died!", sX / 2, sY / 2 - 40);
        ctx.fillText("You died!", sX / 2, sY / 2 - 40);
        ctx.font = "Bold 36px Ubuntu";
        ctx.strokeText(deathM, sX / 2, sY / 2);
        ctx.fillText(deathM, sX / 2, sY / 2);
        ctr8++
    }
    if (ctr11 > 0) {
        ctx.fillStyle = "rgba(255, 255, 255, " + (1 - Math.abs((ctr11 / (msgD / 2)) - 1)) * 2 + ")";
        ctx.lineWidth = 6;
        ctx.strokeStyle = "rgba(40, 40, 40, " + (1 - Math.abs((ctr11 / (msgD / 2)) - 1)) * 2 + ")";
        ctx.font = "Bold 18px Ubuntu";
        ctx.strokeText(msg, sX / 2, sY / 2);
        ctx.fillText(msg, sX / 2, sY / 2);
        if (msg2 != undefined) {
            ctx.strokeText(msg2, sX / 2, sY / 2 + 24);
            ctx.fillText(msg2, sX / 2, sY / 2 + 24);
        }
        ctr11++
    }
    if (ctr11 > msgD - 1) {
        ctr11 = 0;
    }
    if (ctr8 > 399) {
        ctr8 = 0;
    }
    //ctx.fillText(xE.toString(), 512, 512);
    setTimeout(loop, 10);
    lctr++;
}
loop();