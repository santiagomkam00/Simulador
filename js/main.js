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



function cartillaAutos(){
    for (const auto of carros){
        const div = document.createElement("div")
        div.innerHTML = `<div class="autos-card"><img src="./media/cocheprueba.png"> <p>${auto.modelo}</p></div>`
        div.addEventListener("click", () => {carrito.push(auto)})
        autosDisponibles.append(div)
    }
} 
cartillaAutos()

