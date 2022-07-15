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
                                opcionesRespuesta: []
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

                $scope.tabPreguntas = true;

                $scope.tabRegistro = true;

                $scope.isAnadir = true;

                $scope.opcionModificar = {}

                $scope.anadirRespuesta = () => {
                        if(!$scope.isAnadir ){
                                if (factoryPregunta.validarOpcion($scope.opcionIngresada.descripcion)) {
                                        $scope.mapErroresOpciones.set('opcion', { error: true, mensaje: factoryPregunta.validarOpcion($scope.opcionIngresada.descripcion) });
                                } else {
                                        console.log("Result: ",factoryPregunta.isSameEnArray($scope.opcionesRespuesta,$scope.opcionIngresada));
                                        if (factoryPregunta.isSameEnArray($scope.opcionesRespuesta,$scope.opcionIngresada)) {
                                                $scope.mapErroresOpciones.set('opcion', { error: true, mensaje: factoryPregunta.isSameEnArray($scope.opcionesRespuesta,$scope.opcionIngresada)});
                                        } else {
                                                console.log("Entro al else");
                                                $scope.mapErroresOpciones.delete('opcion')
                                                $scope.opcionesRespuesta.push(angular.copy($scope.opcionIngresada)) 
                                        }                                       
                                }
                        }else{
                                SweetAlert.swal(
                                        {
                                          title: "!Error!",
                                          text: "Ingresa un valor en el campo opción",
                                          type: "error",
                                        });
                        }
                        

                }

                $scope.agregarPreguntas = (pregunta) =>{
                        $scope.pregunta={}
                        $scope.pregunta = {...$scope.pregunta, idPregunta: pregunta} 
                        $scope.tabPreguntas = false;
                        setTimeout(() => {
                              $('#tabRegistro').click();  
                        }, 100);
                
                }

                $scope.cancelarRegistro = () =>{
                        $scope.pregunta = {}
                        $scope.opcionIngresada = {};
                        $scope.opcionesRespuesta = []
                        $scope.tabPreguntas = true;
                        setTimeout(() => {
                                $('#tabConsulta').click();  
                          }, 100);
                }

		$scope.lineInView = (index, inview, inviewInfo) =>{
			if (!inview && $scope.pregunta.idPregunta != undefined) {
                                $scope.isAnadir = true
                                $scope.opcionIngresada = {};
                                $scope.opcionesRespuesta = [];
                        }else if(!inview && $scope.pregunta.idPregunta == undefined){
                                $scope.pregunta = {};
                                $scope.isAnadir = true
                                $scope.opcionIngresada = {};
                                $scope.opcionesRespuesta = [];
                        }
		}

                $scope.changeEnunciadoRegistro = () =>{
                        if (factoryPregunta.validarEnunciado($scope.pregunta.enunciado)) {
                                $scope.mapErroresRegistro.set('enunciado', { error: true, mensaje: factoryPregunta.validarEnunciado($scope.pregunta.enunciado) });
                        } else {
                                $scope.mapErroresRegistro.delete('enunciado');
                        }
                }

                $scope.changeTipoPreguntaRegistro = () =>{
                        if (factoryPregunta.validarTipoPregunta($scope.tipoPreguntas, $scope.pregunta.tipo)) {
                                $scope.mapErroresRegistro.set('tipoPregunta', { error: true, mensaje: factoryPregunta.validarTipoPregunta($scope.tipoPreguntas, $scope.pregunta.tipo) });
                        } else {
                                $scope.mapErroresRegistro.delete('tipoPregunta');
                        }
                }

                $scope.changeOpcionRegistro = () =>{
                        $scope.isAnadir =  factoryPregunta.validarCampo($scope.opcionIngresada.descripcion);
                }

                $scope.setModificarOpcion = (opcion) =>{
                        console.log(opcion);
                        $scope.opcionModificar = angular.copy(opcion)
                        console.log($scope.opcionModificar);
                        $("#modalModificarOpcion").modal("show");
                }
 
        }]);