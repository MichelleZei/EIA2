var L8_fix;
(function (L8_fix) {
    class HoneyBee extends L8_fix.allBees {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.05;
            this.setRandomTarget();
        }
        setRandomTarget() {
            let randomtargetflower = Math.round(Math.random() * (L8_fix.f.length - 1));
            this.targetX = L8_fix.f[randomtargetflower].x;
            this.targetY = L8_fix.f[randomtargetflower].y;
        }
        fly() {
            let dx = this.targetX - this.x;
            let dy = this.targetY - this.y;
            if (Math.abs(dx) < 0.5 && Math.abs(dy) < 1) {
                this.setRandomTarget();
            }
            else {
                this.x += dx * this.speed;
                this.y += dy * this.speed;
            }
            //            if (d >= 2) {
            //                this.setRandomTarget();
            //            }
            //            else {
            //                this.x += dx * this.speed;
            //                this.y += dy * this.speed;
            //            }
        }
        draw() {
            // K�rper
            L8_fix.crc2.beginPath();
            L8_fix.crc2.fillStyle = "#E4BE35";
            L8_fix.crc2.strokeStyle = "black";
            L8_fix.crc2.moveTo(this.x - 10, this.y);
            L8_fix.crc2.bezierCurveTo(this.x + 3.75, this.y - 7, this.x + 11.25, this.y - 7, this.x + 15, this.y);
            L8_fix.crc2.bezierCurveTo(this.x + 11.25, this.y + 7, this.x + 3.75, this.y + 7, this.x - 15, this.y);
            L8_fix.crc2.closePath();
            L8_fix.crc2.fill();
            L8_fix.crc2.stroke();
            // Kopf
            L8_fix.crc2.beginPath();
            L8_fix.crc2.fillStyle = "black";
            L8_fix.crc2.strokeStyle = "black";
            L8_fix.crc2.moveTo(this.x + 15, this.y);
            L8_fix.crc2.arc(this.x + 15, this.y, 5, 0, 2 * Math.PI, true);
            L8_fix.crc2.closePath();
            L8_fix.crc2.fill();
            L8_fix.crc2.stroke();
            //Fl�gel
            L8_fix.crc2.beginPath();
            L8_fix.crc2.fillStyle = "#CEF6F5";
            L8_fix.crc2.strokeStyle = "#CEF6F5";
            L8_fix.crc2.moveTo(this.x + 11, this.y - 3);
            L8_fix.crc2.bezierCurveTo(this.x + this.wingSize, this.y - this.wingSize, this.x + (this.wingSize - 18), this.y - this.wingSize, this.x + 11, this.y - 3); //this.x + 20, this.y - 20, this.x + 2, this.y - 20, this.x + 13, this.y - 3
            L8_fix.crc2.closePath();
            L8_fix.crc2.fill();
            L8_fix.crc2.stroke();
            // Streifen
            L8_fix.crc2.beginPath();
            L8_fix.crc2.strokeStyle = "black";
            L8_fix.crc2.moveTo(this.x - 2, this.y - 4);
            L8_fix.crc2.lineTo(this.x - 2, this.y + 4);
            L8_fix.crc2.closePath();
            L8_fix.crc2.fill();
            L8_fix.crc2.stroke();
            L8_fix.crc2.beginPath();
            L8_fix.crc2.strokeStyle = "black";
            L8_fix.crc2.moveTo(this.x + 1, this.y - 6);
            L8_fix.crc2.lineTo(this.x + 1, this.y + 6);
            L8_fix.crc2.closePath();
            L8_fix.crc2.fill();
            L8_fix.crc2.stroke();
            L8_fix.crc2.beginPath();
            L8_fix.crc2.strokeStyle = "black";
            L8_fix.crc2.moveTo(this.x + 4, this.y - 6.5);
            L8_fix.crc2.lineTo(this.x + 4, this.y + 6.5);
            L8_fix.crc2.closePath();
            L8_fix.crc2.fill();
            L8_fix.crc2.stroke();
        }
    }
    L8_fix.HoneyBee = HoneyBee; // Ende Klasse
})(L8_fix || (L8_fix = {})); // Ende namespace
//# sourceMappingURL=HoneyBees.js.map