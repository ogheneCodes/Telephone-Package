class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  // Add phone number
  addPhoneNumber(number) {
    if (!this.phoneNumbers.includes(number)) {
      this.phoneNumbers.push(number);
      console.log(`${number} added successfully.`);
    } else {
      console.log(`${number} already exists.`);
    }
  }

  // Remove phone number
  removePhoneNumber(number) {
    const index = this.phoneNumbers.indexOf(number);

    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
      console.log(`${number} removed successfully.`);
    } else {
      console.log(`${number} not found.`);
    }
  }

  // Dial phone number
  dialPhoneNumber(number) {
    if (this.phoneNumbers.includes(number)) {
      console.log(`Dialing ${number}...`);
      this.notifyObservers(number);
    } else {
      console.log(`${number} does not exist in contacts.`);
    }
  }

  // Observer methods
  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(number) {
    this.observers.forEach(observer => observer.update(number));
  }
}


// Observer 1: Prints phone number
class PrintPhoneNumberObserver {
  update(number) {
    console.log(number);
  }
}


// Observer 2: Prints Now Dialling...
class DialMessageObserver {
  update(number) {
    console.log(`Now Dialling ${number}`);
  }
}



// TESTING THE IMPLEMENTATION
const myPhone = new Telephone();

const observer1 = new PrintPhoneNumberObserver();
const observer2 = new DialMessageObserver();

myPhone.addObserver(observer1);
myPhone.addObserver(observer2);

myPhone.addPhoneNumber("2347023232");
myPhone.addPhoneNumber("08012345678");

myPhone.dialPhoneNumber("2347023232");

myPhone.removePhoneNumber("08012345678");