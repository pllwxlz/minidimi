function playSound(nombre) {
    const sonido = new Audio(`assets/sonidos/${nombre}.mp3`);
    sonido.play();
}

function cambiarEstado(texto) {
    document.getElementById("estado").innerText = texto;
}


function comer() {
    cambiarEstado("QUÉ RICO! Gracias por la comida");
    playSound("carrotnom-92106");
    saltarMascota();
}

function bañar() {
    cambiarEstado("Ahora estoy limpio :3");
    playSound("agua-207566");
    saltarMascota();
}

function cariño() {
    cambiarEstado("AWWW TE AAMOO");
    playSound("uwu-sound-119010");
    saltarMascota();
}

function saltarMascota() {
    const mascota = document.getElementById("mascota");
    mascota.classList.add("saltar");
    setTimeout(() => {
        mascota.classList.remove("saltar");
    }, 300);
}