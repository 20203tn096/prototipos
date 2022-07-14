app.controller("pregunta", [
        "$scope",
        "$http",
        "$window",
        "SweetAlert",
        "factoryPregunta",
        function ($scope, $http, $window, SweetAlert, factoryPregunta) {

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

                $scope.tabPreguntas = true;

                $scope.tabRegistro = true;




                $scope.anadirRespuesta = () => {
                        console.log("Entro a añadir respuesta");
                        console.log("Retorno", factoryPregunta.validarOpcion($scope.opcionIngresada.descripcion)) ;
                        if (factoryPregunta.validarOpcion($scope.opcionIngresada.descripcion)) {
                                $scope.mapErroresRegistro.set('opcion', { error: true, mensaje: factoryPregunta.validarOpcion($scope.opcionIngresada.descripcion) });
                        } else {
                                console.log("Entro al else");
                                $scope.mapErroresRegistro.delete('opcion')
                                $scope.opcionesRespuesta.push(angular.copy($scope.opcionIngresada))
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
                        $scope.tabPreguntas = true;
                        setTimeout(() => {
                                $('#tabConsulta').click();  
                          }, 100);
                }

        }]);