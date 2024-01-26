function checkProbabilityTheory(count) {
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 0; i < count; i++) {
let number = Math.floor(Math.random() * 901) + 100;

if (number%2 === 0){
evenNumbers++
} else{
oddNumbers++
	}
} 
let percentage = (evenNumbers / count) * 100


console.log("Кількість згенерованих чисел: " + count);
console.log("Парних чисел: " + evenNumbers);
console.log("Непарних чисел: " + oddNumbers);
console.log("Відсоток парних до не парних: " + percentage.toFixed(2) + "%")
}

checkProbabilityTheory(count)