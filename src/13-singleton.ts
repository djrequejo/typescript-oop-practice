export class MyService {
  static instance: MyService | null = null;

  private constructor(private _name: string) { }

  get name() {
    return MyService.instance?._name;
  }

  static create(name: string) {
    if (this.instance === null) {
      console.log("Only once time");
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

// const myService1 = new MyService("Service 1");
const myService1 = MyService.create("Service 1");
console.log("service1:", myService1?.name);

// const myService2 = new MyService("Service 2");
const myService2 = MyService.create("Service 2");
console.log("service2:", myService2?.name);

const myService3 = MyService.create("Service 3");
console.log("service3:", myService3?.name);

console.log(myService1 === myService2);
console.log(myService2 === myService3);
