export {};

function error(message: string):never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({result});
} catch (error) {
  console.log({ error });
}

//void型→returnされる値がないことを意味するが呼び元には帰ってくる
//never型→戻ってこない

let foo: void = undefined;
//never型を返す関数
let bar: never = error('only me!');
