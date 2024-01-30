var superHero = {
	name: 'Tony Stark',
	alias: 'Iron Man',
	isHuman: true,
	weapon: 'Iron Man armor',
}
	
	function getInfo(){
	for (let key in superHero){
    console.log(key + ': ' + superHero[key]);}
	}
	getInfo()
	superHero.newProperty = 'Genius, billionaire, playboy, philanthropist'
	getInfo()


