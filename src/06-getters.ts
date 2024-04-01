export class MyDate {

  constructor(
    public year: number = 1990,
    public month: number = 6,
    private _day: number = 5) {
  }

  printFormat(): string {
    return `${this.addPadding(this._day)}/${this.addPadding(this.month)}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this._day += amount;
    }
    if (type === "months") {
      this.month += amount;
    }
    if (type === "years") {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(2024, 3, 31);
console.log(myDate.year, myDate.isLeapYear);

const myDate2 = new MyDate(2000, 12, 12);
console.log(myDate2.year, myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 11, 11);
console.log(myDate3.year, myDate3.isLeapYear);
