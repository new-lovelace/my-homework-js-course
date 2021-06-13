// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

class Computer {
  constructor(memory, cpu, name) {
    this.memory = memory;
    this.cpu = cpu;
    this.name = name;
  }
  turnOn() {
  console.log('${this.name} is turned on!');
    }
  }

const dell = new Computer(8, 100, 'dell');
console.log(dell);
dell.turnOn();

// ===
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї.
// Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends Computer {
  constructor(memory, cpu, name, resolution) {
    super(memory, cpu, name);
      this.resolution = resolution;
      this.battery = cpu / (resolution * memory);
  }
}

const hp = new Laptop(4, 100, 'hp', 4);
console.log(hp);
// ===
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class Ultrabook extends Laptop {
  constructor(memory, cpu, name, resolution){
    super(memory, cpu, name, resolution);
    this.weight = 0;
  }
  turnOn(){
    if ((this.weight > 2) && (this.battery < 4)) {
      console.log('Oops! Something is wrong with ${name}');
    }
    else console.log('${this.name} is turned on!');
  }
}

const lenovo = new Ultrabook(4, 90, 'lenovo', 4);
lenovo.weight = 3;
console.log(lenovo);
lenovo.turnOn();

// ===
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class BasicComputer extends Computer {
  constructor(memory, cpu, name){
    super(memory, cpu, name);
    this.gameName = '';
    this.FPS = cpu / memory;
  }
  playGame(){
    console.log('You are playing ${this.gameName} with ${this.FPS} FPS.');
  }

  cpuUpgrade(newCpu){
    if (newCpu > 1.1 * this.cpu || newCpu <= this.cpu){
      console.log('Sorry, you cannot change the CPU.');
    }
    else this.cpu = newCpu;
  }

  memoryUpgrade(newMemory){
    if (newMemory == 2 * this.memory){
      this.memory = newMemory;
    }
    else console.log('Unnaccaptable change of memory');
  }
}

const samsung = new BasicComputer(16, 200, 'samsung');
samsung.gameName = 'Stalker';
console.log(samsung);
console.log('________________________');
samsung.cpuUpgrade(250);
console.log(samsung);
console.log('________________________');
samsung.memoryUpgrade(32);
console.log(samsung);
// ===
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class GameComputer extends BasicComputer{
  constructor(memory, cpu, name){
    super(memory, cpu, name);
    this.FPS = 2 * cpu / memory;
  }

  playGame(){
    if (this.cpu < 500 || this.memory < 8){
      console.log('This computer is inappropriate for playing games, man!');
    }
    else {
      console.log('You are playing ${this.gameName} with ${this.FPS} FPS.');
      this.cpu = 0.999 * this.cpu;
    }
  }
}

const artline = new GameComputer(16, 600, 'artline');
artline.gameName = 'Need for speed';
console.log(artline);
artline.playGame();
console.log('_______________________________');
console.log(artline);

// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

const car = {
  model: 'Passat',
  make: 'Volkswagen',
  year: 2016,
  maxSpeed: 210,
  engineDisplacement: 2,
  drivers: [],
  drive(){
    console.log("We are driving at ${maxSpeed} km/hour");
  },
  info(){
    console.log(car);
  },
  increaseMaxSpeed (newSpeed){
    car.maxSpeed += newSpeed;
  },
  changeYear(newValue){
    car.year = newValue
  },
  addDriver(driver){
    car.drivers.push(driver);
  }
}

console.log('*******************');
car.drive();
car.info();
console.log('*******************');
car.increaseMaxSpeed(20);
car.info();
console.log('*******************');
car.changeYear(2017);
car.info();
console.log('*******************');

let driver1 = {
  name: 'Khry',
  surname: 'Velychko',
  age: 24
}

car.addDriver(driver1);
console.log(car);
