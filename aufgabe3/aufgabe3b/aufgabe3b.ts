//Aufgabe: Aufgabe3b - MauMau
//Name: Michelle Zeißner
//Matrikel: 254665
//Datum: 6.4.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

document.addEventListener('DOMContentLoaded', function() {
    var spielkarten: any = ["Karo 7",
        "Karo 8",
        "Karo 9",
        "Karo 10",
        "Karo Bube",
        "Karo Dame",
        "Karo König",
        "Karo Ass",
        "Kreuz 7",
        "Kreuz 8",
        "Kreuz 9",
        "Kreuz 10",
        "Kreuz Bube",
        "Kreuz Dame",
        "Kreuz König",
        "Kreuz As",
        "Herz 7",
        "Herz 8",
        "Herz 9",
        "Herz 10",
        "Herz Bube",
        "Herz Dame",
        "Herz König",
        "Herz As",
        "Pik 7",
        "Pik 8",
        "Pik 9",
        "Pik 10",
        "Pik Bube",
        "Pik Dame",
        "Pik König",
        "Pik As"];

    document.getElementById("nachziehstapel").addEventListener("click", karteZuHand);

    function karteZuHand(): void {
        var handKarten: any = []; // Array für die Karten auf der Hand
        var abgelegteKarten: any = [];// Array für die abgelegten Karten aus der Hand
        if (handKarten < 5 && spielkarten.length > 0) { //Bedingung dass nur bis zu 5 Karten auf der Hand haben kann und die Spielkarten mehr als 0 sein müssen
            var zahl: number = (Math.random() * 32) + 1; //eine Zahl zwischen 0 und 32
            var karte: any = spielkarten[zahl]; //selektierte Spielkarte
            handKarten.push(spielkarten[zahl]);//selektierte Spielkarte wird zu den Handkarten "gepusht"
            spielkarten.splice(zahl, 1);//im Array der Spielkarten wird die selektierte Spielkarte entfernt
            var div = document.createElement("div");//ein Div Element wird kreiert
            document.getElementById("hand").appendChild(div);//das Element div hand kriegt ein Kind (div)
            div.className = "handkarten";//bekommen einen Class Name, um sie in css zu verändern
            div.textContent = handKarten[handKarten.length - 1];//zählt ab 32 runter auf dem nachziehstapel;
            div.addEventListener("click", function() {
                for (var i: number = 0; i < handKarten.length; i++) {//solange i kleiner als 5 (handKarten länge)
                    if (this.textContent == handKarten[i]) {
                        abgelegteKarten.push(handKarten[i]);//angeklickte Handkarte kommt zum Ablagestapel
                        handKarten.splice(i, 1);// angeklickte Handkarte wird aus dem Array handKarten genommen
                        break;
                    }
                    else { };
                }
                this.parentNode.removeChild(this);// Kind wird entfernt
            });
            document.getElementById("nachziehstapel").textContent = "Karten: " + spielkarten.length.toString();         
        }
        else { };
    }
});
