function Pet(name) { 

	this.name = name;
	this.hunger = 100;
	this.fun = 100;

	this.feed = function(food) {

			this.hunger -= food;
			this.fun -= (food / 2);

		if (this.hunger  <= 0) {
			alert("Full of food.");
			this.hunger = 0;
		} else if (this.fun <= 0) {
			alert("Getting very bored.");
			this.fun = 0;
		}
	};

	this.play = function(fun) {

			this.fun += fun;
			this.hunger += (fun / 2);

		if (this.fun >= 500) {
			alert("Tons of fun.");
			this.fun = 500;
		} else if (this.hunger >= 500) {
			alert("Getting hungry.");
			this.hunger = 500;
		}
	};

}
