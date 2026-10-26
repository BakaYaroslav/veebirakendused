// Loon objekt raamat, millel on vähemalt kolm omadust: pealkiri, autor, aasta.
let raamat = {
    pealkiri: "Garry Potter",
    autor: "Joan Rowling",
    aasta: 1982,

    // Lisan meetod, mis kuvab raamatu kirjelduse.
    kirjeldus() {
        return this.pealkiri + " - " + this.autor + " (" + this.aasta + ") ";
    },
    // Lisan meetod, mis muudab väljaandmise aastat ja prindi tulemused konsooli.
    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
        console.log("Uus aasta on: " + this.aasta);
    }
};

console.log(raamat.kirjeldus());
raamat.muudaAastat(1925);


// Loon objekt raamatukogu, mille omaduseks on raamatud (massiiv raamatutest).
let raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Kuidas elad, Ann?", autor: "Aidi Vallik", aasta: 2001 },
        { pealkiri: "Nullpunkt", autor: "Margus Karu", aasta: 2010 }
    ],

    // Lisa meetod, mis kuvab kõik raamatud kenasti.
    kuvaKõik() {
        let tulemus = "";
        this.raamatud.forEach(r => {
            tulemus += r.pealkiri + ", " + r.autor + ", " + r.aasta + "<br>";
        });
        return tulemus;
    },

    // Lisa meetod, mis kuvab raamatukogu raamatute koguarvu.
    koguarv() {
        return this.raamatud.length;
    },

    // Lisa meetod, mis arvutab, mitu raamatut on ilmunud pärast 2000. aastat.
    pärast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },

    // Oma meetod, mis kuvab kõige uuem raamatud
    kõigeUuem() {
        let uueim = this.raamatud[0];
        this.raamatud.forEach(r => {
            if (r.aasta > uueim.aasta) {
                uueim = r;
            }
        });
        return uueim;
    }
};


// Funktsioonid HTML-nuppude jaoks
function lisaRaamat() {
    let p = document.getElementById("pealkiri").value;
    let a = document.getElementById("autor").value;
    let aa = Number(document.getElementById("aasta").value);

    raamatukogu.raamatud.push({ pealkiri: p, autor: a, aasta: aa });
    document.getElementById("lisaTeade").innerHTML = "Raamat lisatud!";
}

function kuvaKõikRaamatud() {
    let vastus1 = document.getElementById("vastus1");
    vastus1.innerHTML = raamatukogu.kuvaKõik();
}

function kuvaKoguarv() {
    let vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = "Kokku raamatuid: " + raamatukogu.koguarv();
}

function kuvaParast2000() {
    let vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = "Pärast 2000. aastat ilmunud: " + raamatukogu.pärast2000();
}

function kuvaUuem() {
    let vastus4 = document.getElementById("vastus4");
    let uueim = raamatukogu.kõigeUuem();
    vastus4.innerHTML = "Kõige uuem raamat: " + uueim.pealkiri + " " + uueim.autor + ", " + uueim.aasta;
}