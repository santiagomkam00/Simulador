
// let contador=0
// let respuesta = parseInt(prompt("---------- BIENVENIDO A RENTALCARS ----------\n************************************\n1_ Ver autos\n2_ Salir\n\nINGRESE LA OPCION DESEADA: "))
// while(respuesta!=2){
//     if(respuesta==1){
//         let catalogo = parseInt(prompt("El valor esta expresado en USD POR DIA:\n1)Chevrolet Classic $10\n2)Toyota Hilux $20\n3)Toyota Corolla $15\n\nIngrese el numero asignado al vehiculo"))
//         switch(catalogo){
//             case 1:
//                 let catalogo_classic=parseInt(prompt("¿Cuántos días quiere alquilar el vehículo Chevrolet Classic?"))
//                 contador = 10*catalogo_classic
//                 alert("El valor es $"+contador)
//                 break;
//             case 2:
//                 let catalogo_hilux=parseInt(prompt("¿Cuántos días quiere alquilar el vehículo Toyota Hilux?"))
//                 contador = 20*catalogo_hilux
//                 alert("El valor es $"+contador)
//                 break;
//             case 3:
//                 let catalogo_corolla=parseInt(prompt("¿Cuántos días quiere alquilar el vehículo Toyota Corolla?"))
//                 contador = 15*catalogo_corolla
//                 alert("El valor es $"+contador)
//                 break;

//                 default:
//                     confirm("No es una opcion correcta. NiNosVimos")
//                     break;
//         }

//     }else{
//         alert("INGRESE EL VALOR CORRECTO\nEl valor esta expresado en USD POR DIA:\n1)Chevrolet Classic $10\n2)Toyota Hilux $20\n3)Toyota Corolla $15\n\nIngrese el numero asignado al vehiculo")
//         }

//     respuesta=parseInt(prompt("Ingrese opcion 2 para salir o 1 para volver a inicio"))
// }

const carros = []

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
}

// const listarAutos = (autos) => console.table(autos)

generadorAutos()
// debugger
// listarAutos(autos)

// function elegirAuto(){
//     let eleccion = prompt("Ingrese el modelo que quiere alquilar:").toUpperCase()
//     let resultado = autos.find((auto)=>auto.modelo.includes(eleccion))
//     console.clear
//     console.table(resultado)
//     console.info("Pagas: $"+resultado.valor+" por día")
// }

// elegirAuto()
const listarAutos = document.getElementById("autosdispo")
debugger
function cartillaAutos(){
    for (const auto of carros){
        const li = document.createElement("li")
        li.className = "list-group-item"
        li.innerHTML = auto.modelo
        li.addEventListener("click", () => {alert(`el valor por dia es de $${auto.valor}usd`)})
        listarAutos.append(li)
    }
} 
cartillaAutos()