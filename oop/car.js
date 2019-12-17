var car = {
    make: "Ford",
    model: "Mustang",
    year: 1990,
    color: "red",
    passengers: 4,
    mileage: 2000,
    engineIsOn: false,
    fuel: 50,
    maxFuel: 50,
    mediumConsumption: 7.5,
    refill: function(num) {
        if(this.fuel + num > this.maxFuel) {
            this.fuel = this.maxFuel;
            console.log("Too much!")
        } else {
            thes.fuel += num;
        }
    },
    drive: function(distance)   {
        if(this.distanceToEmpty() < distance)   {
            console.log("Too far!");
            distance = this.distanceToEmpty();
        }
        consumption = distance * this.mediumConsumption / 100;
            this.fuel -= consumption;
            this.mileage += distance;
        }
    },
    distanceToEmpty: function() {
        return fuel / this.mediumConsumption * 100;
    }
    stop: function() {
        if(this.engineIsOn) {
            this.engineIsOn = false;
            console.log("Car stopped");
        } else {
            console.log("Car is already stopped");
        }
    },
    start: function() {
        if(!this.engineIsOn) {
            this.engineIsOn = true;
            console.log("Car started");
        }else{
            console.log("Car is already started");
        }
        console.log("Car stopped");
    }
    }

car.mileage = 2150;
console.log(car.year);
console.log(car.["mileage"]);
car.start();
car.start();
car.engineIsOn = false;

for(prop in car)    {
    console.log(prop + " = " + car[prop]);
}