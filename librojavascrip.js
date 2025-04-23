function inicio() {
    const sectionlibro = document.getElementById("LIBRO")
    sectionlibro.style.display = "none"  // Ocultar al inicio

    const botonSiguiente = document.getElementById("boton-siguiente")
    botonSiguiente.addEventListener("click", mostrarLibro) 

sectionAlerta = document.getElementById ("alerta")
sectionAlerta.style.display ="none"

    let botonPrecionar= document.getElementById ("preciona")
    botonPrecionar.addEventListener("click",alerta)
   


}

function mostrarLibro() {
    let sectioninicio= document.getElementById("Bienvenida")
    sectioninicio.style.display = "none"
    const sectionlibro = document.getElementById("LIBRO")
    sectionlibro.style.display = "flex" // Mostrar la sección
sectionAlerta = document.getElementById ("alerta")
sectionAlerta.style.display ="flex"

 let  petalos = document.getElementById('petalo');

}

function alerta () {
alert ("Aquí esta tu libro y tu rosa para que no digas que no te quiero💕")
    
}
window.addEventListener("load", inicio)