$(document).ready(function(){

	var m = new Model();
	var c = new Controller(m);
	var v = new View(c);

	//setInterval(v.showAllPets, 5000); //I need to get this to work for there to be 'time'
	v.showAllPets;
	$('#newpet').click(function(){
		v.createPet();
	});
});

