app.controller("encuesta", [
  "$scope",
  "$http",
  "$window",
  function ($scope, $http, $window) {
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

    $scope.listaEncuestas = [
      {
        nombre: "Encuesta 1",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2022 INGENIERIAS",
        periodo: {
          id: 1,
          label: "ENERO-ABRIL | 2022 INGENIERIAS",
        },
        Estado: 1,
      },
      {
        nombre: "Encuesta 2",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2022 TSU",
        periodo: {
          id: 2,
          label: "ENERO-ABRIL | 2022 TSU",
        },
        Estado: 1,
      },
      {
        nombre: "Encuesta 3",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2021 INGENIERIAS",
        periodo: {
          id: 3,
          label: "ENERO-ABRIL | 2021 INGENIERIAS",
        },
        Estado: 1,
      },
      {
        nombre: "Encuesta 4",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2021 TSU",
        periodo: {
          id: 4,
          label: "ENERO-ABRIL | 2021 TSU",
        },
        Estado: 1,
      },
      {
        nombre: "Encuesta 5",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2020 INGENIERIAS",
        periodo: {
          id: 5,
          label: "ENERO-ABRIL | 2020 INGENIERIAS",
        },
        Estado: 1,
      },
      {
        nombre: "Encuesta 6",
        descripcion: "Encuesta para periodo de ENERO-ABRIL | 2020 TSU",
        periodo: {
          id: 6,
          label: "ENERO-ABRIL | 2019 INGENIERIAS",
        },
        Estado: 0,
      },
      {
        nombre: "Encuesta 7",
        periodo: {
          id: 7,
          label: "ENERO-ABRIL | 2019 TSU",
        },
        Estado: 0,
      },
      {
        nombre: "Encuesta 8",
        periodo: {
          id: 7,
          label: "ENERO-ABRIL | 2019 TSU",
        },
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

    $scope.visible = false;

    $scope.encuesta = {};

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
      let list = $scope.asignadas.map((item, i) => ({
        seccion: item,
        order: i,
        encuesta: { id: 1 },
      }));
      const encuesta_secciones = angular.copy(list);
      console.log(encuesta_secciones);
    };
    $scope.setModificarEncuesta = (encuesta) => {
      console.log(encuesta);
      $scope.modificarEncuesta = angular.copy(encuesta);
      console.log($scope.modificarEncuesta);
      $scope.visible = true;
      setTimeout(function () {
        $("#tabModificar").click();
      }, 100);
    };
    $scope.agregar = (seccion) => {
      console.log("agregar");
      $scope.asignadas.push(seccion);
      $scope.secciones.splice($scope.secciones.indexOf(seccion), 1);
    };
    $scope.remover = (seccion) => {
      console.log("removida");
      $scope.secciones.push(seccion);
      $scope.asignadas.splice($scope.asignadas.indexOf(seccion), 1);
      console.log("Lista original", $scope.secciones);
      console.log("Lista asignada", $scope.asignadas);
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
  },
]);
