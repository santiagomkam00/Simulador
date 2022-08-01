const carros = []
const carrito = []

class Autos{
    constructor(tipo,modelo,valor,img){
        this.tipo = tipo
        this.modelo = modelo
        this.valor = valor
    }

}

function generadorAutos(){
    carros.push(new Autos("SEDAN","CHEVROLET CLASSIC",10))
    carros.push(new Autos("SEDAN","CHEVROLET ONIX MODELO 2022",15))
    carros.push(new Autos("SEDAN","COROLLA - XLI 2022",20))
    carros.push(new Autos("SEDAN","TOYOTA - HILUX",20))
    carros.push(new Autos("SUV","VOLKSWAGEN - GOL",15))
}

generadorAutos()

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

function guardarAlquiler(auto){
    const autoGuardado = {
        modelo : auto.modelo,
        dias : auto.dias,
    }

    localStorage.setItem("autoAlquilado",JSON.stringify(autoGuardado))
    
}

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
            autodiv.className = 'mostrandoAuto'
            autodiv.innerHTML = `
            <div>
            <h2 class="text-center">${contenido.modelo}</h2>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${contenido.img}" class="d-block w-60 h-50" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${contenido.img}" class="d-block w-60 h-50" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${contenido.img}" class="d-block w-60 h-50" alt="...">
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
                </div>
                <div>
                <p class="leyenda">${contenido.leyenda}</p>
            </div>`})
        autosDisponibles.append(div) 
        
}

const autoCotizar = document.getElementById('select-auto')
const dias = document.getElementById('dias')
const button = document.getElementById('button')
    button.addEventListener('click', ()=>{
        if (autoCotizar.value == 0 || dias.value==''){
            Swal.fire({
                icon: 'error',
                tittle: 'Error crítico',
                text: 'Debe seleccionar un auto y declarar cuantos días lo querrá para poder cotizar'
            })
        } else{
            let valor
            let auto
            switch(autoCotizar.value){
                case '1':
                    valor = carros[0].valor*dias.value
                    auto = {
                        modelo : autoCotizar.value,
                        dias : dias.value,
                    }
                    guardarAlquiler(auto)
                    Swal.fire({
                        icon: 'success',
                        title: 'Cotizacion exitosa',
                        text: `Eligio el auto: ${carros[0].modelo}
                                Abonará $${valor} en total`
                    })
                break
                case '2':
                    valor = carros[1].valor*dias.value
                    auto = {
                        modelo : autoCotizar.value,
                        dias : dias.value
                    }
                    guardarAlquiler(auto)
                    Swal.fire({
                        icon: 'success',
                        title: 'Cotizacion exitosa',
                        text: `Eligio el auto: ${carros[1].modelo}
                                Abonará $${valor} en total`
                    })
                break
                case '3':
                    valor = carros[2].valor*dias.value
                    auto = {
                        modelo : autoCotizar.value,
                        dias : dias.value
                    }
                    guardarAlquiler(auto)
                    Swal.fire({
                        icon: 'success',
                        title: 'Cotizacion exitosa',
                        text: `Eligio el auto: ${carros[2].modelo}
                                Abonará $${valor} en total`
                    })
                break
                case '4':
                    valor = carros[3].valor*dias.value
                    auto = {
                        modelo : autoCotizar.value,
                        dias : dias.value
                    }
                    guardarAlquiler(auto)
                    Swal.fire({
                        icon: 'success',
                        title: 'Cotizacion exitosa',
                        text: `Eligio el auto: ${carros[3].modelo}
                                Abonará $${valor} en total`
                    })
                break
                case '5':
                    valor = carros[4].valor*dias.value
                    auto = {
                        modelo : autoCotizar.value,
                        dias : dias.value
                    }
                    guardarAlquiler(auto)
                    Swal.fire({
                        icon: 'success',
                        title: 'Cotizacion exitosa',
                        text: `Eligio el auto: ${carros[4].modelo}
                                Abonará $${valor} en total`
                    })
                break
                default: Swal.fire({
                    icon: 'warning',
                    title: 'ERROR',
                    text: 'No selecciono la opcion correcta'
                })   
            }
        }

    })

alquilado()
    function alquilado(){
        debugger
        const recuperarAlquilado = JSON.parse(localStorage.getItem('autoAlquilado'))
        autoCotizar.value = recuperarAlquilado.modelo
        dias.value = recuperarAlquilado.dias
    }