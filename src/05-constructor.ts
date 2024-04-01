export class MyDate {

  constructor(
    public year: number = 1990,
    public month: number = 6,
    private day: number = 5) {
  }

  printFormat(): string {
    return `${this.addPadding(this.day)}/${this.addPadding(this.month)}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
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

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate();
console.log(myDate.printFormat());

const myDate2 = new MyDate(2024);
console.log(myDate2.printFormat());

const myDate3 = new MyDate(2024, 3);
console.log(myDate3.printFormat());

const myDate4 = new MyDate(2024, 3, 19);
console.log(myDate4.printFormat());
