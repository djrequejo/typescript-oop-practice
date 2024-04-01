export class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this.day += amount;
    }
    if (type === "months") {
      this.month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2024, 2, 31);
console.log(myDate.printFormat());

console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);

myDate.day = 12;
console.log(myDate.printFormat());
