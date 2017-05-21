var L8_fix;
(function (L8_fix) {
    class allBees {
        constructor(_x, _y) {
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.fly();
            this.draw();
        }
        draw() {
            // nix
        }
        //Info in fly rausgenommen
        fly() {
            //nix
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.wingSize = (Math.random() * (40 - 10) + 10);
        }
    }
    L8_fix.allBees = allBees;
})(L8_fix || (L8_fix = {}));
//# sourceMappingURL=allBees.js.map