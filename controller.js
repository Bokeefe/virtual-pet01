function Controller(model) {

	this.addPet = function(name) {
		var p = new Pet(name);
		model.addPet(p);
		return p;
	}

	this.playWithPet = function(name, amount) {
		var p = model.getPetByName(name);
		p.play(amount);
		return p;
	}

	this.feedPet = function(amount) { //previously have 2 params name, amount
		var p = model.getPetByName(name);//do i need this?
		p.feed(food);
		return p;
	}

	this.getAllPets = function() {
		return model.getAllPets();
	}

}
