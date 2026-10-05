function nimiLugemiseKastist() {
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi").value;

    if (vastus1) {
        vastus1.innerHTML = "Tere, " + nimi + "!";
        vastus1.style.backgroundColor = "lightgreen";
    }

    return nimi;
}

// radio valikud
function radioValik() {
    let kuulamine = document.querySelector('input[name="platvorm"]:checked');
    let vastus2 = document.getElementById("vastus2");

    let value = kuulamine ? kuulamine.nextElementSibling.innerText : "Pole valitud";
    if (vastus2) {
        vastus2.innerHTML = "Sinu valik: " + value;
        vastus2.style.backgroundColor = "lightblue";
    }
    return value;
}

function radioValikPilt2() {
    logo=[
        'https://m.media-amazon.com/images/I/51rttY7a+9L.png',
        'https://www.gannett-cdn.com/media/2016/06/14/USATODAY/USATODAY/636015190457589047-soundcloud-icon.png'

    ]
    let platvorm = document.getElementsByName("platvorm");
    let valitudPilt = document.getElementById("valitudPilt");

    for (let i = 0; i < platvorm.length; i++) {
        if (platvorm[i].checked) {
            valitudPilt.src = logo[i];
            break;
        }
    }
}



// checkbox valik
function checkboxValik() {
    let vastus3 = document.getElementById("vastus3");
    let rollingstones = document.getElementById("rollingstones").checked;
    let Rammstein = document.getElementById("Rammstein").checked;
    let ImagineDragons = document.getElementById("ImagineDragons").checked;
    let ACDC = document.getElementById("ACDC").checked;

    let valikud = "";
    if (rollingstones) valikud += "rollingstones, ";
    if (Rammstein) valikud += "Rammstein, ";
    if (ImagineDragons) valikud += "ImagineDragons, ";
    if (ACDC) valikud += "ACDC, ";

    let tulemus = valikud.length > 0 ? valikud.slice(0, -2) : "Pole valitud";

    if (vastus3) {
        vastus3.innerHTML = "Sinu valik: " + tulemus;
        vastus3.style.backgroundColor = "lightyellow";
    }

    return tulemus;
}

// range valik
function rangeValik() {
    let vastus4 = document.getElementById("vastus4");
    let rangeValue = document.getElementById("tund").value;

    if (vastus4) {
        vastus4.innerHTML = "Sa kuuled muusikat " + rangeValue + " tundi päevas.";
        vastus4.style.backgroundColor = "lightcoral";
    }
    return rangeValue;
}

// select valik
function selectValik() {
    let vastus5 = document.getElementById("vastus5");
    let selectValue = document.getElementById("stiil").value;

    if (vastus5) {
        if (selectValue === "vali") {
            vastus5.innerHTML = "Palun vali muusikastiil.";
            vastus5.style.backgroundColor = "lightblue";
        } else {
            vastus5.innerHTML = "Sinu valik: " + selectValue;
            vastus5.style.backgroundColor = "lightblue";
        }
    }

    return selectValue;
}

// kasutab teisi funktsioone
function naitaKoike() {
    let vastusKoik = document.getElementById("vastusKoik");

    let nimi = nimiLugemiseKastist();
    let radio = radioValik();
    let checkbox = checkboxValik();
    let tund = rangeValik();
    let select = selectValik();

    vastusKoik.innerHTML =
        "Sinu nimi on: " + nimi + "<br>" +
        "Sinu platvorm: " + radio + "<br>" +
        "Sinu lemmikud: " + checkbox + "<br>" +
        "Sa kuuled muusikat " + tund + " tundi päevas.<br>" +
        "Sinu stiil: " + select + "<br>";
}

function puhastaVorm() {
    let vastusKoik = document.getElementById("vastusKoik");
    if (vastusKoik) vastusKoik.innerHTML = "";

    ["vastus1", "vastus2", "vastus3", "vastus4", "vastus5"].forEach(id => {
        let el = document.getElementById(id);
        if (el) el.innerHTML = "";
    });
}