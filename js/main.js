const carros = []
const carrito = []
let seleccion = []

class Autos{
    constructor(tipo,modelo,valor,img){
        this.tipo = tipo
        this.modelo = modelo
        this.valor = valor
        this.img = img
    }

}

function generadorAutos(){
    carros.push(new Autos("SEDAN","CHEVROLET CLASSIC",10,"./media/cocheprueba.png"))
    carros.push(new Autos("SEDAN","ALFA ROMEO - GIULIA",50,"./media/cocheprueba.png"))
    carros.push(new Autos("SEDAN","AUDI - A4",30,"./media/cocheprueba.png"))
    carros.push(new Autos("SEDAN","BMW - SERIE 3",40,"./media/cocheprueba.png"))
    carros.push(new Autos("SUV","TOYOTA - COROLLA CROSS",30,"./media/cocheprueba.png"))
    carros.push(new Autos("SEDAN","VOLKSWAGEN - GOL",20,"./media/cocheprueba.png"))
}

generadorAutos()

const autosDisponibles = document.getElementById("autos-disponibles")
const autoSelec = document.getElementById("auto-seleccionado")

const autoDisplay = document.querySelector("#auto-display")
const crearSeleccionado = (auto)=>{
    const div = document.createElement("div")
    div.innerHTML = `<h2>${auto.modelo}</h2><img src="${auto.img}"><p>Costo por día $${auto.valor}</p>`
    autoDisplay.append(div)
}

/* function cartillaAutos(){
    for (const auto of carros){
        const div = document.createElement("div")
        div.innerHTML = `<div class="autos-card"><img src="./media/cocheprueba.png"> <p>${auto.modelo}</p></div>`
        div.addEventListener("click", () => {carrito.push(auto.modelo)
            guardarAuto(auto)
            mostrarSwal()})
        autosDisponibles.append(div)
    }
} 
cartillaAutos() */

function guardarAuto(auto){
    const autoGuardado = {
        tipo : auto.tipo,
        modelo : auto.modelo,
        valor : auto.valor
    }

    localStorage.setItem("autoSeleccionado",JSON.stringify(autoGuardado))
    
}

function mostrarAuto(){
    const autoMostrado = JSON.parse(localStorage.getItem("autoSeleccionado"))
    const div = document.createElement("div")
    div.innerHTML = autoMostrado.modelo
    autoDisplay.append(div)
}

mostrarAuto()

const mostrarSwal = () => {Swal.fire({
    title:'Aqui se mostrará un cuadro de confirmacion',
    text: 'De confirmarse, se agregará al carrito',
    icon: 'info'
})}
    

const obtenerContenido = (URL)=>{
    let cardsAmostrar=""
    fetch(URL)
        .then((response)=>response.json())
        .then((data)=>{
            for(contenido of data){
                cardsAmostrar += retornoCardContenido(contenido)
            }
        })
}

const retornoCardContenido = (contenido) =>{
    const div = document.createElement("div")
        div.innerHTML = `<div class="autos-card"><img src="${contenido.img}"> <p>${contenido.modelo}</p></div>`
        div.addEventListener("click", () => {
            seleccion = contenido
            guardarAuto(contenido)
            crearSeleccionado(contenido)
            mostrarSwal()})
        autosDisponibles.append(div) 
}