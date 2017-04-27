//Aufgabe: Aufgabe3b - MauMau
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 6.4.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    let spielkarten = ["Karo 7",
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
    let handKarten = []; // der Array f�r die Handkarten bleibt vorerst leer
    function karteZurHand() {
        if (handKarten.length < 5 && spielkarten.length > 0) {
            let zahl = Math.floor((Math.random() * spielkarten.length)); // es wird eine Zahl zwischen 0 und 31 per Zufall ausgew�hlt             
            let aktuelleKarte = spielkarten[zahl];
            handKarten.push(aktuelleKarte); // die aktuelleKarte wird in den Array "handKarten" abgelegt
            spielkarten.splice(zahl, 1); // die aktuelleKarte wird im Array "Spielkarten" entfernt 
            var div = document.createElement("div"); // ein Div Element wird kreiert, um darin zu zeigen, was die aktuelleKarte ist 
            document.getElementById("hand").appendChild(div); // das Element div mit der ID "hand" kriegt ein Kind (div)           
            div.style.border = "5px solid black"; // Style
            div.style.width = "7em"; // Style
            div.style.height = "10em"; // Style
            div.style.fontSize = "1.5em"; // Style
            div.className = "handkarten"; // das neuentstandene Div wird der Klasse "handkarten" zugewiesen
            div.textContent = aktuelleKarte; //spielkarten[zahl];
            document.getElementById("nachziehstapel").textContent = "Nachziehkarten" + "\r\n" + "verbleibend: " + spielkarten.length.toString(); // Kommentar im Nachziehstapel, wie viele Karten es noch gibt
            div.addEventListener("click", karteZumAblagestapel.bind(handKarten)); // Klick Event f�r die jeweilige Handkarten
        }
        function karteZumAblagestapel(_handKarten) {
            let ablagestapel = []; // der Array f�r die abgelegten Karten bleibt vorerst leer
            for (let i = 0; i < handKarten.length; i++) {
                ablagestapel.push(handKarten[i]); // f�gt die Karte dem Ablagestapel Array hinzu
                handKarten.splice(i, 1); // entfernte die geklickte Karte aus dem Array
                break;
            }
            this.parentNode.removeChild(this); // Entfernt das Div
            document.getElementById("ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Oberste Karte:" + "\r\n" + div.textContent.toString(); // Kommentar im Ablagestapel, welche Karte als letztes abgelegt wurde
        }
    }
});
//# sourceMappingURL=aufgabe3b.js.map