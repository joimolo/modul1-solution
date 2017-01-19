(function(){
  'use strict';
  angular.module('LunchCheckApp',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.comment ="(Empty item, i.e., , , NOT CONSIDER as an item towards to the count.)";
    $scope.mensaje = "";
    $scope.msgStyle ={
      "color" : "white",
      "border-style":"solid",
      "border-color": "white"
    };
    $scope.borraMsg = function () {
      $scope.mensaje = "";
      $scope.msgStyle.color = "white";
      $scope.msgStyle["border-color"]= "white"
    }


    $scope.checkIf = function(){
      var palabras= 0;
      if ($scope.lista != null && $scope.lista !=""){
        var listaPalabras =$scope.lista.split(",");
        //var palabras = listaPalabras.length;
        console.log("Palabras: "+ listaPalabras.length);
      } else {
        listaPalabras="";
      }
      palabras = cuentaPalabras(listaPalabras);
      if (palabras == 0) {
        $scope.mensaje = "Please enter data first";
        $scope.msgStyle.color = "red";
        $scope.msgStyle["border-color"]= "red"
      }
      else {  $scope.msgStyle.color = "green";
              $scope.msgStyle["border-color"]= "green"
              if  (palabras <=3) $scope.mensaje = "Enjoy!!";
              else $scope.mensaje = "Too much!!";
            }
    };
  };
  function cuentaPalabras(lista){
    var n = 0;
    for (var i=0; i < lista.length; i++ ){
      if (lista[i] != null && lista[i] !="") n++;
    }
    console.log("tenemos palabras: "+ n)
    return n;

  }
})();
