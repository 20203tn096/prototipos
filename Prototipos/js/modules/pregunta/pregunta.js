app.controller("pregunta", [
        "$scope",
        "$http",
        "$window",
        "SweetAlert",
        "factoryPregunta",
        "$sce",
        function ($scope, $http, $window, SweetAlert, factoryPregunta, $sce) {

                $scope.listaPreguntas = [
                        {
                                id: 1,
                                enunciado: "Pregunta 1",
                                tipo: {
                                        id: 1,
                                        descripcion: "SiNo"
                                },
                                secciones: [
                                        {
                                                id: 1,
                                                nombre: "Asesor 2022",
                                                estado: 1,
                                                order: 0,
                                        },
                                        {
                                                id: 2,
                                                nombre: "Departamento de estadía 2022",
                                                estado: 1,
                                                order: 1,
                                        },
                                        {
                                                id: 3,
                                                nombre: "Asesor 2020",
                                                estado: 0,
                                                order: 2,
                                        }
                                ],
                                estado: 1,
                                opcionesRespuesta: []
                        },
                        {
                                id: 2,
                                enunciado: "Pregunta 2",
                                tipo: {
                                        id: 1,
                                        descripcion: "SiNo"
                                },
                                secciones: [
                                        {
                                                id: 1,
                                                nombre: "Asesor 2022",
                                                estado: 1,
                                                order: 0,
                                        },
                                        {
                                                id: 2,
                                                nombre: "Departamento de estadía 2022",
                                                estado: 1,
                                                order: 1,
                                        },
                                ],
                                estado: 1,
                                opcionesRespuesta: []
                        },
                        {
                                id: 3,
                                enunciado: "Pregunta 3",
                                tipo: {
                                        id: 1,
                                        descripcion: "SiNo"
                                },
                                secciones: [
                                        {
                                                id: 1,
                                                nombre: "Asesor 2022",
                                                estado: 1,
                                                order: 0,
                                        },
                                        {
                                                id: 2,
                                                nombre: "Departamento de estadía 2022",
                                                estado: 1,
                                                order: 1,
                                        },
                                ],
                                estado: 1,
                                opcionesRespuesta: []
                        },
                        {
                                id: 4,
                                enunciado: "Pregunta 4",
                                tipo: {
                                        id: 1,
                                        descripcion: "SiNo"
                                },
                                secciones: [
                                        {
                                                id: 1,
                                                nombre: "Asesor 2022",
                                                estado: 1,
                                                order: 0,
                                        },
                                        {
                                                id: 2,
                                                nombre: "Departamento de estadía 2022",
                                                estado: 1,
                                                order: 1,
                                        },
                                        {
                                                id: 3,
                                                nombre: "Asesor 2020",
                                                estado: 0,
                                                order: 2,
                                        },
                                        {
                                                id: 4,
                                                nombre: "Empresa 2020",
                                                estado: 0,
                                                order: 3,
                                        }
                                ],
                                estado: 1,
                                opcionesRespuesta: []
                        },
                        {
                                id: 5,
                                enunciado: "Pregunta 5",
                                tipo: {
                                        id: 2,
                                        descripcion: "Multiple"
                                },
                                secciones: [
                                        {
                                                id: 1,
                                                nombre: "Asesor 2022",
                                                estado: 1,
                                                order: 0,
                                        },
                                        {
                                                id: 2,
                                                nombre: "Departamento de estadía 2022",
                                                estado: 1,
                                                order: 1,
                                        },
                                        {
                                                id: 3,
                                                nombre: "Asesor 2020",
                                                estado: 0,
                                                order: 2,
                                        },
                                        {
                                                id: 4,
                                                nombre: "Empresa 2020",
                                                estado: 0,
                                                order: 3,
                                        }
                                ],
                                estado: 0,
                                opcionesRespuesta: []
                        },
                        {
                                id: 6,
                                enunciado: "Pregunta 6",
                                tipo: {
                                        id: 3,
                                        descripcion: "Escala"
                                },
                                secciones: [
                                        {
                                                id: 1,
                                                nombre: "Asesor 2022",
                                                estado: 1,
                                                order: 0,
                                        },
                                        {
                                                id: 2,
                                                nombre: "Departamento de estadía 2022",
                                                estado: 1,
                                                order: 1,
                                        },
                                        {
                                                id: 3,
                                                nombre: "Asesor 2020",
                                                estado: 0,
                                                order: 2,
                                        },
                                        {
                                                id: 4,
                                                nombre: "Empresa 2020",
                                                estado: 0,
                                                order: 3,
                                        }
                                ],
                                estado: 0,
                                opcionesRespuesta: []
                        },
                        {
                                id: 7,
                                enunciado: "Pregunta 7",
                                tipo: {
                                        id: 2,
                                        descripcion: "Multiple"
                                },
                                secciones: [
                                        {
                                                id: 1,
                                                nombre: "Asesor 2022",
                                                estado: 1,
                                                order: 0,
                                        },
                                        {
                                                id: 2,
                                                nombre: "Departamento de estadía 2022",
                                                estado: 1,
                                                order: 1,
                                        },
                                        {
                                                id: 3,
                                                nombre: "Asesor 2020",
                                                estado: 0,
                                                order: 2,
                                        }
                                ],
                                estado: 0,
                                opcionesRespuesta: [
                                        {
                                                descripcion: "Hotel"
                                        },
                                        {
                                                descripcion: "Hospedaje"
                                        },
                                        {
                                                descripcion: "Alimentos"
                                        }
                                ]
                        },
                        {
                                id: 8,
                                enunciado: "Pregunta 8",
                                tipo: {
                                        id: 3,
                                        descripcion: "Escala"
                                },
                                secciones: [
                                        {
                                                id: 1,
                                                nombre: "Asesor 2022",
                                                estado: 1,
                                                order: 0,
                                        },
                                        {
                                                id: 2,
                                                nombre: "Departamento de estadía 2022",
                                                estado: 1,
                                                order: 1,
                                        },
                                        {
                                                id: 3,
                                                nombre: "Asesor 2020",
                                                estado: 0,
                                                order: 2,
                                        }
                                ],
                                estado: 0,
                                opcionesRespuesta: []
                        }
                ]

                $scope.secciones = [
                        {
                                id: 1,
                                nombre: "Asesor 2022",
                                estado: 1,
                                order: 0,
                        },
                        {
                                id: 2,
                                nombre: "Departamento de estadía 2022",
                                estado: 1,
                                order: 1,
                        },
                        {
                                id: 3,
                                nombre: "Asesor 2020",
                                estado: 0,
                                order: 2,
                        },
                        {
                                id: 4,
                                nombre: "Empresa 2020",
                                estado: 0,
                                order: 3,
                        },
                        {
                                id: 5,
                                nombre: "Empresa 2022",
                                estado: 1,
                                order: 4,
                        },
                ];

                $scope.tipoPreguntas = [
                        {
                                id: 1,
                                descripcion: "SI/NO"
                        },
                        {
                                id: 2,
                                descripcion: "MÚLTIPLE"
                        },
                        {
                                id: 3,
                                descripcion: "ESCALA"
                        },
                        {
                                id: 4,
                                descripcion: "ABIERTA"
                        }
                ]

                $scope.pregunta = {}

                $scope.opcionIngresada = {};

                $scope.opcionesRespuesta = []

                $scope.mapErroresRegistro = new Map();

                $scope.mapErroresOpciones = new Map();

                $scope.mapErroresModificacion = new Map();

                $scope.mapErroresOpcionesModificar = new Map()

                $scope.tabPreguntas = true;

                $scope.tabRegistro = true;

                $scope.tabModificar = false;

                $scope.isAnadir = true;

                $scope.isModificarOpcion = true

                $scope.opcionModificar = {}

                $scope.opcionIngresadaModificar = {};

                $scope.isRegistrar = true

                $scope.isAnadirModificar = true

                $scope.isModificacionOpcion = true

                $scope.isModificar = true

                $scope.anadirRespuesta = () => {
                        if (!$scope.isAnadir) {
                                if (factoryPregunta.validarOpcion($scope.opcionIngresada.descripcion)) {
                                        $scope.mapErroresOpciones.set('opcion', { error: true, mensaje: factoryPregunta.validarOpcion($scope.opcionIngresada.descripcion) });
                                } else {
                                        if (factoryPregunta.isSameEnArray($scope.opcionesRespuesta, $scope.opcionIngresada)) {
                                                $scope.mapErroresOpciones.set('opcion', { error: true, mensaje: factoryPregunta.isSameEnArray($scope.opcionesRespuesta, $scope.opcionIngresada) });
                                        } else {
                                                $scope.mapErroresOpciones.delete('opcion')
                                                $scope.opcionesRespuesta.push(angular.copy($scope.opcionIngresada))
                                                if (factoryPregunta.elementosArray($scope.opcionesRespuesta)) {
                                                        $scope.mapErroresRegistro.set('opciones', { error: true, mensaje: factoryPregunta.elementosArray($scope.opcionesRespuesta) });

                                                } else {
                                                        $scope.mapErroresRegistro.delete('opciones')
                                                }
                                        }
                                }
                        } else {
                                SweetAlert.swal(
                                        {
                                                title: "!Error!",
                                                text: "Ingresa un valor en el campo opción",
                                                type: "error",
                                        });
                        }
                        verificarFormulario()

                }

                $scope.agregarPreguntas = (pregunta) => {
                        $scope.pregunta = {}
                        $scope.pregunta = { ...$scope.pregunta, idPregunta: pregunta }
                        $scope.tabPreguntas = false;
                        setTimeout(() => {
                                $('#tabRegistro').click();
                        }, 100);

                }

                $scope.cancelarRegistro = () => {
                        $scope.pregunta = {}
                        $scope.opcionIngresada = {};
                        $scope.opcionesRespuesta = []
                        $scope.tabPreguntas = true;
                        setTimeout(() => {
                                $('#tabConsulta').click();
                        }, 100);
                }

                $scope.lineInView = (index, inview, inviewInfo) => {
                        if (!inview && $scope.pregunta.idPregunta != undefined) {
                                $scope.isAnadir = true
                                $scope.opcionIngresada = {};
                                $scope.opcionesRespuesta = [];
                        } else if (!inview && $scope.pregunta.idPregunta == undefined) {
                                $scope.pregunta = {};
                                $scope.isAnadir = true
                                $scope.opcionIngresada = {};
                                $scope.opcionesRespuesta = [];
                        }
                }

                $scope.changeEnunciadoRegistro = () => {
                        if (factoryPregunta.validarEnunciado($scope.pregunta.enunciado)) {
                                $scope.mapErroresRegistro.set('enunciado', { error: true, mensaje: factoryPregunta.validarEnunciado($scope.pregunta.enunciado) });
                        } else {
                                $scope.mapErroresRegistro.delete('enunciado');
                        }
                        verificarFormulario()
                }

                $scope.changeTipoPreguntaRegistro = () => {
                        if ($scope.pregunta.tipo?.id == 2) {
                                $scope.mapErroresRegistro.set('opciones', { error: true, mensaje: factoryPregunta.elementosArray($scope.opcionesRespuesta) });
                        } else {
                                $scope.opcionIngresada = {};
                                $scope.opcionesRespuesta = [];
                                $scope.mapErroresRegistro.delete('opciones')
                        }

                        if (factoryPregunta.validarTipoPregunta($scope.tipoPreguntas, $scope.pregunta.tipo)) {
                                $scope.mapErroresRegistro.set('tipoPregunta', { error: true, mensaje: factoryPregunta.validarTipoPregunta($scope.tipoPreguntas, $scope.pregunta.tipo) });
                        } else {
                                $scope.mapErroresRegistro.delete('tipoPregunta');
                        }
                        verificarFormulario()
                }

                $scope.changeOpcionRegistro = () => {
                        console.log("Hola");
                        $scope.isAnadir = factoryPregunta.validarCampo($scope.opcionIngresada.descripcion);
                }

                $scope.setModificarOpcion = (opcion) => {
                        $scope.opcionOriginalModificar = angular.copy(opcion)
                        $scope.opcionModificar = angular.copy(opcion)
                        $("#modalModificarOpcion").modal("show");
                }

                $scope.changeOpcionModificar = () => {
                        if (factoryPregunta.validarOpcion($scope.opcionModificar.descripcion)) {
                                $scope.mapErroresOpciones.set('opcionModificar', { error: true, mensaje: factoryPregunta.validarOpcion($scope.opcionModificar.descripcion) });
                                $scope.isModificarOpcion = true
                        } else {
                                if (factoryPregunta.isSameOpcion($scope.opcionOriginalModificar.descripcion, $scope.opcionModificar.descripcion)) {
                                        $scope.mapErroresOpciones.set('opcionModificar', { error: true, mensaje: factoryPregunta.isSameOpcion($scope.opcionOriginalModificar.descripcion, $scope.opcionModificar.descripcion) });
                                        $scope.isModificarOpcion = true
                                } else {
                                        if (factoryPregunta.isSameEnArray($scope.opcionesRespuesta, $scope.opcionModificar)) {
                                                $scope.mapErroresOpciones.set('opcionModificar', { error: true, mensaje: factoryPregunta.isSameEnArray($scope.opcionesRespuesta, $scope.opcionModificar) });
                                                $scope.isModificarOpcion = true
                                        } else {
                                                $scope.mapErroresOpciones.delete('opcionModificar')
                                                $scope.isModificarOpcion = false
                                        }
                                }
                        }
                }

                $scope.guardarModificacionOpcion = () => {

                        if (!$scope.isModificarOpcion) {
                                $scope.opcionesRespuesta.splice(factoryPregunta.indexOfOpcion($scope.opcionesRespuesta, $scope.opcionOriginalModificar), 1, $scope.opcionModificar)
                                SweetAlert.swal(
                                        "Exitoso!",
                                        "La encuesta se ha actualizado exitosamente",
                                        "success"
                                );
                                $("#modalModificarOpcion").modal("hide");
                                $scope.opcionModificar = {}
                                $scope.isModificarOpcion = true

                        } else {
                                SweetAlert.swal(
                                        {
                                                title: "!Error!",
                                                text: "Modifica los campos de manera correcta",
                                                type: "error",
                                        });
                        }
                }

                $scope.setEliminarOpcion = (opcion) => {

                        SweetAlert.swal(
                                {
                                        title: "¡Advertencia!",
                                        text: "¿Estas seguro de realizar los cambios?",
                                        type: "warning",
                                        showCancelButton: true,
                                        confirmButtonColor: "#DD6B55",
                                        confirmButtonText: "Aceptar",
                                        closeOnConfirm: false,
                                },
                                function (isConfirm) {
                                        if (isConfirm) {
                                                $scope.opcionesRespuesta = $scope.opcionesRespuesta.filter((item) => item.descripcion != opcion.descripcion)
                                                if (factoryPregunta.elementosArray($scope.opcionesRespuesta)) {
                                                        $scope.mapErroresRegistro.set('opciones', { error: true, mensaje: factoryPregunta.elementosArray($scope.opcionesRespuesta) });
                                                } else {
                                                        $scope.mapErroresRegistro.delete('opciones')
                                                }
                                                SweetAlert.swal(
                                                        "Exitoso!",
                                                        "La respuesta se ha eliminado exitosamente",
                                                        "success"
                                                );
                                                verificarFormulario()
                                        }
                                }
                        );

                }

                $scope.guardarPregunta = () => {
                        if (!$scope.isRegistrar) {
                                SweetAlert.swal(
                                        {
                                                title: "¡Advertencia!",
                                                text: "¿Estas seguro de realizar los cambios?",
                                                type: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#DD6B55",
                                                confirmButtonText: "Aceptar",
                                                closeOnConfirm: false,
                                        },
                                        function (isConfirm) {
                                                if (isConfirm) {
                                                        $scope.listaPreguntas.push({ id: $scope.listaPreguntas[$scope.listaPreguntas.length - 1].id + 1, ...$scope.pregunta, opcionesRespuesta: $scope.opcionesRespuesta, estado: 1 });
                                                        SweetAlert.swal(
                                                                "Exitoso!",
                                                                "La pregunta se ha registrado exitosamente",
                                                                "success"
                                                        );
                                                        setTimeout(() => {
                                                                $('#tabConsulta').click();
                                                        }, 100);
                                                } else {
                                                        $scope.pregunta = {}
                                                        $scope.opcionIngresada = {}
                                                        $scope.opcionesRespuesta = []
                                                        $scope.isRegistrar = true
                                                        $scope.isAnadir = true
                                                }
                                        }
                                );
                        } else {
                                SweetAlert.swal(
                                        {
                                                title: "!Error!",
                                                text: "Llena el formulario correctamente",
                                                type: "error",
                                        });
                        }

                }

                $scope.setModificarPregunta = (pregunta) => {
                        $scope.tabModificar = true;
                        $scope.tabPreguntas = false;
                        $scope.tabRegistro = false;
                        $scope.preguntaOriginalModificar = angular.copy(pregunta)
                        $scope.preguntaModificar = angular.copy(pregunta)
                        setTimeout(() => {
                                $('#tabModificar').click();
                        }, 100);
                }

                $scope.changeEnunciadoModificacion = () => {
                        if (factoryPregunta.validarEnunciado($scope.preguntaModificar.enunciado)) {
                                $scope.mapErroresModificacion.set('enunciado', { error: true, mensaje: factoryPregunta.validarEnunciado($scope.preguntaModificar.enunciado) });
                        } else {
                                $scope.mapErroresModificacion.delete('enunciado');
                        }
                        verificarFormularioModificar()
                }

                $scope.changeTipoPreguntaModificacion = () => {
                        if ($scope.preguntaModificar.tipo?.id == 2 && $scope.preguntaModificar.opcionesRespuesta.length < 2) {
                                $scope.mapErroresModificacion.set('opciones', { error: true, mensaje: factoryPregunta.elementosArray($scope.opcionesRespuesta) });
                        } else {
                                $scope.opcionIngresadaModificar = {};
                                $scope.preguntaModificar.opcionesRespuesta = [];
                                $scope.mapErroresModificacion.delete('opciones')
                        }

                        if (factoryPregunta.validarTipoPregunta($scope.tipoPreguntas, $scope.preguntaModificar.tipo)) {
                                $scope.mapErroresModificacion.set('tipoPregunta', { error: true, mensaje: factoryPregunta.validarTipoPregunta($scope.tipoPreguntas, $scope.preguntaModificar.tipo) });
                        } else {
                                $scope.mapErroresModificacion.delete('tipoPregunta');
                        }
                        verificarFormularioModificar()
                }

                $scope.changeOpcionModificar = () => {
                        // console.log("Entro aqui", $scope.opcionIngresadaModificar);
                        $scope.isAnadirModificar = factoryPregunta.validarCampo($scope.opcionIngresadaModificar.descripcion);
                }

                $scope.anadirRespuestaModificar = () => {
                        if (!$scope.isAnadirModificar) {
                                if (factoryPregunta.validarOpcion($scope.opcionIngresadaModificar.descripcion)) {
                                        $scope.mapErroresOpcionesModificar.set('opcion', { error: true, mensaje: factoryPregunta.validarOpcion($scope.opcionIngresadaModificar.descripcion) });
                                } else {
                                        if (factoryPregunta.isSameEnArray($scope.preguntaModificar.opcionesRespuesta, $scope.opcionIngresadaModificar)) {
                                                $scope.mapErroresOpcionesModificar.set('opcion', { error: true, mensaje: factoryPregunta.isSameEnArray($scope.preguntaModificar.opcionesRespuesta, $scope.opcionIngresadaModificar) });
                                        } else {
                                                $scope.mapErroresOpcionesModificar.delete('opcion')
                                                $scope.preguntaModificar.opcionesRespuesta.push(angular.copy($scope.opcionIngresadaModificar))
                                                $scope.opcionIngresadaModificar = {}
                                                if (factoryPregunta.elementosArray($scope.preguntaModificar.opcionesRespuesta)) {
                                                        $scope.mapErroresModificacion.set('opciones', { error: true, mensaje: factoryPregunta.elementosArray($scope.preguntaModificar.opcionesRespuesta) });

                                                } else {
                                                        $scope.mapErroresModificacion.delete('opciones')
                                                }
                                        }
                                }
                        } else {
                                SweetAlert.swal(
                                        {
                                                title: "!Error!",
                                                text: "Ingresa un valor en el campo opción",
                                                type: "error",
                                        });
                        }
                        verificarFormularioModificar()

                }

                $scope.setEliminarOpcionModificar = (opcion) => {

                        SweetAlert.swal(
                                {
                                        title: "¡Advertencia!",
                                        text: "¿Estas seguro de realizar los cambios?",
                                        type: "warning",
                                        showCancelButton: true,
                                        confirmButtonColor: "#DD6B55",
                                        confirmButtonText: "Aceptar",
                                        closeOnConfirm: false,
                                },
                                function (isConfirm) {
                                        if (isConfirm) {
                                                $scope.preguntaModificar.opcionesRespuesta = $scope.preguntaModificar.opcionesRespuesta.filter((item) => item.descripcion != opcion.descripcion)
                                                if (factoryPregunta.elementosArray($scope.preguntaModificar.opcionesRespuesta)) {
                                                        $scope.mapErroresModificacion.set('opciones', { error: true, mensaje: factoryPregunta.elementosArray($scope.preguntaModificar.opcionesRespuesta) });
                                                } else {
                                                        $scope.mapErroresModificacion.delete('opciones')
                                                }
                                                SweetAlert.swal(
                                                        "Exitoso!",
                                                        "La respuesta se ha eliminado exitosamente",
                                                        "success"
                                                );
                                                verificarFormularioModificar()
                                        }
                                }
                        );

                }

                $scope.setModificarOpcionModificar = (opcion) => {
                        $scope.opcionOriginalModificacion = angular.copy(opcion)
                        $scope.opcionModificacion = angular.copy(opcion)
                        console.log($scope.opcionModificacion);
                        $("#modalModificacionOpcion").modal("show");
                }

                $scope.changeOpcionModificacion = () => {
                        if (factoryPregunta.validarOpcion($scope.opcionModificacion.descripcion)) {
                                $scope.mapErroresOpcionesModificar.set('opcionModificar', { error: true, mensaje: factoryPregunta.validarOpcion($scope.opcionModificacion.descripcion) });
                                $scope.isModificacionOpcion = true
                        } else {
                                if (factoryPregunta.isSameOpcion($scope.opcionOriginalModificacion.descripcion, $scope.opcionModificacion.descripcion)) {
                                        $scope.mapErroresOpcionesModificar.set('opcionModificar', { error: true, mensaje: factoryPregunta.isSameOpcion($scope.opcionOriginalModificacion.descripcion, $scope.opcionModificacion.descripcion) });
                                        $scope.isModificacionOpcion = true
                                } else {
                                        if (factoryPregunta.isSameEnArray($scope.preguntaModificar.opcionesRespuesta, $scope.opcionModificacion)) {
                                                $scope.mapErroresOpcionesModificar.set('opcionModificar', { error: true, mensaje: factoryPregunta.isSameEnArray($scope.preguntaModificar.opcionesRespuesta, $scope.opcionModificacion) });
                                                $scope.isModificacionOpcion = true
                                        } else {
                                                $scope.mapErroresOpcionesModificar.delete('opcionModificar')
                                                $scope.isModificacionOpcion = false
                                        }
                                }
                        }
                }

                $scope.guardarModificacionOpcionModificar = () => {

                        if (!$scope.isModificacionOpcion) {
                                $scope.preguntaModificar.opcionesRespuesta.splice(factoryPregunta.indexOfOpcion($scope.preguntaModificar.opcionesRespuesta, $scope.opcionOriginalModificacion), 1, $scope.opcionModificacion)
                                SweetAlert.swal(
                                        "Exitoso!",
                                        "La encuesta se ha actualizado exitosamente",
                                        "success"
                                );
                                $("#modalModificacionOpcion").modal("hide");
                                $scope.opcionModificacion = {}
                                $scope.isModificacionOpcion = true
                                verificarFormularioModificar()

                        } else {
                                SweetAlert.swal(
                                        {
                                                title: "!Error!",
                                                text: "Modifica los campos de manera correcta",
                                                type: "error",
                                        });
                        }
                }

                $scope.cerrarModificacionOpcionModificar = () => {
                        $("#modalModificacionOpcion").modal("hide");
                        $scope.mapErroresOpcionesModificar.delete('opcionModificar')
                }

                const verificarFormulario = () => {
                        $scope.isRegistrar = factoryPregunta.validarFormulario($scope.mapErroresRegistro) ||
                                factoryPregunta.isUndefined($scope.pregunta.enunciado) ||
                                factoryPregunta.isUndefined($scope.pregunta.tipo)
                }
                const verificarFormularioModificar = () => {
                        console.log(factoryPregunta.isSameRespuestas($scope.preguntaOriginalModificar.opcionesRespuesta, $scope.preguntaModificar.opcionesRespuesta));
                        $scope.isModificar = factoryPregunta.validarFormulario($scope.mapErroresModificacion) ||
                                (factoryPregunta.isSameEnunciado($scope.preguntaOriginalModificar.enunciado, $scope.preguntaModificar.enunciado) &&
                                        factoryPregunta.isSameTipo($scope.preguntaOriginalModificar.tipo, $scope.preguntaModificar.tipo) &&
                                        factoryPregunta.isSameRespuestas($scope.preguntaOriginalModificar.opcionesRespuesta, $scope.preguntaModificar.opcionesRespuesta));
                        console.log("Valor de isModificar:  ", $scope.isModificar);
                }

                $scope.modificarPregunta = () => {
                        if (!$scope.isModificar) {
                                SweetAlert.swal(
                                        {
                                                title: "¡Advertencia!",
                                                text: "¿Estas seguro de realizar los cambios?",
                                                type: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#DD6B55",
                                                confirmButtonText: "Aceptar",
                                                closeOnConfirm: false,
                                        },
                                        function (isConfirm) {
                                                if (isConfirm) {
                                                        $scope.listaPreguntas.splice(factoryPregunta.indexOf($scope.listaPreguntas, $scope.preguntaOriginalModificar), 1, $scope.preguntaModificar)
                                                        setTimeout(function () {
                                                                $("#tabConsulta").click();
                                                        }, 100);
                                                        $scope.preguntaModificar = {};
                                                        $scope.opcionIngresadaModificar = {}
                                                        $scope.isAnadirModificar = true
                                                        $scope.isModificar = true;
                                                        SweetAlert.swal(
                                                                "Exitoso!",
                                                                "La pregunta se ha actualizado exitosamente",
                                                                "success"
                                                        );
                                                } else {
                                                        $scope.preguntaModificar = {};
                                                        $scope.isModificar = true;
                                                }
                                        }
                                );
                        } else {
                                SweetAlert.swal(
                                        {
                                                title: "!Error!",
                                                text: "Campos sin modificar o campos con errores",
                                                type: "error",
                                        });
                        }
                }

        }]);