function showCarnivores (carnivores) {
  document.getElementById('carnivore-output').innerHTML = carnivores;
}

function showHerbivores (herbivores) {
	document.getElementById('herbivore-output').innerHTML = herbivores;
}

Predator.loadCarnivores(showCarnivores);
Prey.loadHerbivores(showHerbivores);