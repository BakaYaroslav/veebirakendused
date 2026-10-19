const now = new Date();

const paev = now.getDate(); // tagastab päeva

console.log("täna on: " + paev + " päev");

const kuu = now.getMonth() + 1; // tagastab kuu

console.log("Kuu number on: " + kuu);

const aasta = now.getFullYear();

console.log("Aasta on: " + aasta);

const nadalapaev = now.getDay(); // 0-6. kus on 0-pühapäeav
console.log("Nadalapaeva number on: " + nadalapaev);

function tana(){
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Täna on: " + paev + "." + kuu + "." + aasta;
}

//lisa veel getHours() getMinutes() ja lisa veel 1 function, mis näitab aeg

const tund  = now.getHours();
console.log("tund on: " + tund);
const minutid = now.getMinutes();
console.log("min: " + minutid);

function aeg(){
    let vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = "Nüüd on: " + tund + ":" + minutid;
}

//mitu päeva konsultatsiooni nädalani

const konsultatsioon = new Date(2026, 10, 2); // 2.11.2026
const vahe =  konsultatsioon.getTime() - now.getTime();
const konspaev = vahe/(1000*60*60*24); // sekundid * minutid * tunnid * päevad
console.log("konsultatsiooni nädalani: " + konspaev.toFixed(0) + " päeva");


function kons(){
    let vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = "konsultatsiooni nädalani: " + konspaev.toFixed(0) + " päeva";
}

const sunnipaev = new Date(2026, 10, 25);
const sunnivahe =  sunnipaev.getTime() - now.getTime();
const sunnipaevaVahe = sunnivahe/(1000*60*60*24);

function sunni(){
    let vastus4 = document.getElementById("vastus4");
    vastus4.innerHTML = "sünnipäevani on: " + sunnipaevaVahe.toFixed(0) + " päeva";
}




