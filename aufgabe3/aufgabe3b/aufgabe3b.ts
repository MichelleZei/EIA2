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
        "Karo Koenig",
        "Karo Ass",
        "Kreuz 7",
        "Kreuz 8",
        "Kreuz 9",
        "Kreuz 10",
        "Kreuz Bube",
        "Kreuz Dame",
        "Kreuz Koenig",
        "Kreuz As",
        "Herz 7",
        "Herz 8",
        "Herz 9",
        "Herz 10",
        "Herz Bube",
        "Herz Dame",
        "Herz Koenig",
        "Herz As",
        "Pik 7",
        "Pik 8",
        "Pik 9",
        "Pik 10",
        "Pik Bube",
        "Pik Dame",
        "Pik Koenig",
        "Pik As"];

    document.getElementById("nachziehstapel").addEventListener("click", karteZurHand);
    var handKarten: any = []; // der Array für die Handkarten bleibt vorerst leer

    function karteZurHand(): void {
        if ( handKarten.length < 5 && spielkarten.length > 0) { // es dürfen maximal 5 Karten auf der Hand sein und es muss noch mindestens eine Spielkarte im Array "spielkarten" vorhanden sein.
            var zahl: number = Math.floor((Math.random() * 31) + 0); // es wird eine Zahl zwischen 0 und 31 per Zufall ausgewählt 
            var aktuelleKarte: any = spielkarten[zahl];                               
            handKarten.push(aktuelleKarte); // die aktuelleKarte wird in den Array "handKarten" abgelegt
            spielkarten.splice(zahl, 1); // die aktuelleKarte wird im Array "Spielkarten" entfernt
            var div: HTMLDivElement = document.createElement("div"); // ein Div Element wird kreiert, um darin zu zeigen, was die aktuelleKarte ist 
            document.getElementById("hand").appendChild(div); // das Element div mit der ID "hand" kriegt ein Kind (div)
            div.style.border = "5px solid black";
            div.style.width = "7em";
            div.style.height = "10em";
            div.style.fontSize = "1.5em";       
            div.className = "handkarten"; // das neuentstandene Div wird der Klasse "handkarten" zugewiesen
            div.textContent = spielkarten[zahl];
            document.getElementById("nachziehstapel").textContent = "Nachziehkarten" + "\r\n" + "verbleibend: " + spielkarten.length.toString();
            div.addEventListener("click", karteZumAblagestapel);
        }
   
        function karteZumAblagestapel(_handKarten: any): void {
            var ablagestapel: any = []; // der Array für die abgelegten Karten bleibt vorerst leer
            for (var i: number = 0; i < handKarten.length; i++) { // nummeriert die Handkarten durch
                    ablagestapel.push(handKarten[i]); // fügt die Karte dem Ablagestapel Array hinzu
                    handKarten.splice(i, 1); // entfernte die geklickte Karte aus dem Array
                    break;
            }
            this.parentNode.removeChild(this); // Entfernt das Div
            document.getElementById("ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Oberste Karte:" + "\r\n" + div.textContent.toString();
        }
    }
});
