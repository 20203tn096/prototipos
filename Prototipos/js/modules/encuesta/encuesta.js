app.controller("encuesta", [
  "$scope",
  "$http",
  "$window",
  "SweetAlert",
  "factoryEncuesta",
  function ($scope, $http, $window, SweetAlert, factoryEncuesta) {
    $scope.hola = {};
    $scope.periodos = [
      {
        id: 1,
        label: "ENERO-ABRIL | 2022 INGENIERIAS",
      },
      {
        id: 2,
        label: "ENERO-ABRIL | 2022 TSU",
      },
      {
        id: 3,
        label: "ENERO-ABRIL | 2021 INGENIERIAS",
      },
      {
        id: 4,
        label: "ENERO-ABRIL | 2021 TSU",
      },
      // {
      //   id: 5,
      //   label: "ENERO-ABRIL | 2020 INGENIERIAS",
      // },
      // {
      //   id: 6,
      //   label: "ENERO-ABRIL | 2019 INGENIERIAS",
      // },
      // {
      //   id: 7,
      //   label: "ENERO-ABRIL | 2019 TSU",
      // },
    ];
    $scope.valores = {}
    $scope.listaEncuestas = [
      {
        id: 1,
        nombre: "Encuesta 1",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2022 INGENIERIAS",
        periodo: {
          id: 1,
          label: "ENERO-ABRIL | 2022 INGENIERIAS",
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
        ],
        Estado: 1,
      },
      {
        id: 2,
        nombre: "Encuesta 2",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2022 TSU",
        periodo: {
          id: 2,
          label: "ENERO-ABRIL | 2022 TSU",
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
        ],
        Estado: 1,
      },
      {
        id: 3,
        nombre: "Encuesta 3",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2021 INGENIERIAS",
        periodo: {
          id: 3,
          label: "ENERO-ABRIL | 2021 INGENIERIAS",
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
          },
        ],
        Estado: 1,
      },
      {
        id: 4,
        nombre: "Encuesta 4",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2021 TSU",
        periodo: {
          id: 4,
          label: "ENERO-ABRIL | 2021 TSU",
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
          },
        ],
        Estado: 1,
      },
      {
        id: 5,
        nombre: "Encuesta 5",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2020 INGENIERIAS",
        periodo: {
          id: 5,
          label: "ENERO-ABRIL | 2020 INGENIERIAS",
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
        Estado: 1,
      },
      {
        id: 6,
        nombre: "ENCUESTA ENERO-ABRIL | 2019 INGENIERIAS",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2020 TSU",
        periodo: {
          id: 6,
          label: "ENERO-ABRIL | 2019 INGENIERIAS",
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
          },
          {
            id: 5,
            nombre: "Empresa 2022",
            estado: 1,
            order: 4,
          },
        ],
        Estado: 0,
      },
      {
        id: 7,
        nombre: "Encuesta 7",
        periodo: {
          id: 7,
          label: "ENERO-ABRIL | 2019 TSU",
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
        Estado: 0,
      },
      {
        id: 8,
        nombre: "Encuesta 8",
        periodo: {
          id: 7,
          label: "ENERO-ABRIL | 2019 TSU",
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
        Estado: 0,
      },
    ];

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

    $scope.secciones2 = [
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

    $scope.asignadas = [];

    $scope.items = [
      {
        id: 1,
        label: "ENERO-ABRIL | 2022 INGENIERIAS",
      },
      {
        id: 2,
        label: "ENERO-ABRIL | 2022 TSU",
      },
      {
        id: 3,
        label: "ENERO-ABRIL | 2021 INGENIERIAS",
      },
    ];
    $scope.desactivarBotonAsignar = true
    $scope.listaModificar = [];

    $scope.bloqueoTab = true;

    $scope.visible = false;


    $scope.activarModificacionChx = {
    };

    $scope.encuesta = {};

    $scope.listaRegistrar = angular.copy($scope.secciones);

    $scope.sortingLog = [];

    $scope.mapErrores = new Map();

    $scope.mapErroresModificar = new Map();

    $scope.sortableOptions = {
      beforeStop: function () {
        // console.log("beforeStop");
      },
      change: function () {
        // console.log("Hubo un cambio");
      },
      start: function (e, ui) { },
      update: function (e, ui) {
        // console.log("Hubo un cambio update");
      },
      stop: function (e, ui) {
        let index = ui.item.index();
        // console.log("stop", index);
        // $scope.asignadas[index].order = index;
      },
    };

    $scope.isRegistrar = true;

    $scope.isModificar = true;

    $scope.save = () => {
      // console.log("Asignadas ", $scope.asignadas);
      if (!$scope.isRegistrar) {
        SweetAlert.swal(
          {
            title: "¡Advertencia!",
            text: "¿Estas seguro de realizar los cambios?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
          },
          function (isConfirm) {
            if (isConfirm) {
              $scope.asignadas = factoryEncuesta.order($scope.asignadas);
              // console.log("Asignadas ", $scope.asignadas);
              const encuesta_secciones = angular.copy({
                ...$scope.encuesta,
                secciones: $scope.asignadas,
                Estado: 1,
              });
              $scope.listaEncuestas = [
                encuesta_secciones,
                ...$scope.listaEncuestas,
              ];
              setTimeout(function () {
                $("#tabConsulta").click();
              }, 100);
              $scope.encuesta = {};
              $scope.asignadas = [];
              $scope.isRegistrar = true;
              $scope.listaRegistrar = angular.copy($scope.secciones);
              SweetAlert.swal(
                "Exitoso!",
                "La encuesta se ha registrado exitosamente",
                "success"
              );
            } else {
              $scope.encuesta = {};
              $scope.asignadas = [];
              $scope.isRegistrar = true;
              $scope.listaRegistrar = angular.copy($scope.secciones);
            }
          }
        );
      } else {
        SweetAlert.swal({
          title: "!Error!",
          text: "Campos sin llenar o con errores",
          type: "error",
        });
      }
    };

    const goModificar = () => {
      $scope.modificarEncuesta.secciones =  factoryEncuesta.order($scope.modificarEncuesta.secciones)
      // console.log("Secciones ", $scope.modificarEncuesta.secciones );
      $scope.listaEncuestas.splice(
        indexOf($scope.listaEncuestas, $scope.originalEncuesta),
        1,
        $scope.modificarEncuesta
      );
      setTimeout(function () {
        $("#tabConsulta").click();
      }, 100);
      $scope.modificarEncuesta = {};
      $scope.listaModificar = angular.copy($scope.secciones);
      $scope.isModificar = true;
      $scope.bloqueoTab = true;
      $scope.visible = false;
      $scope.activarModificacionChx.valor = false
      SweetAlert.swal(
        "Exitoso!",
        "La encuesta se ha actualizado exitosamente",
        "success"
      );
    }

    $scope.modificar = () => {
      if (!$scope.isModificar) {
        SweetAlert.swal(
          {
            title: "¡Advertencia!",
            text: "¿Estas seguro de realizar los cambios?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
          },
          function (isConfirm) {
            if (isConfirm) {
              if ($scope.activarModificacionChx.valor) {
                if (factoryEncuesta.isSameSecciones($scope.originalEncuesta.secciones, $scope.modificarEncuesta.secciones)) { // Verificar que los array sean iguales 
                  if (factoryEncuesta.isSamePosiciones($scope.originalEncuesta.secciones, $scope.modificarEncuesta.secciones)) { //Verificar si los elementos tienen la misma posición
                    SweetAlert.swal({
                      title: "!Error!",
                      text: "No ha realizado cambios a las secciones",
                      type: "error",
                    });
                  } else {
                    goModificar()
                  }
                } else { // Los elementos cambiaron por lo que se realiza la modificación
                  goModificar()
                }
              } else {
                goModificar()
              }
            }
          }
        );
      } else {
        SweetAlert.swal({
          title: "!Error!",
          text: "Campos sin modificar o campos con errores",
          type: "error",
        });
      }
    };

    $scope.setModificarEncuesta = (encuesta) => {
      $scope.originalEncuesta = angular.copy(encuesta);
      $scope.modificarEncuesta = angular.copy(encuesta);
      $scope.listaModificar = $scope.secciones.filter((item) => {
        if (!$scope.modificarEncuesta.secciones.find((it) => it.id === item.id))
          return true;
      });
      $scope.visible = true;
      $scope.bloqueoTab = false;
      setTimeout(function () {
        $("#tabModificar").click();
      }, 100);
    };

    $scope.agregar = (seccion) => {
      if (factoryEncuesta.validarSeccion(seccion)) {
        $scope.mapErrores.set("seccion", {
          error: true,
          mensaje: factoryEncuesta.validarSeccion(seccion),
        });
      } else {
        $scope.mapErrores.delete("seccion");
        $scope.asignadas.push(seccion);
        $scope.listaRegistrar.splice($scope.listaRegistrar.indexOf(seccion), 1);
      }
      verificarFormulario();
    };

    $scope.remover = (seccion) => {
      $scope.listaRegistrar.push(seccion);
      $scope.asignadas.splice($scope.asignadas.indexOf(seccion), 1);
    };

    $scope.agregarModificar = (seccion) => {
      if (!$scope.desactivarBotonAsignar) {
        $scope.modificarEncuesta.secciones.push(seccion);
        $scope.listaModificar.splice($scope.listaModificar.indexOf(seccion), 1);
        verificarFormularioModificar();
      } else {
        SweetAlert.swal({
          title: "!Error!",
          text: "No has activado la modificación de secciones",
          type: "error",
        });
      }
    };

    $scope.removerModificar = (seccion) => {
      if (!$scope.desactivarBotonAsignar) {
        $scope.listaModificar.push(seccion);
        $scope.modificarEncuesta.secciones.splice(
          $scope.modificarEncuesta.secciones.indexOf(seccion),
          1
        );
      } else {
        SweetAlert.swal({
          title: "!Error!",
          text: "No has activado la modificación de secciones",
          type: "error",
        });
      }

      verificarFormularioModificar();
    };

    $scope.habilitarEncuesta = (encuesta) => {
      encuesta = { ...encuesta, estado: 1 };
    };

    $scope.deshabilitarEncuesta = (encuesta) => {
      encuesta = { ...encuesta, estado: 0 };
    };

    $scope.modalConsultaSecciones = (secciones) => {
      $("#modalSecciones").modal("show");
      $scope.consultaSeccionesAsignadas = secciones;
    };

    $scope.changePeriodoRegistro = (e) => {
      if (factoryEncuesta.validarPeriodo($scope.encuesta.periodo)) {
        $scope.mapErrores.set("periodo", {
          error: true,
          mensaje: factoryEncuesta.validarPeriodo($scope.encuesta.periodo),
        });
        $scope.mapErrores.set("nombre", {
          error: true,
          mensaje: "Selecciona un periodo válido.",
        });
        $scope.encuesta.nombre = "ERROR EN EL PERIODO SELECCIONADO";
      } else {
        $scope.mapErrores.delete("periodo");
        $scope.mapErrores.delete("nombre");
        $scope.encuesta.nombre = "";
        if (e?.label) {
          $scope.encuesta.nombre = "ENCUESTA " + e.label;
        } else {
          $scope.encuesta.nombre = "";
        }
      }
      verificarFormulario();
    };

    $scope.changeModificarPeriodo = (e) => {
      if (factoryEncuesta.validarPeriodo($scope.modificarEncuesta.periodo)) {
        $scope.mapErroresModificar.set("periodo", {
          error: true,
          mensaje: factoryEncuesta.validarPeriodo(
            $scope.modificarEncuesta.periodo
          ),
        });
        $scope.mapErroresModificar.set("nombre", {
          error: true,
          mensaje: "Selecciona un periodo válido.",
        });
        $scope.modificarEncuesta.nombre = "ERROR EN EL PERIODO SELECCIONADO";
      } else {
        $scope.mapErroresModificar.delete("periodo");
        $scope.mapErroresModificar.delete("nombre");
        $scope.modificarEncuesta.nombre = "";
        if (e?.label) {
          $scope.modificarEncuesta.nombre = "ENCUESTA " + e.label;
        } else {
          $scope.modificarEncuesta.nombre = "";
        }
      }
      verificarFormularioModificar();
    };

    $scope.cancelarModificacion = () => {
      $scope.bloqueoTab = true;
      $scope.visible = false;
      setTimeout(function () {
        $("#tabConsulta").click();
      }, 100);
    };

    $scope.changeDecripcionRegistro = () => {
      if (factoryEncuesta.validarDescripcion($scope.encuesta.descripcion)) {
        $scope.mapErrores.set("descripcion", {
          error: true,
          mensaje: factoryEncuesta.validarDescripcion(
            $scope.encuesta.descripcion
          ),
        });
      } else {
        $scope.mapErrores.delete("descripcion");
      }
      verificarFormulario();
    };

    $scope.changeModificarDescripcion = () => {
      if (
        factoryEncuesta.validarDescripcion($scope.modificarEncuesta.descripcion)
      ) {
        $scope.mapErroresModificar.set("descripcion", {
          error: true,
          mensaje: factoryEncuesta.validarDescripcion(
            $scope.modificarEncuesta.descripcion
          ),
        });
      } else {
        $scope.mapErroresModificar.delete("descripcion");
      }
      verificarFormularioModificar();
    };

    const verificarFormulario = () => {
      $scope.isRegistrar =
        factoryEncuesta.validarFormulario($scope.mapErrores) ||
        factoryEncuesta.isUndefined($scope.encuesta.periodo) ||
        factoryEncuesta.isUndefined($scope.encuesta.nombre) ||
        factoryEncuesta.isUndefined($scope.encuesta.descripcion);
    };

    const verificarFormularioModificar = () => {
      $scope.isModificar =
        factoryEncuesta.validarFormulario($scope.mapErrores) ||
        (factoryEncuesta.isSameNombre(
          $scope.originalEncuesta.nombre,
          $scope.modificarEncuesta.nombre
        ) &&
          factoryEncuesta.isSameDescripcion(
            $scope.originalEncuesta.descripcion,
            $scope.modificarEncuesta.descripcion
          ) &&
          factoryEncuesta.isSamePeriodo(
            $scope.originalEncuesta.periodo,
            $scope.modificarEncuesta.periodo
          ) &&
          factoryEncuesta.isSameSecciones(
            $scope.originalEncuesta.secciones,
            $scope.modificarEncuesta.secciones
          ) && !$scope.activarModificacionChx.valor);
    };

    const indexOf = (array, elemento) => {
      for (let index = 0; index < array.length; index++) {
        if (array[index].id == elemento.id) return index;
      }
      return -1;
    };

    $scope.lista1 = [
      {
        id: 1,
      },
    ];
    $scope.lista2 = [
      {
        id: 2,
      },
    ];

    function arraysEqual(a1, a2) {
      /* WARNING: arrays must not contain {objects} or behavior may be undefined */
      return;
    }



    $scope.activarModificacion = () => {
      if ($scope.activarModificacionChx.valor) {
        $scope.isModificar = false
      } else {
        if ((factoryEncuesta.isSameNombre(
          $scope.originalEncuesta.nombre,
          $scope.modificarEncuesta.nombre
        ) &&
          factoryEncuesta.isSameDescripcion(
            $scope.originalEncuesta.descripcion,
            $scope.modificarEncuesta.descripcion
          ) &&
          factoryEncuesta.isSamePeriodo(
            $scope.originalEncuesta.periodo,
            $scope.modificarEncuesta.periodo
          ) &&
          factoryEncuesta.isSameSecciones(
            $scope.originalEncuesta.secciones,
            $scope.modificarEncuesta.secciones
          ))) {
          $scope.isModificar = true
        }
      }
      $scope.desactivarBotonAsignar = !$scope.activarModificacionChx.valor;
    }

    $scope.sortableOptionsModificar = {
      beforeStop: function (e, ui) {
      
      },
      change: function () {
        // console.log("Change");
      },
      start: function (e, ui) {
        // ui.item.startPos = ui.item.index();
        // console.log("start");
      }, stop: function (e, ui) {
        // console.log("stop");
        // console.log("STOP");
      },
      update: function (e, ui) {
    
      }
      ,
    };

  },
]);
