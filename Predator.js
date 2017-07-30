var Predator = (function () {
  var _carnivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        _carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
        callbackToInvoke(_carnivores);

      });
      loader.open('GET', 'carnivores.json');
      loader.send();
    }
  }
})();

var Predator = (function (obj){
  var _herbivores = [];
  obj.loadHerbivores = function (callbackToInvoke) {
    var loader = new XMLHttpRequest();
    loader.addEventListener('load', function () {
      _herbivores = JSON.parse(this.responseText);
      callbackToInvoke(_herbivores);
    });
    loader.open('GET', 'herbivores.json');
    loader.send();
  }
  return obj;
})(Predator || {});