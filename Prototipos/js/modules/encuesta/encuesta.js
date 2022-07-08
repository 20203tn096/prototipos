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
      {
        id: 5,
        label: "ENERO-ABRIL | 2020 INGENIERIAS",
      },
      {
        id: 6,
        label: "ENERO-ABRIL | 2019 INGENIERIAS",
      },
      {
        id: 7,
        label: "ENERO-ABRIL | 2019 TSU",
      },
    ];

    console.log(factoryEncuesta.validarCampo()); 

    $scope.listaEncuestas = [
      {
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
        nombre: "Encuesta 6",
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
    $scope.asignadasModificar = [];
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

    $scope.sortableOptions = {
      beforeStop: function () {
        console.log("beforeStop");
      },
      change: function () {
        console.log("change");
      },
      start: function (e, ui) {},
      update: function (e, ui) {
        console.log("update");
      },
      stop: function (e, ui) {
        let index = ui.item.index();
        console.log("stop", index);
        $scope.asignadas[index].order = index;
      },
    };

    $scope.save = () => {
      // let list = $scope.asignadas.map((item, i) => ({
      //   seccion: item,
      //   order: i,
      //   encuesta: { id: 1 },
      // }));

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
            $scope.listaRegistrar = angular.copy($scope.secciones);
            SweetAlert.swal(
              "Exitoso!",
              "La encuesta se ha registrado exitosamente",
              "success"
            );
          } else {
            $scope.encuesta = {};
            $scope.asignadas = [];
            $scope.listaRegistrar = angular.copy($scope.secciones);
          }
        }
      );
    };

    $scope.erroresFormularioEncuesta = {
      nombre: false,
      periodo:{
        error:false,
        mensaje: ""
      },
      descripcion: {
        error:false,
        mensaje: ""
      },
      seccion: false,
    }

    $scope.setModificarEncuesta = (encuesta) => {
      $scope.modificarEncuesta = angular.copy(encuesta);
      $scope.listaModificar = $scope.secciones.filter((item) => {
        if (!$scope.modificarEncuesta.secciones.find((it) => it.id === item.id))
          return true;
      });
      console.log("Secciones a modificar ", $scope.listaModificar);
      $scope.visible = true;
      $scope.bloqueoTab = false;
      setTimeout(function () {
        $("#tabModificar").click();
      }, 100);
    };

    $scope.agregar = (seccion) => {
      console.log("agregar");
      $scope.asignadas.push(seccion);
      $scope.listaRegistrar.splice($scope.listaRegistrar.indexOf(seccion), 1);
    };
    $scope.remover = (seccion) => {
      console.log("removida");
      $scope.listaRegistrar.push(seccion);
      $scope.asignadas.splice($scope.asignadas.indexOf(seccion), 1);
      console.log("Lista original", $scope.listaRegistrar);
      console.log("Lista asignada", $scope.asignadas);
    };


    $scope.agregarModificar = (seccion) => {
      console.log("agregar");
      $scope.asignadas.push(seccion);
      $scope.listaModificar.splice($scope.listaModificar.indexOf(seccion), 1);
    };
    $scope.removerModificar = (seccion) => {
      console.log("removida");
      $scope.listaModificar.push(seccion);
      $scope.asignadas.splice($scope.asignadas.indexOf(seccion), 1);
      console.log("Lista original", $scope.listaRegistrar);
      console.log("Lista asignada", $scope.asignadas);
    };



    $scope.agregarModificar = (seccion) => {
      console.log("agregar");
      $scope.asignadasModificar.push(seccion);
      $scope.listaModificar.splice($scope.listaModificar.indexOf(seccion), 1);
    };
    $scope.removerModificar = (seccion) => {
      console.log("removida");
      $scope.listaModificar.push(seccion);
      $scope.asignadasModificar.splice(
        $scope.asignadasModificar.indexOf(seccion),
        1
      );
      console.log("Lista original", $scope.listaModificar);
      console.log("Lista asignada", $scope.asignadasModificar);
    };

    $scope.habilitarEncuesta = (encuesta) => {
      console.log("Habilitar");
      encuesta = { ...encuesta, estado: 1 };
      console.log(encuesta);
    };
    $scope.deshabilitarEncuesta = (encuesta) => {
      console.log("Deshabilitar");
      encuesta = { ...encuesta, estado: 0 };
    };
    $scope.modalConsultaSecciones = (secciones) => {
      $("#modalSecciones").modal("show");
      $scope.consultaSeccionesAsignadas = secciones;
    };
    $scope.changePeriodoRegistro = (e) => {
      console.log("Valor del periodo", $scope.encuesta.periodo);
      if(factoryEncuesta.validarPeriodo($scope.encuesta.periodo)){
        $scope.erroresFormularioEncuesta.periodo.error = true;
        $scope.erroresFormularioEncuesta.periodo.mensaje =  factoryEncuesta.validarPeriodo($scope.encuesta.periodo)
       
      }else{
        $scope.erroresFormularioEncuesta.periodo.error = false;
        if (e?.label) {
        $scope.encuesta.nombre = "ENCUESTA " + e.label;
      } else {
        $scope.encuesta.nombre = "";
      }
      }
      
   
    };

    $scope.cambiarNombreEncuesta = (e) => {
      if (e?.label) {
        $scope.modificarEncuesta.nombre = "ENCUESTA " + e.label;
      } else {
        $scope.modificarEncuesta.nombre = "";
      }
    };

    $scope.cancelarModificacion = () => {
      $scope.bloqueoTab = true;
      $scope.visible = false;
      setTimeout(function () {
        $("#tabConsulta").click();
      }, 100);
    };


    $scope.changeDecripcionRegistro = () =>{
      if(factoryEncuesta.validarDescripcion($scope.encuesta.descripcion)){
        $scope.erroresFormularioEncuesta.descripcion.error = true;
        $scope.erroresFormularioEncuesta.descripcion.mensaje =  factoryEncuesta.validarDescripcion($scope.encuesta.descripcion)
       
      }else{
        $scope.erroresFormularioEncuesta.descripcion.error = false;
      }
    }

  },
]);
