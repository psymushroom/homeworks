var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

function price() {
  let total = 0;
  for (let service in services) {
    total += Number.parseFloat(services[service]);
  }
  return total + " грн";
}

function minPrice() {
  let min = Infinity;
  for (let service in services) {
     min = Math.min(min, parseFloat(services[service]));
    
  }
  return min + " грн";
};

function maxPrice() {
  let max = -Infinity;
  for (let service in services) {
     max = Math.max(max, parseFloat(services[service]));
    
  }
  return max + " грн";
};



console.log("Загальна вартість послуг: " + price());
console.log("Мінімальна вартість послуг: " + minPrice());
console.log("Максимальна вартість послуг: " + maxPrice());

services['Массаж голови'] = "150 грн";
services['Чашка кави'] = "30 грн"

console.log("Загальна вартість послуг: " + price());
console.log("Мінімальна вартість послуг: " + minPrice());
console.log("Максимальна вартість послуг: " + maxPrice());








