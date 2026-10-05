// juhuslik pilt - mida võetakse massiivist
function juhuslikPilt() {
    piltid=[
        '../images/smile.png',
        '../images/neutral.png',
        '../images/kurb.png',
        '../images/lill.png',
    ]
    const randomPilt = document.getElementById('randomPilt');

    const pilt = piltid[Math.floor(Math.random()*piltid.length)];
    // math-floor - ümardab täisarvuni
    randomPilt.src = pilt;
}

function selectValik() {
    let vastus = document.getElementById('vastus');
    let valik = document.getElementById('valik');
    let randomPilt = document.getElementById('randomPilt');

    if (randomPilt.getAttribute('src') === valik.value) {
        vastus.innerHTML = "ÕIGE!";
        vastus.style.color = "green";
        vastus.style.borderColor = "green";
    } else {
        vastus.innerHTML = "VALE";
        vastus.style.color = "red";
        vastus.style.borderColor = "red";

    }
}

function radioValikPilt() {
    let piltValik = document.getElementsByName("piltvalik");
    let valitudPilt = document.getElementById("valitudPilt");

    for (let i = 0; i < piltValik.length; i++) {
        if (piltValik[i].checked) {
            valitudPilt.src = piltValik[i].value;
            break;
        }
    }

}