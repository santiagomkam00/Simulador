const carros = []
const carrito = []

class Autos{
    constructor(tipo,modelo,valor){
        this.tipo = tipo
        this.modelo = modelo
        this.valor = valor
    }

}

function generadorAutos(){
    carros.push(new Autos("SEDAN","CHEVROLET CLASSIC",10))
    carros.push(new Autos("SEDAN","ALFA ROMEO - GIULIA",50))
    carros.push(new Autos("SEDAN","AUDI - A4",30))
    carros.push(new Autos("SEDAN","BMW - SERIE 3",40))
    carros.push(new Autos("SUV","TOYOTA - COROLLA CROSS",30))
    carros.push(new Autos("SEDAN","VOLKSWAGEN - GOL",20))
}

generadorAutos()

const autosDisponibles = document.getElementById("autos-disponibles")
const autoSelec = document.getElementById("auto-seleccionado")




function cartillaAutos(){
    for (const auto of carros){
        const div = document.createElement("div")
        div.innerHTML = `<div class="autos-card"><img src="./media/cocheprueba.png"> <p>${auto.modelo}</p></div>`
        div.addEventListener("dblclick", () => {carrito.push(auto.modelo)
            guardarAuto(auto)})
        autosDisponibles.append(div)
        
    }
} 
cartillaAutos()

function guardarAuto(auto){
    const autoGuardado = {
        tipo : auto.tipo,
        modelo : auto.modelo,
        valor : auto.valor
    }

    localStorage.setItem("autoSeleccionado",JSON.stringify(autoGuardado))
    
}

function mostrarAuto(){
    debugger
    const autoMostrado = JSON.parse(localStorage.getItem("autoSeleccionado"))
    const li = document.createElement("li")
    li.innerHTML = autoMostrado.modelo
    autoSelec.append(li)
}

mostrarAuto()
    



