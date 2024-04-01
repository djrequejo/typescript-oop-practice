console.log("Math.PI", Math.PI);
console.log("Math.max", Math.max(3, 5, 12, 5, 7, 31));

class MyMath {
  static readonly PI = 3.141516;

  static max(...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((max, item) => max >= item ? max : item, Math.min(...numbers));
  }
}

console.log("MyMath,PI", MyMath.PI);
console.log("MyMath,max", MyMath.max(34, 2, 39, 6, 99));
console.log("MyMath,max", MyMath.max(-34, -2, -39, -6, -999));
