# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 1

--- Encapsulation is the bundling of related data into one unit and giving controlled access to that data so it won’t end up breaking your code. With encapsulation, your code is easier to maintain, and you can change how the inside works without breaking code that uses the object. This will allow you to avoid bugs because people can’t directly modify values that they shouldn’t touch unless you put in a safe way for them to do so.

This concept is beneficial when programming because it helps you protect and organize the data that belongs together, making the codebase easier to understand and work with. Without encapsulation, you risk exposing too many internal details, which can lead to mistakes, confusion, and unwanted interactions between different parts of your code.

```js
class Bank {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }
  deposit(amount) {
    return (this.#balance += amount);
  }
  get balance() {
    return this.#balance;
  }
}
```

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

--- The this keyword in JavaScript is a special identifier whose value is determined at runtime based on how a function is called, not where it is written. this refers to the object that is currently executing the function, and its value changes depending on the context that is calling it. Inside class constructors and methods, this refers to the instance created by new. If a regular function is attached to an object and called as a method, this becomes that object. Arrow functions do not create their own this; instead, they inherit the this value from the parent scope.

This keyword is useful because it allows each object instance to access and update its own properties without needing different variable names for every instance.

In the code snippet above, the this keyword is used inside a class, so it refers to the instance calling the method. With this in mind, this refers to the counterA instance when counterA.increment() is called and to the counterB instance when counterB.increment() is called.

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

---

Polymorphism is when two different types of objects can be treated the same way because they share the same method names, even though the method outputs are different.

```js
class Phone {
  constructor(name, color, company) {
    this.name = name;
    this.color = color;
    this.company = company;
  }

  description() {
    return `This is a ${this.name} in the ${this.color} color.`;
  }
}

class Iphone extends Phone {
  constructor(name, color, company, price) {
    super(name, color, company);
    this.price = price;
  }

  description() {
    return `${super.description()} The starting price is $${this.price}.`;
  }
}
```

The code above demonstrates polymorphism because the subclass Iphone has the same exact method (description) as the parent class, but overrides it. This means both objects can be called using the same method name, yet each produces different behavior depending on which object is executing it.

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

The way that I would use inheritance to organize these classes is by first creating a parent class that acts as a blueprint for all types of pets, since every pet, no matter what kind, will have the same three characteristics: name, energy, and happiness. I would also put the sleep method inside the parent class because all pets can perform that action. After that, I would create subclasses for each unique pet type, and those subclasses would automatically inherit the properties and behaviors from the parent class. From there, each subclass would have its own special ability based on the type of pet it is.

The advantage of using inheritance instead of creating three completely separate classes is that it lets you avoid repeating the same code over and over. Without inheritance, you would have to manually rewrite name, energy, happiness, and the sleep method for each pet class. With inheritance, those shared features only need to be written once, which makes the code cleaner and easier to maintain.
