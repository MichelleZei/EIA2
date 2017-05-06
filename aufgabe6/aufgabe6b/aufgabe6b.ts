namespace StudiVZ {
    interface StudentData {
        // Datenstruktur 
        Matrikelnummer: number;
        Name: string;
        Vorname: string;
        Alter: number;
        Geschlecht: boolean;
        Kommentar: string;
    }
    
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let array: string[] = _input.split(",");
        let s: StudentData = {
        Matrikelnummer: parseInt(array[0]),
        Name: array[1],
        Vorname: array[2],
        Alter: parseInt(array[3]),
        Geschlecht: parseInt(array[4]) == 1,
        Kommentar: array[5]
        };
        students.push(s);
        let geschlecht: string;
        if (parseInt(array[4]) == 1) {
            geschlecht = "weiblich";
        }
        else {
            geschlecht = "maennlich";
        }
        console.log(array);
        //if (s.Matrikelnummer && s.Alter && s.Geschlecht == ) {
//             return "Deine Anmeldung ist fehlgeschlagen";       
//        }
//        else {
        return "Deine Daten wurden erfolgreich verarbeitet: \n Matrikelnummer:" + s.Matrikelnummer + "\n Name:" + s.Name + "\n Vorname:" + s.Vorname + "\n Alter:" + s.Alter + "\n Geschlecht:" + geschlecht + "\n Kommentar:" + s.Kommentar;
//        }
    }
    
    function queryData(_matrikel: number): string {
        let i: number = 0;
        for ( i = 0; i < students.length; i++) {
            if (_matrikel == students[i].Matrikelnummer) {
                let geschlecht: string = students[i].Geschlecht ? "weiblich" : "maennlich";
                return "Matrikelnummer:" + students[i].Matrikelnummer + "\n Name:" + students[i].Name + "\n Vorname:" + students[i].Vorname + "\n Alter:" + students[i].Alter + "\n Geschlecht:" + geschlecht + "\n Kommentar:" + students[i].Kommentar;             
            }
        }
    }
}