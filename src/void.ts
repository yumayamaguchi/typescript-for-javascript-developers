export {};

//関数のリターン値がないことを期待する型
function returnNothing(): void {
  console.log("I don't return anything!");
}

console.log(returnNothing());
