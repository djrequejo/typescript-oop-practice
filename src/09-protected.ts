export class Animal {
  constructor(protected name: string) { }

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log("Let's go!");
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
      console.log(`woof! ${this.name}`);
    }
    super.doSomething();
  }

  move() {
    console.log("Moving like a dog");
    super.move();
  }
}

const otto = new Animal("otto");
otto.move();
console.log(otto.greeting());

const dog1 = new Dog("Dog 1", "DJ");
dog1.woof(3);
dog1.move();

