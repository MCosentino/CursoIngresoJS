var app = angular.module("ferreteFacturacion",[]);

app.controller("controladorFacturacion",function($scope){

	$scope.precios={};

	$scope.Sumar=function(){
		alert($scope.precios.precioUno + $scope.precios.precioDos + $scope.precios.precioTres);
	}

	$scope.Promedio=function(){
		alert(($scope.precios.precioUno + $scope.precios.precioDos + $scope.precios.precioTres)/3);		
	}

	$scope.PrecioFinal=function(){
		alert(($scope.precios.precioUno + $scope.precios.precioDos + $scope.precios.precioTres)+(($scope.precios.precioUno + $scope.precios.precioDos + $scope.precios.precioTres)*21/100));
	}

});