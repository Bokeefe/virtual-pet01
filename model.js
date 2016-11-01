/* jshint esversion:6 */
function Model() { 

	var pets = []; 

	this.addPet = function(newPet) {
		pets.push(newPet);
	};

	this.getPetByName = function(name) {
		for(var pet of pets) {
			if (pet.name === name) {
				return pet;
			}
		}
		return null;
	};

	this.getAllPets = function() {
		return pets.slice();
	};

	this.petsGetHungry = function() {
		for (var each of pets) {
			each.hunger += 1;
		}
	};

}







