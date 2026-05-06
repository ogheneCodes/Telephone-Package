# 📞 Telephone Package with Observer Pattern

A simple JavaScript implementation of a Telephone Package that supports adding, removing, and dialing phone numbers while notifying registered observers whenever a call is made.

This project demonstrates core Object-Oriented Programming principles and the Observer Design Pattern.

---

## 🚀 Features

- Add phone numbers to the telephone directory
- Remove phone numbers from the directory
- Dial only registered phone numbers
- Register multiple observers
- Notify observers whenever a number is dialed

---

## 🛠️ Built With

- JavaScript (ES6)
- Object-Oriented Programming
- Observer Design Pattern

---

## 📁 Project Structure


telephone-package/
│
└── telephone.js


---

## 🧠 Concepts Practiced

### Object-Oriented Programming
- Classes
- Constructors
- Instance Methods
- Object Instantiation

### Data Structures
- Arrays for storing phone numbers
- Arrays for storing observers

### Design Patterns
- Observer Pattern
- Event Notification System

### Software Design Principles
- Separation of Concerns
- Loose Coupling
- Encapsulation

---

## 📌 Requirements Implemented

- Telephone class with:
  - `addPhoneNumber()`
  - `removePhoneNumber()`
  - `dialPhoneNumber()`

- Observer functionality with:
  - `addObserver()`
  - `removeObserver()`
  - `notifyObservers()`

- Two observer implementations:
  - Prints the dialed phone number
  - Prints `Now Dialling <number>`

---

## ▶️ Example Output

```bash
2347023232 added successfully.
Dialing 2347023232...
2347023232
Now Dialling 2347023232"# Telephone-Package" 
