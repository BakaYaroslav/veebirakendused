function Jookidevalik(){
    let vastus2 = document.getElementById('vastus2');
    let joogiValik = document.getElementById('joogivalik');
    let kogus = document.getElementById('kogus');
    const kohv = 1.50;
    const cola = 2.20;
    const fanta = 2.00;

    if (joogiValik.selectedIndex===1) {
        vastus2.innerHTML = kogus.value + " Kohvi hind on " + (kogus.value).toFixed(2) * kohv + "€";
        vastus2.style.color = "green";
        vastus2.style.fontSize = '20px';
    } else  if (joogiValik.selectedIndex===2) {
        vastus2.innerHTML = "vesi on tasuta!";
        vastus2.style.color = "green";
        vastus2.style.fontSize = '20px';
    } else  if (joogiValik.selectedIndex===3) {
        vastus2.innerHTML = kogus.value + " Coca-Cola hind on " + (kogus.value).toFixed(2) * cola + "€";
        vastus2.style.color = "brown";
        vastus2.style.fontSize = '20px';
    } else  if (joogiValik.selectedIndex===4) {
        vastus2.innerHTML = kogus.value + " Fanta hind on " + (kogus.value).toFixed(2) * fanta + "€";
        vastus2.style.color = "yellow";
        vastus2.style.fontSize = '20px';

    }

}