console.log("this is a sample web app");
class car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
  }
}