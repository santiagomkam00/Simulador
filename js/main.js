const carros = []
const carrito = []
let seleccion

class Autos{
    constructor(tipo,modelo,valor,img){
        this.tipo = tipo
        this.modelo = modelo
        this.valor = valor
    }

}

/* function generadorAutos(){
    carros.push(new Autos("SEDAN","CHEVROLET CLASSIC",10))
    carros.push(new Autos("SEDAN","ALFA ROMEO - GIULIA",50))
    carros.push(new Autos("SEDAN","AUDI - A4",30))
    carros.push(new Autos("SEDAN","BMW - SERIE 3",40))
    carros.push(new Autos("SUV","TOYOTA - COROLLA CROSS",30))
    carros.push(new Autos("SEDAN","VOLKSWAGEN - GOL",20))
}

generadorAutos() */

const autosDisponibles = document.getElementById("autos-disponibles")
const autoSelec = document.getElementById("auto-seleccionado")
const autodiv = document.getElementById("autos-a-seleccionar")

const autoDisplay = document.querySelector("#auto-display")
const crearSeleccionado = (auto)=>{
    const div = document.createElement("div")
    div.className = 'mostrandoAuto'
    div.innerHTML = `
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${auto.img}" class="d-block w-80 h-60" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${auto.img}" class="d-block w-80 h-60" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${auto.img}" class="d-block w-80 h-60" alt="...">
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
                </div>
  `
    autoDisplay.append(div)
}

/* function cartillaAutos(){
    for (const auto of carros){
        const div = document.createElement("div")
        div.innerHTML = `<div class="autos-card"><img src="${auto.img}"> <p>${auto.modelo}</p></div>`
        div.addEventListener("click", () => {
            seleccion = auto
            guardarAuto(auto)
            crearSeleccionado(auto)
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

/* function mostrarAuto(){
    const autoMostrado = JSON.parse(localStorage.getItem("autoSeleccionado"))
    const div = document.createElement("div")
    div.innerHTML = autoMostrado.modelo
    autoDisplay.append(div)
}

mostrarAuto() */

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
        div.innerHTML = `
                        <div class="autos-card">
                        <img src="${contenido.img}">
                            <div class="auto-texto">
                                <p>${contenido.modelo}</p>
                                <p>Valor por día: $${contenido.valor}</p>
                            </div>
                        </div>`
        div.addEventListener("click", () => {
            seleccion = contenido
            guardarAuto(contenido)
            /*   */
            /* mostrarSwal() */
            autodiv.className = 'mostrandoAuto'
            autodiv.innerHTML = `
            <h2 class="text-center">${contenido.modelo}</h2>
            <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${contenido.img}" class="d-block w-80 h-60" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${contenido.img}" class="d-block w-80 h-60" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${contenido.img}" class="d-block w-80 h-60" alt="...">
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
                </div>
                    <div>
                        <p>${contenido.leyenda}</p>
                    </div>
                </div>`})
        autosDisponibles.append(div) 
        
}

const inputCarro = document.getElementById('modelo-encarro')
    