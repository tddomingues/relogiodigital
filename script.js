const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

function relogio() {
    let horaAtual = new Date()
    
    horas.textContent = horaAtual.getHours().toString().padStart(2, "0");
    minutos.textContent = horaAtual.getMinutes().toString().padStart(2, "0");
    segundos.textContent = horaAtual.getSeconds().toString().padStart(2, "0");
};

setInterval(relogio, 1000);