var Predator = (function () {
  var carnivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        carnivores = JSON.parse(loader.responseText);
        console.log("carnivores working");
        showCarnivores (carnivores);
      });
      loader.open('GET', 'carnivores.json');
      loader.send();
    }
  }
})();

var Prey = (function () {
  var herbivores = [];

  return {
    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.addEventListener('load', function() {
        herbivores = JSON.parse(loader.responseText);
        console.log('herbivores working')
        showHerbivores(herbivores);
      });
      loader.open('GET', 'herbivores.json');
      loader.send();
    }
  }
})();