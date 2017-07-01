//Aufgabe: Uebung - Ufos fliegen lassen
//Name: Michelle Zeiﬂner
//Matrikel: 254665
//Datum: 30.6.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace uebung {
    export class GrueneUfos extends Ufos {
        x: number;
        y: number;
        color: string;
        colorbody: string;
        
        constructor() {
            super();
        }
        
        draw(): void {
        //Kˆrper
        crc2.beginPath();
        crc2.fillStyle = "#74DF00";
        crc2.arc(this.x, this.y, 60, 0, Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Glasgeh‰use 
        crc2.beginPath();
        crc2.strokeStyle = "#81F7F3";
        crc2.fillStyle = "#81F7F3";
        crc2.arc(this.x, this.y, 35, 1 * Math.PI, 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Fuﬂ rechts
        crc2.beginPath();
        crc2.strokeStyle = "#74DF00";
        crc2.fillStyle = "#74DF00";
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x + 50, this.y + 70);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //Fuﬂ links
        crc2.beginPath();
        crc2.strokeStyle = this.color;
        crc2.fillStyle = this.color;
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x - 50, this.y + 70);
        crc2.closePath();
        crc2.stroke();
        crc2.fill(); 
        }
    }
}