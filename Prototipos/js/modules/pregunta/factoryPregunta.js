app.factory("factoryPregunta", () => {

    const CADENA_VACIA = new RegExp('^[\\s.\\-_]*$')
    const NOMBRE_ENCUESTA = new RegExp('^ENCUESTA\s(ENERO|MAYO)\-(ABRIL|AGOSTO)\s\|\s([0-9]{4})\s(INGENIERIAS|TSU)$')
    const CARACTERES_ESPECIALES = new RegExp('[^A-Za-z0-9 ]')
    const NOMBRE_ENCUESTA_MAX = 100


    let metodos = {
        validarOpcion: (opcion) => {
            if (opcion == "" || opcion == undefined) return "Ingresa valores válidos"
            return null
        },
        isSameEnArray: (array, elemento) => {
            const elementos = array.filter((item) => item.descripcion == elemento.descripcion)
            if (elementos.length > 0) return "La respuesta ya existe"
            return null
        },
        validarEnunciado: (enunciado) => {
            if (CADENA_VACIA.test(enunciado)) return "Campo obligatorio."
            if (enunciado.length > NOMBRE_ENCUESTA_MAX) return `Has excedido el máximo número de caracteres`
            return null
        },
        validarTipoPregunta: (array, tipo) => {
            let retorno;
            if (tipo == undefined || tipo == null) {
                retorno = "Ingresa valores válidos";
            } else {
                const elementos = array.filter((item) => item.id == tipo.id)
                if (elementos == 0) {
                    retorno = "Tipo de pregunta inexistente";
                } else {
                    retorno = null;
                }
            }
            return retorno
        },
        validarCampo: (campo) => {
            if (campo == "" || campo == undefined) return true
            return false
        },
        isSameOpcion: (opcionAnterior, opcionActual) => {
            if (opcionAnterior == opcionActual) return "La opción no debe ser igual que la anterior"
            return null
        },
        indexOfOpcion: (array, elemento) => {
            for (let index = 0; index < array.length; index++) {
                if (array[index].descripcion == elemento.descripcion) return index
            }
            return -1
        },
        elementosArray: (array) => {
            if (array.length < 2) return "Debes agregar al menos dos respuestas"
            return null
        },
        isUndefined: (campo) => {
            if (campo == undefined) return true
            return false
        },
        validarFormulario: (map) => {
            return !(map.size == 0)
        },
        isSameEnunciado: (valorAnterior, valorActual) => {
            return valorAnterior == valorActual;
        },
        isSameTipo: (valorAnterior, valorActual) => {
            return valorAnterior.id == valorActual.id
        },
        isSameRespuestas: (respuestasAnteriores, respuestasActuales) => {

            if (respuestasAnteriores.length == respuestasActuales.length) {
                const elementosDiferentes = respuestasActuales.filter((item) => {
                    if (!respuestasAnteriores.find((it) => it.descripcion === item.descripcion))
                        return true;
                });
                return !(elementosDiferentes.length > 0);
            } else {
                return false;
            }
        },
        indexOf: (array, elemento) => {
            for (let index = 0; index < array.length; index++) {
                if (array[index].id == elemento.id) return index
            }
            return -1
        },
        indexOfId: (array, id) => {
            for (let index = 0; index < array.length; index++) {
                if (array[index].id == id) return index
            }
            return -1
        },
        isString: (campo) =>{
            if(typeof campo === 'string' || campo instanceof String){
                //it is string
                return true;    
            }else{
                //it is not string
                return false;
            }
        },
        validarObligatoria: (valor) =>{
            if(valor == undefined || metodos.isString(valor)) return "Selecciona una opción"
            return null
        },
        isSameObligatoria: (valorAnterior, valorActual) =>{
            return valorAnterior == valorActual
        }
    }

    return metodos
})   