app.controller("encuesta", [
  "$scope",
  "$http",
  "$window",
  "SweetAlert",
  "factoryEncuesta",
  function ($scope, $http, $window, SweetAlert, factoryEncuesta) {
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

    $scope.listaModificar = [];

    $scope.bloqueoTab = true;

    $scope.visible = false;

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
        console.log("Hubo un cambio");
      },
      start: function (e, ui) { },
      update: function (e, ui) {
        console.log("Hubo un cambio update");
      },
      stop: function (e, ui) {
        let index = ui.item.index();
        // console.log("stop", index);
        $scope.asignadas[index].order = index;
      },
    };

    $scope.isRegistrar = true

    $scope.isModificar = true

    $scope.save = () => {

      console.log("Asignadas ", $scope.asignadas);
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
              $scope.asignadas = factoryEncuesta.order($scope.asignadas)
              console.log("Asignadas ", $scope.asignadas);
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
        SweetAlert.swal(
          {
            title: "!Error!",
            text: "Campos sin llenar o con errores",
            type: "error",
          });
      }
    };

    $scope.modificar = () => {
      console.log($scope.modificarEncuesta);
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
              $scope.listaEncuestas.splice(indexOf($scope.listaEncuestas, $scope.modificarEncuesta), 1, $scope.modificarEncuesta)
              setTimeout(function () {
                $("#tabConsulta").click();
              }, 100);
              $scope.modificarEncuesta = {};
              $scope.listaModificar = angular.copy($scope.secciones);;
              $scope.isModificar = true;
              $scope.bloqueoTab = true;
              $scope.visible = false
              SweetAlert.swal(
                "Exitoso!",
                "La encuesta se ha actualizado exitosamente",
                "success"
              );
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

    $scope.setModificarEncuesta = (encuesta) => {
      $scope.originalEncuesta = angular.copy(encuesta);
      console.log($scope.originalEncuesta.secciones);
      $scope.modificarEncuesta = angular.copy(encuesta);
      console.log($scope.modificarEncuesta.secciones);
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
        $scope.mapErrores.set('seccion', { error: true, mensaje: factoryEncuesta.validarSeccion(seccion) })
      } else {
        $scope.mapErrores.delete('seccion')
        $scope.asignadas.push(seccion);
        $scope.listaRegistrar.splice($scope.listaRegistrar.indexOf(seccion), 1);
      }
      verificarFormulario()
    };

    $scope.remover = (seccion) => {
      $scope.listaRegistrar.push(seccion);
      $scope.asignadas.splice($scope.asignadas.indexOf(seccion), 1);

    };

    $scope.agregarModificar = (seccion) => {
      $scope.modificarEncuesta.secciones.push(seccion)
      $scope.listaModificar.splice($scope.listaModificar.indexOf(seccion), 1);
      verificarFormularioModificar()
    };

    $scope.removerModificar = (seccion) => {
      $scope.listaModificar.push(seccion);
      $scope.modificarEncuesta.secciones.splice($scope.modificarEncuesta.secciones.indexOf(seccion), 1);
      verificarFormularioModificar()

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
        $scope.mapErrores.set('periodo', { error: true, mensaje: factoryEncuesta.validarPeriodo($scope.encuesta.periodo) })
        $scope.mapErrores.set('nombre', { error: true, mensaje: "Selecciona un periodo válido." })
        $scope.encuesta.nombre = "ERROR EN EL PERIODO SELECCIONADO"
      } else {
        $scope.mapErrores.delete('periodo');
        $scope.mapErrores.delete('nombre')
        $scope.encuesta.nombre = ""
        if (e?.label) {
          $scope.encuesta.nombre = "ENCUESTA " + e.label;
        } else {
          $scope.encuesta.nombre = "";
        }
      }
      verificarFormulario()
    };

    $scope.changeModificarPeriodo = (e) => {
      if (factoryEncuesta.validarPeriodo($scope.modificarEncuesta.periodo)) {
        $scope.mapErroresModificar.set('periodo', { error: true, mensaje: factoryEncuesta.validarPeriodo($scope.modificarEncuesta.periodo) })
        $scope.mapErroresModificar.set('nombre', { error: true, mensaje: "Selecciona un periodo válido." })
        $scope.modificarEncuesta.nombre = "ERROR EN EL PERIODO SELECCIONADO"

      } else {
        $scope.mapErroresModificar.delete('periodo');
        $scope.mapErroresModificar.delete('nombre')
        $scope.modificarEncuesta.nombre = ""
        if (e?.label) {
          $scope.modificarEncuesta.nombre = "ENCUESTA " + e.label;
        } else {
          $scope.modificarEncuesta.nombre = "";
        }
      }
      verificarFormularioModificar()

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
        $scope.mapErrores.set('descripcion', { error: true, mensaje: factoryEncuesta.validarDescripcion($scope.encuesta.descripcion) })
      } else {
        $scope.mapErrores.delete('descripcion')
      }
      verificarFormulario()
    }

    $scope.changeModificarDescripcion = () => {
      if (factoryEncuesta.validarDescripcion($scope.modificarEncuesta.descripcion)) {
        $scope.mapErroresModificar.set('descripcion', { error: true, mensaje: factoryEncuesta.validarDescripcion($scope.modificarEncuesta.descripcion) })
      } else {
        $scope.mapErroresModificar.delete('descripcion')
      }
      verificarFormularioModificar()

    }

    const verificarFormulario = () => {
      $scope.isRegistrar = factoryEncuesta.validarFormulario($scope.mapErrores) ||
        factoryEncuesta.isUndefined($scope.encuesta.periodo) ||
        factoryEncuesta.isUndefined($scope.encuesta.nombre) ||
        factoryEncuesta.isUndefined($scope.encuesta.descripcion);
    }

    const verificarFormularioModificar = () => {
      $scope.isModificar = factoryEncuesta.validarFormulario($scope.mapErrores) ||
        (factoryEncuesta.isSameNombre($scope.originalEncuesta.nombre, $scope.modificarEncuesta.nombre) &&
          factoryEncuesta.isSameDescripcion($scope.originalEncuesta.descripcion, $scope.modificarEncuesta.descripcion) &&
          factoryEncuesta.isSamePeriodo($scope.originalEncuesta.periodo, $scope.modificarEncuesta.periodo) &&
          factoryEncuesta.isSameSecciones($scope.originalEncuesta.secciones, $scope.modificarEncuesta.secciones));
    }

    const indexOf = (array, elemento) => {
      for (let index = 0; index < array.length; index++) {
        if (array[index].id == elemento.id) return index
      }
      return -1
    }

    $scope.sortableOptionsModificar = {
      beforeStop: function () {
        // console.log("beforeStop");
      },
      change: function () {
      },
      start: function (e, ui) { 

      },
      update: function (e, ui) {
        console.log("UPDATE");
        // console.log("Sin order",  $scope.modificarEncuesta.secciones);
        $scope.copySecciones = factoryEncuesta.order($scope.modificarEncuesta.secciones)

        // console.log($scope.originalEncuesta.secciones);
        // console.log($scope.modificarEncuesta.secciones);
        // console.log($scope.copySecciones);
        // console.log($scope.modificarEncuesta.secciones);
        if (factoryEncuesta.isSameSecciones($scope.originalEncuesta.secciones, $scope.modificarEncuesta.secciones)) {

          // for (let index = 0; index < $scope.copySecciones.length; index++) {
          //   console.log($scope.copySecciones[index].nombre);

          // }

          $scope.isModificar = factoryEncuesta.isSamePosiciones($scope.originalEncuesta.secciones, $scope.modificarEncuesta.secciones)
        }
      },
      stop: function (e, ui) {
        // let index = ui.item.index();
        // console.log("stop", index);

      },
    };


  },


]);
