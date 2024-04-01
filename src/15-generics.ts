import { Dog } from "./09-protected";

function getValue<myType>(value: myType) {
  const array: myType[] = [value];
  return value;
}

getValue<number>(123).toFixed();
getValue<string>("44").toLowerCase();
getValue<number[]>([15,1,4,78,23]).forEach(item => console.log(item));

const dog = new Dog("otto", "DJ");
getValue<Dog>(dog).woof(5);
