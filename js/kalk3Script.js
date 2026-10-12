function kujundiRadioNupp() {
    let valik = document.getElementsByName("kujundivalik");
    let pindalaSelect = document.getElementById("pindalakujundivalik");
    let ruumalaSelect = document.getElementById("ruumalakujundivalik");
    let kujundiBlokk = document.getElementById("kujundi-blokk");

    kujundiBlokk.style.display = 'block';

for (let i = 0; i < valik.length; i++) {
    if (valik[i].checked) {
        if (valik[i].value === "Pindala") {
            pindalaSelect.style.display = 'block';
            ruumalaSelect.style.display = 'none';
            ruumalaSelect.value = "";
        } else {
            ruumalaSelect.style.display = 'block';
            pindalaSelect.style.display = 'none';
            pindalaSelect.value = "";
        }
    }
}
}


function Kujundivalik() {
    let valik = document.getElementById("pindalakujundivalik").value;
    let ruumalaValik = document.getElementById("ruumalakujundivalik").value;

    // Сбрасываем второй селект, когда выбирают фигуру площади
    if (valik !== "") {
        ruumalaValik.value = "";
    }

    let kolmnurkBlokk = document.getElementById("kolmnurk-andmed");
    let ruutBlokk = document.getElementById("ruut-andmed");
    let ringBlokk = document.getElementById("ring-andmed");
    let roopkylikBlokk = document.getElementById("roopkylik-andmed");

    let prismaBlokk = document.getElementById("prisma-andmed");
    let pyramiidBlokk = document.getElementById("pyramiid-andmed");
    let koonusBlokk = document.getElementById("koonus-andmed");
    let sfaarBlokk = document.getElementById("sfaar-andmed");

    kolmnurkBlokk.style.display = "none";
    ruutBlokk.style.display = "none";
    ringBlokk.style.display = "none";
    roopkylikBlokk.style.display = "none";
    prismaBlokk.style.display = "none";
    pyramiidBlokk.style.display = "none";
    koonusBlokk.style.display = "none";
    sfaarBlokk.style.display = "none";

    if (valik === "kolmnurk") {
        kolmnurkBlokk.style.display = "block";
        kolmnurk();
    } else if (valik === "ruut") {
        ruutBlokk.style.display = "block";
        ruut();
    } else if (valik === "ring") {
        ringBlokk.style.display = "block";
        ring();
    } else if (valik === "roopkylik") {
        roopkylikBlokk.style.display = "block";
        roopkylik();
    }

    if (ruumalaValik === "prisma") {
        prismaBlokk.style.display = "block";
        prisma();
    } else if (ruumalaValik === "pyramiid") {
        pyramiidBlokk.style.display = "block";
        pyramiid();
    } else if (ruumalaValik === "koonus") {
        koonusBlokk.style.display = "block";
        koonus();
    } else if (ruumalaValik === "sfaar") {
        sfaarBlokk.style.display = "block";
        sfaar();
    }
}

function kolmnurk() {
    let a = parseFloat(document.getElementById("kolmnurk-a").value);
    let b = parseFloat(document.getElementById("kolmnurk-b").value);
    let c = parseFloat(document.getElementById("kolmnurk-c").value);

    if (a + b > c && a + c > b && b + c > a) {
        let p = (a + b + c) / 2;
        let pindala = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        tulemus = vastus3.innerHTML = "kolmnurga pindala on: " + (pindala).toFixed(2) + "m2";
        vastus3.style.color = "green";
    } else {
        vastus3.innerHTML = "SEE EI OLE KOLNURK";
        vastus3.style.color = "red";
    }
return tulemus;
}

function ruut() {
    let a = parseFloat(document.getElementById("ruut-a").value);

    if (a > 0) {
        let pindala = a * a;
        tulemus = vastus3.innerHTML = "ruudu pindala on: " + (pindala).toFixed(2) + "m2";
        vastus3.style.color = "green";
    } else {
        vastus3.innerHTML = "SEE EI OLE RUUT";
        vastus3.style.color = "red";
    }
    return tulemus;
}

function ring() {
    let r = parseFloat(document.getElementById("ring-r").value);

    if (r > 0) {
        let pindala = Math.PI * r * r;
        tulemus = vastus3.innerHTML = "ringi pindala on: " + (pindala).toFixed(2) + "m2";
        vastus3.style.color = "green";
    } else {
        vastus3.innerHTML = "SEE EI OLE RING";
        vastus3.style.color = "red";
    }
    return tulemus;
}

function roopkylik() {
    let a = parseFloat(document.getElementById("roopkylik-a").value);
    let h = parseFloat(document.getElementById("roopkylik-h").value);

    if (a > 0 && h > 0) {
        let pindala = a * h;
        tulemus = vastus3.innerHTML = "rõõpküliku pindala on: " + (pindala).toFixed(2) + "m2";
        vastus3.style.color = "green";
    } else {
        vastus3.innerHTML = "SEE EI OLE RÕÕPKÜLIK";
        vastus3.style.color = "red";
    }
    return tulemus;
}

function prisma() {
    let pohis = parseFloat(document.getElementById("prisma-pohis").value);
    let h = parseFloat(document.getElementById("prisma-h").value);
    let vastus3 = document.getElementById("vastus3");

    if (pohis > 0 && h > 0) {
        let ruumala = pohis * h;
        tulemus = vastus3.innerHTML = "prisma ruumala on: " + (ruumala).toFixed(2) + " m3";
        vastus3.style.color = "green";
    } else {
        vastus3.innerHTML = "VIGA ANDMETES";
        vastus3.style.color = "red";
    }
    return tulemus;
}

function pyramiid() {
    let pohis = parseFloat(document.getElementById("pyramiid-pohis").value);
    let h = parseFloat(document.getElementById("pyramiid-h").value);
    let vastus3 = document.getElementById("vastus3");

    if (pohis > 0 && h > 0) {
        let ruumala = (pohis * h) / 3;
        tulemus = vastus3.innerHTML = "püramiidi ruumala on: " + (ruumala).toFixed(2) + " m3";
        vastus3.style.color = "green";
    } else {
        vastus3.innerHTML = "VIGA ANDMETES";
        vastus3.style.color = "red";
    }
    return tulemus;
}

function koonus() {
    let r = parseFloat(document.getElementById("koonus-r").value);
    let h = parseFloat(document.getElementById("koonus-h").value);
    let vastus3 = document.getElementById("vastus3");

    if (r > 0 && h > 0) {
        let ruumala = (Math.PI * r * r * h) / 3;
        tulemus = vastus3.innerHTML = "koonuse ruumala on: " + (ruumala).toFixed(2) + " m3";
        vastus3.style.color = "green";
    } else {
        vastus3.innerHTML = "VIGA ANDMETES";
        vastus3.style.color = "red";
    }
    return tulemus;
}

function sfaar() {
    let r = parseFloat(document.getElementById("sfaar-r").value);
    let vastus3 = document.getElementById("vastus3");

    if (r > 0) {
        let ruumala = (4 / 3) * Math.PI * Math.pow(r, 3);
        tulemus = vastus3.innerHTML = "sfääri ruumala on: " + (ruumala).toFixed(2) + " m3";
        vastus3.style.color = "green";
    } else {
        vastus3.innerHTML = "VIGA ANDMETES";
        vastus3.style.color = "red";
    }
    return tulemus;
}

