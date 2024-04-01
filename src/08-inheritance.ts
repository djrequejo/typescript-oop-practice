export class Animal {

  constructor(public name: string) { }

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log("woof!");
    }
  }
}

const otto = new Animal("otto");
otto.move();
console.log(otto.greeting());

const dog1 = new Dog("Dog 1", "DJ");
dog1.move();
console.log(dog1.greeting());
console.log(dog1.woof(3));
console.log(dog1.owner);
