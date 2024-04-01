const date = new Date();
const date2 = new Date(1990, 0, 20);

console.log(date);
console.log(date2);

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2024, 2, 31);
console.log(myDate);
