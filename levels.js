var lvls = [
    {
        length: 8000,
        patterns: [
            {
                start: 0,
                end: 1500,
                func: function() {
                    if (li % 25 == 0) {
                        o.push(new bullet(960 + 2000 * Math.cos(li / 75), 540 + 2000 * Math.sin(li / 75), li / 75 + tau * 0.5 + Math.sin(li / 100) * 0.3, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 400, "e", 12, 25, 5));
                        o.push(new bullet(960 + 2000 * Math.cos(li / 75 + tau / 2), 540 + 2000 * Math.sin(li / 75 + tau / 2), li / 75 + Math.sin(li / 100) * 0.3, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 400, "e", 12, 25, 5));
                    }
                    if (li % 299 == 0) {
                        o.push(new tank(0, 0, 100, function() { 
                            dBarrel(this.x, this.y, 20, 44, 0, 0, this.dir, diepGrey);
                            dCircle(this.x, this.y, 24, diepBlue);
                            hBar(this);
                        }, 3, function() {
                            this.timer++;
                            simpleMoveBehavior1(this, 0.15, 0.98);
                            if (this.timer % 50 == 0) {
                                o.push(new bullet(this.x, this.y, this.dir, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 100, "e", 12, 25, 5));
                            }
                        }, 24, "e"));
                    } 
                }
            },
            {
                start: 1400,
                end: 4000,
                func: function() {
                    if (li % 6 == 0) {
                        o.push(new bullet(960 + 2000 * Math.cos(li / 50), 540 + 2000 * Math.sin(li / 50), li / 50 + tau / 2, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 400, "e", 12, 25, 5));
                    }
                    if (li % 699 == 0) {
                        for (var ii = 0; 3 > ii; ii++) {
                            o.push(new tank(960 + Math.cos(tau / 3 * ii) * 2000, 540 + Math.sin(tau / 3 * ii) * 2000, 100, function() { 
                                dBarrel(this.x, this.y, 18, 44, 12, 0, this.dir, diepGrey);
                                dBarrel(this.x, this.y, 18, 44, -12, 0, this.dir, diepGrey);
                                dCircle(this.x, this.y, 24, diepBlue);
                                hBar(this);
                            }, 3, function() {
                                this.timer++;
                                simpleMoveBehavior1(this, 0.15, 0.98);
                                if (this.timer % 50 == 0) {
                                    o.push(new bullet(this.x + offset(this, 12, 22).x, this.y + offset(this, 12, 22).y, this.dir, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 100, "e", 12, 25, 5));
                                }
                                if (this.timer % 50 == 25) {
                                    o.push(new bullet(this.x + offset(this, -12, 22).x, this.y + offset(this, -12, 22).y, this.dir, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 100, "e", 12, 25, 5));
                                }
                            }, 24, "e"));
                        }
                    } 
                }
            },
            {
                start: 3700,
                end: 6000,
                func: function() {
                    if (li % 200 == 0) {
                        o.push(new bullet(960 + 2000 * Math.cos(li / 50), 540 + 2000 * Math.sin(li / 50), li / 50 + tau / 2, 6, function() { 
                            dCircle(this.x, this.y, 30, diepBlue); 
                            if (this.hp == 1) {
                                o.push(new tank(this.x, this.y, 1000, function() { 
                                    ctx.beginPath();
                                    ctx.fillStyle = "#555555";
                                    polygon(this.x, this.y, 6, 34, 0);
                                    ctx.fill();
                                    ctx.closePath();
                                    dBarrel(this.x, this.y, 18, 44, 0, 0, this.dir - tau / 8, diepGrey);
                                    dBarrel(this.x, this.y, 18, 44, 0, 0, this.dir, diepGrey);
                                    dBarrel(this.x, this.y, 18, 44, 0, 0, this.dir + tau / 8, diepGrey);
                                    dCircle(this.x, this.y, 24, diepBlue);
                                    hBar(this);
                                }, 3, function() {
                                    this.dir = Math.atan2(p.y - this.y, p.x - this.x);
                                    this.timer++;
                                    this.hp--;
                                    if (this.timer % 75 == 0) {
                                        o.push(new bullet(this.x + offset(this, 0, 22, -tau / 8).x, this.y + offset(this, 0, 22, -tau / 8).y, this.dir - tau / 8, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 100, "e", 12, 25, 5));
                                        o.push(new bullet(this.x + offset(this, 0, 22).x, this.y + offset(this, 0, 22).y, this.dir, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 100, "e", 12, 25, 5));
                                        o.push(new bullet(this.x + offset(this, 0, 22, tau / 8).x, this.y + offset(this, 0, 22, tau / 8).y, this.dir + tau / 8, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 100, "e", 12, 25, 5));
                                    }
                                }, 24, "e"));
                            }
                        }, 400, "e", 12, 250, 5));
                    }
                }
            },
            {
                start: 6001,
                end: 99999999,
                func: function() {
                    if (li == 6002) {
                        o.push(new tank(960, -150, 1000, function() { 
                            dBarrel(this.x, this.y, 42, 100, 0, 0, this.dir - tau / 8, diepGrey);
                            dBarrel(this.x, this.y, 42, 100, 0, 0, this.dir + tau / 8, diepGrey);
                            dBarrel(this.x, this.y, 42, 110, 0, 0, this.dir - tau / 16, diepGrey);
                            dBarrel(this.x, this.y, 42, 110, 0, 0, this.dir + tau / 16, diepGrey);
                            dBarrel(this.x, this.y, 42, 120, 0, 0, this.dir, diepGrey);
                            dCircle(this.x, this.y, 48, diepBlue);
                            hBar(this);
                            ctx3.textAlign = "center";
                            dText("[BP]BE1A", this.x, this.y - 63, 24);
                        }, 3, function() {
                            this.dir = Math.atan2(p.y - this.y, p.x - this.x);
                            this.timer++;
                            if (li < 6690) {
                                this.y++;
                                this.hp = 1000;
                                this.mhp = 1000;
                            } else {
                                b = { x: this.x, y: this.y, hp: this.hp };

                                if (dist(this.x, this.y, p.x, p.y) > 400) {
                                    simpleMoveBehavior1(this, 0.25, 0.98);
                                    this.dir += tau / 2;
                                } else {
                                    simpleMoveBehavior1(this, 0.03, 0.98);
                                }
                                
                                if (this.timer % 36 == 0) {
                                    o.push(new bullet(this.x + offset(this, 0, 96).x, this.y + offset(this, 0, 96).y, this.dir, 8, function() { dCircle(this.x, this.y, 22, diepBlue); }, 75, "e", 24, 50, 5));
                                }
                                if (this.timer % 36 == 12) {
                                    o.push(new bullet(this.x + offset(this, 0, 96, tau / 16).x, this.y + offset(this, 0, 96, tau / 16).y, this.dir + tau / 16, 8, function() { dCircle(this.x, this.y, 22, diepBlue); }, 75, "e", 24, 50, 5));
                                    o.push(new bullet(this.x + offset(this, 0, 96, -tau / 16).x, this.y + offset(this, 0, 96, -tau / 16).y, this.dir - tau / 16, 8, function() { dCircle(this.x, this.y, 22, diepBlue); }, 75, "e", 24, 50, 5));
                                }
                                if (this.timer % 36 == 24) {
                                    o.push(new bullet(this.x + offset(this, 0, 96, tau / 8).x, this.y + offset(this, 0, 96, tau / 8).y, this.dir + tau / 8, 8, function() { dCircle(this.x, this.y, 22, diepBlue); }, 75, "e", 24, 50, 5));
                                    o.push(new bullet(this.x + offset(this, 0, 96, -tau / 8).x, this.y + offset(this, 0, 96, -tau / 8).y, this.dir - tau / 8, 8, function() { dCircle(this.x, this.y, 22, diepBlue); }, 75, "e", 24, 50, 5));
                                }
                            }
                        }, 48, "e"));
                    }
                }
            },
            {
                start: 6050,
                end: 6300,
                func: function() {
                    ctx3.textAlign = "center";
                    dText("BUFF PENTA BUFF PENTA BUFF PENTA", 960, 540, 36);
                }
            },
            {
                start: 6301,
                end: 6550,
                func: function() {
                    ctx3.textAlign = "center";
                    dText("WAT???? YOU NO WANT PENTA BUFF?", 960, 540, 36);
                }
            },
            {
                start: 6551,
                end: 6690,
                func: function() {
                    ctx3.textAlign = "center";
                    dText("DIE!!!", 960, 540, 36);
                }
            },
            {
                start: 6700,
                end: 99999999,
                func: function() {
                    if (li % 150 == 0 && b.hp < 666) {
                        o.push(new tank(p.x + (p.x - b.x) / dist(p.x, p.y, b.x, b.y) * 2400, p.y + (p.y - b.y) / dist(p.x, p.y, b.x, b.y) * 2400, 100, function() { 
                            dBarrel(this.x, this.y, 20, 44, 0, 0, this.dir, diepGrey);
                            dBarrel(this.x, this.y, 20, 39, 0, -5, this.dir + 3 * tau / 8, diepGrey);
                            dBarrel(this.x, this.y, 20, 39, 0, -5, this.dir - 3 * tau / 8, diepGrey);
                            dBarrel(this.x, this.y, 20, 39, 0, 0, this.dir + 5 * tau / 12, diepGrey);
                            dBarrel(this.x, this.y, 20, 39, 0, 0, this.dir - 5 * tau / 12, diepGrey);
                            dCircle(this.x, this.y, 24, diepBlue);
                            hBar(this);
                            dText("[BP]BE1A BOT", this.x, this.y - 30, 18);
                        }, 3, function() {
                            this.timer++;
                            this.hp -= 0.2;
                            simpleMoveBehavior1(this, 0.15, 0.992);
                            if (this.timer % 40 == 0) {
                                o.push(new bullet(this.x, this.y, this.dir, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 100, "e", 12, 25, 5));
                            }
                            if (this.timer % 16 == 0) {
                                o.push(new bullet(this.x, this.y, this.dir + 5 * tau / 12, 15, function() { dCircle(this.x, this.y, 10, diepBlue); }, 15, "e", 12, 5, 5));
                                o.push(new bullet(this.x, this.y, this.dir - 5 * tau / 12, 15, function() { dCircle(this.x, this.y, 10, diepBlue); }, 15, "e", 12, 5, 5));
                            }
                            if (this.timer % 16 == 8) {
                                o.push(new bullet(this.x, this.y, this.dir + 3 * tau / 8, 15, function() { dCircle(this.x, this.y, 10, diepBlue); }, 15, "e", 12, 5, 5));
                                o.push(new bullet(this.x, this.y, this.dir - 3 * tau / 8, 15, function() { dCircle(this.x, this.y, 10, diepBlue); }, 15, "e", 12, 5, 5));
                            }
                            if (this.timer == 1) {
                                simpleMoveBehavior1(this, 16, 1);
                            }
                        }, 24, "e"));
                    }
                    if (b.hp < 333) {
                        if (li % 12 == 0) {
                            o.push(new bullet(960 + 2000 * Math.cos(li / 75), 540 + 2000 * Math.sin(li / 75), li / 75 + tau * 0.5 + Math.sin(li / 100) * 0.3, 12, function() { dCircle(this.x, this.y, 10, diepBlue); }, 400, "e", 12, 25, 5));
                        }
                    }
                    if (b.hp <= 0) {
                        li = 0;
                        lvi++;
                    }
                }
            }
        ]
    }
]