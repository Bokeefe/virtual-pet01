function View(controller) {

	this.createPetHTML = function(pet) {
		var $button = $("<button>Play Amount:</button>");
		var $playField = $("<input type='text' id='foodAmount'>");
		var $button1 = $("<button>Food Amount:</button>");
		var $feedField = $("<input type='text' id='foodAmount'>"); // not working or breaking it.
		// var self = this;
		// $button.click(function() {
		// 	controller.playWithPet(pet.name, 10);
		// 	self.showAllPets();
		// });

		$button.click(function() {
			controller.playWithPet(pet.name, 10);
			this.showAllPets();
		}.bind(this));//what is bind over-riding here?

		$button1.click(function() {
			controller.feedPet(pet.name, $feedField);
			this.showAllPets();
		}.bind(this));

		var $pet = $("<p>" +
			pet.name +
			" : " +
			pet.hunger +
			" • " +
			pet.fun +
			" </p>"
		);
		$pet.append($button);
		$pet.append($playField);
		$pet.append($button1);
		$pet.append($feedField);
		return $pet;
	};
	/*

*/
	this.showAllPets = function() {
		$('#output').html("");
		var allPets = controller.getAllPets();
		for(var pet of allPets) {
			var petHTML = this.createPetHTML(pet);
			$('#output').append(petHTML);
		}
	};

	this.createPet = function() {
		var name = $('#petname').val();
		var food = $('#foodAmount').val();
		controller.addPet(name);
		//controller.feedPet(food);// this breaks it
		$('#petname').val('');
		$('#foodAmount').val('');
		this.showAllPets();
	}

}
