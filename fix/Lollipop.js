var L8_fix;
(function (L8_fix) {
    class Lollipop extends L8_fix.Flowers {
        constructor(_radius) {
            super();
            super.setRandomPosition();
            this.radius = _radius;
        }
        // BLume 2 
        draw() {
            L8_fix.crc2.beginPath();
            L8_fix.crc2.fillStyle = this.color; // "#F2F5A9"
            L8_fix.crc2.strokeStyle = L8_fix.crc2.fillStyle;
            L8_fix.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true); //(400, 480, 10, 0, 2 * Math.PI, true)
            L8_fix.crc2.moveTo(this.x, this.y + 10);
            L8_fix.crc2.lineTo(this.x, this.y + 20);
            L8_fix.crc2.closePath();
            L8_fix.crc2.fill();
            L8_fix.crc2.stroke();
        }
    }
    L8_fix.Lollipop = Lollipop;
})(L8_fix || (L8_fix = {}));
//# sourceMappingURL=Lollipop.js.map