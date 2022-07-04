app.controller('encuesta', ['$scope', '$http', '$window', function ($scope, $http, $window){
    $scope.items = [
        {
        id: 1,
        label: 'ENERO-ABRIL | 2022 INGENIERIAS',
       },
       {
        id: 1,
        label: 'ENERO-ABRIL | 2022 TSU',
       },
       {
        id: 1,
        label: 'ENERO-ABRIL | 2021 INGENIERIAS',
       }
    ]
    $scope.visible = false;
    $scope.listaEncuestas=[
        {
            nombre: "Encuesta 1",
            descripcion: "Encuesta para periodo de ENERO-ABRIL | 2022 INGENIERIAS",
            periodo:  {
                id: 1,
                label: "ENERO-ABRIL | 2022 INGENIERIAS"
            },
            Estado: 1
        },
        {
            nombre: "Encuesta 2",
            descripcion: "Encuesta para periodo de ENERO-ABRIL | 2022 TSU",
            periodo: {
                id: 2,
                label: "ENERO-ABRIL | 2022 TSU"
            },
            Estado: 1
        },
        {
            nombre: "Encuesta 3",
            descripcion: "Encuesta para periodo de ENERO-ABRIL | 2021 INGENIERIAS",
            periodo: {
                id: 3,
                label: "ENERO-ABRIL | 2021 INGENIERIAS"
            },
            Estado: 1
        },
        {
            nombre: "Encuesta 4",
            descripcion: "Encuesta para periodo de ENERO-ABRIL | 2021 TSU",
            periodo: {
                id: 4,
                label: "ENERO-ABRIL | 2021 TSU"
            },
            Estado: 1
        },
        {
            nombre: "Encuesta 5",
            descripcion: "Encuesta para periodo de ENERO-ABRIL | 2020 INGENIERIAS",
            periodo:{
                id: 5,
                label: "ENERO-ABRIL | 2020 INGENIERIAS"
            },
            Estado: 1
        },
        {
            nombre: "Encuesta 6",
            descripcion: "Encuesta para periodo de ENERO-ABRIL | 2020 TSU",
            periodo: {
                id: 6,
                label: "ENERO-ABRIL | 2019 INGENIERIAS"
            },
            Estado: 0
        },
        {
            nombre: "Encuesta 7",
            periodo:  {
                id: 7,
                label: "ENERO-ABRIL | 2019 TSU"
            },
            Estado: 0
        },
        {
            nombre: "Encuesta 8",
            periodo:  {
                id: 7,
                label: "ENERO-ABRIL | 2019 TSU"
            },
            Estado: 0
        }
    ]
    $scope.asignadas =[]
    $scope.secciones = [
        {
            id: 1,
            nombre: "Asesor",
            estado: 1 
        },
        {
            id: 1,
            nombre: "Departamento de estadía",
            estado: 1 
        },
        {
            id: 1,
            nombre: "Empresa",
            estado: 0 
        }
    ]

    $scope.periodos=[
        {
            id: 1,
            label: "ENERO-ABRIL | 2022 INGENIERIAS"
        },
        {
            id: 2,
            label: "ENERO-ABRIL | 2022 TSU"
        },
        {
            id: 3,
            label: "ENERO-ABRIL | 2021 INGENIERIAS"
        },
        {
            id: 4,
            label: "ENERO-ABRIL | 2021 TSU"
        },
        {
            id: 5,
            label: "ENERO-ABRIL | 2020 INGENIERIAS"
        },
        {
            id: 6,
            label: "ENERO-ABRIL | 2019 INGENIERIAS"
        },
        {
            id: 7,
            label: "ENERO-ABRIL | 2019 TSU"
        },
    ]


    $scope.prueba = () =>{
        console.log("Hola");
    }
    $scope.setModificarEncuesta = (encuesta) =>{
        console.log(encuesta);
        $scope.modificarEncuesta = angular.copy(encuesta);
        console.log($scope.modificarEncuesta);
        $scope.visible = true;
        setTimeout(function () {
            $("#tabModificar").click();
        }, 100);
       
    }
    $scope.agregar = (seccion) =>{
        console.log("agregar");
        $scope.asignadas.push(seccion)
        $scope.secciones.splice($scope.secciones.indexOf(seccion), 1)

    }
    $scope.remover = (seccion) =>{
        console.log("Hola");
        $scope.secciones.push(seccion)
        $scope.asignadas.splice($scope.asignadas.indexOf(seccion), 1)

    }

    $(function () {
        $("#sortable").sortable({
            start: function (event, ui) {
                ui.item.startPos = ui.item.index();
            },
            stop: function (event, ui) {
                console.log("Start position: " + ui.item.startPos);
                console.log("New position: " + ui.item.index());
                arreglar(ui.item.startPos, ui.item.index())
                console.log($scope.asignadas);
            },
            
        });
    });
    $(function () {
        $("#modificarSortable").sortable({
            start: function (event, ui) {
                ui.item.startPos = ui.item.index();
            },
            stop: function (event, ui) {
                console.log("Start position: " + ui.item.startPos);
                console.log("New position: " + ui.item.index());
                arreglar(ui.item.startPos, ui.item.index())
                console.log($scope.asignadas);
            },
            
        });
    });
    const arreglar = (posInicial, posFinal) => {
        let temp;
        let ciclos = diferencia(posInicial, posFinal);
        let temOriginal = $scope.asignadas[posInicial];

        if (posInicial < posFinal) {
            for (let i = 0; i < ciclos; i++) {
                temp = $scope.asignadas[posInicial + 1];
                $scope.asignadas[posInicial] = temp;
                $scope.asignadas[posInicial + 1] = temOriginal;
                posInicial++;
            }
        } else {
            for (let i = 0; i < ciclos; i++) {
                temp = $scope.asignadas[posInicial - 1];
                $scope.asignadas[posInicial] = temp;
                $scope.asignadas[posInicial - 1] = temOriginal;
                posInicial--;
            }
        }
    }

    const diferencia = (num1, num2) => {
        let numMayor, numMenor;
        if (num1 > num2) {
            numMayor = num1;
            numMenor = num2;
        } else {
            numMayor = num2;
            numMenor = num1;
        }
        return numMayor - numMenor;
    }
}])