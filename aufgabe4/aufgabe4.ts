//Aufgabe: Aufgabe4 - Blumenlandschaft
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 14.4.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
namespace L4_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawBackground(0, 0, "#98F5FF");
        drawSun(250, 30, "#ffff00");
        drawWiese(0, 170, "#228B22");
        drawMountain1(80, 170, "#888888", "#888888");
        drawMountain2(0, 170, "#888888", "#888888");
        drawIce1(116, 112, "#FFFFFF", "#FFFFFF");
        drawIce2(36, 92, "#FFFFFF", "#FFFFFF");
        drawFlower1(90, 250, "#005B14");
        drawFlower2(100, 280, "#005B14");
        drawFlower3(70, 270, "#005B14");

        for (var i: number = 0; i < 30; i++) {
            var zufallszahlBlumen: number = ((Math.random() * 4) + 0);
            var b: number = Math.floor(zufallszahlBlumen);
            var x: number = (Math.random() * (canvas.width - 110) + 110);
            var y: number = (Math.random() * (canvas.height - 170) + 150);
            switch (b) {
                case 0:
                drawFlower1(x, y, "#005B14");
                    break;

                case 1:
                drawFlower2(x, y, "#005B14");
                    break;

                case 2:
                drawFlower3(x, y, "#005B14");
                    break;
                    
                default:
                    break;
            }
        }

//        drawLine();
    }
    
    function drawBackground(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(_x, _y, 300, 170);
        crc2.moveTo(0, 0);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
    }
    function drawSun(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawWiese(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(_x, _y, 300, 300);
        crc2.moveTo(0, 0);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
    }
    function drawFlower1(_x: number, _y: number, _fillColor: string): void {
        // St‰ngel
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x, _y + 22);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        // Bl¸te
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.fillStyle = "white";
        crc2.moveTo(_x + 1, _y + 5);
        crc2.lineTo(_x + 15, _y + 17);
        crc2.lineTo(_x + 5, _y + 2);
        crc2.lineTo(_x + 23, _y - 1);
        crc2.lineTo(_x + 5, _y - 3);
        crc2.lineTo(_x + 18, _y - 18);
        crc2.lineTo(_x + 2, _y - 5);
        crc2.lineTo(_x + 1, _y - 23);
        crc2.lineTo(_x - 1, _y - 5);
        crc2.lineTo(_x - 17, _y - 18);
        crc2.lineTo(_x - 4, _y - 3);
        crc2.lineTo(_x - 22, _y - 1);
        crc2.lineTo(_x - 4, _y + 2);
        crc2.lineTo(_x - 14, _y + 17);
        crc2.lineTo(_x - 1, _y + 5);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        // Kreis in der Mitte
        crc2.beginPath();
        crc2.fillStyle = "#FF8C00";
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawFlower2(_x: number, _y: number, _fillColor: string): void {
        // St‰ngel
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x, _y + 40);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x + 1, _y + 40);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();        
        // Bl¸te
        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        // Kreis in der Mitte
        crc2.beginPath();
        crc2.fillStyle = "#7C0000";
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawFlower3(_x: number, _y: number, _fillColor: string): void {
        // St‰ngel
        crc2.beginPath();
        crc2.strokeStyle = _fillColor;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x, _y + 22);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        // Bl¸te
        crc2.beginPath();
        crc2.strokeStyle = "#7C0071";
        crc2.fillStyle = "#7C0071";
        crc2.arc(_x, _y - 3, 8, 0 * Math.PI, 1 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x - 8, _y - 2);
        crc2.lineTo(_x - 8, _y - 10);
        crc2.lineTo(_x - 3, _y - 2);
        crc2.lineTo(_x , _y - 10);
        crc2.lineTo(_x + 3, _y - 2);
        crc2.lineTo(_x + 8, _y - 10);
        crc2.lineTo(_x + 8, _y - 2);
        crc2.stroke();
        crc2.fill();
    }
    function drawMountain1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 50, _y - 80);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
     function drawIce1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 14, _y - 22);
        crc2.lineTo(_x + 28, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawMountain2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 60, _y - 130);
        crc2.lineTo(_x + 120, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawIce2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 24, _y - 52);
        crc2.lineTo(_x + 48, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

}