app.factory("factoryEncuesta", () => {

    const CADENA_VACIA = new RegExp('^[\\s.\\-_]*$')
    const NOMBRE_ENCUESTA = new RegExp('^ENCUESTA\s(ENERO|MAYO)\-(ABRIL|AGOSTO)\s\|\s([0-9]{4})\s(INGENIERIAS|TSU)$')
    const CARACTERES_ESPECIALES = new RegExp('[^A-Za-z0-9 ]')
    const NOMBRE_ENCUESTA_MAX = 100


    let metodos = {
        validarCampo: () => {
            return "Hola Mundo ";
        },
        validarNombreEncuesta: (nombre) => {
            if (CADENA_VACIA.test(nombre)) return "Campo obligatorio."
            if (NOMBRE_ENCUESTA.test(nombre)) return "Ingresa valores válidos"
            if (nombre.length > NOMBRE_ENCUESTA_MAX) return `Has excedido el máximo número de caracteres`
            return null
        },
        validarPeriodo: (periodo) => {
            if (periodo == undefined || periodo == null) return "Ingresa valores válidos"
            return null
        },
        validarDescripcion: (descripcion) => {
            if (descripcion == "" || descripcion == undefined) return "Campo obligatorio."
            return null
        },
        validarSeccion: (seccion) => {
            if (seccion == undefined || seccion == null) return "Sección inválida"
            if (seccion.estado != 1) return "No puedes agregar una seccion inactiva"
            return null
        },
        validarFormulario: (map) => {
            return !(map.size == 0)
        },
        isUndefined: (campo) => {
            if (campo == undefined) return true
            return false
        },
        isSameNombre: (valorAnterior, valorActual) => {
            return valorAnterior == valorActual;
        },
        isSameDescripcion: (valorAnterior, valorActual) => {
            return valorAnterior == valorActual;
        },
        isSamePeriodo: (valorAnterior, valorActual) => {
            return valorAnterior.id == valorActual.id
        },
        isSameSecciones: (seccionesAnterioes, seccionesActuales) => {
            if (seccionesAnterioes.length == seccionesActuales.length) {
                const elementosDiferentes = seccionesActuales.filter((item) => {
                    if (!seccionesAnterioes.find((it) => it.id === item.id))
                        return true;
                });
                return !(elementosDiferentes.length > 0);
            } else {
                return false;
            }
        }
    }

    return metodos
})   