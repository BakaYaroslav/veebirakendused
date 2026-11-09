function joon() {
    const canvas = document.getElementById('canvas'); // määrame canvas elementi
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.strokeStyle = '#1f5959';
        tx.lineWidth = 5;
        tx.moveTo(50, 50); //algpunkt
        tx.lineTo(200, 350); // lõpppunkt
        tx.stroke();

    }
}

function puhasta() {
    const canvas = document.getElementById('canvas'); // määrame canvas elementi
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.clearRect(0, 0, 400, 400);
    }
}

function kolmnurk() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.fillStyle = '#1f5959';
        tx.strokeStyle = '#4a2f1f';
        tx.lineWidth = 5;
        tx.moveTo(50, 50); //algpunkt
        tx.lineTo(200, 350); // lõpppunkt
        tx.lineTo(300, 100);
        tx.lineTo(50, 50);
        tx.fill(); //taust
        tx.stroke();
    }
}

function ristkylik() {
    const canvas = document.getElementById('canvas'); // määrame canvas elementi
    const l = document.getElementById('laius');
    const k = document.getElementById('kõrgus');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.fillStyle = '#41acac';
        tx.fillRect(180, 150, l.value, k.value);
    }
}


function ring() {
    const canvas = document.getElementById('canvas');
    const r = document.getElementById("raadius");
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = '#fa8b5c';
        tx.strokeStyle = '#ffffff';
        tx.arc(100, 300, r.value, 0, 2*Math.PI, true);
        tx.fill();
       // tx.stroke();
    }
}

function pilt() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        const fail = new Image();
        fail.src = "https://picsum.photos/200/300?random=1";
        fail.onload = () => {
            tx.drawImage(fail, 180, 50);
        }
    }
}

function raatas1() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = '#000000';
        tx.strokeStyle = '#471717';
        tx.lineWidth = 20;
        tx.arc(100, 320, 20, 0, 2*Math.PI, true);
        tx.fill();
        tx.stroke();
    }
}
function raatas2() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d');
        tx.beginPath();
        tx.fillStyle = '#000000';
        tx.strokeStyle = '#471717';
        tx.lineWidth = 20;
        tx.arc(200, 320, 20, 0, 2*Math.PI, true);
        tx.fill();
        tx.stroke();
    }
}

function kere1() {
    const canvas = document.getElementById('canvas'); // määrame canvas elementi
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.fillStyle = '#1394d6';
        tx.fillRect(70, 230, 170, 70);
    }
}

function kere2() {
    const canvas = document.getElementById('canvas'); // määrame canvas elementi
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.fillStyle = '#1c4663';
        tx.fillRect(110, 190, 90, 40);
    }

}

function tuled() {
    const canvas = document.getElementById('canvas'); // määrame canvas elementi
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.strokeStyle = '#cf8686';
        tx.lineWidth = 5;
        tx.moveTo(250, 280); // lõpppunkt
        tx.lineTo(280, 310); //algpunkt
        tx.stroke();

        if (canvas.getContext) {
            let tx = canvas.getContext('2d'); // 2d tasand
            tx.beginPath();
            tx.strokeStyle = '#cf8686';
            tx.lineWidth = 5;
            tx.moveTo(250, 265); //algpunkt
            tx.lineTo(300, 270); // lõpppunkt
            tx.stroke();

        }
        if (canvas.getContext) {
            let tx = canvas.getContext('2d'); // 2d tasand
            tx.beginPath();
            tx.strokeStyle = '#cf8686';
            tx.lineWidth = 5;
            tx.moveTo(250, 250); //algpunkt
            tx.lineTo(300, 230); // lõpppunkt
            tx.stroke();

        }

    }
}

function anteen () {
    const canvas = document.getElementById('canvas'); // määrame canvas elementi
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); // 2d tasand
        tx.beginPath();
        tx.strokeStyle = '#545c61';
        tx.lineWidth = 5;
        tx.moveTo(150, 200); // lõpppunkt
        tx.lineTo(120, 150); //algpunkt
        tx.stroke();
    }
}


