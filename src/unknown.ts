export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
//不明な型
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
//型の出力
console.log(typeof numberUnknown);
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
