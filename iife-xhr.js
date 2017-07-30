function showCarnivores (carnivores) {
  document.getElementById('carnivore-output').innerText = carnivores;
}

function showHerbivores (herbivores) {
	document.getElementById('herbivore-output').innerText = herbivores;
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);