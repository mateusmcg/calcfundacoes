app = angular.module('myApp', []);

app.controller('myCtrl',[function(){
  var vm = this;
  vm.Math = window.Math;
  
  vm.recalcular = function(){
    var a0 = 0, b0 = 0;
    
    //Converte para metro.
    a0 = vm.a0 / 100;
    b0 = vm.b0 / 100;
    
    var deltaB = (a0 - b0).toFixed(1);
    
    var delta = (Math.pow(deltaB, 2).toFixed(2) - ((4 * 1) * - vm.area)).toFixed(2);
    
    if(delta > 0){
      var raizDelta = Math.sqrt(delta).toFixed(2);
      var x1 = ((parseFloat(-deltaB) + parseFloat(raizDelta)) / 2 * 1).toFixed(2);
      var x2 = ((parseFloat(-deltaB) - parseFloat(raizDelta)) / 2 * 1).toFixed(2);
      
      if(x1 > 0)
        vm.bRecalculado = x1;
      else
        vm.bRecalculado = x2;
      
      vm.aRecalculado = (parseFloat(vm.bRecalculado) + parseFloat(deltaB)).toFixed(2);  
    }else{
      alert("Delta deu menor ou igual a zero ( Sem raiz :[ )");
    }
  }
  
}]);