export {};

let numbers: number[] = [1,2,3];
//非推奨（読み取れる為に理解する）
let numbers2: Array<number> = [1,2,3];
let strings2:Array<string> = ['tokyo', 'osaka', 'kyoto'];
// 演習問題
let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];
let nijigenHairetsu:number[][] = [
  [50, 100],
  [150, 150]
];
// 共用型
let hairetsu: (string | number | boolean)[] = [1, false, 'japan'];
