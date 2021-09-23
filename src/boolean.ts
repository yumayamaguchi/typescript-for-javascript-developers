export {};

//export {};を入れることにより、モジュール化されグローバル変数にならない
let name = 'TypeScript';

// 真偽値 boolean
// 型をつけること→型注釈、型アノテーション
let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
