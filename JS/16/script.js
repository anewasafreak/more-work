// ============ SIXTEENTH LESSON ============

// ========= OOP =========

function Car(brand, model, engine, basePrice) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = basePrice;
  this.getPrice = function () {
    switch (engine) {
      case "electric":
        return basePrice + 10000;
        break;
      case "diesel":
        return basePrice + 5000;
    }
  };
  this.turnOn = function () {
    alert("vrooom");
  };
}

let car = new Car("brand", "model", "electric", 5000);

console.log(car);
