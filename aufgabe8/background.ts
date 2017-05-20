//Aufgabe: Aufgabe8 - Inheritance
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 19.5.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L8_Inheritance {
    export class Background {
        x: number;
        y: number;
        fillColor: string;
        strokeColor: string;

        constructor(_x: number, _y: number, _fillColor: string) {
            this.x = _x;
            this.y = _y;
            this.fillColor = _fillColor;
        }
        
        drawBackground(): void {
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.fillRect(this.x, this.y, 300, 170);
            crc2.moveTo(0, 0);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
        }
        
        drawSun(): void {
            crc2.beginPath();
            crc2.fillStyle = "#ffff00";
            crc2.arc(250, 30, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
        
        drawWiese(): void {
            crc2.beginPath();
            crc2.fillStyle = "#228B22";
            crc2.fillRect(0, 170, 300, 300);
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 170);
            crc2.closePath();
            crc2.stroke();
        }
        
        drawMountain1(): void { 
            crc2.beginPath();
            crc2.fillStyle = "#888888";
            crc2.strokeStyle = "#888888";
            crc2.moveTo(80, 170);
            crc2.lineTo(80 + 50, 170 - 80);
            crc2.lineTo(80 + 100, 170);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        
        drawMountain2(): void {
            crc2.beginPath();
            crc2.fillStyle = "#888888";
            crc2.strokeStyle = "#888888";
            crc2.moveTo(0, 170);
            crc2.lineTo(0 + 60, 170 - 130);
            crc2.lineTo(0 + 120, 170);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        drawIce1(): void {
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#FFFFFF";
            crc2.moveTo(116, 112);
            crc2.lineTo(116 + 14, 112 - 22);
            crc2.lineTo(116 + 28, 112);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        drawIce2(): void {
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#FFFFFF";
            crc2.moveTo(36, 92);
            crc2.lineTo(36 + 24, 92 - 52);
            crc2.lineTo(36 + 48, 92);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        
        drawBienenkorb(): void {
            //oberer Teil
            crc2.beginPath();
            crc2.fillStyle = "#E8AE00";
            crc2.arc(20, 190, 25, 0, Math.PI, true);
            crc2.closePath();
            crc2.fill();

            //unterer Teil
            crc2.beginPath();
            crc2.fillStyle = "#E8AE00";
            crc2.fillRect(20 - 25, 190, 50, 30);
            crc2.closePath();
            crc2.fill();

            //Bienenkorb ÷ffnung
            crc2.beginPath();
            crc2.strokeStyle = "#201500";
            crc2.fillStyle = "#201500";
            crc2.arc(25, 210, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}