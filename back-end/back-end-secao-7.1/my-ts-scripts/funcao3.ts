// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.

const numberList = [10, 5, 18, 2, 8, 23];

const sortInput = (param: number[]): number[] => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));