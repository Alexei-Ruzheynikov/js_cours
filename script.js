let num = 266219;
function Func(x) {
  let array = String(x).split("");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += +array[i];
  }
  console.log(sum);
  let result = String(sum ** 3);
  console.log(result.substr(0, 2));
}
Func(num);
