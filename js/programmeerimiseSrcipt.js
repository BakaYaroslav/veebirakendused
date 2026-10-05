
//1. Milliseid programmeerimiskeeli sa tead?
function checkboxValik(){
    let vastus=document.getElementById("vastus");
    let csharp=document.getElementById("csharp");
    let java=document.getElementById("Java");
    let python=document.getElementById("Python");
    let cpp=document.getElementById("C++");
    let php=document.getElementById("Php");
    let GO=document.getElementById("GO");

    let valik="";
    if(csharp.checked){
        valik+=csharp.value +', <br>';
    }

    if(java.checked){
        valik+=java.value +', <br>';
    }
    if(python.checked){
        valik+=python.value +', <br>';
    }
    if(cpp.checked){
        valik+=cpp.value +', <br>';
    }
    if(php.checked){
        valik+=php.value +', <br>';
    }
    if(GO.checked){
        valik+=GO.value +', <br>';
    }
    if(valik===""){
        valik="Tee oma valik!"
    }

    vastus.innerHTML="Sinu lemmikukeeled on : " +valik;

    return valik;

}
// 2. Mida arvad programmeerimise õppimisest?
function pkeelValik(){
    let vastus1=document.getElementById("vastus1");
    let pkeel=document.getElementById("pkeel");

    if(pkeel.value===""){
        vastus1.innerHTML = "Pole sisestatud"
    }
    else {
        vastus1.innerHTML = "Sinu arvamus on : " + pkeel.value;
    }
    return vastus1.innerHTML;
}

// 3.Mitu tundi nädalas tegeled programmeerimisega?
function tundiValik(){
    let vastus2=document.getElementById("vastus2");
    let tund=document.getElementById("tund");

    if(tund.value===""){
        vastus2.innerHTML = "Pole sisestatud"
    }
    else {
        vastus2.innerHTML = "Tegeled programmeerimisega " + tund.value +  " tundi nädalas.";
    }
    return tund.value
}

//4. Kas sulle meeldib programmeerida? – kasuta radio-valikuid: Jah / Ei.
function radioValik(){
    let piltValik = document.getElementsByName("valik");
    let valitudPilt = document.getElementById("valitudPilt");

    for (let i = 0; i < piltValik.length; i++) {
        if (piltValik[i].checked) {
            valitudPilt.src = piltValik[i].value;
            break;
        }
    }
    return valitudPilt;
}
//5. Milliseid programmeerimisega seotud tööriistu oskad nimetada?
function keelenimetusValik() {
    let vastus3=document.getElementById("vastus3");
    let keel=document.getElementById("keelenimetus");
    if(keel.value===""){
        vastus3.innerHTML = "Pole sisestatud"
    }
    else {
        vastus3.innerHTML = "Sinu nimetatud tööriistad:" + keel.value;
    }
    return vastus3.value;
}


//6. Millist programmeerimiskeelt sooviksid kõige rohkem õppida?
function selectValik(){
    let vastus4=document.getElementById("vastus4");
    let oppekeel=document.getElementById("oppekeel");

    if(oppekeel.selectedIndex!==0){
        vastus4.innerHTML="Sa valisid "+oppekeel.value;
    } else{
        vastus4.innerHTML="palun tee oma valik";
    }

    return oppekeel.value;
}

//7. Lisa küsimustiku lõppu nupp „Saada“.
function naitaKoike(){
    let vastusKoik=document.getElementById("vastusKoik");
    let pkeel = pkeelValik();
    let keelenimetus = keelenimetusValik();
    let checkbox = checkboxValik();
    let tund = tundiValik();
    let select = selectValik();

    vastusKoik.innerHTML=pkeel+'<br>'+
        'Sinu programmeerimisekeel õppimisest : ' + keelenimetus + '<br>'+
        'Sa sinu lemmikkeeled on '+ checkbox +'<br>' +
        'Sa programmeerisid '+tund+' tundi<br>'+
        'Sa valisid '+select;
}
//8. Lisa küsimustiku lõppu nupp „Puhasta“.
function puhasta(){
    valitudPilt = document.getElementById("valitudPilt");
    valitudPilt.src = "../images/Nimetu.png"
    vastus.innerHTML="";
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastusKoik.innerHTML="";


}