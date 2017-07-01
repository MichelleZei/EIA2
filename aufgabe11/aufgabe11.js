//Aufgabe: Aufgabe11 - Database
//Name: Michelle Zei�ner
//Matrikel: 254665
//Datum: 22.6.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        //        searchButton.addEventListener("click", search);
    }
    //    function search(_event: Event): void {
    //        let inputName: HTMLInputElement = <HTMLInputElement>document.getElementById("searchname");
    //        let inputVorname: HTMLInputElement = <HTMLInputElement>document.getElementById("searchvorname");
    //        let inputMatrikel: HTMLInputElement = <HTMLInputElement>document.getElementById("searchmatrikel");
    //        let query: string = "command=insert";
    //        for ( var i: number = 0; i < 10; i++) {
    //            if (inputMatrikel.value == query[i]) {
    //                alert("Name : " + query[i]);
    //            }
    //        }
    //        console.log("Hello");
    //    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        //        xhr.open("GET", "http://localhost:8100?" + _query, true);
        xhr.open("GET", "https://senddata11.herokuapp.com" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=aufgabe11.js.map