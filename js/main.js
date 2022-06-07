
let contador=0
let respuesta = parseInt(prompt("---------- BIENVENIDO A RENTALCARS ----------\n************************************\n1_ Ver autos\n2_ Salir\n\nINGRESE LA OPCION DESEADA: "))
while(respuesta!=2){
    if(respuesta==1){
        let catalogo = parseInt(prompt("El valor esta expresado en USD POR DIA:\n1)Chevrolet Classic $10\n2)Toyota Hilux $20\n3)Toyota Corolla $15\n\nIngrese el numero asignado al vehiculo"))
        switch(catalogo){
            case 1:
                let catalogo_classic=parseInt(prompt("¿Cuántos días quiere alquilar el vehículo Chevrolet Classic?"))
                contador = 10*catalogo_classic
                alert("El valor es $"+contador)
                break;
            case 2:
                let catalogo_hilux=parseInt(prompt("¿Cuántos días quiere alquilar el vehículo Toyota Hilux?"))
                contador = 20*catalogo_hilux
                alert("El valor es $"+contador)
                break;
            case 3:
                let catalogo_corolla=parseInt(prompt("¿Cuántos días quiere alquilar el vehículo Toyota Corolla?"))
                contador = 15*catalogo_corolla
                alert("El valor es $"+contador)
                break;

                default:
                    confirm("No es una opcion correcta. NiNosVimos")
                    break;
        }

    }else{
        alert("INGRESE EL VALOR CORRECTO\nEl valor esta expresado en USD POR DIA:\n1)Chevrolet Classic $10\n2)Toyota Hilux $20\n3)Toyota Corolla $15\n\nIngrese el numero asignado al vehiculo")
        }

    respuesta=parseInt(prompt("Ingrese opcion 2 para salir o 1 para volver a inicio"))
}
    