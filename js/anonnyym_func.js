// 1. Nimi
function minuNimi() {
    return "Minu nimi on Yaroslav";
}

const minuNimi2 = () => "Minu nimi on Yaroslav2";

function kuvaNimi1() {
    let vastus1 = document.getElementById("vastus1");
    vastus1.innerHTML = minuNimi();
}

function kuvaNimi2() {
    let vastus1 = document.getElementById("vastus1");
    vastus1.innerHTML = minuNimi2();
}


// 2. Kuupäev
const kuupaevEesti = (kuupaev) => {
    const kuud = [
        "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"
    ];
    const osad = kuupaev.split(".");
    return `${Number(osad[0])}. ${kuud[Number(osad[1]) - 1]}`;
};

function kuvaKuupaev() {
    let vastus2 = document.getElementById("vastus2");
    let sisend = document.getElementById("kuupaev").value;
    vastus2.innerHTML = kuupaevEesti(sisend);
}


// 3. Teadmata hulk
const arvudeStatistika = (tekst) => {
    const arvud = [];

    tekst.split(",").forEach(osa => {
        const arv = parseInt(osa);
        if (!isNaN(arv)) {
            arvud.push(arv);
        }
    });

    if (arvud.length === 0) {
        return { kogus: 0, keskmine: 0 };
    }

    let summa = 0;
    arvud.forEach(arv => summa += arv);

    return {
        kogus: arvud.length,
        keskmine: summa / arvud.length
    };
};

function kuvaArvud() {
    let vastus3 = document.getElementById("vastus3");
    let sisend = document.getElementById("arvud").value;
    let tulemus = arvudeStatistika(sisend);
    vastus3.innerHTML = "Arve kokku: " + tulemus.kogus + ", keskmine: " + tulemus.keskmine;
}


// 4. Salajane sõnum
const salajaneSonum = sonum => sonum.replace(/[aeiouõäöüy]/gi, "*");

function kuvaSalajane() {
    let vastus4 = document.getElementById("vastus4");
    let sisend = document.getElementById("sonum").value;
    vastus4.innerHTML = salajaneSonum(sisend);
}


// 5. Unikaalsed nimed
const leiaUnikaalsedNimed = nimed => {
    const unikaalsed = [];
    nimed.forEach(nimi => {
        if (!unikaalsed.includes(nimi)) {
            unikaalsed.push(nimi);
        }
    });
    return unikaalsed;
};

function kuvaUnikaalsed() {
    let vastus5 = document.getElementById("vastus5");
    let nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
    vastus5.innerHTML = "Algne: " + nimed.join(", ") + "<br>Unikaalsed: " + leiaUnikaalsedNimed(nimed).join(", ");
}