app.factory("factoryPregunta", () => {

    const CADENA_VACIA = new RegExp('^[\\s.\\-_]*$')
    const NOMBRE_ENCUESTA = new RegExp('^ENCUESTA\s(ENERO|MAYO)\-(ABRIL|AGOSTO)\s\|\s([0-9]{4})\s(INGENIERIAS|TSU)$')
    const CARACTERES_ESPECIALES = new RegExp('[^A-Za-z0-9 ]')
    const NOMBRE_ENCUESTA_MAX = 100


    let metodos = {
        validarOpcion: (opcion) => {
            console.log("Opcion", opcion);
            if(opcion == "" || opcion == undefined) return "Ingresa valores válidos"
            return null
        },
        
    }

    return metodos
})   