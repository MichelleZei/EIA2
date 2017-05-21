var L8_fix;
(function (L8_fix) {
    class Tulip extends L8_fix.Flowers {
        constructor() {
            super();
            super.setRandomPosition();
        }
        // Tulpe
        draw() {
            L8_fix.crc2.beginPath();
            L8_fix.crc2.fillStyle = this.color; // Attribut von Flower
            L8_fix.crc2.strokeStyle = L8_fix.crc2.fillStyle;
            L8_fix.crc2.moveTo(this.x, this.y);
            L8_fix.crc2.bezierCurveTo(this.x + 5, this.y + 25, this.x + 15, this.y + 25, this.x + 20, this.y);
            L8_fix.crc2.lineTo(this.x + 15, this.y + 5);
            L8_fix.crc2.lineTo(this.x + 10, this.y);
            L8_fix.crc2.lineTo(this.x + 5, this.y + 5);
            L8_fix.crc2.closePath();
            L8_fix.crc2.fill();
            L8_fix.crc2.stroke();
        }
    }
    L8_fix.Tulip = Tulip;
})(L8_fix || (L8_fix = {}));
//# sourceMappingURL=Tulip.js.map