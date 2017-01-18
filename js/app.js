(function(){
  'use strict';
  angular.module('LunchCheckApp',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.mensaje = "";
    $scope.msgStyle ={
      "color" : "white",
      "border-style":"solid",
      "border-color": "white"
    };
    $scope.checkIf = function(){
      var palabras= 0;
      if ($scope.lista != null){
        var listaPalabras =$scope.lista.split(",");
        var palabras = listaPalabras.length;
        console.log("Palabras: "+ listaPalabras.length);
      }
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
})();
